# indexing/writer

> [!tip]
> Auto-generated from
> - source: [indexing/writer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/indexing/writer.ts)
> - version: 1.0.0


## Overview

Provides a static façade (`Writer` class) for adding new documents
or content to the native indexing service.
/

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Writer](#writer)
- [Returns](#returns)

## Classes

### Writer


The Writer class provides a static method for indexing documents, allowing
for full-text content, a last modification timestamp, and optional metadata.

## Returns

[`Writer`](#writer)

#### Methods

##### add()

> ```ts
> static add( index, location, contents, lastModified?, parameters?): void;
> ```


> Adds a new document entry to the specified index.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `index` | `string` | The name or identifier of the index (e.g., 'documents', 'users'). |
> | `location` | `string` | A unique identifier or path for the indexed document (e.g., a file path or URL). |
> | `contents` | `string` | The full-text content of the document to be indexed and made searchable. |
> | `lastModified` | `Date` | The Date object representing the last modification time of the document. Defaults to the current date/time if omitted. |
> | `parameters?` | \{ \[`key`: `string`\]: `string`; \} | Optional key-value map of additional metadata to associate with the document. |

> ::: info Returns
> - **Type**: `void`
> :::
