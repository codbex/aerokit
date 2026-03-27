import fs from 'fs';

export class OverviewExtractor {
  public static extractOverviewsFromTs(sourceFilePath: string): Record<string, string> {
    try {
      const source = fs.readFileSync(sourceFilePath, 'utf8');
      const overviews: Record<string, string> = {};
      const lines = source.split(/\r?\n/);

      let inJsDoc = false;
      let jsDocLines: string[] = [];
      let fileLevelComment: string[] = [];
      let hasEncounteredCode = false;

      for (const rawLine of lines) {
        const line = rawLine;

        if (!hasEncounteredCode && !inJsDoc && line.trimStart().startsWith('/**')) {
          inJsDoc = true;
          jsDocLines = [];

          const inner = line.replace(/^\s*\/\*\*(\s*)?/, '').replace(/\*\/[\s]*$/, '');
          if (line.trimEnd().endsWith('*/')) {
            // single-line JSDoc
            jsDocLines.push(inner);
            inJsDoc = false;
            if (!hasEncounteredCode) {
              fileLevelComment = [...jsDocLines];
            }
          } else {
            jsDocLines.push(inner);
          }

          continue;
        }

        if (inJsDoc) {
          const closing = line.trimEnd().endsWith('*/');

          let contentLine = line;
          if (closing) {
            contentLine = contentLine.replace(/\*\/[\s]*$/, '');
          }

          // Remove leading JSDoc prefix (`*` with optional space) but keep the rest as-is.
          const stripped = contentLine.replace(/^\s*\*\s?/, '');

          jsDocLines.push(stripped);

          if (closing) {
            inJsDoc = false;
            if (!hasEncounteredCode) {
              fileLevelComment = [...jsDocLines];
            }
          }

          continue;
        }

        // Check for actual code (not just comments or empty lines)
        if (line.trim() && !line.trim().startsWith('//') && !line.trim().startsWith('/*') && !line.trim().startsWith('*')) {
          hasEncounteredCode = true;
        }

        const classMatch = line.match(/^(?:export\s+)?class\s+(\w+)/);
        if (classMatch && jsDocLines.length > 0) {
          const rawText = jsDocLines.join('\n').trim();
          if (rawText) {
            overviews[classMatch[1]] = rawText;
          }
          jsDocLines = [];
        }
      }

      // If we have a file-level comment and no class overviews, use it for the first class found
      if (fileLevelComment.length > 0 && Object.keys(overviews).length === 0) {
        // Find the first class in the file
        for (const rawLine of lines) {
          const classMatch = rawLine.match(/^(?:export\s+)?class\s+(\w+)/);
          if (classMatch) {
            overviews[classMatch[1]] = fileLevelComment.join('\n').replace(/^\s*\n|\n\s*$/g, '');
            break;
          }
        }
      }

      return overviews;
    } catch (error: unknown) {
      console.warn(`Could not extract overviews from ${sourceFilePath}:`, (error as Error).message);
      return {};
    }
  }
}
