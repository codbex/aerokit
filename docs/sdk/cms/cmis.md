# cms/cmis

## Overview



::: tip Module
- source: [cms/cmis.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/cms/cmis.ts)
- last updated: 
:::

## Classes

### Cmis

#### getSession()

Gets a new CMIS session instance to interact with the repository.

> ```ts
> static getSession(): Session;
> ```
>
>
> ::: info Returns
> - **Type**: `Session`
> - **Description**: A new Session instance.
> :::

#### getAccessDefinitions()

Retrieves access control definitions for a specific path and method.

> ```ts
> static getAccessDefinitions(path: string, method: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The path of the CMIS object. |
> | `method` | `string` | The operation method (e.g., Cmis.METHOD_READ, Cmis.METHOD_WRITE). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: A list of access definitions.
> :::

### Folder

#### getId()

Gets the unique identifier of the folder.

> ```ts
> getId(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The folder ID.
> :::

#### getName()

Gets the name of the folder.

> ```ts
> getName(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The folder name.
> :::

#### createFolder()

Creates a new folder within this folder.

> ```ts
> createFolder(properties: any): Folder;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `properties` | `any` | A map of CMIS properties for the new folder (must include Cmis.NAME). |
>
> ::: info Returns
> - **Type**: `Folder`
> - **Description**: The newly created Folder object.
> :::

#### createDocument()

Creates a new document within this folder.

> ```ts
> createDocument(properties: any, contentStream: ContentStream, versioningState: string): Document;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `properties` | `any` | A map of CMIS properties for the new document (must include Cmis.NAME). |
> | `contentStream` | `ContentStream` | The content stream containing the document's binary data. |
> | `versioningState` | `string` | The versioning state (e.g., Cmis.VERSIONING_STATE_MAJOR). |
>
> ::: info Returns
> - **Type**: `Document`
> - **Description**: The newly created Document object.
> :::

#### getChildren()

Retrieves the children of this folder.

> ```ts
> getChildren(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: A list of generic CmisObject wrappers for the children.
> :::

#### getPath()

Gets the path of the folder.

> ```ts
> getPath(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The folder path.
> :::

#### isRootFolder()

Checks if this folder is the root folder of the repository.

> ```ts
> isRootFolder(): boolean;
> ```
>
>
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if it is the root folder, false otherwise.
> :::

#### getFolderParent()

Gets the parent folder of this folder.

> ```ts
> getFolderParent(): Folder;
> ```
>
>
> ::: info Returns
> - **Type**: `Folder`
> - **Description**: The parent Folder object.
> :::

#### delete()

Deletes this folder (must be empty to succeed).

> ```ts
> delete(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### rename()

Renames this folder.

> ```ts
> rename(newName: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `newName` | `string` | The new name for the folder. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### deleteTree()

Deletes this folder and all its contents recursively.

> ```ts
> deleteTree(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### getType()

Gets the type definition of the folder.

> ```ts
> getType(): TypeDefinition;
> ```
>
>
> ::: info Returns
> - **Type**: `TypeDefinition`
> - **Description**: The folder's TypeDefinition.
> :::

### Document

#### getId()

Gets the unique identifier of the document.

> ```ts
> getId(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The document ID.
> :::

#### getName()

Gets the name of the document.

> ```ts
> getName(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The document name.
> :::

#### getType()

Gets the type definition of the document.

> ```ts
> getType(): TypeDefinition;
> ```
>
>
> ::: info Returns
> - **Type**: `TypeDefinition`
> - **Description**: The document's TypeDefinition.
> :::

#### getPath()

Gets the path of the document.

> ```ts
> getPath(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The document path.
> :::

#### delete()

Deletes this document.

> ```ts
> delete(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### getContentStream()

Gets the binary content stream of the document.

> ```ts
> getContentStream(): ContentStream;
> ```
>
>
> ::: info Returns
> - **Type**: `ContentStream`
> - **Description**: The ContentStream object, or `null` if the document has no content.
> :::

#### getSize()

Gets the size of the document's content stream in bytes.

> ```ts
> getSize(): number;
> ```
>
>
> ::: info Returns
> - **Type**: `number`
> - **Description**: The size in bytes.
> :::

#### rename()

Renames this document.

> ```ts
> rename(newName: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `newName` | `string` | The new name for the document. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

