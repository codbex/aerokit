# platform/workspace

::: tip Documentation
- source: [platform/workspace.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/platform/workspace.ts)
:::


## Overview

Provides a wrapper for the platform's WorkspaceFacade to manage Workspaces,
Projects, Folders, and Files.


## Classes

### Workspace


Workspace

#### Description

Represents a logical container for projects, providing static methods for
high-level workspace management and instance methods for project management within the workspace.

#### Constructors

##### Constructor

```ts
new Workspace(native): Workspace;
```


**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `native` | `any` | The native Java object instance representing the workspace. |

#### Methods
##### createWorkspace()
**Parameters**
##### getWorkspace()
**Parameters**
##### getWorkspacesNames()
##### deleteWorkspace()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### getProjects()

```ts
getProjects(): Projects;
```


Gets a collection of all projects within this workspace.

##### createProject()
**Parameters**
##### getProject()
**Parameters**
##### deleteProject()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### exists()

```ts
exists(): boolean;
```


Checks if the workspace currently exists.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the workspace exists, false otherwise.
> :::
##### existsFolder()

```ts
existsFolder(path): boolean;
```


Checks if a specific folder path exists within the workspace's filesystem structure.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The relative path to the folder. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the folder exists.
> :::
##### existsFile()

```ts
existsFile(path): boolean;
```


Checks if a specific file path exists within the workspace's filesystem structure.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The relative path to the file. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the file exists.
> :::
##### copyProject()

```ts
copyProject(source, target): void;
```


Copies a project from a source name to a target name within the workspace.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `string` | The name of the project to copy. |
| `target` | `string` | The name of the new project copy. |

> ::: info Returns
> - **Type**: `void`
> :::
##### moveProject()

```ts
moveProject(source, target): void;
```


Moves a project from a source name to a target name (renaming it).

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `string` | The current name of the project. |
| `target` | `string` | The new name/path of the project. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ***
> :::
### Projects


Projects

#### Description

A collection/list of projects within a workspace.

#### Constructors

##### Constructor

```ts
new Projects(native): Projects;
```


**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `native` | `any` | The native Java object representing the list of projects. |

#### Methods
##### size()
> ::: info Returns
> - **Type**: `number`
> - **Description**: The size of the collection.
> :::
##### get()

```ts
get(index): Project;
```


Gets a Project instance at the specified index.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `index` | `number` | The index of the project. |

### Project
#### Description
#### Constructors
##### Constructor
**Parameters**
#### Methods
##### getName()
> ::: info Returns
> - **Type**: `string`
> - **Description**: The project name.
> :::
##### getPath()

```ts
getPath(): string;
```


Gets the path of the project.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The project path (relative to the repository/workspace root).
> :::
##### createFolder()

```ts
createFolder(path): Folder;
```


Creates a new folder within the project.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path of the folder to create (relative to the project root). |

##### exists()
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the project exists.
> :::
##### existsFolder()

```ts
existsFolder(path): boolean;
```


Checks if a specific folder path exists within the project.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The relative path to the folder. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the folder exists.
> :::
##### getFolder()

```ts
getFolder(path): Folder;
```


Retrieves a folder by its path relative to the project root.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The relative path to the folder. |

##### getFolders()
**Parameters**
##### deleteFolder()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### createFile()

```ts
createFile(path, input?): File;
```


Creates a new file within the project.

**Parameters**

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `path` | `string` | `undefined` | The path of the file to create (relative to the project root). |
| `input?` | `any`[] | `[]` | Optional initial content as a byte array. |

##### existsFile()
**Parameters**
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the file exists.
> :::
##### getFile()

```ts
getFile(path): File;
```


Retrieves a file by its path relative to the project root.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The relative path to the file. |

##### getFiles()
**Parameters**
##### deleteFile()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> - **Description**: ***
> :::
### Folders


Folders

#### Description

A collection/list of folders.

#### Constructors

##### Constructor

```ts
new Folders(native): Folders;
```


**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `native` | `any` | The native Java object representing the list of folders. |

#### Methods
##### size()
> ::: info Returns
> - **Type**: `number`
> - **Description**: The size of the collection.
> :::
##### get()

```ts
get(index): Folder;
```


Gets a Folder instance at the specified index.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `index` | `number` | The index of the folder. |

### Files
#### Description
#### Constructors
##### Constructor
**Parameters**
#### Methods
##### size()
> ::: info Returns
> - **Type**: `number`
> - **Description**: The size of the collection.
> :::
##### get()

```ts
get(index): File;
```


Gets a File instance at the specified index.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `index` | `number` | The index of the file. |

### Folder
#### Description
#### Constructors
##### Constructor
**Parameters**
#### Methods
##### getName()
> ::: info Returns
> - **Type**: `string`
> - **Description**: The folder name.
> :::
##### getPath()

```ts
getPath(): string;
```


Gets the full path of the folder.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The folder path.
> :::
##### createFolder()

```ts
createFolder(path): Folder;
```


Creates a new sub-folder within this folder.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path of the sub-folder to create (relative to this folder). |

##### exists()
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the folder exists.
> :::
##### existsFolder()

```ts
existsFolder(path): boolean;
```


Checks if a specific sub-folder path exists within this folder.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The relative path to the sub-folder. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the sub-folder exists.
> :::
##### getFolder()

```ts
getFolder(path): Folder;
```


Retrieves a sub-folder by its path relative to this folder.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The relative path to the sub-folder. |

##### getFolders()
**Parameters**
##### deleteFolder()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### createFile()

```ts
createFile(path, input?): File;
```


Creates a new file within this folder.

**Parameters**

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `path` | `string` | `undefined` | The path of the file to create (relative to this folder). |
| `input?` | `any`[] | `[]` | Optional initial content as a byte array. |

##### existsFile()
**Parameters**
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the file exists.
> :::
##### getFile()

```ts
getFile(path): File;
```


Retrieves a file by its path relative to this folder.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The relative path to the file. |

##### getFiles()
**Parameters**
##### deleteFile()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> - **Description**: ***
> :::
### File


File

#### Description

Represents a file (resource) within the workspace, providing methods for
content access and manipulation.

#### Constructors

##### Constructor

```ts
new File(native): File;
```


**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `native` | `any` | The native Java object instance representing the file. |

#### Methods
##### getName()
> ::: info Returns
> - **Type**: `string`
> - **Description**: The file name.
> :::
##### getPath()

```ts
getPath(): string;
```


Gets the full path of the file.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The file path.
> :::
##### getContentType()

```ts
getContentType(): string;
```


Gets the content type (MIME type) of the file.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The content type string.
> :::
##### isBinary()

```ts
isBinary(): boolean;
```


Checks if the file content is determined to be binary.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if binary, false if text.
> :::
##### getContent()

```ts
getContent(): any[];
```


Gets the content of the file as a JavaScript-friendly byte array.

##### getText()
> ::: info Returns
> - **Type**: `string`
> - **Description**: The text content.
> :::
##### setContent()

```ts
setContent(input): void;
```


Sets the content of the file using a byte array.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `any`[] | The new content bytes. |

> ::: info Returns
> - **Type**: `void`
> :::
##### setText()

```ts
setText(input): void;
```


Sets the content of the file using a text string.
The string is converted to a byte array before saving.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The new text content. |

> ::: info Returns
> - **Type**: `void`
> :::
##### exists()

```ts
exists(): boolean;
```


Checks if the file exists.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the file exists.
> :::