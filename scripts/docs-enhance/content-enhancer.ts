import { FileUtils } from './file-utils.ts';

export class ContentEnhancer {
  public static addEnterpriseSections(
    content: string,
    moduleName: string,
    overviews: Record<string, string>
  ): string {
    const mainClass = Object.keys(overviews)[0] ?? null;
    const overviewText = mainClass ? overviews[mainClass] : null;

    content = this.removeUnwantedSections(content);
    content = this.addOverviewSection(content, moduleName, overviewText);
    content = this.enhanceCodeBlocks(content);
    content = this.enhanceReturnsDocumentation(content);
    content = this.changeParametersToBold(content);
    content = this.indentMethodSections(content);
    content = this.insertAdditionalClassOverviews(content, overviews, mainClass);

    return content;
  }

  public static removeUnwantedSections(content: string): string {
    const lines = content.split('\n');
    const filteredLines: string[] = [];

    let skipSection: 'bestPractices' | 'troubleshooting' | 'toc' | null = null;

    for (const rawLine of lines) {
      const line = rawLine;
      const normalized = line.trim();

      if (normalized.startsWith('Defined in:')) {
        continue;
      }

      if (skipSection) {
        if (normalized.startsWith('## ')) {
          skipSection = null;
        } else {
          continue;
        }
      }

      if (normalized.startsWith('## Best Practices')) {
        skipSection = 'bestPractices';
        continue;
      }

      if (normalized.startsWith('## Troubleshooting')) {
        skipSection = 'troubleshooting';
        continue;
      }

      if (normalized.startsWith('## Table of Contents')) {
        skipSection = 'toc';
        continue;
      }

      filteredLines.push(line);
    }

    return filteredLines.join('\n');
  }

  public static addOverviewSection(content: string, moduleName: string, overviewText: string | null): string {
    if (content.includes('## Overview')) return content;

    const filledOverview = overviewText ?? `The ${FileUtils.capitalize(moduleName)} API provides...`;
    const insertionPoint = content.indexOf('\n## ');

    if (insertionPoint !== -1) {
      return (
        content.slice(0, insertionPoint) +
        '\n## Overview\n\n' +
        filledOverview +
        '\n\n' +
        content.slice(insertionPoint)
      );
    }

    return content + '\n## Overview\n\n' + filledOverview + '\n';
  }

  public static enhanceCodeBlocks(content: string): string {
    const lines = content.split('\n');
    let insideTsBlock = false;
    let builder: string[] = [];

    for (const line of lines) {
      if (line.trim() === '```ts') {
        insideTsBlock = true;
        builder.push(line);
        continue;
      }

      if (insideTsBlock && line.trim() === '```') {
        insideTsBlock = false;
        builder.push(line);
        continue;
      }

      if (insideTsBlock) {
        let adjustedLine = line;

        if (adjustedLine.trimStart().startsWith('public ')) {
          adjustedLine = adjustedLine.replace(/public\s+/, '');
        }

        builder.push(adjustedLine);
      } else {
        builder.push(line);
      }
    }

    return builder.join('\n');
  }

  public static enhanceReturnsDocumentation(content: string): string {
    const lines = content.split('\n');
    const out: string[] = [];
    let inReturns = false;
    let returnType = '';
    let returnDesc = '';

    const flushReturns = () => {
      if (!inReturns || !returnType) return;
      const formatted = `> ::: info Returns\n> - **Type**: \`${returnType}\`` +
        (returnDesc.trim() ? `\n> - **Description**: ${returnDesc.trim()}` : '') +
        '\n> :::';
      out.push(formatted);
      inReturns = false;
      returnType = '';
      returnDesc = '';
    };

    for (const line of lines) {
      const trimmed = line.trim();

      if (trimmed.startsWith('###### Returns')) {
        inReturns = true;
        returnType = '';
        returnDesc = '';
        continue;
      }

      if (!inReturns) {
        out.push(line);
        continue;
      }

      if (trimmed === '') {
        continue;
      }

      const typeMatch = trimmed.match(/^`([^`]+)`$/);
      if (!returnType && typeMatch) {
        returnType = typeMatch[1];
        continue;
      }

      // Stop processing returns when we hit any heading (method, section, etc.)
      if (trimmed.startsWith('#')) {
        flushReturns();
        out.push(line);
        continue;
      }

      returnDesc += (returnDesc ? ' ' : '') + trimmed;
    }

    flushReturns();
    return out.join('\n');
  }

  public static changeParametersToBold(content: string): string {
    return content.replace(/^###### Parameters$/gm, '**Parameters**');
  }

  public static indentMethodSections(content: string): string {
    // Keep structure as-is to avoid data loss during aggressive manipulation.
    return content;
  }

  public static insertAdditionalClassOverviews(
    content: string,
    overviews: Record<string, string>,
    mainClass: string | null
  ): string {
    let enhanced = content;

    for (const [className, overview] of Object.entries(overviews)) {
      if (className === mainClass) continue;
      const classHeader = `## ${className}`;
      const index = enhanced.indexOf(classHeader);

      if (index !== -1) {
        const insertPos = enhanced.indexOf('\n', index + classHeader.length);
        if (insertPos !== -1) {
          enhanced =
            enhanced.slice(0, insertPos + 1) +
            '\n' +
            overview +
            '\n\n' +
            enhanced.slice(insertPos + 1);
        }
      }
    }

    return enhanced;
  }
}
