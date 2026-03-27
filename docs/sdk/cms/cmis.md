# cms/cmis

> [!tip]
> Auto-generated from
> - source: [cms/cmis.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/cms/cmis.ts)
> - version: 1.0.0


## Overview

API CMIS
* Note: This module is supported only with the Mozilla Rhino engine
* Provides static access to the CMIS (Content Management Interoperability Services) repository session and utility constants.
/

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Cmis](#cmis)
- [Returns](#returns)
  - [Folder](#folder)
- [Parameters](#parameters)
  - [Document](#document)
- [Parameters](#parameters)

## Classes

### Cmis


## Returns

[`Cmis`](#cmis)

#### Properties

| Property | Modifier | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
|  `METHOD_READ` | `readonly` | `"READ"` | `"READ"` | CMIS method constant for read operations. | src/cms/cmis.ts:18 |
|  `METHOD_WRITE` | `readonly` | `"WRITE"` | `"WRITE"` | CMIS method constant for write operations. | src/cms/cmis.ts:22 |
|  `NAME` | `readonly` | `"cmis:name"` | `"cmis:name"` | CMIS property: Object name. | src/cms/cmis.ts:26 |
|  `OBJECT_ID` | `readonly` | `"cmis:objectId"` | `"cmis:objectId"` | CMIS property: Unique object identifier. | src/cms/cmis.ts:28 |
|  `OBJECT_TYPE_ID` | `readonly` | `"cmis:objectTypeId"` | `"cmis:objectTypeId"` | CMIS property: Object type identifier. | src/cms/cmis.ts:30 |
|  `BASE_TYPE_ID` | `readonly` | `"cmis:baseTypeId"` | `"cmis:baseTypeId"` | CMIS property: Base object type identifier. | src/cms/cmis.ts:32 |
|  `CREATED_BY` | `readonly` | `"cmis:createdBy"` | `"cmis:createdBy"` | CMIS property: User who created the object. | src/cms/cmis.ts:34 |
|  `CREATION_DATE` | `readonly` | `"cmis:creationDate"` | `"cmis:creationDate"` | CMIS property: Timestamp of object creation. | src/cms/cmis.ts:36 |
|  `LAST_MODIFIED_BY` | `readonly` | `"cmis:lastModifiedBy"` | `"cmis:lastModifiedBy"` | CMIS property: User who last modified the object. | src/cms/cmis.ts:38 |
|  `LAST_MODIFICATION_DATE` | `readonly` | `"cmis:lastModificationDate"` | `"cmis:lastModificationDate"` | CMIS property: Timestamp of last modification. | src/cms/cmis.ts:40 |
|  `CHANGE_TOKEN` | `readonly` | `"cmis:changeToken"` | `"cmis:changeToken"` | CMIS property: Change token for object change tracking. | src/cms/cmis.ts:42 |
|  `IS_IMMUTABLE` | `readonly` | `"cmis:isImmutable"` | `"cmis:isImmutable"` | CMIS property: Indicates if the document is immutable. | src/cms/cmis.ts:46 |
|  `IS_LATEST_VERSION` | `readonly` | `"cmis:isLatestVersion"` | `"cmis:isLatestVersion"` | CMIS property: Indicates if the document is the latest version in the version series. | src/cms/cmis.ts:48 |
|  `IS_MAJOR_VERSION` | `readonly` | `"cmis:isMajorVersion"` | `"cmis:isMajorVersion"` | CMIS property: Indicates if the document is a major version. | src/cms/cmis.ts:50 |
|  `IS_LATEST_MAJOR_VERSION` | `readonly` | `"cmis:isLatestMajorVersion"` | `"cmis:isLatestMajorVersion"` | CMIS property: Indicates if the document is the latest major version. | src/cms/cmis.ts:52 |
|  `VERSION_LABEL` | `readonly` | `"cmis:versionLabel"` | `"cmis:versionLabel"` | CMIS property: Label of the document version. | src/cms/cmis.ts:54 |
|  `VERSION_SERIES_ID` | `readonly` | `"cmis:versionSeriesId"` | `"cmis:versionSeriesId"` | CMIS property: ID of the version series. | src/cms/cmis.ts:56 |
|  `IS_VERSION_SERIES_CHECKED_OUT` | `readonly` | `"cmis:isVersionSeriesCheckedOut"` | `"cmis:isVersionSeriesCheckedOut"` | CMIS property: Indicates if the version series is checked out. | src/cms/cmis.ts:58 |
|  `VERSION_SERIES_CHECKED_OUT_BY` | `readonly` | `"cmis:versionSeriesCheckedOutBy"` | `"cmis:versionSeriesCheckedOutBy"` | CMIS property: User who checked out the version series. | src/cms/cmis.ts:60 |
|  `VERSION_SERIES_CHECKED_OUT_ID` | `readonly` | `"cmis:versionSeriesCheckedOutId"` | `"cmis:versionSeriesCheckedOutId"` | CMIS property: ID of the checked-out document object. | src/cms/cmis.ts:62 |
|  `CHECKIN_COMMENT` | `readonly` | `"cmis:checkinComment"` | `"cmis:checkinComment"` | CMIS property: Comment associated with the check-in operation. | src/cms/cmis.ts:64 |
|  `CONTENT_STREAM_LENGTH` | `readonly` | `"cmis:contentStreamLength"` | `"cmis:contentStreamLength"` | CMIS property: Length of the content stream in bytes. | src/cms/cmis.ts:66 |
|  `CONTENT_STREAM_MIME_TYPE` | `readonly` | `"cmis:contentStreamMimeType"` | `"cmis:contentStreamMimeType"` | CMIS property: MIME type of the content stream. | src/cms/cmis.ts:68 |
|  `CONTENT_STREAM_FILE_NAME` | `readonly` | `"cmis:contentStreamFileName"` | `"cmis:contentStreamFileName"` | CMIS property: Original file name of the content stream. | src/cms/cmis.ts:70 |
|  `CONTENT_STREAM_ID` | `readonly` | `"cmis:contentStreamId"` | `"cmis:contentStreamId"` | CMIS property: ID of the content stream. | src/cms/cmis.ts:72 |
|  `PARENT_ID` | `readonly` | `"cmis:parentId"` | `"cmis:parentId"` | CMIS property: Object ID of the parent folder. | src/cms/cmis.ts:76 |
|  `ALLOWED_CHILD_OBJECT_TYPE_IDS` | `readonly` | `"cmis:allowedChildObjectTypeIds"` | `"cmis:allowedChildObjectTypeIds"` | CMIS property: List of allowed object type IDs for children. | src/cms/cmis.ts:78 |
|  `PATH` | `readonly` | `"cmis:path"` | `"cmis:path"` | CMIS property: Path of the folder in the repository. | src/cms/cmis.ts:80 |
|  `SOURCE_ID` | `readonly` | `"cmis:sourceId"` | `"cmis:sourceId"` | CMIS property: Object ID of the relationship source. | src/cms/cmis.ts:84 |
|  `TARGET_ID` | `readonly` | `"cmis:targetId"` | `"cmis:targetId"` | CMIS property: Object ID of the relationship target. | src/cms/cmis.ts:86 |
|  `POLICY_TEXT` | `readonly` | `"cmis:policyText"` | `"cmis:policyText"` | CMIS property: Text content of the policy. | src/cms/cmis.ts:90 |
|  `VERSIONING_STATE_NONE` | `readonly` | `"none"` | `"none"` | CMIS Versioning State: No versioning. | src/cms/cmis.ts:94 |
|  `VERSIONING_STATE_MAJOR` | `readonly` | `"major"` | `"major"` | CMIS Versioning State: Create a new major version. | src/cms/cmis.ts:96 |
|  `VERSIONING_STATE_MINOR` | `readonly` | `"minor"` | `"minor"` | CMIS Versioning State: Create a new minor version. | src/cms/cmis.ts:98 |
|  `VERSIONING_STATE_CHECKEDOUT` | `readonly` | `"checkedout"` | `"checkedout"` | CMIS Versioning State: Document is checked out. | src/cms/cmis.ts:100 |
|  `OBJECT_TYPE_DOCUMENT` | `readonly` | `"cmis:document"` | `"cmis:document"` | CMIS Object Type ID: Document. | src/cms/cmis.ts:104 |
|  `OBJECT_TYPE_FOLDER` | `readonly` | `"cmis:folder"` | `"cmis:folder"` | CMIS Object Type ID: Folder. | src/cms/cmis.ts:106 |
|  `OBJECT_TYPE_RELATIONSHIP` | `readonly` | `"cmis:relationship"` | `"cmis:relationship"` | CMIS Object Type ID: Relationship. | src/cms/cmis.ts:108 |
|  `OBJECT_TYPE_POLICY` | `readonly` | `"cmis:policy"` | `"cmis:policy"` | CMIS Object Type ID: Policy. | src/cms/cmis.ts:110 |
|  `OBJECT_TYPE_ITEM` | `readonly` | `"cmis:item"` | `"cmis:item"` | CMIS Object Type ID: Item. | src/cms/cmis.ts:112 |
|  `OBJECT_TYPE_SECONDARY` | `readonly` | `"cmis:secondary"` | `"cmis:secondary"` | CMIS Object Type ID: Secondary. | src/cms/cmis.ts:114 |

#### Methods

##### getSession()

> ```ts
> static getSession(): Session;
> ```


> Gets a new CMIS session instance to interact with the repository.

> > ::: info Returns
> > - **Type**: `Session`
> > - **Description**: A new Session instance.
> > :::

> ##### getAccessDefinitions()

> > ```ts
> > static getAccessDefinitions(path, method): AccessDefinition[];
> > ```


> Retrieves access control definitions for a specific path and method.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The path of the CMIS object. |
> | `method` | `string` | The operation method (e.g., [Cmis.METHOD\_READ](#method_read), [Cmis.METHOD\_WRITE](#method_write)). |
> 
> ###### Returns
> 
> `AccessDefinition`[]
> 
> A list of access definitions.
> 
> ***
> 
> ### Folder

Gets the unique identifier of the repository.
@returns The repository ID.
/
	public getId(): string {
		return this.native.getId();
	}

> 
> 
> Folder object
> * Represents a CMIS folder object, allowing operations like creating children, deleting, and renaming.
> 
> ## Parameters
> 
> | Parameter | Type |
> | ------ | ------ |
> | `native` | `any` |
> | `path` | `any` |
> 
> ###### Returns
> 
> [`Folder`](#folder)
> 
> #### Methods
> 
> ##### getId()
> 
> > ```ts
> > getId(): string;
> > ```
> 
> 
> > Gets the unique identifier of the folder.
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: The folder ID.
> > > :::
> 
> > ##### getName()
> 
> > > ```ts
> > > getName(): string;
> > > ```
> 
> 
> > Gets the name of the folder.
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: The folder name.
> > > :::
> 
> > ##### createFolder()
> 
> > > ```ts
> > > createFolder(properties): Folder;
> > > ```
> 
> 
> > Creates a new folder within this folder.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `properties` | \{ \[`key`: `string`\]: `any`; \} | A map of CMIS properties for the new folder (must include [Cmis.NAME](#name)). |
> 
> ###### Returns
> 
> [`Folder`](#folder)
> 
> The newly created [Folder](#folder) object.
> 
> ###### Throws
> 
> Error if write access is not allowed.
> 
> ##### createDocument()
> 
> > ```ts
> > createDocument(
> >    properties, 
> >    contentStream, 
> >    versioningState): Document;
> > ```
> 
> 
> > Creates a new document within this folder.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `properties` | \{ \[`key`: `string`\]: `any`; \} | A map of CMIS properties for the new document (must include [Cmis.NAME](#name)). |
> | `contentStream` | `ContentStream` | The content stream containing the document's binary data. |
> | `versioningState` | `string` | The versioning state (e.g., [Cmis.VERSIONING\_STATE\_MAJOR](#versioning_state_major)). |
> 
> ###### Returns
> 
> [`Document`](#document)
> 
> The newly created [Document](#document) object.
> 
> ###### Throws
> 
> Error if write access is not allowed.
> 
> ##### getChildren()
> 
> > ```ts
> > getChildren(): CmisObject[];
> > ```
> 
> 
> > Retrieves the children of this folder.
> 
> > ###### Returns
> 
> > `CmisObject`[]
> 
> > A list of generic CmisObject wrappers for the children.
> 
> > ###### Throws
> 
> > Error if read access is not allowed.
> 
> > ##### getPath()
> 
> > > ```ts
> > > getPath(): string;
> > > ```
> 
> 
> > Gets the path of the folder.
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: The folder path.
> > > :::
> 
> > ##### isRootFolder()
> 
> > > ```ts
> > > isRootFolder(): boolean;
> > > ```
> 
> 
> > Checks if this folder is the root folder of the repository.
> 
> > > ::: info Returns
> > > - **Type**: `boolean`
> > > - **Description**: True if it is the root folder, false otherwise.
> > > :::
> 
> > ##### getFolderParent()
> 
> > > ```ts
> > > getFolderParent(): Folder;
> > > ```
> 
> 
> > Gets the parent folder of this folder.
> 
> > ###### Returns
> 
> > [`Folder`](#folder)
> 
> > The parent [Folder](#folder) object.
> 
> > ##### delete()
> 
> > > ```ts
> > > delete(): void;
> > > ```
> 
> 
> > Deletes this folder (must be empty to succeed).
> 
> > > ::: info Returns
> > > - **Type**: `void`
> > > - **Description**: ###### Throws Error if write access is not allowed.
> > > :::
> 
> > ##### rename()
> 
> > > ```ts
> > > rename(newName): void;
> > > ```
> 
> 
> > Renames this folder.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `newName` | `string` | The new name for the folder. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws Error if write access is not allowed.
> :::

##### deleteTree()

> ```ts
> deleteTree(): void;
> ```


> Deletes this folder and all its contents recursively.

> > ::: info Returns
> > - **Type**: `void`
> > - **Description**: ###### Throws Error if write access is not allowed.
> > :::

> ##### getType()

> > ```ts
> > getType(): TypeDefinition;
> > ```


> Gets the type definition of the folder.

> > ::: info Returns
> > - **Type**: `TypeDefinition`
> > - **Description**: The folder's TypeDefinition. ***
> > :::

> ### Document

Gets the Java-backed input stream for reading the content.
@returns An {@link streams.InputStream} wrapper.
/
	public getStream(): streams.InputStream {
		const native = this.native.getStream();
		return new streams.InputStream(native);
	}



> Document object
> * Represents a CMIS document object, allowing operations like reading content, deleting, and renaming.

> ## Parameters

> | Parameter | Type |
> | ------ | ------ |
> | `native` | `any` |
> | `path` | `string` |

> ###### Returns

> [`Document`](#document)

> #### Methods

> ##### getId()

> > ```ts
> > getId(): string;
> > ```


> Gets the unique identifier of the document.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The document ID.
> > :::

> ##### getName()

> > ```ts
> > getName(): string;
> > ```


> Gets the name of the document.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The document name.
> > :::

> ##### getType()

> > ```ts
> > getType(): TypeDefinition;
> > ```


> Gets the type definition of the document.

> > ::: info Returns
> > - **Type**: `TypeDefinition`
> > - **Description**: The document's TypeDefinition.
> > :::

> ##### getPath()

> > ```ts
> > getPath(): string;
> > ```


> Gets the path of the document.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The document path.
> > :::

> ##### delete()

> > ```ts
> > delete(): void;
> > ```


> Deletes this document.

> > ::: info Returns
> > - **Type**: `void`
> > - **Description**: ###### Throws Error if write access is not allowed.
> > :::

> ##### getContentStream()

> > ```ts
> > getContentStream(): ContentStream;
> > ```


> Gets the binary content stream of the document.

> > ::: info Returns
> > - **Type**: `ContentStream`
> > - **Description**: The ContentStream object, or `null` if the document has no content.
> > :::

> ##### getSize()

> > ```ts
> > getSize(): number;
> > ```


> Gets the size of the document's content stream in bytes.

> > ::: info Returns
> > - **Type**: `number`
> > - **Description**: The size in bytes.
> > :::

> ##### rename()

> > ```ts
> > rename(newName): void;
> > ```


> Renames this document.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `newName` | `string` | The new name for the document. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws Error if write access is not allowed.
> :::
