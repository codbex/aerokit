# platform/repository

::: tip Documentation
- source: [platform/repository.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/platform/repository.ts)
:::


## Overview

Provides a wrapper for the platform's RepositoryFacade to manage files (Resources)
and folders (Collections), including CRUD operations, movement, and content handling.


## Classes

### Repository


Repository

#### Description

Static utility class providing high-level methods for interacting with the
repository facade to manage resources and collections by path.

#### Constructors

##### Constructor

```ts
new Repository(): Repository;
```

#### Methods
##### getResource()
**Parameters**
##### createResource()
**Parameters**
##### createResourceNative()
**Parameters**
##### updateResource()
**Parameters**
##### updateResourceNative()
**Parameters**
##### deleteResource()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### getCollection()

```ts
static getCollection(path): Collection;
```


Retrieves a collection (folder) object from the repository by its path.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The absolute path to the collection. |

##### createCollection()
**Parameters**
##### deleteCollection()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### find()

```ts
static find(path, pattern): string[];
```


Searches the repository starting from a given path for resources matching a glob pattern.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The starting path for the search. |
| `pattern` | `string` | The glob pattern to match resource names against (e.g., "*.js"). |

### Resource
#### Description
#### Constructors
##### Constructor
**Parameters**
#### Methods
##### getName()
> ::: info Returns
> - **Type**: `string`
> - **Description**: The name.
> :::
##### getPath()

```ts
getPath(): string;
```


Gets the full repository path of the resource.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The repository path.
> :::
##### getParent()

```ts
getParent(): Collection;
```


Gets the parent collection (folder) of this resource.

##### getInformation()
##### create()
> ::: info Returns
> - **Type**: `void`
> :::
##### delete()

```ts
delete(): void;
```


Deletes the resource from the repository.

> ::: info Returns
> - **Type**: `void`
> :::
##### renameTo()

```ts
renameTo(name): void;
```


Renames the resource within its current collection.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The new name for the resource. |

> ::: info Returns
> - **Type**: `void`
> :::
##### moveTo()

```ts
moveTo(path): void;
```


Moves the resource to a new path.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The new absolute path for the resource. |

> ::: info Returns
> - **Type**: `void`
> :::
##### copyTo()

```ts
copyTo(path): void;
```


Copies the resource to a new path.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The new absolute path for the copied resource. |

> ::: info Returns
> - **Type**: `void`
> :::
##### exists()

```ts
exists(): boolean;
```


Checks if the resource currently exists in the repository.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the resource exists, false otherwise.
> :::
##### isEmpty()

```ts
isEmpty(): boolean;
```


Checks if the resource (file) is empty (has zero size).

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the content is empty, false otherwise.
> :::
##### getText()

```ts
getText(): string;
```


Gets the content of the resource as a text string.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The text content.
> :::
##### getContent()

```ts
getContent(): any[];
```


Gets the content of the resource as a JavaScript-friendly byte array.

##### getContentNative()
##### setText()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### setContent()

```ts
setContent(content): void;
```


Sets the content of the resource using a JavaScript byte array.
The array is converted to a native byte array before saving.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `any`[] | The new content bytes. |

> ::: info Returns
> - **Type**: `void`
> :::
##### setContentNative()

```ts
setContentNative(content): void;
```


Sets the content of the resource using a native Java byte array.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `any`[] | The new native content bytes. |

> ::: info Returns
> - **Type**: `void`
> :::
##### isBinary()

```ts
isBinary(): boolean;
```


Checks if the resource content is determined to be binary.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if binary, false if text.
> :::
##### getContentType()

```ts
getContentType(): string;
```


Gets the content type (MIME type) of the resource.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The content type string. ***
> :::
### Collection


Collection

#### Description

Represents a directory or folder within the Repository, providing
instance methods for collection and resource management.

#### Constructors

##### Constructor

```ts
new Collection(native): Collection;
```


**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `native` | `any` | The native Java object instance representing the repository collection. |

#### Methods
##### getName()
> ::: info Returns
> - **Type**: `string`
> - **Description**: The name.
> :::
##### getPath()

```ts
getPath(): string;
```


Gets the full repository path of the collection.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The repository path.
> :::
##### getParent()

```ts
getParent(): Collection;
```


Gets the parent collection (folder) of this collection.

##### getInformation()
##### create()
> ::: info Returns
> - **Type**: `void`
> :::
##### delete()

```ts
delete(): void;
```


Deletes the collection from the repository.

> ::: info Returns
> - **Type**: `void`
> :::
##### renameTo()

```ts
renameTo(name): void;
```


Renames the collection within its current parent.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The new name for the collection. |

> ::: info Returns
> - **Type**: `void`
> :::
##### moveTo()

```ts
moveTo(path): void;
```


Moves the collection to a new path.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The new absolute path for the collection. |

> ::: info Returns
> - **Type**: `void`
> :::
##### copyTo()

```ts
copyTo(path): void;
```


Copies the collection to a new path.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The new absolute path for the copied collection. |

> ::: info Returns
> - **Type**: `void`
> :::
##### exists()

```ts
exists(): boolean;
```


Checks if the collection currently exists in the repository.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the collection exists, false otherwise.
> :::
##### isEmpty()

```ts
isEmpty(): boolean;
```


Checks if the collection is empty (contains no files or sub-directories).

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if empty, false otherwise.
> :::
##### getCollectionsNames()

```ts
getCollectionsNames(): string[];
```


Gets the names of all sub-collections (folders) within this collection.

##### createCollection()
**Parameters**
##### getCollection()
**Parameters**
##### removeCollection()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### getResourcesNames()

```ts
getResourcesNames(): string[];
```


Gets the names of all resources (files) within this collection.

##### getResource()
**Parameters**
##### removeResource()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### createResource()

```ts
createResource(name, content): Resource;
```


Creates a new resource (file) within this collection.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the new resource. |
| `content` | `string` | The string content for the resource. |

### EntityInformation
#### Description
#### Constructors
##### Constructor
**Parameters**
#### Methods
##### getName()
> ::: info Returns
> - **Type**: `string`
> - **Description**: The name.
> :::
##### getPath()

```ts
getPath(): string;
```


Gets the full repository path of the entity.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The repository path.
> :::
##### getPermissions()

```ts
getPermissions(): number;
```


Gets the access permissions for the entity (typically an integer bitmask).

> ::: info Returns
> - **Type**: `number`
> - **Description**: The permissions value.
> :::
##### getSize()

```ts
getSize(): number;
```


Gets the size of the resource content in bytes (0 for a collection).

> ::: info Returns
> - **Type**: `number`
> - **Description**: The size in bytes.
> :::
##### getCreatedBy()

```ts
getCreatedBy(): string;
```


Gets the user who created the entity.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The creator's name.
> :::
##### getCreatedAt()

```ts
getCreatedAt(): Date;
```


Gets the creation timestamp.

> ::: info Returns
> - **Type**: `Date`
> - **Description**: The creation date and time.
> :::
##### getModifiedBy()

```ts
getModifiedBy(): string;
```


Gets the user who last modified the entity.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The modifier's name.
> :::
##### getModifiedAt()

```ts
getModifiedAt(): Date;
```


Gets the last modification timestamp.

> ::: info Returns
> - **Type**: `Date`
> - **Description**: The modification date and time.
> :::