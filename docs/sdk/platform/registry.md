# platform/registry

::: tip Documentation
- source: [platform/registry.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/platform/registry.ts)
:::


## Overview

Provides a set of utilities and data structures for interacting with the platform's
Registry/Repository, which manages files and directories (Artefacts and Collections).


## Classes

### Registry


Registry

#### Description

Static utility class providing high-level access to the RegistryFacade for
retrieving content and metadata by path.

#### Constructors

##### Constructor

```ts
new Registry(): Registry;
```

#### Methods
##### getContent()
**Parameters**
##### getContentNative()
**Parameters**
##### getText()
**Parameters**
> ::: info Returns
> - **Type**: `string`
> - **Description**: The resource content as plain text.
> :::
##### find()

```ts
static find(path, pattern): string[];
```


Searches the registry starting from a given path for resources matching a glob pattern.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The starting path for the search. |
| `pattern` | `string` | The glob pattern to match resource names against (e.g., "*.js"). |

##### getRoot()
### Artefact
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


Gets the full registry path of the artefact.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The registry path.
> :::
##### getParent()

```ts
getParent(): Directory;
```


Gets the parent directory of this artefact.

##### getInformation()
##### exists()
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the artefact exists, false otherwise.
> :::
##### isEmpty()

```ts
isEmpty(): boolean;
```


Checks if the artefact (file) is empty (has zero size).

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the content is empty, false otherwise.
> :::
##### getText()

```ts
getText(): string;
```


Gets the content of the artefact as a text string.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The text content.
> :::
##### getContent()

```ts
getContent(): any[];
```


Gets the content of the artefact as a JavaScript-friendly byte array.

##### getContentNative()
##### isBinary()
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if binary, false if text.
> :::
##### getContentType()

```ts
getContentType(): string;
```


Gets the content type (MIME type) of the artefact.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The content type string. ***
> :::
### Directory


Directory

#### Description

Represents a collection or folder within the Registry.

#### Constructors

##### Constructor

```ts
new Directory(native): Directory;
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


Gets the full registry path of the directory.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The registry path.
> :::
##### getParent()

```ts
getParent(): Directory;
```


Gets the parent directory.

##### getInformation()
##### exists()
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the directory exists, false otherwise.
> :::
##### isEmpty()

```ts
isEmpty(): boolean;
```


Checks if the directory is empty (contains no files or sub-directories).

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if empty, false otherwise.
> :::
##### getDirectoriesNames()

```ts
getDirectoriesNames(): string[];
```


Gets the names of all sub-directories within this directory.

##### getDirectory()
**Parameters**
##### getArtefactsNames()
##### getArtefact()
**Parameters**
### ArtefactInformation
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


Gets the full registry path of the resource.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The registry path.
> :::
##### getPermissions()

```ts
getPermissions(): number;
```


Gets the access permissions for the resource (typically an integer bitmask).

> ::: info Returns
> - **Type**: `number`
> - **Description**: The permissions value.
> :::
##### getSize()

```ts
getSize(): number;
```


Gets the size of the resource content in bytes.

> ::: info Returns
> - **Type**: `number`
> - **Description**: The size in bytes.
> :::
##### getCreatedBy()

```ts
getCreatedBy(): string;
```


Gets the user who created the resource.

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


Gets the user who last modified the resource.

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