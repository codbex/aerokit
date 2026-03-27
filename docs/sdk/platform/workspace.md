# platform/workspace

> [!tip]
> Auto-generated from
> - source: [platform/workspace.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/platform/workspace.ts)
> - version: 1.0.0


## Overview

Provides a wrapper for the platform's WorkspaceFacade to manage Workspaces,
Projects, Folders, and Files.
/
import { Bytes } from "@aerokit/sdk/io/bytes";

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Workspace](#workspace)
- [Parameters](#parameters)
  - [Projects](#projects)
- [Parameters](#parameters)
  - [Project](#project)
- [Parameters](#parameters)
  - [Folders](#folders)
- [Parameters](#parameters)
  - [Files](#files)
- [Parameters](#parameters)
  - [Folder](#folder)
- [Parameters](#parameters)
  - [File](#file)
- [Parameters](#parameters)

## Classes

### Workspace


Workspace

#### Description

Represents a logical container for projects, providing static methods for
high-level workspace management and instance methods for project management within the workspace.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `native` | `any` | The native Java object instance representing the workspace. |

###### Returns

[`Workspace`](#workspace)

#### Methods

##### createWorkspace()

> ```ts
> static createWorkspace(name): Workspace;
> ```


> Creates a new workspace with the given name.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the workspace to create. |
> 
> ###### Returns
> 
> [`Workspace`](#workspace)
> 
> The newly created Workspace instance.
> 
> ##### getWorkspace()
> 
> > ```ts
> > static getWorkspace(name): Workspace;
> > ```
> 
> 
> > Retrieves an existing workspace by name.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the workspace to retrieve. |
> 
> ###### Returns
> 
> [`Workspace`](#workspace)
> 
> The Workspace instance.
> 
> ##### getWorkspacesNames()
> 
> > ```ts
> > static getWorkspacesNames(): string[];
> > ```
> 
> 
> > Retrieves the names of all existing workspaces.
> 
> > ###### Returns
> 
> > `string`[]
> 
> > An array of workspace names.
> 
> > ##### deleteWorkspace()
> 
> > > ```ts
> > > static deleteWorkspace(name): void;
> > > ```
> 
> 
> > Deletes the workspace with the specified name.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the workspace to delete. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getProjects() > ```ts getProjects(): Projects; ``` Gets a collection of all projects within this workspace.
> :::

###### Returns

[`Projects`](#projects)

A Projects collection instance.

##### createProject()

> ```ts
> createProject(name): Project;
> ```


> Creates a new project within this workspace.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the project to create. |
> 
> ###### Returns
> 
> [`Project`](#project)
> 
> The newly created Project instance.
> 
> ##### getProject()
> 
> > ```ts
> > getProject(name): Project;
> > ```
> 
> 
> > Retrieves an existing project by name from this workspace.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the project to retrieve. |
> 
> ###### Returns
> 
> [`Project`](#project)
> 
> The Project instance.
> 
> ##### deleteProject()
> 
> > ```ts
> > deleteProject(name): void;
> > ```
> 
> 
> > Deletes a project from this workspace by name.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the project to delete. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### exists() > ```ts exists(): boolean; ``` Checks if the workspace currently exists.
> :::

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the workspace exists, false otherwise.
> :::

##### existsFolder()

> ```ts
> existsFolder(path): boolean;
> ```


> Checks if a specific folder path exists within the workspace's filesystem structure.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The relative path to the folder. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the folder exists.
> :::

##### existsFile()

> ```ts
> existsFile(path): boolean;
> ```


> Checks if a specific file path exists within the workspace's filesystem structure.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The relative path to the file. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the file exists.
> :::

##### copyProject()

> ```ts
> copyProject(source, target): void;
> ```


> Copies a project from a source name to a target name within the workspace.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `source` | `string` | The name of the project to copy. |
> | `target` | `string` | The name of the new project copy. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### moveProject() > ```ts moveProject(source, target): void; ``` Moves a project from a source name to a target name (renaming it).
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `source` | `string` | The current name of the project. |
> | `target` | `string` | The new name/path of the project. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ***
> :::

### Projects

@constructor
@param {any} native The native Java object representing the list of projects.
/
	constructor(native: any) {
		this.native = native;
	}


Creates a new workspace with the given name.



Projects

#### Description

A collection/list of projects within a workspace.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `native` | `any` | The native Java object representing the list of projects. |

###### Returns

[`Projects`](#projects)

#### Methods

##### size()

> ```ts
> size(): number;
> ```


> Gets the number of projects in the collection.

> > ::: info Returns
> > - **Type**: `number`
> > - **Description**: The size of the collection.
> > :::

> ##### get()

> > ```ts
> > get(index): Project;
> > ```


> Gets a Project instance at the specified index.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `index` | `number` | The index of the project. |
> 
> ###### Returns
> 
> [`Project`](#project)
> 
> The Project instance.
> 
> ***
> 
> ### Project
> 
> 
> Project
> 
> #### Description
> 
> Represents a Project within a workspace. It provides methods for managing
> folders and files within the project.
> 
> ## Parameters
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `native` | `any` | The native Java object instance representing the project. |
> 
> ###### Returns
> 
> [`Project`](#project)
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
> > Gets the name of the project.
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: The project name.
> > > :::
> 
> > ##### getPath()
> 
> > > ```ts
> > > getPath(): string;
> > > ```
> 
> 
> > Gets the path of the project.
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: The project path (relative to the repository/workspace root).
> > > :::
> 
> > ##### createFolder()
> 
> > > ```ts
> > > createFolder(path): Folder;
> > > ```
> 
> 
> > Creates a new folder within the project.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The path of the folder to create (relative to the project root). |
> 
> ###### Returns
> 
> [`Folder`](#folder)
> 
> The newly created Folder instance.
> 
> ##### exists()
> 
> > ```ts
> > exists(): boolean;
> > ```
> 
> 
> > Checks if the project itself exists.
> 
> > > ::: info Returns
> > > - **Type**: `boolean`
> > > - **Description**: True if the project exists.
> > > :::
> 
> > ##### existsFolder()
> 
> > > ```ts
> > > existsFolder(path): boolean;
> > > ```
> 
> 
> > Checks if a specific folder path exists within the project.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The relative path to the folder. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the folder exists.
> :::

##### getFolder()

> ```ts
> getFolder(path): Folder;
> ```


> Retrieves a folder by its path relative to the project root.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The relative path to the folder. |
> 
> ###### Returns
> 
> [`Folder`](#folder)
> 
> The Folder instance.
> 
> ##### getFolders()
> 
> > ```ts
> > getFolders(path): Folders;
> > ```
> 
> 
> > Retrieves a collection of folders at a specific path.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The path containing the folders to retrieve. |
> 
> ###### Returns
> 
> [`Folders`](#folders)
> 
> The Folders collection instance.
> 
> ##### deleteFolder()
> 
> > ```ts
> > deleteFolder(path): void;
> > ```
> 
> 
> > Deletes a folder from the project.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The path of the folder to delete (relative to the project root). |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### createFile() > ```ts createFile(path, input?): File; ``` Creates a new file within the project.
> :::

> **Parameters**

> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `path` | `string` | `undefined` | The path of the file to create (relative to the project root). |
> | `input?` | `any`[] | `[]` | Optional initial content as a byte array. |
> 
> ###### Returns
> 
> [`File`](#file)
> 
> The newly created File instance.
> 
> ##### existsFile()
> 
> > ```ts
> > existsFile(path): boolean;
> > ```
> 
> 
> > Checks if a specific file path exists within the project.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The relative path to the file. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the file exists.
> :::

##### getFile()

> ```ts
> getFile(path): File;
> ```


> Retrieves a file by its path relative to the project root.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The relative path to the file. |
> 
> ###### Returns
> 
> [`File`](#file)
> 
> The File instance.
> 
> ##### getFiles()
> 
> > ```ts
> > getFiles(path): Files;
> > ```
> 
> 
> > Retrieves a collection of files at a specific path.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The path containing the files to retrieve. |
> 
> ###### Returns
> 
> [`Files`](#files)
> 
> The Files collection instance.
> 
> ##### deleteFile()
> 
> > ```ts
> > deleteFile(path): void;
> > ```
> 
> 
> > Deletes a file from the project.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The path of the file to delete (relative to the project root). |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ***
> :::

### Folders

@constructor
@param {any} native The native Java object representing the list of files.
/
	constructor(native: any) {
		this.native = native;
	}


@constructor
@param {any} native The native Java object instance representing the project.
/
	constructor(native: any) {
		this.native = native;
	}



Folders

#### Description

A collection/list of folders.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `native` | `any` | The native Java object representing the list of folders. |

###### Returns

[`Folders`](#folders)

#### Methods

##### size()

> ```ts
> size(): number;
> ```


> Gets the number of folders in the collection.

> > ::: info Returns
> > - **Type**: `number`
> > - **Description**: The size of the collection.
> > :::

> ##### get()

> > ```ts
> > get(index): Folder;
> > ```


> Gets a Folder instance at the specified index.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `index` | `number` | The index of the folder. |
> 
> ###### Returns
> 
> [`Folder`](#folder)
> 
> The Folder instance.
> 
> ***
> 
> ### Files

@constructor
@param {any} native The native Java object instance representing the folder.
/
	constructor(native: any) {
		this.native = native;
	}


@constructor
@param {any} native The native Java object representing the list of folders.
/
	constructor(native: any) {
		this.native = native;
	}

> 
> 
> Files
> 
> #### Description
> 
> A collection/list of files.
> 
> ## Parameters
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `native` | `any` | The native Java object representing the list of files. |
> 
> ###### Returns
> 
> [`Files`](#files)
> 
> #### Methods
> 
> ##### size()
> 
> > ```ts
> > size(): number;
> > ```
> 
> 
> > Gets the number of files in the collection.
> 
> > > ::: info Returns
> > > - **Type**: `number`
> > > - **Description**: The size of the collection.
> > > :::
> 
> > ##### get()
> 
> > > ```ts
> > > get(index): File;
> > > ```
> 
> 
> > Gets a File instance at the specified index.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `index` | `number` | The index of the file. |
> 
> ###### Returns
> 
> [`File`](#file)
> 
> The File instance.
> 
> ***
> 
> ### Folder
> 
> 
> Folder
> 
> #### Description
> 
> Represents a directory or folder within a project, providing methods for
> managing sub-folders and files.
> 
> ## Parameters
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `native` | `any` | The native Java object instance representing the folder. |
> 
> ###### Returns
> 
> [`Folder`](#folder)
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
> > Gets the name of the folder.
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: The folder name.
> > > :::
> 
> > ##### getPath()
> 
> > > ```ts
> > > getPath(): string;
> > > ```
> 
> 
> > Gets the full path of the folder.
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: The folder path.
> > > :::
> 
> > ##### createFolder()
> 
> > > ```ts
> > > createFolder(path): Folder;
> > > ```
> 
> 
> > Creates a new sub-folder within this folder.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The path of the sub-folder to create (relative to this folder). |
> 
> ###### Returns
> 
> [`Folder`](#folder)
> 
> The newly created Folder instance.
> 
> ##### exists()
> 
> > ```ts
> > exists(): boolean;
> > ```
> 
> 
> > Checks if the folder itself exists.
> 
> > > ::: info Returns
> > > - **Type**: `boolean`
> > > - **Description**: True if the folder exists.
> > > :::
> 
> > ##### existsFolder()
> 
> > > ```ts
> > > existsFolder(path): boolean;
> > > ```
> 
> 
> > Checks if a specific sub-folder path exists within this folder.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The relative path to the sub-folder. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the sub-folder exists.
> :::

##### getFolder()

> ```ts
> getFolder(path): Folder;
> ```


> Retrieves a sub-folder by its path relative to this folder.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The relative path to the sub-folder. |
> 
> ###### Returns
> 
> [`Folder`](#folder)
> 
> The Folder instance.
> 
> ##### getFolders()
> 
> > ```ts
> > getFolders(path): Folders;
> > ```
> 
> 
> > Retrieves a collection of folders at a specific path relative to this folder.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The path containing the folders to retrieve. |
> 
> ###### Returns
> 
> [`Folders`](#folders)
> 
> The Folders collection instance.
> 
> ##### deleteFolder()
> 
> > ```ts
> > deleteFolder(path): void;
> > ```
> 
> 
> > Deletes a sub-folder from this folder.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The path of the sub-folder to delete (relative to this folder). |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### createFile() > ```ts createFile(path, input?): File; ``` Creates a new file within this folder.
> :::

> **Parameters**

> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `path` | `string` | `undefined` | The path of the file to create (relative to this folder). |
> | `input?` | `any`[] | `[]` | Optional initial content as a byte array. |
> 
> ###### Returns
> 
> [`File`](#file)
> 
> The newly created File instance.
> 
> ##### existsFile()
> 
> > ```ts
> > existsFile(path): boolean;
> > ```
> 
> 
> > Checks if a specific file path exists within this folder.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The relative path to the file. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the file exists.
> :::

##### getFile()

> ```ts
> getFile(path): File;
> ```


> Retrieves a file by its path relative to this folder.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The relative path to the file. |
> 
> ###### Returns
> 
> [`File`](#file)
> 
> The File instance.
> 
> ##### getFiles()
> 
> > ```ts
> > getFiles(path): Files;
> > ```
> 
> 
> > Retrieves a collection of files at a specific path relative to this folder.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The path containing the files to retrieve. |
> 
> ###### Returns
> 
> [`Files`](#files)
> 
> The Files collection instance.
> 
> ##### deleteFile()
> 
> > ```ts
> > deleteFile(path): void;
> > ```
> 
> 
> > Deletes a file from this folder.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The path of the file to delete (relative to this folder). |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ***
> :::

### File


File

#### Description

Represents a file (resource) within the workspace, providing methods for
content access and manipulation.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `native` | `any` | The native Java object instance representing the file. |

###### Returns

[`File`](#file)

#### Methods

##### getName()

> ```ts
> getName(): string;
> ```


> Gets the name of the file.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The file name.
> > :::

> ##### getPath()

> > ```ts
> > getPath(): string;
> > ```


> Gets the full path of the file.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The file path.
> > :::

> ##### getContentType()

> > ```ts
> > getContentType(): string;
> > ```


> Gets the content type (MIME type) of the file.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The content type string.
> > :::

> ##### isBinary()

> > ```ts
> > isBinary(): boolean;
> > ```


> Checks if the file content is determined to be binary.

> > ::: info Returns
> > - **Type**: `boolean`
> > - **Description**: True if binary, false if text.
> > :::

> ##### getContent()

> > ```ts
> > getContent(): any[];
> > ```


> Gets the content of the file as a JavaScript-friendly byte array.

> ###### Returns

> `any`[]

> The content bytes.

> ##### getText()

> > ```ts
> > getText(): string;
> > ```


> Gets the content of the file as a text string.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The text content.
> > :::

> ##### setContent()

> > ```ts
> > setContent(input): void;
> > ```


> Sets the content of the file using a byte array.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `any`[] | The new content bytes. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setText() > ```ts setText(input): void; ``` Sets the content of the file using a text string. The string is converted to a byte array before saving.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The new text content. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### exists() > ```ts exists(): boolean; ``` Checks if the file exists.
> :::

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the file exists.
> :::
