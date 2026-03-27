# cms/cmis

::: tip Documentation
- source: [cms/cmis.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/cms/cmis.ts)
:::


## Overview

API CMIS
* Note: This module is supported only with the Mozilla Rhino engine
* Provides static access to the CMIS (Content Management Interoperability Services) repository session and utility constants.


## Classes

### Cmis


#### Constructors

##### Constructor

```ts
new Cmis(): Cmis;
```

#### Properties
#### Methods
##### getSession()
> ::: info Returns
> - **Type**: `Session`
> - **Description**: A new Session instance.
> :::
##### getAccessDefinitions()

```ts
static getAccessDefinitions(path, method): AccessDefinition[];
```


Retrieves access control definitions for a specific path and method.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path of the CMIS object. |
| `method` | `string` | The operation method (e.g., [Cmis.METHOD\_READ](#method_read), [Cmis.METHOD\_WRITE](#method_write)). |

### Folder
#### Constructors
##### Constructor
**Parameters**
#### Methods
##### getId()
> ::: info Returns
> - **Type**: `string`
> - **Description**: The folder ID.
> :::
##### getName()

```ts
getName(): string;
```


Gets the name of the folder.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The folder name.
> :::
##### createFolder()

```ts
createFolder(properties): Folder;
```


Creates a new folder within this folder.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `properties` | \{ \[`key`: `string`\]: `any`; \} | A map of CMIS properties for the new folder (must include [Cmis.NAME](#name)). |

###### Throws
##### createDocument()
**Parameters**
###### Throws
##### getChildren()
###### Throws
##### getPath()
> ::: info Returns
> - **Type**: `string`
> - **Description**: The folder path.
> :::
##### isRootFolder()

```ts
isRootFolder(): boolean;
```


Checks if this folder is the root folder of the repository.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if it is the root folder, false otherwise.
> :::
##### getFolderParent()

```ts
getFolderParent(): Folder;
```


Gets the parent folder of this folder.

##### delete()
> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

Error if write access is not allowed.

##### rename()

```ts
rename(newName): void;
```


Renames this folder.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `newName` | `string` | The new name for the folder. |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

Error if write access is not allowed.

##### deleteTree()

```ts
deleteTree(): void;
```


Deletes this folder and all its contents recursively.

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

Error if write access is not allowed.

##### getType()

```ts
getType(): TypeDefinition;
```


Gets the type definition of the folder.

> ::: info Returns
> - **Type**: `TypeDefinition`
> - **Description**: The folder's TypeDefinition. ***
> :::
### Document


Document object
* Represents a CMIS document object, allowing operations like reading content, deleting, and renaming.

#### Constructors

##### Constructor

```ts
new Document(native, path): Document;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `native` | `any` |
| `path` | `string` |

#### Methods
##### getId()
> ::: info Returns
> - **Type**: `string`
> - **Description**: The document ID.
> :::
##### getName()

```ts
getName(): string;
```


Gets the name of the document.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The document name.
> :::
##### getType()

```ts
getType(): TypeDefinition;
```


Gets the type definition of the document.

> ::: info Returns
> - **Type**: `TypeDefinition`
> - **Description**: The document's TypeDefinition.
> :::
##### getPath()

```ts
getPath(): string;
```


Gets the path of the document.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The document path.
> :::
##### delete()

```ts
delete(): void;
```


Deletes this document.

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

Error if write access is not allowed.

##### getContentStream()

```ts
getContentStream(): ContentStream;
```


Gets the binary content stream of the document.

> ::: info Returns
> - **Type**: `ContentStream`
> - **Description**: The ContentStream object, or `null` if the document has no content.
> :::
##### getSize()

```ts
getSize(): number;
```


Gets the size of the document's content stream in bytes.

> ::: info Returns
> - **Type**: `number`
> - **Description**: The size in bytes.
> :::
##### rename()

```ts
rename(newName): void;
```


Renames this document.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `newName` | `string` | The new name for the document. |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

Error if write access is not allowed.
