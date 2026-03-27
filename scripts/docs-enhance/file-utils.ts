import fs from 'fs';
import path from 'path';

const PACKAGE_JSON = 'package.json';

export class FileUtils {
    public static readonly DEFAULT_VERSION = '1.0.0';
    public static readonly REPO_SOURCE_BASE =
        'https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src';

    public static getVersion(): string {
        try {
            const packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON, 'utf8')) as { version?: string };
            return packageJson.version ?? FileUtils.DEFAULT_VERSION;
        } catch (error: unknown) {
            console.warn('Could not read package.json:', (error as Error).message);
            return FileUtils.DEFAULT_VERSION;
        }
    }

    public static getNavigationPath(filePath: string, sdkPath: string): string {
        const relativePath = path.relative(sdkPath, filePath);
        const parts = relativePath.split(path.sep).filter(Boolean);
        const breadcrumbs = parts.slice(0, -1).map(part => this.capitalize(part));

        if (parts.length > 0) {
            breadcrumbs.push(this.capitalize(path.parse(parts[parts.length - 1]).name));
        }

        return breadcrumbs.join(' > ');
    }

    public static capitalize(value: string): string {
        if (!value) return value;
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    public static getSourceFilePathFromMd(mdFilePath: string, sdkPath: string, srcPath: string): string {
        const relativeMd = path.relative(sdkPath, mdFilePath);
        const tsRelative = relativeMd.endsWith('.md') ? relativeMd.slice(0, -3) + '.ts' : relativeMd;
        return path.join(srcPath, tsRelative);
    }

    public static makeMarkdownTypeLinkSafe(content: string): string {
        const primitiveNames = [
            'string', 'number', 'boolean', 'any', 'void', 'unknown', 'null',
            'undefined', 'object', 'symbol', 'bigint'
        ];
        let result = content;

        for (const typeName of primitiveNames) {
            result = result.replace(`[\`${typeName}\`](${`./${typeName}`})`, `\`${typeName}\``);
            result = result.replace(`[${typeName}](${`./${typeName}`})`, `${typeName}`);
        }

        return result;
    }
}
