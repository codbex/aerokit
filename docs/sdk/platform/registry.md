# platform/registry

> [!tip]
> Auto-generated from
> - source: [platform/registry.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/platform/registry.ts)
> - version: 1.0.0


## Overview

Provides a set of utilities and data structures for interacting with the platform's
Registry/Repository, which manages files and directories (Artefacts and Collections).
/
import { Bytes } from "@aerokit/sdk/io/bytes";
import { Repository } from "@aerokit/sdk/platform/repository";
const RegistryFacade = Java.type("org.eclipse.dirigible.components.api.platform.RegistryFacade");

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Registry](#registry)
- [Returns](#returns)
  - [Artefact](#artefact)
- [Parameters](#parameters)
  - [Directory](#directory)
- [Parameters](#parameters)
  - [ArtefactInformation](#artefactinformation)
- [Parameters](#parameters)

## Classes

### Registry


Registry

#### Description

Static utility class providing high-level access to the RegistryFacade for
retrieving content and metadata by path.

## Returns

[`Registry`](#registry)

#### Methods

##### getContent()

> ```ts
> static getContent(path): any[];
> ```


> Retrieves the content of a registry resource at the given path, converting it into a
> JavaScript-friendly byte array format.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path to the resource (e.g., "/registry/public/myFile.txt"). |

> ::: info Returns
> - **Type**: `any`
> - **Description**: [] The resource content as a JavaScript byte array.
> :::

##### getContentNative()

> ```ts
> static getContentNative(path): any[];
> ```


> Retrieves the content of a registry resource at the given path in its native Java byte array format.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path to the resource. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: [] The resource content as a native Java byte array.
> :::

##### getText()

> ```ts
> static getText(path): string;
> ```


> Retrieves the content of a registry resource at the given path as a string.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The absolute path to the resource. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The resource content as plain text.
> :::

##### find()

> ```ts
> static find(path, pattern): string[];
> ```


> Searches the registry starting from a given path for resources matching a glob pattern.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The starting path for the search. |
> | `pattern` | `string` | The glob pattern to match resource names against (e.g., "*.js"). |

> ::: info Returns
> - **Type**: `string`
> - **Description**: [] An array of registry paths (strings) that match the search criteria.
> :::

##### getRoot()

> ```ts
> static getRoot(): Directory;
> ```


> Gets the root directory object for the public registry space.

> ###### Returns

> [`Directory`](#directory)

> A Directory instance representing the root public collection.

> ***

> ### Artefact

Retrieves the content of a registry resource at the given path, converting it into a
JavaScript-friendly byte array format.



> Artefact

> #### Description

> Represents a file or resource (non-collection) within the Registry.

> ## Parameters

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `native` | `any` | The native Java object instance representing the repository resource. |

> ###### Returns

> [`Artefact`](#artefact)

> #### Methods

> ##### getName()

> > ```ts
> > getName(): string;
> > ```


> Gets the name of the artefact (file name).

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The name.
> > :::

> ##### getPath()

> > ```ts
> > getPath(): string;
> > ```


> Gets the full registry path of the artefact.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The registry path.
> > :::

> ##### getParent()

> > ```ts
> > getParent(): Directory;
> > ```


> Gets the parent directory of this artefact.

> ###### Returns

> [`Directory`](#directory)

> The parent Directory instance.

> ##### getInformation()

> > ```ts
> > getInformation(): ArtefactInformation;
> > ```


> Gets detailed metadata about the artefact.

> ###### Returns

> [`ArtefactInformation`](#artefactinformation)

> The metadata object.

> ##### exists()

> > ```ts
> > exists(): boolean;
> > ```


> Checks if the artefact currently exists in the registry.

> > ::: info Returns
> > - **Type**: `boolean`
> > - **Description**: True if the artefact exists, false otherwise.
> > :::

> ##### isEmpty()

> > ```ts
> > isEmpty(): boolean;
> > ```


> Checks if the artefact (file) is empty (has zero size).

> > ::: info Returns
> > - **Type**: `boolean`
> > - **Description**: True if the content is empty, false otherwise.
> > :::

> ##### getText()

> > ```ts
> > getText(): string;
> > ```


> Gets the content of the artefact as a text string.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The text content.
> > :::

> ##### getContent()

> > ```ts
> > getContent(): any[];
> > ```


> Gets the content of the artefact as a JavaScript-friendly byte array.

> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: [] The content bytes.
> > :::

> ##### getContentNative()

> > ```ts
> > getContentNative(): any[];
> > ```


> Gets the content of the artefact as its native Java byte array representation.

> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: [] The content bytes.
> > :::

> ##### isBinary()

> > ```ts
> > isBinary(): boolean;
> > ```


> Checks if the artefact content is determined to be binary.

> > ::: info Returns
> > - **Type**: `boolean`
> > - **Description**: True if binary, false if text.
> > :::

> ##### getContentType()

> > ```ts
> > getContentType(): string;
> > ```


> Gets the content type (MIME type) of the artefact.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The content type string. ***
> > :::

> ### Directory

@constructor
@param {any} native The native Java object instance representing the repository resource.
/
	constructor(native: any) {
		this.native = native;
	}



> Directory

> #### Description

> Represents a collection or folder within the Registry.

> ## Parameters

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `native` | `any` | The native Java object instance representing the repository collection. |

> ###### Returns

> [`Directory`](#directory)

> #### Methods

> ##### getName()

> > ```ts
> > getName(): string;
> > ```


> Gets the name of the directory (folder name).

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The name.
> > :::

> ##### getPath()

> > ```ts
> > getPath(): string;
> > ```


> Gets the full registry path of the directory.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The registry path.
> > :::

> ##### getParent()

> > ```ts
> > getParent(): Directory;
> > ```


> Gets the parent directory.

> ###### Returns

> [`Directory`](#directory)

> The parent Directory instance.

> ##### getInformation()

> > ```ts
> > getInformation(): ArtefactInformation;
> > ```


> Gets detailed metadata about the directory.

> ###### Returns

> [`ArtefactInformation`](#artefactinformation)

> The metadata object.

> ##### exists()

> > ```ts
> > exists(): boolean;
> > ```


> Checks if the directory currently exists in the registry.

> > ::: info Returns
> > - **Type**: `boolean`
> > - **Description**: True if the directory exists, false otherwise.
> > :::

> ##### isEmpty()

> > ```ts
> > isEmpty(): boolean;
> > ```


> Checks if the directory is empty (contains no files or sub-directories).

> > ::: info Returns
> > - **Type**: `boolean`
> > - **Description**: True if empty, false otherwise.
> > :::

> ##### getDirectoriesNames()

> > ```ts
> > getDirectoriesNames(): string[];
> > ```


> Gets the names of all sub-directories within this directory.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: [] An array of sub-directory names.
> > :::

> ##### getDirectory()

> > ```ts
> > getDirectory(name): Directory;
> > ```


> Gets a specific sub-directory by name.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the sub-directory. |
> 
> ###### Returns
> 
> [`Directory`](#directory)
> 
> The child Directory instance.
> 
> ##### getArtefactsNames()
> 
> > ```ts
> > getArtefactsNames(): string[];
> > ```
> 
> 
> > Gets the names of all files (artefacts) within this directory.
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: [] An array of artefact names.
> > > :::
> 
> > ##### getArtefact()
> 
> > > ```ts
> > > getArtefact(name): Artefact;
> > > ```
> 
> 
> > Gets a specific file (artefact) by name.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the artefact. |
> 
> ###### Returns
> 
> [`Artefact`](#artefact)
> 
> The child Artefact instance.
> 
> ***
> 
> ### ArtefactInformation

@constructor
@param {any} native The native Java object instance representing the repository collection.
/
	constructor(native: any) {
		this.native = native;
	}

> 
> 
> ArtefactInformation
> 
> #### Description
> 
> Represents detailed metadata (creation date, size, permissions, etc.) for a
> Directory or Artefact.
> 
> ## Parameters
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `native` | `any` | The native Java object instance holding the artefact information. |
> 
> ###### Returns
> 
> [`ArtefactInformation`](#artefactinformation)
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
> Gets the name of the resource.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The name.
> :::

##### getPath()

> ```ts
> getPath(): string;
> ```


Gets the full registry path of the resource.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The registry path.
> :::

##### getPermissions()

> ```ts
> getPermissions(): number;
> ```


Gets the access permissions for the resource (typically an integer bitmask).

> ::: info Returns
> - **Type**: `number`
> - **Description**: The permissions value.
> :::

##### getSize()

> ```ts
> getSize(): number;
> ```


Gets the size of the resource content in bytes.

> ::: info Returns
> - **Type**: `number`
> - **Description**: The size in bytes.
> :::

##### getCreatedBy()

> ```ts
> getCreatedBy(): string;
> ```


Gets the user who created the resource.

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


Gets the user who last modified the resource.

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
