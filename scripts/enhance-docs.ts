#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { FileUtils } from './docs-enhance/file-utils.ts';
import { OverviewExtractor } from './docs-enhance/overview-extractor.ts';
import { ContentEnhancer } from './docs-enhance/content-enhancer.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class DocEnhancer {
  sdkPath: string;
  srcPath: string;
  version: string;

  constructor() {
    this.sdkPath = path.join(__dirname, '..', 'docs', 'sdk');
    this.srcPath = path.join(__dirname, '..', 'src');
    this.version = FileUtils.getVersion();
  }

  public cleanContent(content: string): string {
    // Trim before first heading
    const firstHeadingIdx = content.indexOf('# ');
    if (firstHeadingIdx !== -1) {
      content = content.slice(firstHeadingIdx);
    }

    // Remove HTML tags and remove primitive type links
    content = content.replace(/<[^>]*>/g, '');
    content = FileUtils.makeMarkdownTypeLinkSafe(content);

    return content;
  }

  public addMetadata(content: string, filePath: string): string {
    const sourcePath = FileUtils.getSourceFilePathFromMd(filePath, this.sdkPath, this.srcPath);
    const relativeSourcePath = path.relative(this.srcPath, sourcePath).replace(/\\/g, '/');
    const sourceLink = `[${relativeSourcePath}](${FileUtils.REPO_SOURCE_BASE}/${relativeSourcePath})`;

    const titleRegex = /^# (.+)$/m;
    const match = content.match(titleRegex);
    if (match) {
      const originalTitle = match[1];
      const enhancedTitle = `# ${originalTitle}\n\n::: tip Documentation\n- source: ${sourceLink}\n:::\n`;
      content = content.replace(titleRegex, enhancedTitle);
    }

    return content;
  }

  public extractOverviews(filePath: string) {
    const sourcePath = FileUtils.getSourceFilePathFromMd(filePath, this.sdkPath, this.srcPath);
    return OverviewExtractor.extractOverviewsFromTs(sourcePath);
  }

  private clearExistingMetadata(content: string): string {
    const lines = content.split('\n');
    const filtered: string[] = [];
    let inTipBlock = false;

    for (const line of lines) {
      const trimmed = line.trim();

      if (!inTipBlock && (trimmed.startsWith('::: tip') || trimmed.startsWith('> ::: tip') || trimmed.startsWith('> [!tip]') || trimmed.startsWith('> > [!tip]') || trimmed.startsWith('> > > [!tip]'))) {
        inTipBlock = true;
        continue;
      }

      if (inTipBlock) {
        if (trimmed === ':::' || trimmed === '> :::' || trimmed === '') {
          inTipBlock = false;
          continue;
        }
        continue;
      }

      if (trimmed.startsWith('> ::: info Returns') || trimmed.startsWith('> > ::: info Returns')) {
        // Remove old return callout blocks inserted previously
        inTipBlock = true;
        continue;
      }

      filtered.push(line);
    }

    return filtered.join('\n');
  }

  public enhanceFile(filePath: string): void {
    console.log(`Enhancing ${filePath}...`);
    let content = fs.readFileSync(filePath, 'utf8');

    content = this.cleanContent(content);
    content = this.clearExistingMetadata(content);
    content = this.addMetadata(content, filePath);

    content = ContentEnhancer.addEnterpriseSections(
      content,
      path.basename(filePath, '.md'),
      this.extractOverviews(filePath),
      FileUtils.getSourceFilePathFromMd(filePath, this.sdkPath, this.srcPath)
    );

    fs.writeFileSync(filePath, content);
  }

  public processDirectory(dirPath: string): void {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const filePath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        this.processDirectory(filePath);
      } else if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'index.md') {
        this.enhanceFile(filePath);
      }
    }
  }

  public run(): void {
    console.log('Starting documentation enhancement...');

    if (!fs.existsSync(this.sdkPath)) {
      console.log('SDK documentation directory not found. Run TypeDoc first.');
      return;
    }

    this.processDirectory(this.sdkPath);
    console.log('Documentation enhancement completed!');
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const enhancer = new DocEnhancer();
  enhancer.run();
}

export default DocEnhancer;
