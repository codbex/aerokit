# http/upload

> [!tip]
> Auto-generated from
> - source: [http/upload.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/upload.ts)
> - version: 1.0.0


## Overview

Provides a static façade (`Upload` class) for checking and parsing
multipart/form-data HTTP requests, typically used for file uploads.
/
import { InputStream } from "@aerokit/sdk/io/streams"
import { Bytes } from "@aerokit/sdk/io/bytes"

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Upload](#upload)
- [Returns](#returns)
  - [FileItems](#fileitems)
- [Parameters](#parameters)
  - [FileItem](#fileitem)
- [Parameters](#parameters)

## Classes

### Upload


The static Upload class provides methods to determine if a request contains
multipart content and to parse that content into file items.

## Returns

[`Upload`](#upload)

#### Methods

##### isMultipartContent()

> ```ts
> static isMultipartContent(): boolean;
> ```


> Checks if the current incoming HTTP request contains multipart content
> (e.g., from an HTML form with `enctype="multipart/form-data"`).

> > ::: info Returns
> > - **Type**: `boolean`
> > - **Description**: True if the request is multipart, false otherwise.
> > :::

> ##### parseRequest()

> > ```ts
> > static parseRequest(): FileItems;
> > ```


> Parses the incoming multipart request content into a collection of file items.
> This operation typically consumes the request body.

> ###### Returns

> [`FileItems`](#fileitems)

> A FileItems object representing all parts (files and form fields) of the request.

> ***

> ### FileItems

@param native The native Java collection object holding the file items.
/
    constructor(native: any) {
        this.native = native;
    }


Checks if the current incoming HTTP request contains multipart content
(e.g., from an HTML form with `enctype="multipart/form-data"`).
@returns True if the request is multipart, false otherwise.
/
    public static isMultipartContent(): boolean {
        return HttpUploadFacade.isMultipartContent();
    }



> Represents a collection of uploaded file and form field items parsed from a multipart request.

> ## Parameters

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `native` | `any` | The native Java collection object holding the file items. |

> ###### Returns

> [`FileItems`](#fileitems)

> #### Methods

> ##### get()

> > ```ts
> > get(index): FileItem;
> > ```


> Retrieves a specific item (file or form field) by its index in the collection.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `index` | `number` | The zero-based index of the item. |
> 
> ###### Returns
> 
> [`FileItem`](#fileitem)
> 
> A FileItem object representing the item at the specified index.
> 
> ##### size()
> 
> > ```ts
> > size(): number;
> > ```
> 
> 
> Returns the total number of items (files and form fields) in the collection.

> ::: info Returns
> - **Type**: `number`
> - **Description**: The size of the collection. ***
> :::

### FileItem


Represents a single item (either an uploaded file or a regular form field)
within a multipart request.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `native` | `any` | The native Java object representing the file item. |

###### Returns

[`FileItem`](#fileitem)

#### Methods

##### getName()

> ```ts
> getName(): string;
> ```


For a file upload, returns the original filename as reported by the client.
For a regular form field, this is typically null or undefined.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The original filename string.
> :::

##### getContentType()

> ```ts
> getContentType(): string;
> ```


Returns the MIME type of the uploaded file or content part.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The content type string (e.g., 'image/png', 'text/plain').
> :::

##### isEmpty()

> ```ts
> isEmpty(): boolean;
> ```


Checks if the uploaded item is empty (e.g., a file upload with zero bytes).

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the item is empty, false otherwise.
> :::

##### getSize()

> ```ts
> getSize(): number;
> ```


Returns the size of the uploaded item in bytes.

> ::: info Returns
> - **Type**: `number`
> - **Description**: The size as a number.
> :::

##### getBytes()

> ```ts
> getBytes(): any[];
> ```


Retrieves the content of the file item as a JavaScript array of bytes.
This uses a utility (`Bytes.toJavaScriptBytes`) to convert the native Java byte array.

> ::: info Returns
> - **Type**: `any`
> - **Description**: [] An array of bytes (`any[]`).
> :::

##### getBytesNative()

> ```ts
> getBytesNative(): any[];
> ```


Retrieves the content of the file item as the native Java byte array.

> ::: info Returns
> - **Type**: `any`
> - **Description**: [] The native byte array (`any[]`).
> :::

##### getText()

> ```ts
> getText(): string;
> ```


Retrieves the content of the file item as a string.
Note: This assumes the content is text and may not handle all encodings correctly.
It relies on JavaScript's `String.fromCharCode.apply` for conversion.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The content as a string.
> :::

##### getInputStream()

> ```ts
> getInputStream(): InputStream;
> ```


Gets an input stream for reading the content of the file item.
This is useful for handling large files without loading the entire content into memory.

> ::: info Returns
> - **Type**: `InputStream`
> - **Description**: An InputStream object wrapping the native input stream.
> :::
