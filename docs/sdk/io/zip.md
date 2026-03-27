# io/zip

> [!tip]
> Auto-generated from
> - source: [io/zip.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/io/zip.ts)
> - version: 1.0.0


## Overview

Provides a façade for handling ZIP archive operations, including
file compression, decompression, and stream-based entry processing.
/
import { Bytes } from "@aerokit/sdk/io/bytes";
import { InputStream, OutputStream } from "@aerokit/sdk/io/streams";

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Zip](#zip)
- [Returns](#returns)
  - [ZipInputStream](#zipinputstream)
- [Parameters](#parameters)
  - [ZipOutputStream](#zipoutputstream)
- [Parameters](#parameters)
  - [ZipEntry](#zipentry)
- [Parameters](#parameters)

## Classes

### Zip


The Zip class provides static utility methods for managing ZIP archives
at both file path level and stream level.

## Returns

[`Zip`](#zip)

#### Methods

##### zip()

> ```ts
> static zip(sourcePath, zipTargetPath): void;
> ```


> Zips the content of a source directory or file into a target ZIP file.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sourcePath` | `string` | The file system path to the content to be compressed. |
> | `zipTargetPath` | `string` | The file system path where the resulting ZIP file should be saved. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### unzip() > ```ts static unzip(zipPath, targetPath): void; ``` Unzips an existing ZIP file into a target directory.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `zipPath` | `string` | The file system path to the ZIP file to be extracted. |
> | `targetPath` | `string` | The file system path to the directory where content should be extracted. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### createZipInputStream() > ```ts static createZipInputStream(inputStream): ZipInputStream; ``` Creates a [ZipInputStream](#zipinputstream) that reads ZIP archive data from a provided generic InputStream. This allows for reading ZIP entries without writing the archive to disk first.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `inputStream` | `InputStream` | The source stream containing the raw ZIP data. |
> 
> ###### Returns
> 
> [`ZipInputStream`](#zipinputstream)
> 
> A new [ZipInputStream](#zipinputstream) instance.
> 
> ##### createZipOutputStream()
> 
> > ```ts
> > static createZipOutputStream(outputStream): ZipOutputStream;
> > ```
> 
> 
> > Creates a [ZipOutputStream](#zipoutputstream) that writes compressed ZIP archive data
> > to a provided generic OutputStream. This allows for creating ZIP archives
> > in memory or streaming them directly.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `outputStream` | `OutputStream` | The destination stream where the raw ZIP data will be written. |
> 
> ###### Returns
> 
> [`ZipOutputStream`](#zipoutputstream)
> 
> A new [ZipOutputStream](#zipoutputstream) instance.
> 
> ***
> 
> ### ZipInputStream

Zips the content of a source directory or file into a target ZIP file.

> 
> 
> Represents an input stream for reading data from a ZIP archive.
> Data is accessed sequentially by iterating through [ZipEntry](#zipentry) objects.
> 
> ## Parameters
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `native` | `any` | The underlying native ZipInputStream object. |
> 
> ###### Returns
> 
> [`ZipInputStream`](#zipinputstream)
> 
> #### Methods
> 
> ##### getNextEntry()
> 
> > ```ts
> > getNextEntry(): ZipEntry;
> > ```
> 
> 
> > Reads the next ZIP file entry and positions the stream at the beginning of the entry data.
> > Must be called before reading data for an entry.
> 
> > ###### Returns
> 
> > [`ZipEntry`](#zipentry)
> 
> > The next [ZipEntry](#zipentry) object, or null if there are no more entries.
> 
> > ##### read()
> 
> > > ```ts
> > > read(): any[];
> > > ```
> 
> 
> > Reads the data for the current entry and returns it as a JavaScript byte array.
> 
> > ###### Returns
> 
> > `any`[]
> 
> > A JavaScript array (`number[]`) of the byte values for the current entry.
> 
> > ##### readNative()
> 
> > > ```ts
> > > readNative(): any[];
> > > ```
> 
> 
> > Reads the data for the current entry and returns the native Java byte array.
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
> > Reads the data for the current entry and converts it to a string
> > using the platform's default character encoding.
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: The content of the current entry as a string.
> > > :::
> 
> > ##### close()
> 
> > > ```ts
> > > close(): void;
> > > ```
> 
> 
> > Closes the underlying native ZipInputStream.
> 
> > > ::: info Returns
> > > - **Type**: `void`
> > > - **Description**: ***
> > > :::
> 
> > ### ZipOutputStream

@param native The underlying native ZipInputStream object.
/
    constructor(native: any) {
        this.native = native;
    }

> 
> 
> > Represents an output stream for writing data to a ZIP archive.
> > Entries must be explicitly created and closed.
> 
> > ## Parameters
> 
> > | Parameter | Type | Description |
> > | ------ | ------ | ------ |
> > | `native` | `any` | The underlying native ZipOutputStream object. |
> 
> > ###### Returns
> 
> > [`ZipOutputStream`](#zipoutputstream)
> 
> > #### Methods
> 
> > ##### createZipEntry()
> 
> > > ```ts
> > > createZipEntry(name): ZipEntry;
> > > ```
> 
> 
> > Creates a new [ZipEntry](#zipentry) with the given name, and begins writing the
> > entry's header to the archive stream. All subsequent write operations
> > will apply to this entry until [closeEntry](#closeentry) is called.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The file or directory name to use inside the ZIP archive. |
> 
> ###### Returns
> 
> [`ZipEntry`](#zipentry)
> 
> The newly created [ZipEntry](#zipentry) object.
> 
> ##### write()
> 
> > ```ts
> > write(data): void;
> > ```
> 
> 
> > Writes the data from a JavaScript byte array to the current active entry in the stream.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `data` | `any`[] | The JavaScript array (`number[]`) of byte values to write. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### writeNative() > ```ts writeNative(data): void; ``` Writes the data from a native Java byte array to the current active entry in the stream.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `data` | `any`[] | The native Java byte array object to write. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### writeText() > ```ts writeText(text): void; ``` Converts the string to bytes and writes it to the current active entry in the stream.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `text` | `string` | The string content to write. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### closeEntry() > ```ts closeEntry(): void; ``` Closes the current active ZIP entry and positions the stream for the next entry.
> :::

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### close() > ```ts close(): void; ``` Finalizes the writing of the ZIP file, flushes the stream, and closes the native object. This must be called after all entries have been written.
> :::

> ::: info Returns
> - **Type**: `void`
> - **Description**: ***
> :::

### ZipEntry

@param native The underlying native ZipOutputStream object.
/
    constructor(native: any) {
        this.native = native;
    }



Represents an entry (file or directory) within a ZIP archive.
It holds metadata about the archived item.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `native` | `any` | The underlying native ZipEntry object. |

###### Returns

[`ZipEntry`](#zipentry)

#### Methods

##### getName()

> ```ts
> getName(): string;
> ```


Gets the name of the entry (path relative to the ZIP root).

> ::: info Returns
> - **Type**: `string`
> - **Description**: The name of the entry.
> :::

##### getSize()

> ```ts
> getSize(): number;
> ```


Gets the uncompressed size of the entry data.

> ::: info Returns
> - **Type**: `number`
> - **Description**: The size in bytes.
> :::

##### getCompressedSize()

> ```ts
> getCompressedSize(): number;
> ```


Gets the compressed size of the entry data.

> ::: info Returns
> - **Type**: `number`
> - **Description**: The compressed size in bytes.
> :::

##### getTime()

> ```ts
> getTime(): number;
> ```


Gets the modification time of the entry.

> ::: info Returns
> - **Type**: `number`
> - **Description**: The time as a numerical timestamp.
> :::

##### getCrc()

> ```ts
> getCrc(): number;
> ```


Gets the CRC-32 checksum of the uncompressed entry data.

> ::: info Returns
> - **Type**: `number`
> - **Description**: The CRC value.
> :::

##### getComment()

> ```ts
> getComment(): string;
> ```


Gets the optional comment for the entry.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The comment string.
> :::

##### isDirectory()

> ```ts
> isDirectory(): boolean;
> ```


Checks if the entry represents a directory.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if it is a directory, false otherwise.
> :::

##### isValid()

> ```ts
> isValid(): boolean;
> ```


Checks if the underlying native ZipEntry object is defined and non-null.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the entry is valid, false otherwise.
> :::
