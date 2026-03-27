# io/zip

::: tip Documentation
- source: [io/zip.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/io/zip.ts)
:::


## Overview

Provides a façade for handling ZIP archive operations, including
file compression, decompression, and stream-based entry processing.


## Classes

### Zip


The Zip class provides static utility methods for managing ZIP archives
at both file path level and stream level.

#### Constructors

##### Constructor

```ts
new Zip(): Zip;
```

#### Methods
##### zip()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### unzip()

```ts
static unzip(zipPath, targetPath): void;
```


Unzips an existing ZIP file into a target directory.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zipPath` | `string` | The file system path to the ZIP file to be extracted. |
| `targetPath` | `string` | The file system path to the directory where content should be extracted. |

> ::: info Returns
> - **Type**: `void`
> :::
##### createZipInputStream()

```ts
static createZipInputStream(inputStream): ZipInputStream;
```


Creates a [ZipInputStream](#zipinputstream) that reads ZIP archive data from a provided
generic InputStream. This allows for reading ZIP entries without
writing the archive to disk first.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputStream` | `InputStream` | The source stream containing the raw ZIP data. |

##### createZipOutputStream()
**Parameters**
### ZipInputStream
#### Constructors
##### Constructor
**Parameters**
#### Methods
##### getNextEntry()
##### read()
##### readNative()
##### readText()
> ::: info Returns
> - **Type**: `string`
> - **Description**: The content of the current entry as a string.
> :::
##### close()

```ts
close(): void;
```


Closes the underlying native ZipInputStream.

> ::: info Returns
> - **Type**: `void`
> - **Description**: ***
> :::
### ZipOutputStream


Represents an output stream for writing data to a ZIP archive.
Entries must be explicitly created and closed.

#### Constructors

##### Constructor

```ts
new ZipOutputStream(native): ZipOutputStream;
```


**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `native` | `any` | The underlying native ZipOutputStream object. |

#### Methods
##### createZipEntry()
**Parameters**
##### write()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### writeNative()

```ts
writeNative(data): void;
```


Writes the data from a native Java byte array to the current active entry in the stream.

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


Converts the string to bytes and writes it to the current active entry in the stream.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The string content to write. |

> ::: info Returns
> - **Type**: `void`
> :::
##### closeEntry()

```ts
closeEntry(): void;
```


Closes the current active ZIP entry and positions the stream for the next entry.

> ::: info Returns
> - **Type**: `void`
> :::
##### close()

```ts
close(): void;
```


Finalizes the writing of the ZIP file, flushes the stream, and closes the native object.
This must be called after all entries have been written.

> ::: info Returns
> - **Type**: `void`
> - **Description**: ***
> :::
### ZipEntry


Represents an entry (file or directory) within a ZIP archive.
It holds metadata about the archived item.

#### Constructors

##### Constructor

```ts
new ZipEntry(native): ZipEntry;
```


**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `native` | `any` | The underlying native ZipEntry object. |

#### Methods
##### getName()
> ::: info Returns
> - **Type**: `string`
> - **Description**: The name of the entry.
> :::
##### getSize()

```ts
getSize(): number;
```


Gets the uncompressed size of the entry data.

> ::: info Returns
> - **Type**: `number`
> - **Description**: The size in bytes.
> :::
##### getCompressedSize()

```ts
getCompressedSize(): number;
```


Gets the compressed size of the entry data.

> ::: info Returns
> - **Type**: `number`
> - **Description**: The compressed size in bytes.
> :::
##### getTime()

```ts
getTime(): number;
```


Gets the modification time of the entry.

> ::: info Returns
> - **Type**: `number`
> - **Description**: The time as a numerical timestamp.
> :::
##### getCrc()

```ts
getCrc(): number;
```


Gets the CRC-32 checksum of the uncompressed entry data.

> ::: info Returns
> - **Type**: `number`
> - **Description**: The CRC value.
> :::
##### getComment()

```ts
getComment(): string;
```


Gets the optional comment for the entry.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The comment string.
> :::
##### isDirectory()

```ts
isDirectory(): boolean;
```


Checks if the entry represents a directory.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if it is a directory, false otherwise.
> :::
##### isValid()

```ts
isValid(): boolean;
```


Checks if the underlying native ZipEntry object is defined and non-null.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the entry is valid, false otherwise.
> :::