#!/usr/bin/env node

/**
 * Post-processor for TypeDoc generated markdown files
 * Enhances the output with enterprise-grade formatting
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class DocEnhancer {
  constructor() {
    this.sdkPath = path.join(__dirname, '..', 'docs', 'sdk');
    this.version = this.getVersion();
    this.lastUpdated = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  getVersion() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      return packageJson.version || '1.0.0';
    } catch {
      return '1.0.0';
    }
  }

  getNavigationPath(filePath) {
    const relativePath = path.relative(this.sdkPath, filePath);
    const parts = relativePath.split(path.sep);
    const breadcrumbs = [];

    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      breadcrumbs.push(this.capitalize(part));
    }

    breadcrumbs.push(this.capitalize(path.parse(parts[parts.length - 1]).name));
    return breadcrumbs.join(' > ');
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  getSourceFilePathFromMd(mdFilePath) {
    const relativeMd = path.relative(this.sdkPath, mdFilePath);
    const tsRelative = relativeMd.replace(/\.md$/, '.ts');
    return path.join(__dirname, '..', 'src', tsRelative);
  }

  extractOverviewsFromTs(sourceFilePath) {
    try {
      const source = fs.readFileSync(sourceFilePath, 'utf8');
      const overviews = {};
      const regex = /\/\*\*\s*\n([\s\S]*?)\s*\*\/\s*\n(?:export\s+)?class\s+(\w+)/g;
      let match;
      while ((match = regex.exec(source)) !== null) {
        const jsDocContent = match[1]
          .split('\n')
          .map((line) => line.replace(/^\s*\*\s?/, ''))
          .join('\n')
          .trim();
        const truncated = jsDocContent.split(/\r?\n\r?\n/)[0].trim();
        if (truncated) {
          overviews[match[2]] = truncated;
        }
      }
      return overviews;
    } catch {
      return {};
    }
  }

  generateTableOfContents(content) {
    const lines = content.split('\n');
    const toc = [];

    for (const line of lines) {
      if (line.startsWith('# ')) {
        // main page title appears as H1; Overview is a separate section
        continue;
      }

      if (line.startsWith('## ')) {
        const title = line.substring(3).toLowerCase().replace(/\s+/g, '-');
        const displayTitle = line.substring(3);
        toc.push(`- [${displayTitle}](#${title})`);
      } else if (line.startsWith('### ')) {
        const title = line.substring(4).toLowerCase().replace(/\s+/g, '-');
        const displayTitle = line.substring(4);
        toc.push(`  - [${displayTitle}](#${title})`);
      }
    }

    return toc.join('\n');
  }

  enhanceFile(filePath) {
    console.log(`Enhancing ${filePath}...`);

    let content = fs.readFileSync(filePath, 'utf8');

    // Trim anything before the main heading (remove Aerokit SDK top links and breadcrumbs)
    const firstHeadingIdx = content.indexOf('# ');
    if (firstHeadingIdx !== -1) {
      content = content.slice(firstHeadingIdx);
    }

    // Remove all HTML tags that cause VitePress parsing issues
    content = content.replace(/<[^>]*>/g, '');

    // Remove dead links to primitive types
    content = content.replace(/\[(`?)(string|number|boolean|any|void|unknown|null|undefined|object|symbol|bigint)\1\]\(\.\/\2\)/g, '$1$2$1');

    // Skip if already enhanced (basic guard from old metadata injection)
    if (content.includes('> [!tip]')) {
      console.log(`Skipping ${filePath} - already enhanced`);
      return;
    }

    const fileName = path.basename(filePath, '.md');
    const sourcePath = this.getSourceFilePathFromMd(filePath);
    const overviews = this.extractOverviewsFromTs(sourcePath);

    // Build GitHub source link
    const repoSourceBase =
      'https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src';
    const relativeSourcePath = path.relative(path.join(__dirname, '..', 'src'), sourcePath).replace(/\\\\/g, '/');
    const sourceLink = `[${relativeSourcePath}](${repoSourceBase}/${relativeSourcePath})`;

    // Replace the existing title with enhanced version
    const titleRegex = /^# (.+)$/m;
    const match = content.match(titleRegex);

    if (match) {
      const originalTitle = match[1];
      const enhancedTitle = `# ${originalTitle}

> [!tip]
> Auto-generated from
> - source: ${sourceLink}
> - version: ${this.version}
`;

      content = content.replace(titleRegex, enhancedTitle);
    }

    // Add enterprise sections if missing
    content = this.addEnterpriseSections(content, fileName, overviews);

    fs.writeFileSync(filePath, content);
  }

  addEnterpriseSections(content, moduleName, overviews) {
    const mainClass = Object.keys(overviews)[0] || null;
    const overviewText = mainClass ? overviews[mainClass] : null;

    // Remove TypeDoc internal reference lines
    content = content.replace(/^Defined in:.*\r?\n?/gm, '');

    // Remove constructor block for static-only classes (or by default, hide constructors)
    content = content.replace(/#### Constructors[\s\S]*?(?=#### Methods|## |$)/g, '');
    content = content.replace(/## Constructor[\s\S]*?(?=## |$)/g, '');

    // Remove best practices / troubleshooting section (requested omit)
    content = content.replace(/## Best Practices[\s\S]*?(?=\n## |$)/g, '');
    content = content.replace(/## Troubleshooting[\s\S]*?(?=\n## |$)/g, '');

    // Remove existing TOC so we can regenerate it after Overview
    content = content.replace(/## Table of Contents[\s\S]*?(?=\n## |$)/g, '');

    // Add overview section if missing
    if (!content.includes('## Overview')) {
      const filledOverview = overviewText
        ? overviewText
        : `The ${this.capitalize(moduleName)} API provides...`;

      content = content.replace(/(\n## |$)/, `\n## Overview\n\n${filledOverview}\n\n$1`);
    }

    // Insert Table of Contents after Overview section
    const tableOfContents = `## Table of Contents\n\n${this.generateTableOfContents(content)}\n`;
    const overviewSectionMatch = content.match(/## Overview[\s\S]*?(?=\n## |$)/);

    if (overviewSectionMatch) {
      const overviewSection = overviewSectionMatch[0];
      const contentWithToc = overviewSection.trimEnd() + '\n\n' + tableOfContents;
      content = content.replace(/## Overview[\s\S]*?(?=\n## |$)/, contentWithToc);
    }

    // Add public modifier to static method signatures inside TS code blocks
    content = content.replace(/```ts([\s\S]*?)```/gm, (block, body) => {
      let processed = body.replace(/(^\s*)static\s+/gm, '$1static ');

      // Remove public modifier to save space
      processed = processed.replace(/(^\s*)public\s+/gm, '$1');

      // Collapse multi-line method signatures to single line by combining parameter lines
      processed = processed.replace(/((?:static[\s\S]*?;\n))/g, (signature) => {
        const singleLine = signature.replace(/\n\s*/g, ' ').replace(/ +/g, ' ');
        return singleLine;
      });

      return '```ts\n' + processed.trim() + '\n```';
    });

    // Improve return documentation formatting using a callout to separate it clearly
    content = content.replace(/###### Returns\s*\n\s*`([^`]+)`\s*\n\s*([\s\S]*?)(?=\n#####|\n##|$)/g, (match, type, description) => {
      const formattedDesc = description.trim().replace(/\n+/g, ' ');
      const descPart = formattedDesc ? `\n> - **Description**: ${formattedDesc}` : '';
      return `> ::: info Returns\n> - **Type**: \`${type.trim()}\`${descPart}\n> :::\n`;
    });

    // Indent method code blocks (each line)
    content = content.replace(/(```ts[\s\S]*?```)/g, (match) => {
      return match.split('\n').map(line => '> ' + line).join('\n');
    });

    // Indent method descriptions (all lines between code block and next section)
    content = content.replace(/(> ```ts[\s\S]*?```\n)([\s\S]*?)(\n###### Parameters)/g, (match, codeBlock, description, nextSection) => {
      const indentedDescription = description.split('\n').map(line => {
        return line.trim() ? '> ' + line : line;
      }).join('\n');
      return codeBlock + indentedDescription + nextSection;
    });

    // Change Parameters header to bold text
    content = content.replace(/^###### Parameters$/gm, '**Parameters**');

    // Indent Parameters header
    content = content.replace(/^(\*\*Parameters\*\*)$/gm, '> $1');

    // Indent table rows
    content = content.replace(/(> \*\*Parameters\*\*\n\n)(\|.*\|[\s\S]*?)(\n\n> :::)/g, (match, p, table, ret) => {
      const indentedTable = table.split('\n').map(line => '> ' + line).join('\n');
      return p + indentedTable + ret;
    });

    // Insert overviews for additional classes
    for (const [className, overview] of Object.entries(overviews)) {
      if (className === mainClass) continue;
      const classHeader = `## ${className}`;
      const index = content.indexOf(classHeader);
      if (index !== -1) {
        const insertPos = content.indexOf('\n', index + classHeader.length) + 1;
        content = content.slice(0, insertPos) + '\n' + overview + '\n\n' + content.slice(insertPos);
      }
    }

    return content;
  }

  processDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        this.processDirectory(filePath);
      } else if (file.endsWith('.md') && file !== 'index.md') {
        this.enhanceFile(filePath);
      }
    }
  }

  run() {
    console.log('Starting documentation enhancement...');

    if (!fs.existsSync(this.sdkPath)) {
      console.log('SDK documentation directory not found. Run TypeDoc first.');
      return;
    }

    this.processDirectory(this.sdkPath);
    console.log('Documentation enhancement completed!');
  }
}

// Run the enhancer
if (import.meta.url === `file://${process.argv[1]}`) {
  const enhancer = new DocEnhancer();
  enhancer.run();
}

export default DocEnhancer;