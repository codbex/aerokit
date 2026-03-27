# http/upload

::: tip Documentation
- source: [http/upload.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/upload.ts)
:::


## Overview

Provides a static façade (`Upload` class) for checking and parsing
multipart/form-data HTTP requests, typically used for file uploads.


## Classes

### Upload


The static Upload class provides methods to determine if a request contains
multipart content and to parse that content into file items.

#### Constructors

##### Constructor

```ts
new Upload(): Upload;
```

#### Methods
##### isMultipartContent()
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the request is multipart, false otherwise.
> :::
##### parseRequest()

```ts
static parseRequest(): FileItems;
```


Parses the incoming multipart request content into a collection of file items.
This operation typically consumes the request body.

### FileItems
#### Constructors
##### Constructor
**Parameters**
#### Methods
##### get()
**Parameters**
##### size()
> ::: info Returns
> - **Type**: `number`
> - **Description**: The size of the collection. ***
> :::
### FileItem


Represents a single item (either an uploaded file or a regular form field)
within a multipart request.

#### Constructors

##### Constructor

```ts
new FileItem(native): FileItem;
```


**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `native` | `any` | The native Java object representing the file item. |

#### Methods
##### getName()
> ::: info Returns
> - **Type**: `string`
> - **Description**: The original filename string.
> :::
##### getContentType()

```ts
getContentType(): string;
```


Returns the MIME type of the uploaded file or content part.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The content type string (e.g., 'image/png', 'text/plain').
> :::
##### isEmpty()

```ts
isEmpty(): boolean;
```


Checks if the uploaded item is empty (e.g., a file upload with zero bytes).

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the item is empty, false otherwise.
> :::
##### getSize()

```ts
getSize(): number;
```


Returns the size of the uploaded item in bytes.

> ::: info Returns
> - **Type**: `number`
> - **Description**: The size as a number.
> :::
##### getBytes()

```ts
getBytes(): any[];
```


Retrieves the content of the file item as a JavaScript array of bytes.
This uses a utility (`Bytes.toJavaScriptBytes`) to convert the native Java byte array.

##### getBytesNative()
##### getText()
> ::: info Returns
> - **Type**: `string`
> - **Description**: The content as a string.
> :::
##### getInputStream()

```ts
getInputStream(): InputStream;
```


Gets an input stream for reading the content of the file item.
This is useful for handling large files without loading the entire content into memory.

> ::: info Returns
> - **Type**: `InputStream`
> - **Description**: An InputStream object wrapping the native input stream.
> :::