# io/streams

> [!tip]
> Auto-generated from
> - source: [io/streams.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/io/streams.ts)
> - version: 1.0.0


## Overview

Provides core functionality for input/output stream management,
including stream creation, data transfer, and byte array handling.
/
import { Bytes } from "@aerokit/sdk/io/bytes";

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Streams](#streams)
- [Returns](#returns)
  - [InputStream](#inputstream)
- [Parameters](#parameters)
  - [OutputStream](#outputstream)
- [Parameters](#parameters)

## Classes

### Streams


The Streams class provides static utility methods for stream creation,
manipulation, and data copying.

## Returns

[`Streams`](#streams)

#### Methods

##### copy()

> ```ts
> static copy(input, output): void;
> ```


> Copies all bytes from the input stream to the output stream.
> This method is generally used for smaller streams.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | [`InputStream`](#inputstream) | The source [InputStream](#inputstream). |
> | `output` | [`OutputStream`](#outputstream) | The destination [OutputStream](#outputstream). |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### copyLarge() > ```ts static copyLarge(input, output): void; ``` Copies all bytes from the input stream to the output stream using a large buffer, suitable for large file transfers.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | [`InputStream`](#inputstream) | The source [InputStream](#inputstream). |
> | `output` | [`OutputStream`](#outputstream) | The destination [OutputStream](#outputstream). |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getResourceAsByteArrayInputStream() > ```ts static getResourceAsByteArrayInputStream(path): InputStream; ``` Creates a new [InputStream](#inputstream) from a resource accessible via the class loader. This is typically used to read bundled resources within the application runtime.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The path to the resource. |
> 
> ###### Returns
> 
> [`InputStream`](#inputstream)
> 
> A new [InputStream](#inputstream) instance for the resource.
> 
> ##### createByteArrayInputStream()
> 
> > ```ts
> > static createByteArrayInputStream(data): InputStream;
> > ```
> 
> 
> > Creates a new [InputStream](#inputstream) from a JavaScript byte array (`any[]`).
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `data` | `any`[] | The JavaScript array of byte values (`number[]`). |
> 
> ###### Returns
> 
> [`InputStream`](#inputstream)
> 
> A new [InputStream](#inputstream) instance initialized with the byte data.
> 
> ##### createByteArrayOutputStream()
> 
> > ```ts
> > static createByteArrayOutputStream(): OutputStream;
> > ```
> 
> 
> > Creates a new [OutputStream](#outputstream) that writes data into an in-memory byte array.
> > This is typically used as a buffer to capture output before processing it.
> 
> > ###### Returns
> 
> > [`OutputStream`](#outputstream)
> 
> > A new [OutputStream](#outputstream) instance backed by a byte array.
> 
> > ##### createInputStream()
> 
> > > ```ts
> > > static createInputStream(native): InputStream;
> > > ```
> 
> 
> > Wraps a native (Java) InputStream object into a new JavaScript [InputStream](#inputstream) instance.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `native` | `any` | The underlying native InputStream object. |
> 
> ###### Returns
> 
> [`InputStream`](#inputstream)
> 
> A new [InputStream](#inputstream) wrapper.
> 
> ##### createOutputStream()
> 
> > ```ts
> > createOutputStream(native): OutputStream;
> > ```
> 
> 
> > Wraps a native (Java) OutputStream object into a new JavaScript [OutputStream](#outputstream) instance.
> 
> > Note: This method is not static in the original definition, but is placed here for completeness
> > and consistency with other factory methods.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `native` | `any` | The underlying native OutputStream object. |
> 
> ###### Returns
> 
> [`OutputStream`](#outputstream)
> 
> A new [OutputStream](#outputstream) wrapper.
> 
> ***
> 
> ### InputStream

Copies all bytes from the input stream to the output stream.
This method is generally used for smaller streams.

> 
> 
> Represents an input stream for reading bytes.
> This class wraps a native stream object and provides methods for reading data.
> 
> ## Parameters
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `native` | `any` | The native Java InputStream object. |
> 
> ###### Returns
> 
> [`InputStream`](#inputstream)
> 
> #### Properties
> 
> | Property | Modifier | Type | Description | Defined in |
> | ------ | ------ | ------ | ------ | ------ |
> |  `native` | `readonly` | `any` | The underlying native Java stream object. | src/io/streams.ts:106 |
> 
> #### Methods
> 
> ##### read()
> 
> > ```ts
> > read(): number;
> > ```
> 
> 
> > Reads the next byte of data from this input stream.
> 
> > > ::: info Returns
> > > - **Type**: `number`
> > > - **Description**: The next byte of data, or -1 if the end of the stream is reached.
> > > :::
> 
> > ##### readBytes()
> 
> > > ```ts
> > > readBytes(): any[];
> > > ```
> 
> 
> > Reads all remaining bytes from the stream and returns them as a JavaScript array.
> 
> > ###### Returns
> 
> > `any`[]
> 
> > A JavaScript array (`number[]`) of the byte values.
> 
> > ##### readBytesNative()
> 
> > > ```ts
> > > readBytesNative(): any[];
> > > ```
> 
> 
> > Reads all remaining bytes from the stream and returns the native Java byte array.
> 
> > ###### Returns
> 
> > `any`[]
> 
> > The native Java byte array object.
> 
> > ##### readText()
> 
> > > ```ts
> > > readText(): string;
> > > ```
> 
> 
> > Reads all remaining bytes from the stream and converts them to a string
> > using the platform's default character encoding.
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: The content of the stream as a string.
> > > :::
> 
> > ##### close()
> 
> > > ```ts
> > > close(): void;
> > > ```
> 
> 
> > Closes this input stream and releases any system resources associated with it.
> 
> > > ::: info Returns
> > > - **Type**: `void`
> > > - **Description**: ##### isValid() > ```ts isValid(): boolean; ``` Checks if the underlying native stream object is defined and non-null.
> > > :::
> 
> > > ::: info Returns
> > > - **Type**: `boolean`
> > > - **Description**: True if the stream is valid, false otherwise. ***
> > > :::
> 
> > ### OutputStream

@param native The native Java InputStream object.
/
	constructor(native: any) {
		this.native = native;
	}

> 
> 
> > Represents an output stream for writing bytes.
> > This class wraps a native stream object and provides methods for writing data.
> 
> > ## Parameters
> 
> > | Parameter | Type | Description |
> > | ------ | ------ | ------ |
> > | `native` | `any` | The native Java OutputStream object. |
> 
> > ###### Returns
> 
> > [`OutputStream`](#outputstream)
> 
> > #### Properties
> 
> > | Property | Modifier | Type | Description | Defined in |
> > | ------ | ------ | ------ | ------ | ------ |
> > |  `native` | `readonly` | `any` | The underlying native Java stream object. | src/io/streams.ts:175 |
> 
> > #### Methods
> 
> > ##### write()
> 
> > > ```ts
> > > write(byte): void;
> > > ```
> 
> 
> > Writes the specified byte to this output stream.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `byte` | `number` | The byte (as a number 0-255) to write. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### writeBytes() > ```ts writeBytes(data): void; ``` Writes the entire content of a JavaScript byte array to this output stream.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `data` | `any`[] | The JavaScript array (`number[]`) of byte values to write. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### writeBytesNative() > ```ts writeBytesNative(data): void; ``` Writes the entire content of a native Java byte array to this output stream.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `data` | `any`[] | The native Java byte array object to write. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### writeText() > ```ts writeText(text): void; ``` Converts the string to bytes using the platform's default character encoding and writes them to this output stream.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `text` | `string` | The string content to write. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### close() > ```ts close(): void; ``` Closes this output stream and releases any system resources associated with it.
> :::

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getBytes() > ```ts getBytes(): any[]; ``` Retrieves the content written to this stream as a JavaScript byte array. This is typically used with a ByteArrayOutputStream.
> :::

###### Returns

`any`[]

A JavaScript array (`number[]`) of the byte values written to the stream.

##### getBytesNative()

> ```ts
> getBytesNative(): any[];
> ```


Retrieves the content written to this stream as the native Java byte array.
This is typically used with a ByteArrayOutputStream.

###### Returns

`any`[]

The native Java byte array object.

##### getText()

> ```ts
> getText(): string;
> ```


Retrieves the content written to this stream as a string using the platform's
default character encoding. This is typically used with a ByteArrayOutputStream.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The content of the stream as a string.
> :::

##### isValid()

> ```ts
> isValid(): boolean;
> ```


Checks if the underlying native stream object is defined and non-null.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the stream is valid, false otherwise.
> :::
