# io/streams

::: tip Documentation
- source: [io/streams.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/io/streams.ts)
:::


## Overview

Provides core functionality for input/output stream management,
including stream creation, data transfer, and byte array handling.


## Classes

### Streams


The Streams class provides static utility methods for stream creation,
manipulation, and data copying.

#### Constructors

##### Constructor

```ts
new Streams(): Streams;
```

#### Methods
##### copy()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### copyLarge()

```ts
static copyLarge(input, output): void;
```


Copies all bytes from the input stream to the output stream using a large buffer,
suitable for large file transfers.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | [`InputStream`](#inputstream) | The source [InputStream](#inputstream). |
| `output` | [`OutputStream`](#outputstream) | The destination [OutputStream](#outputstream). |

> ::: info Returns
> - **Type**: `void`
> :::
##### getResourceAsByteArrayInputStream()

```ts
static getResourceAsByteArrayInputStream(path): InputStream;
```


Creates a new [InputStream](#inputstream) from a resource accessible via the class loader.
This is typically used to read bundled resources within the application runtime.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to the resource. |

##### createByteArrayInputStream()
**Parameters**
##### createByteArrayOutputStream()
##### createInputStream()
**Parameters**
##### createOutputStream()
**Parameters**
### InputStream
#### Constructors
##### Constructor
**Parameters**
#### Properties
#### Methods
##### read()
> ::: info Returns
> - **Type**: `number`
> - **Description**: The next byte of data, or -1 if the end of the stream is reached.
> :::
##### readBytes()

```ts
readBytes(): any[];
```


Reads all remaining bytes from the stream and returns them as a JavaScript array.

##### readBytesNative()
##### readText()
> ::: info Returns
> - **Type**: `string`
> - **Description**: The content of the stream as a string.
> :::
##### close()

```ts
close(): void;
```


Closes this input stream and releases any system resources associated with it.

> ::: info Returns
> - **Type**: `void`
> :::
##### isValid()

```ts
isValid(): boolean;
```


Checks if the underlying native stream object is defined and non-null.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the stream is valid, false otherwise. ***
> :::
### OutputStream


Represents an output stream for writing bytes.
This class wraps a native stream object and provides methods for writing data.

#### Constructors

##### Constructor

```ts
new OutputStream(native): OutputStream;
```


**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `native` | `any` | The native Java OutputStream object. |

#### Properties
#### Methods
##### write()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### writeBytes()

```ts
writeBytes(data): void;
```


Writes the entire content of a JavaScript byte array to this output stream.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `any`[] | The JavaScript array (`number[]`) of byte values to write. |

> ::: info Returns
> - **Type**: `void`
> :::
##### writeBytesNative()

```ts
writeBytesNative(data): void;
```


Writes the entire content of a native Java byte array to this output stream.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `any`[] | The native Java byte array object to write. |

> ::: info Returns
> - **Type**: `void`
> :::
##### writeText()

```ts
writeText(text): void;
```


Converts the string to bytes using the platform's default character encoding
and writes them to this output stream.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The string content to write. |

> ::: info Returns
> - **Type**: `void`
> :::
##### close()

```ts
close(): void;
```


Closes this output stream and releases any system resources associated with it.

> ::: info Returns
> - **Type**: `void`
> :::
##### getBytes()

```ts
getBytes(): any[];
```


Retrieves the content written to this stream as a JavaScript byte array.
This is typically used with a ByteArrayOutputStream.

##### getBytesNative()
##### getText()
> ::: info Returns
> - **Type**: `string`
> - **Description**: The content of the stream as a string.
> :::
##### isValid()

```ts
isValid(): boolean;
```


Checks if the underlying native stream object is defined and non-null.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the stream is valid, false otherwise.
> :::