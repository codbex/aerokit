# indexing/writer

## Overview



::: tip Module
- source: [indexing/writer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/indexing/writer.ts)
- last updated: 
:::

## Classes

### Writer

#### add()

Adds a new document entry to the specified index.

> ```ts
> static add(index: string, location: string, contents: string, lastModified: Date, parameters: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `index` | `string` | The name or identifier of the index (e.g., 'documents', 'users'). |
> | `location` | `string` | A unique identifier or path for the indexed document (e.g., a file path or URL). |
> | `contents` | `string` | The full-text content of the document to be indexed and made searchable. |
> | `lastModified` | `Date` | The Date object representing the last modification time of the document. Defaults to the current date/time if omitted. |
> | `parameters` | `any` | Optional key-value map of additional metadata to associate with the document. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

