# platform/repository

> [!tip]
> Auto-generated from
> - source: [platform/repository.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/platform/repository.ts)
> - version: 1.0.0


## Overview

Provides a wrapper for the platform's RepositoryFacade to manage files (Resources)
and folders (Collections), including CRUD operations, movement, and content handling.
/
import { Bytes } from "@aerokit/sdk/io/bytes";

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Repository](#repository)
- [Returns](#returns)
  - [Resource](#resource)
- [Parameters](#parameters)
  - [Collection](#collection)
- [Parameters](#parameters)
  - [EntityInformation](#entityinformation)
- [Parameters](#parameters)

## Classes

### Repository


Repository

#### Description

Static utility class providing high-level methods for interacting with the
repository facade to manage resources and collections by path.

## Returns

[`Repository`](#repository)

#### Methods

##### getResource()

> ```ts
> static getResource(path): Resource;
> ```


> Retrieves a resource (file) object from the repository by its path.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path to the resource. |
> 
> ###### Returns
> 
> [`Resource`](#resource)
> 
> A Resource instance wrapping the native repository object.
> 
> ##### createResource()
> 
> > ```ts
> > static createResource( path, content, contentType): Resource;
> > ```
> 
> 
> > Creates a new resource (file) with content provided as a string.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path where the resource should be created. |
> | `content` | `string` | The string content for the resource. |
> | `contentType` | `string` | The MIME type of the content (e.g., "text/plain"). |
> 
> ###### Returns
> 
> [`Resource`](#resource)
> 
> The newly created Resource instance.
> 
> ##### createResourceNative()
> 
> > ```ts
> > static createResourceNative( path, content, contentType): Resource;
> > ```
> 
> 
> > Creates a new resource (file) with content provided as a native byte array.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path where the resource should be created. |
> | `content` | `any`[] | The native byte array content. |
> | `contentType` | `string` | The MIME type of the content. |
> 
> ###### Returns
> 
> [`Resource`](#resource)
> 
> The newly created Resource instance.
> 
> ##### updateResource()
> 
> > ```ts
> > static updateResource(path, content): Resource;
> > ```
> 
> 
> > Updates the content of an existing resource using a string.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path to the resource to update. |
> | `content` | `string` | The new string content. |
> 
> ###### Returns
> 
> [`Resource`](#resource)
> 
> The updated Resource instance.
> 
> ##### updateResourceNative()
> 
> > ```ts
> > static updateResourceNative(path, content): Resource;
> > ```
> 
> 
> > Updates the content of an existing resource using a native byte array.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path to the resource to update. |
> | `content` | `any`[] | The new native byte array content. |
> 
> ###### Returns
> 
> [`Resource`](#resource)
> 
> The updated Resource instance.
> 
> ##### deleteResource()
> 
> > ```ts
> > static deleteResource(path): void;
> > ```
> 
> 
> > Deletes the resource (file) at the specified path.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path of the resource to delete. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getCollection() > ```ts static getCollection(path): Collection; ``` Retrieves a collection (folder) object from the repository by its path.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path to the collection. |
> 
> ###### Returns
> 
> [`Collection`](#collection)
> 
> A Collection instance wrapping the native repository object.
> 
> ##### createCollection()
> 
> > ```ts
> > static createCollection(path): Collection;
> > ```
> 
> 
> > Creates a new collection (folder) at the specified path.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path where the collection should be created. |
> 
> ###### Returns
> 
> [`Collection`](#collection)
> 
> The newly created Collection instance.
> 
> ##### deleteCollection()
> 
> > ```ts
> > static deleteCollection(path): void;
> > ```
> 
> 
> > Deletes the collection (folder) at the specified path.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path of the collection to delete. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### find() > ```ts static find(path, pattern): string[]; ``` Searches the repository starting from a given path for resources matching a glob pattern.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The starting path for the search. |
> | `pattern` | `string` | The glob pattern to match resource names against (e.g., "*.js"). |
> 
> ###### Returns
> 
> `string`[]
> 
> An array of repository paths (strings) that match the search criteria.
> 
> ***
> 
> ### Resource

Retrieves a resource (file) object from the repository by its path.

> 
> 
> Resource
> 
> #### Description
> 
> Represents a file or resource (non-collection) within the Repository,
> providing instance methods for file operations.
> 
> ## Parameters
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `native` | `any` | The native Java object instance representing the repository resource. |
> 
> ###### Returns
> 
> [`Resource`](#resource)
> 
> #### Methods
> 
> ##### getName()
> 
> > ```ts
> > getName(): string;
> > ```
> 
> 
> > Gets the name of the resource (file name).
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: The name.
> > > :::
> 
> > ##### getPath()
> 
> > > ```ts
> > > getPath(): string;
> > > ```
> 
> 
> > Gets the full repository path of the resource.
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: The repository path.
> > > :::
> 
> > ##### getParent()
> 
> > > ```ts
> > > getParent(): Collection;
> > > ```
> 
> 
> > Gets the parent collection (folder) of this resource.
> 
> > ###### Returns
> 
> > [`Collection`](#collection)
> 
> > The parent Collection instance.
> 
> > ##### getInformation()
> 
> > > ```ts
> > > getInformation(): EntityInformation;
> > > ```
> 
> 
> > Gets detailed metadata about the resource.
> 
> > ###### Returns
> 
> > [`EntityInformation`](#entityinformation)
> 
> > The metadata object.
> 
> > ##### create()
> 
> > > ```ts
> > > create(): void;
> > > ```
> 
> 
> > Creates the resource if it does not already exist.
> 
> > > ::: info Returns
> > > - **Type**: `void`
> > > - **Description**: ##### delete() > ```ts delete(): void; ``` Deletes the resource from the repository.
> > > :::
> 
> > > ::: info Returns
> > > - **Type**: `void`
> > > - **Description**: ##### renameTo() > ```ts renameTo(name): void; ``` Renames the resource within its current collection.
> > > :::
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The new name for the resource. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### moveTo() > ```ts moveTo(path): void; ``` Moves the resource to a new path.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The new absolute path for the resource. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### copyTo() > ```ts copyTo(path): void; ``` Copies the resource to a new path.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The new absolute path for the copied resource. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### exists() > ```ts exists(): boolean; ``` Checks if the resource currently exists in the repository.
> :::

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the resource exists, false otherwise.
> :::

##### isEmpty()

> ```ts
> isEmpty(): boolean;
> ```


> Checks if the resource (file) is empty (has zero size).

> > ::: info Returns
> > - **Type**: `boolean`
> > - **Description**: True if the content is empty, false otherwise.
> > :::

> ##### getText()

> > ```ts
> > getText(): string;
> > ```


> Gets the content of the resource as a text string.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The text content.
> > :::

> ##### getContent()

> > ```ts
> > getContent(): any[];
> > ```


> Gets the content of the resource as a JavaScript-friendly byte array.

> ###### Returns

> `any`[]

> The content bytes.

> ##### getContentNative()

> > ```ts
> > getContentNative(): any[];
> > ```


> Gets the content of the resource as its native Java byte array representation.

> ###### Returns

> `any`[]

> The content bytes.

> ##### setText()

> > ```ts
> > setText(text): void;
> > ```


> Sets the content of the resource using a text string.
> The string is converted to a byte array before saving.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `text` | `string` | The new text content. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setContent() > ```ts setContent(content): void; ``` Sets the content of the resource using a JavaScript byte array. The array is converted to a native byte array before saving.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `content` | `any`[] | The new content bytes. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setContentNative() > ```ts setContentNative(content): void; ``` Sets the content of the resource using a native Java byte array.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `content` | `any`[] | The new native content bytes. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### isBinary() > ```ts isBinary(): boolean; ``` Checks if the resource content is determined to be binary.
> :::

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if binary, false if text.
> :::

##### getContentType()

> ```ts
> getContentType(): string;
> ```


> Gets the content type (MIME type) of the resource.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The content type string. ***
> > :::

> ### Collection

@constructor
@param {any} native The native Java object instance representing the repository resource.
/
	constructor(native: any) {
		this.native = native;
	}



> Collection

> #### Description

> Represents a directory or folder within the Repository, providing
> instance methods for collection and resource management.

> ## Parameters

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `native` | `any` | The native Java object instance representing the repository collection. |

> ###### Returns

> [`Collection`](#collection)

> #### Methods

> ##### getName()

> > ```ts
> > getName(): string;
> > ```


> Gets the name of the collection (folder name).

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The name.
> > :::

> ##### getPath()

> > ```ts
> > getPath(): string;
> > ```


> Gets the full repository path of the collection.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The repository path.
> > :::

> ##### getParent()

> > ```ts
> > getParent(): Collection;
> > ```


> Gets the parent collection (folder) of this collection.

> ###### Returns

> [`Collection`](#collection)

> The parent Collection instance.

> ##### getInformation()

> > ```ts
> > getInformation(): EntityInformation;
> > ```


> Gets detailed metadata about the collection.

> ###### Returns

> [`EntityInformation`](#entityinformation)

> The metadata object.

> ##### create()

> > ```ts
> > create(): void;
> > ```


> Creates the collection if it does not already exist.

> > ::: info Returns
> > - **Type**: `void`
> > - **Description**: ##### delete() > ```ts delete(): void; ``` Deletes the collection from the repository.
> > :::

> > ::: info Returns
> > - **Type**: `void`
> > - **Description**: ##### renameTo() > ```ts renameTo(name): void; ``` Renames the collection within its current parent.
> > :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The new name for the collection. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### moveTo() > ```ts moveTo(path): void; ``` Moves the collection to a new path.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The new absolute path for the collection. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### copyTo() > ```ts copyTo(path): void; ``` Copies the collection to a new path.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The new absolute path for the copied collection. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### exists() > ```ts exists(): boolean; ``` Checks if the collection currently exists in the repository.
> :::

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the collection exists, false otherwise.
> :::

##### isEmpty()

> ```ts
> isEmpty(): boolean;
> ```


> Checks if the collection is empty (contains no files or sub-directories).

> > ::: info Returns
> > - **Type**: `boolean`
> > - **Description**: True if empty, false otherwise.
> > :::

> ##### getCollectionsNames()

> > ```ts
> > getCollectionsNames(): string[];
> > ```


> Gets the names of all sub-collections (folders) within this collection.

> ###### Returns

> `string`[]

> An array of sub-collection names.

> ##### createCollection()

> > ```ts
> > createCollection(name): Collection;
> > ```


> Creates a new sub-collection (folder) within this collection.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the new sub-collection. |
> 
> ###### Returns
> 
> [`Collection`](#collection)
> 
> The newly created Collection instance.
> 
> ##### getCollection()
> 
> > ```ts
> > getCollection(name): Collection;
> > ```
> 
> 
> > Gets a specific sub-collection by name.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the sub-collection. |
> 
> ###### Returns
> 
> [`Collection`](#collection)
> 
> The child Collection instance.
> 
> ##### removeCollection()
> 
> > ```ts
> > removeCollection(name): void;
> > ```
> 
> 
> > Removes a sub-collection by name.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the sub-collection to remove. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getResourcesNames() > ```ts getResourcesNames(): string[]; ``` Gets the names of all resources (files) within this collection.
> :::

###### Returns

`string`[]

An array of resource names.

##### getResource()

> ```ts
> getResource(name): Resource;
> ```


> Gets a specific resource (file) by name.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the resource. |
> 
> ###### Returns
> 
> [`Resource`](#resource)
> 
> The child Resource instance.
> 
> ##### removeResource()
> 
> > ```ts
> > removeResource(name): void;
> > ```
> 
> 
> > Removes a resource (file) by name.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the resource to remove. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### createResource() > ```ts createResource(name, content): Resource; ``` Creates a new resource (file) within this collection.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the new resource. |
> | `content` | `string` | The string content for the resource. |
> 
> ###### Returns
> 
> [`Resource`](#resource)
> 
> The newly created Resource instance.
> 
> ***
> 
> ### EntityInformation

@constructor
@param {any} native The native Java object instance representing the repository collection.
/
	constructor(native: any) {
		this.native = native;
	}

> 
> 
> EntityInformation
> 
> #### Description
> 
> Represents detailed metadata (creation date, size, permissions, etc.) for a
> Resource or Collection.
> 
> ## Parameters
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `native` | `any` | The native Java object instance holding the entity information. |
> 
> ###### Returns
> 
> [`EntityInformation`](#entityinformation)
> 
> #### Methods
> 
> ##### getName()
> 
> > ```ts
> > getName(): string;
> > ```
> 
> 
> Gets the name of the entity (resource or collection).

> ::: info Returns
> - **Type**: `string`
> - **Description**: The name.
> :::

##### getPath()

> ```ts
> getPath(): string;
> ```


Gets the full repository path of the entity.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The repository path.
> :::

##### getPermissions()

> ```ts
> getPermissions(): number;
> ```


Gets the access permissions for the entity (typically an integer bitmask).

> ::: info Returns
> - **Type**: `number`
> - **Description**: The permissions value.
> :::

##### getSize()

> ```ts
> getSize(): number;
> ```


Gets the size of the resource content in bytes (0 for a collection).

> ::: info Returns
> - **Type**: `number`
> - **Description**: The size in bytes.
> :::

##### getCreatedBy()

> ```ts
> getCreatedBy(): string;
> ```


Gets the user who created the entity.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The creator's name.
> :::

##### getCreatedAt()

> ```ts
> getCreatedAt(): Date;
> ```


Gets the creation timestamp.

> ::: info Returns
> - **Type**: `Date`
> - **Description**: The creation date and time.
> :::

##### getModifiedBy()

> ```ts
> getModifiedBy(): string;
> ```


Gets the user who last modified the entity.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The modifier's name.
> :::

##### getModifiedAt()

> ```ts
> getModifiedAt(): Date;
> ```


Gets the last modification timestamp.

> ::: info Returns
> - **Type**: `Date`
> - **Description**: The modification date and time.
> :::
