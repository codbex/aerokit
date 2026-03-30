# platform/repository

## Overview

::: tip Module
- source: [platform/repository.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/platform/repository.ts)
- last updated: 
:::



## Classes

### Repository

#### getResource()

Retrieves a resource (file) object from the repository by its path.

> ```ts
> static getResource(path: string): Resource;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path to the resource. |
>
> ::: info Returns
> - **Type**: `Resource`
> - **Description**: A Resource instance wrapping the native repository object.
> :::

#### createResource()

Creates a new resource (file) with content provided as a string.

> ```ts
> static createResource(path: string, content: string, contentType: string): Resource;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path where the resource should be created. |
> | `content` | `string` | The string content for the resource. |
> | `contentType` | `string` | The MIME type of the content (e.g., "text/plain"). |
>
> ::: info Returns
> - **Type**: `Resource`
> - **Description**: The newly created Resource instance.
> :::

#### createResourceNative()

Creates a new resource (file) with content provided as a native byte array.

> ```ts
> static createResourceNative(path: string, content: any, contentType: string): Resource;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path where the resource should be created. |
> | `content` | `any` | The native byte array content. |
> | `contentType` | `string` | The MIME type of the content. |
>
> ::: info Returns
> - **Type**: `Resource`
> - **Description**: The newly created Resource instance.
> :::

#### updateResource()

Updates the content of an existing resource using a string.

> ```ts
> static updateResource(path: string, content: string): Resource;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path to the resource to update. |
> | `content` | `string` | The new string content. |
>
> ::: info Returns
> - **Type**: `Resource`
> - **Description**: The updated Resource instance.
> :::

#### updateResourceNative()

Updates the content of an existing resource using a native byte array.

> ```ts
> static updateResourceNative(path: string, content: any): Resource;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path to the resource to update. |
> | `content` | `any` | The new native byte array content. |
>
> ::: info Returns
> - **Type**: `Resource`
> - **Description**: The updated Resource instance.
> :::

#### deleteResource()

Deletes the resource (file) at the specified path.

> ```ts
> static deleteResource(path: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path of the resource to delete. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### getCollection()

Retrieves a collection (folder) object from the repository by its path.

> ```ts
> static getCollection(path: string): Collection;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path to the collection. |
>
> ::: info Returns
> - **Type**: `Collection`
> - **Description**: A Collection instance wrapping the native repository object.
> :::

#### createCollection()

Creates a new collection (folder) at the specified path.

> ```ts
> static createCollection(path: string): Collection;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path where the collection should be created. |
>
> ::: info Returns
> - **Type**: `Collection`
> - **Description**: The newly created Collection instance.
> :::

#### deleteCollection()

Deletes the collection (folder) at the specified path.

> ```ts
> static deleteCollection(path: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path of the collection to delete. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### find()

Searches the repository starting from a given path for resources matching a glob pattern.

> ```ts
> static find(path: string, pattern: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The starting path for the search. |
> | `pattern` | `string` | The glob pattern to match resource names against (e.g., "*.js"). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of repository paths (strings) that match the search criteria.
> :::

### Resource

#### getName()

Gets the name of the resource (file name).

> ```ts
> getName(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The name.
> :::

#### getPath()

Gets the full repository path of the resource.

> ```ts
> getPath(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The repository path.
> :::

#### getParent()

Gets the parent collection (folder) of this resource.

> ```ts
> getParent(): Collection;
> ```
>
>
> ::: info Returns
> - **Type**: `Collection`
> - **Description**: The parent Collection instance.
> :::

#### getInformation()

Gets detailed metadata about the resource.

> ```ts
> getInformation(): EntityInformation;
> ```
>
>
> ::: info Returns
> - **Type**: `EntityInformation`
> - **Description**: The metadata object.
> :::

#### create()

Creates the resource if it does not already exist.

> ```ts
> create(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### delete()

Deletes the resource from the repository.

> ```ts
> delete(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### renameTo()

Renames the resource within its current collection.

> ```ts
> renameTo(name: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The new name for the resource. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### moveTo()

Moves the resource to a new path.

> ```ts
> moveTo(path: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The new absolute path for the resource. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### copyTo()

Copies the resource to a new path.

> ```ts
> copyTo(path: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The new absolute path for the copied resource. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### exists()

Checks if the resource currently exists in the repository.

> ```ts
> exists(): boolean;
> ```
>
>
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the resource exists, false otherwise.
> :::

#### isEmpty()

Checks if the resource (file) is empty (has zero size).

> ```ts
> isEmpty(): boolean;
> ```
>
>
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the content is empty, false otherwise.
> :::

#### getText()

Gets the content of the resource as a text string.

> ```ts
> getText(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The text content.
> :::

#### getContent()

Gets the content of the resource as a JavaScript-friendly byte array.

> ```ts
> getContent(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: The content bytes.
> :::

#### getContentNative()

Gets the content of the resource as its native Java byte array representation.

> ```ts
> getContentNative(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: The content bytes.
> :::

#### setText()

Sets the content of the resource using a text string.
The string is converted to a byte array before saving.

> ```ts
> setText(text: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `text` | `string` | The new text content. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### setContent()

Sets the content of the resource using a JavaScript byte array.
The array is converted to a native byte array before saving.

> ```ts
> setContent(content: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `content` | `any` | The new content bytes. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### setContentNative()

Sets the content of the resource using a native Java byte array.

> ```ts
> setContentNative(content: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `content` | `any` | The new native content bytes. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### isBinary()

Checks if the resource content is determined to be binary.

> ```ts
> isBinary(): boolean;
> ```
>
>
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if binary, false if text.
> :::

#### getContentType()

Gets the content type (MIME type) of the resource.

> ```ts
> getContentType(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The content type string.
> :::

### Collection

#### getName()

Gets the name of the collection (folder name).

> ```ts
> getName(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The name.
> :::

#### getPath()

Gets the full repository path of the collection.

> ```ts
> getPath(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The repository path.
> :::

#### getParent()

Gets the parent collection (folder) of this collection.

> ```ts
> getParent(): Collection;
> ```
>
>
> ::: info Returns
> - **Type**: `Collection`
> - **Description**: The parent Collection instance.
> :::

#### getInformation()

Gets detailed metadata about the collection.

> ```ts
> getInformation(): EntityInformation;
> ```
>
>
> ::: info Returns
> - **Type**: `EntityInformation`
> - **Description**: The metadata object.
> :::

#### create()

Creates the collection if it does not already exist.

> ```ts
> create(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### delete()

Deletes the collection from the repository.

> ```ts
> delete(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### renameTo()

Renames the collection within its current parent.

> ```ts
> renameTo(name: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The new name for the collection. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### moveTo()

Moves the collection to a new path.

> ```ts
> moveTo(path: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The new absolute path for the collection. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### copyTo()

Copies the collection to a new path.

> ```ts
> copyTo(path: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The new absolute path for the copied collection. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### exists()

Checks if the collection currently exists in the repository.

> ```ts
> exists(): boolean;
> ```
>
>
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the collection exists, false otherwise.
> :::

#### isEmpty()

Checks if the collection is empty (contains no files or sub-directories).

> ```ts
> isEmpty(): boolean;
> ```
>
>
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if empty, false otherwise.
> :::

#### getCollectionsNames()

Gets the names of all sub-collections (folders) within this collection.

> ```ts
> getCollectionsNames(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of sub-collection names.
> :::

#### createCollection()

Creates a new sub-collection (folder) within this collection.

> ```ts
> createCollection(name: string): Collection;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the new sub-collection. |
>
> ::: info Returns
> - **Type**: `Collection`
> - **Description**: The newly created Collection instance.
> :::

#### getCollection()

Gets a specific sub-collection by name.

> ```ts
> getCollection(name: string): Collection;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the sub-collection. |
>
> ::: info Returns
> - **Type**: `Collection`
> - **Description**: The child Collection instance.
> :::

#### removeCollection()

Removes a sub-collection by name.

> ```ts
> removeCollection(name: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the sub-collection to remove. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### getResourcesNames()

Gets the names of all resources (files) within this collection.

> ```ts
> getResourcesNames(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of resource names.
> :::

#### getResource()

Gets a specific resource (file) by name.

> ```ts
> getResource(name: string): Resource;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the resource. |
>
> ::: info Returns
> - **Type**: `Resource`
> - **Description**: The child Resource instance.
> :::

#### removeResource()

Removes a resource (file) by name.

> ```ts
> removeResource(name: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the resource to remove. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### createResource()

Creates a new resource (file) within this collection.

> ```ts
> createResource(name: string, content: string): Resource;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the new resource. |
> | `content` | `string` | The string content for the resource. |
>
> ::: info Returns
> - **Type**: `Resource`
> - **Description**: The newly created Resource instance.
> :::

### EntityInformation

#### getName()

Gets the name of the entity (resource or collection).

> ```ts
> getName(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The name.
> :::

#### getPath()

Gets the full repository path of the entity.

> ```ts
> getPath(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The repository path.
> :::

#### getPermissions()

Gets the access permissions for the entity (typically an integer bitmask).

> ```ts
> getPermissions(): number;
> ```
>
>
> ::: info Returns
> - **Type**: `number`
> - **Description**: The permissions value.
> :::

#### getSize()

Gets the size of the resource content in bytes (0 for a collection).

> ```ts
> getSize(): number;
> ```
>
>
> ::: info Returns
> - **Type**: `number`
> - **Description**: The size in bytes.
> :::

#### getCreatedBy()

Gets the user who created the entity.

> ```ts
> getCreatedBy(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The creator's name.
> :::

#### getCreatedAt()

Gets the creation timestamp.

> ```ts
> getCreatedAt(): Date;
> ```
>
>
> ::: info Returns
> - **Type**: `Date`
> - **Description**: The creation date and time.
> :::

#### getModifiedBy()

Gets the user who last modified the entity.

> ```ts
> getModifiedBy(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The modifier's name.
> :::

#### getModifiedAt()

Gets the last modification timestamp.

> ```ts
> getModifiedAt(): Date;
> ```
>
>
> ::: info Returns
> - **Type**: `Date`
> - **Description**: The modification date and time.
> :::

