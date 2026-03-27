# io/files

::: tip Documentation
- source: [io/files.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/io/files.ts)
:::


## Overview

Provides a comprehensive static façade for file and directory operations,
abstracting the underlying Java file system implementation.


## Classes

### Files


The Files class provides static methods for high-level file system manipulation,
including checking properties, reading/writing content, and navigating the structure.

#### Constructors

##### Constructor

```ts
new Files(): Files;
```

#### Properties
#### Methods
##### exists()
**Parameters**
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the path exists, false otherwise.
> :::
##### isExecutable()

```ts
static isExecutable(path): boolean;
```


Checks if the file or directory at the given path is executable.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to check. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if executable, false otherwise.
> :::
##### isReadable()

```ts
static isReadable(path): boolean;
```


Checks if the file or directory at the given path is readable.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to check. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if readable, false otherwise.
> :::
##### isWritable()

```ts
static isWritable(path): boolean;
```


Checks if the file or directory at the given path is writable.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to check. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if writable, false otherwise.
> :::
##### isHidden()

```ts
static isHidden(path): boolean;
```


Checks if the file or directory at the given path is hidden.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to check. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if hidden, false otherwise.
> :::
##### isDirectory()

```ts
static isDirectory(path): boolean;
```


Checks if the path refers to a directory.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to check. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if it's a directory, false otherwise.
> :::
##### isFile()

```ts
static isFile(path): boolean;
```


Checks if the path refers to a regular file.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to check. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if it's a file, false otherwise.
> :::
##### isSameFile()

```ts
static isSameFile(path1, path2): boolean;
```


Checks if two paths refer to the same underlying file system object.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path1` | `string` | The first path. |
| `path2` | `string` | The second path. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if they reference the same file/directory, false otherwise.
> :::
##### getCanonicalPath()

```ts
static getCanonicalPath(path): string;
```


Returns the canonical (absolute and normalized) path for the given path.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to normalize. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The canonical path string.
> :::
##### getName()

```ts
static getName(path): string;
```


Gets the simple name of the file or directory at the given path (the last element).

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The name.
> :::
##### getParentPath()

```ts
static getParentPath(path): string;
```


Gets the path of the parent directory.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The parent path string, or null/empty if none exists.
> :::
##### readBytes()

```ts
static readBytes(path): any[];
```


Reads all bytes from a file into a JavaScript byte array (an array of numbers).

Note: This method automatically converts the native Java byte array to a
JavaScript array using `Bytes.toJavaScriptBytes()`.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to the file. |

##### readBytesNative()
**Parameters**
##### readText()
**Parameters**
> ::: info Returns
> - **Type**: `string`
> - **Description**: The content of the file as a string.
> :::
##### writeBytes()

```ts
static writeBytes(path, data): void;
```


Writes the content of a JavaScript byte array to a file. Overwrites existing content.

Note: This method automatically converts the JavaScript array to a native
Java byte array using `Bytes.toJavaBytes()` before writing.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to the file. |
| `data` | `any`[] | The JavaScript array of byte values to write. |

> ::: info Returns
> - **Type**: `void`
> :::
##### writeBytesNative()

```ts
static writeBytesNative(path, data): void;
```


Writes the content of a native Java byte array to a file. Overwrites existing content.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to the file. |
| `data` | `any`[] | The native Java byte array to write. |

> ::: info Returns
> - **Type**: `void`
> :::
##### writeText()

```ts
static writeText(path, text): void;
```


Writes a string of text to a file using the platform's default character encoding. Overwrites existing content.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to the file. |
| `text` | `string` | The string content to write. |

> ::: info Returns
> - **Type**: `void`
> :::
##### getLastModified()

```ts
static getLastModified(path): Date;
```


Gets the last modified time of the file or directory.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to the file or directory. |

> ::: info Returns
> - **Type**: `Date`
> - **Description**: A JavaScript Date object representing the last modified time.
> :::
##### setLastModified()

```ts
static setLastModified(path, time): void;
```


Sets the last modified time of the file or directory.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to the file or directory. |
| `time` | `Date` | The new Date object to set as the last modified time. |

> ::: info Returns
> - **Type**: `void`
> :::
##### getOwner()

```ts
static getOwner(path): string;
```


Gets the owner of the file or directory.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to the file or directory. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The owner name as a string.
> :::
##### setOwner()

```ts
static setOwner(path, owner): void;
```


Sets the owner of the file or directory.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to the file or directory. |
| `owner` | `string` | The new owner name. |

> ::: info Returns
> - **Type**: `void`
> :::
##### getPermissions()

```ts
static getPermissions(path): string;
```


Gets the permissions string for the file or directory (implementation dependent).

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to the file or directory. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The permissions string.
> :::
##### setPermissions()

```ts
static setPermissions(path, permissions): void;
```


Sets the permissions for the file or directory (implementation dependent).

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to the file or directory. |
| `permissions` | `string` | The permissions string. |

> ::: info Returns
> - **Type**: `void`
> :::
##### size()

```ts
static size(path): number;
```


Gets the size of the file in bytes.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to the file. |

> ::: info Returns
> - **Type**: `number`
> - **Description**: The size in bytes.
> :::
##### createFile()

```ts
static createFile(path): void;
```


Creates a new, empty file at the specified path.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path where the file should be created. |

> ::: info Returns
> - **Type**: `void`
> :::
##### createDirectory()

```ts
static createDirectory(path): void;
```


Creates a new directory at the specified path.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path where the directory should be created. |

> ::: info Returns
> - **Type**: `void`
> :::
##### copy()

```ts
static copy(source, target): void;
```


Copies a file or directory from a source path to a target path.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `string` | The source path. |
| `target` | `string` | The target path. |

> ::: info Returns
> - **Type**: `void`
> :::
##### move()

```ts
static move(source, target): void;
```


Moves or renames a file or directory.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `string` | The source path. |
| `target` | `string` | The target path. |

> ::: info Returns
> - **Type**: `void`
> :::
##### deleteFile()

```ts
static deleteFile(path): void;
```


Deletes the file at the specified path.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to the file to delete. |

> ::: info Returns
> - **Type**: `void`
> :::
##### deleteDirectory()

```ts
static deleteDirectory(path, forced?): void;
```


Deletes the directory at the specified path.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to the directory to delete. |
| `forced?` | `boolean` | If true, recursively deletes the directory and its contents. |

> ::: info Returns
> - **Type**: `void`
> :::
##### createTempFile()

```ts
static createTempFile(prefix, suffix): string;
```


Creates a new temporary file with the given prefix and suffix.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prefix` | `string` | The prefix string to be used in generating the file's name. |
| `suffix` | `string` | The suffix string to be used in generating the file's name. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The path of the created temporary file.
> :::
##### createTempDirectory()

```ts
static createTempDirectory(prefix): string;
```


Creates a new temporary directory with the given prefix.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prefix` | `string` | The prefix string to be used in generating the directory's name. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The path of the created temporary directory.
> :::
##### createInputStream()

```ts
static createInputStream(path): InputStream;
```


Creates and returns a new InputStream for reading data from the file.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to the file. |

> ::: info Returns
> - **Type**: `InputStream`
> - **Description**: A new InputStream instance.
> :::
##### createOutputStream()

```ts
static createOutputStream(path): OutputStream;
```


Creates and returns a new OutputStream for writing data to the file.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to the file. |

> ::: info Returns
> - **Type**: `OutputStream`
> - **Description**: A new OutputStream instance.
> :::
##### traverse()

```ts
static traverse(path): FolderObject[];
```


Traverses a directory and returns a structured [FolderObject](#folderobject) hierarchy.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to the folder to traverse. |

##### list()
**Parameters**
##### find()
**Parameters**
## Interfaces
### FileObject
#### Extended by
#### Properties
### FolderObject
#### Extends
#### Properties