# git/client

> [!tip]
> Auto-generated from
> - source: [git/client.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/git/client.ts)
> - version: 1.0.0


## Overview

Describes a file within the workspace, potentially with Git status information.
/
export interface FileDescriptor {
    name: string;
    path: string;
    contentType: string;
    status: string;
}

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Client](#client)
- [Returns](#returns)
- [Interfaces](#interfaces)
  - [FileDescriptor](#filedescriptor)
  - [FolderDescriptor](#folderdescriptor)
  - [ProjectDescriptor](#projectdescriptor)
  - [GitCommitInfo](#gitcommitinfo)
  - [GitBranch](#gitbranch)
  - [GitChangedFile](#gitchangedfile)
  - [GitConnector](#gitconnector)

## Classes

### Client


Static client facade for workspace-level Git operations, abstracting the native GitFacade.

## Returns

[`Client`](#client)

#### Methods

##### initRepository()

> ```ts
> static initRepository( user, email, workspaceName, projectName, repositoryName, commitMessage): void;
> ```


> Initializes a new Git repository for a project, performs an initial commit, and pushes.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `user` | `string` | The username of the committer. |
> | `email` | `string` | The email address of the committer. |
> | `workspaceName` | `string` | The name of the workspace. |
> | `projectName` | `string` | The name of the project. |
> | `repositoryName` | `string` | The name of the repository (where to put the git folder). |
> | `commitMessage` | `string` | The initial commit message. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### commit() > ```ts static commit( user, email, workspaceName, repositoryName, commitMessage, all): void; ``` Performs a commit in the specified repository.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `user` | `string` | The username of the committer. |
> | `email` | `string` | The email address of the committer. |
> | `workspaceName` | `string` | The name of the workspace. |
> | `repositoryName` | `string` | The name of the repository. |
> | `commitMessage` | `string` | The commit message. |
> | `all` | `boolean` | If true, automatically stages modified and deleted files before committing. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getGitRepositories() > ```ts static getGitRepositories(workspaceName): ProjectDescriptor[]; ``` Retrieves a list of all Git repositories (projects) within the specified workspace.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `workspaceName` | `string` | The name of the workspace. |
> 
> ###### Returns
> 
> [`ProjectDescriptor`](#projectdescriptor)[]
> 
> An array of [ProjectDescriptor](#projectdescriptor) objects.
> 
> ##### getHistory()
> 
> > ```ts
> > static getHistory( repositoryName, workspaceName, path): GitCommitInfo[];
> > ```
> 
> 
> > Retrieves the commit history for the specified repository or a specific file path within it.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `repositoryName` | `string` | The name of the repository. |
> | `workspaceName` | `string` | The name of the workspace. |
> | `path` | `string` | The file path for history, or null/empty string for full repository history. |
> 
> ###### Returns
> 
> [`GitCommitInfo`](#gitcommitinfo)[]
> 
> An array of [GitCommitInfo](#gitcommitinfo) objects.
> 
> ##### deleteRepository()
> 
> > ```ts
> > static deleteRepository(workspaceName, repositoryName): void;
> > ```
> 
> 
> > Deletes the specified Git repository.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `workspaceName` | `string` | The name of the workspace. |
> | `repositoryName` | `string` | The name of the repository to delete. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### cloneRepository() > ```ts static cloneRepository( workspaceName, repositoryUri, username, password, branch): GitConnector; ``` Clones a remote repository into the local workspace.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `workspaceName` | `string` | The name of the workspace. |
> | `repositoryUri` | `string` | The URI of the remote repository. |
> | `username` | `string` | The username for authentication. |
> | `password` | `string` | The password for authentication. |
> | `branch` | `string` | The specific branch to checkout after cloning. |
> 
> ###### Returns
> 
> [`GitConnector`](#gitconnector)
> 
> A GitConnector instance for interacting directly with the cloned repository.
> 
> ##### pull()
> 
> > ```ts
> > static pull( workspaceName, repositoryName, username, password): void;
> > ```
> 
> 
> > Pulls changes from the remote repository and attempts to merge them into the current branch.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `workspaceName` | `string` | The name of the workspace. |
> | `repositoryName` | `string` | The name of the repository. |
> | `username` | `string` | The username for authentication. |
> | `password` | `string` | The password for authentication. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### push() > ```ts static push( workspaceName, repositoryName, username, password): void; ``` Pushes the local commits to the remote repository.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `workspaceName` | `string` | The name of the workspace. |
> | `repositoryName` | `string` | The name of the repository. |
> | `username` | `string` | The username for authentication. |
> | `password` | `string` | The password for authentication. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### checkout() > ```ts static checkout( workspaceName, repositoryName, branch): void; ``` Checks out a specific branch, commit, or tag in the repository.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `workspaceName` | `string` | The name of the workspace. |
> | `repositoryName` | `string` | The name of the repository. |
> | `branch` | `string` | The branch or tree-ish object to check out. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### createBranch() > ```ts static createBranch( workspaceName, repositoryName, branch, startingPoint): void; ``` Creates a new branch starting from a specified point (e.g., HEAD, a commit hash, or another branch).
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `workspaceName` | `string` | The name of the workspace. |
> | `repositoryName` | `string` | The name of the repository. |
> | `branch` | `string` | The name of the new branch to create. |
> | `startingPoint` | `string` | The tree-ish object to start the new branch from. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### deleteBranch() > ```ts static deleteBranch( workspaceName, repositoryName, branch): void; ``` Deletes a local branch.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `workspaceName` | `string` | The name of the workspace. |
> | `repositoryName` | `string` | The name of the repository. |
> | `branch` | `string` | The name of the branch to delete. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### renameBranch() > ```ts static renameBranch( workspaceName, repositoryName, oldName, newName): void; ``` Renames a local branch.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `workspaceName` | `string` | The name of the workspace. |
> | `repositoryName` | `string` | The name of the repository. |
> | `oldName` | `string` | The current name of the branch. |
> | `newName` | `string` | The new name for the branch. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### createRemoteBranch() > ```ts static createRemoteBranch( workspaceName, repositoryName, branch, startingPoint, username, password): void; ``` Creates a new remote branch on the Git server.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `workspaceName` | `string` | The name of the workspace. |
> | `repositoryName` | `string` | The name of the repository. |
> | `branch` | `string` | The name of the remote branch to create. |
> | `startingPoint` | `string` | The tree-ish object to start the new remote branch from. |
> | `username` | `string` | The username for authentication. |
> | `password` | `string` | The password for authentication. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### deleteRemoteBranch() > ```ts static deleteRemoteBranch( workspaceName, repositoryName, branch, username, password): void; ``` Deletes a remote branch on the Git server.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `workspaceName` | `string` | The name of the workspace. |
> | `repositoryName` | `string` | The name of the repository. |
> | `branch` | `string` | The name of the remote branch to delete. |
> | `username` | `string` | The username for authentication. |
> | `password` | `string` | The password for authentication. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### hardReset() > ```ts static hardReset(workspaceName, repositoryName): void; ``` Resets the repository, discarding all uncommitted changes in the working directory and index.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `workspaceName` | `string` | The name of the workspace. |
> | `repositoryName` | `string` | The name of the repository. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### rebase() > ```ts static rebase( workspaceName, repositoryName, branch): void; ``` Reapplies commits from the specified branch onto the current branch.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `workspaceName` | `string` | The name of the workspace. |
> | `repositoryName` | `string` | The name of the repository. |
> | `branch` | `string` | The branch to rebase. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### status() > ```ts static status(workspaceName, repositoryName): string; ``` Retrieves the current status of the repository (staged, unstaged, untracked files).
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `workspaceName` | `string` | The name of the workspace. |
> | `repositoryName` | `string` | The name of the repository. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: A string representation of the repository status.
> :::

##### getBranch()

> ```ts
> static getBranch(workspaceName, repositoryName): string;
> ```


> Retrieves the name of the currently active branch.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `workspaceName` | `string` | The name of the workspace. |
> | `repositoryName` | `string` | The name of the repository. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The name of the current branch.
> :::

##### getLocalBranches()

> ```ts
> static getLocalBranches(workspaceName, repositoryName): GitBranch[];
> ```


> Retrieves a list of all local branches in the repository.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `workspaceName` | `string` | The name of the workspace. |
> | `repositoryName` | `string` | The name of the repository. |
> 
> ###### Returns
> 
> [`GitBranch`](#gitbranch)[]
> 
> An array of [GitBranch](#gitbranch) objects representing local branches.
> 
> ##### getRemoteBranches()
> 
> > ```ts
> > static getRemoteBranches(workspaceName, repositoryName): GitBranch[];
> > ```
> 
> 
> > Retrieves a list of all remote branches configured for the repository.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `workspaceName` | `string` | The name of the workspace. |
> | `repositoryName` | `string` | The name of the repository. |
> 
> ###### Returns
> 
> [`GitBranch`](#gitbranch)[]
> 
> An array of [GitBranch](#gitbranch) objects representing remote branches.
> 
> ##### getUnstagedChanges()
> 
> > ```ts
> > static getUnstagedChanges(workspaceName, repositoryName): GitChangedFile[];
> > ```
> 
> 
> > Retrieves a list of all unstaged files (changes not yet added to the index).
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `workspaceName` | `string` | The name of the workspace. |
> | `repositoryName` | `string` | The name of the repository. |
> 
> ###### Returns
> 
> [`GitChangedFile`](#gitchangedfile)[]
> 
> An array of [GitChangedFile](#gitchangedfile) objects.
> 
> ##### getStagedChanges()
> 
> > ```ts
> > static getStagedChanges(workspaceName, repositoryName): GitChangedFile[];
> > ```
> 
> 
> > Retrieves a list of all staged files (changes added to the index, ready for commit).
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `workspaceName` | `string` | The name of the workspace. |
> | `repositoryName` | `string` | The name of the repository. |
> 
> ###### Returns
> 
> [`GitChangedFile`](#gitchangedfile)[]
> 
> An array of [GitChangedFile](#gitchangedfile) objects.
> 
> ##### getFileContent()
> 
> > ```ts
> > static getFileContent( workspaceName, repositoryName, filePath, revStr): string;
> > ```
> 
> 
> > Retrieves the content of a file at a specific revision (commit, branch, or tag).
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `workspaceName` | `string` | The name of the workspace. |
> | `repositoryName` | `string` | The name of the repository. |
> | `filePath` | `string` | The path to the file. |
> | `revStr` | `string` | The revision string (e.g., commit hash or branch name). |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The content of the file as a string.
> :::

## Interfaces

### FileDescriptor


Describes a file within the workspace, potentially with Git status information.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `name` | `string` | src/git/client.ts:7 |
|  `path` | `string` | src/git/client.ts:8 |
|  `contentType` | `string` | src/git/client.ts:9 |
|  `status` | `string` | src/git/client.ts:10 |

***

### FolderDescriptor


Describes a folder within the workspace, potentially with Git status information.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `name` | `string` | src/git/client.ts:17 |
|  `path` | `string` | src/git/client.ts:18 |
|  `status` | `string` | src/git/client.ts:19 |
|  `folders` | [`FolderDescriptor`](#folderdescriptor)[] | src/git/client.ts:20 |
|  `files` | [`FileDescriptor`](#filedescriptor)[] | src/git/client.ts:21 |

***

### ProjectDescriptor


Describes a Git-managed project/repository in the workspace.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `name` | `string` | src/git/client.ts:28 |
|  `path` | `string` | src/git/client.ts:29 |
|  `git` | `boolean` | src/git/client.ts:30 |
|  `gitName` | `string` | src/git/client.ts:31 |
|  `folders` | [`FolderDescriptor`](#folderdescriptor)[] | src/git/client.ts:32 |
|  `files` | [`FileDescriptor`](#filedescriptor)[] | src/git/client.ts:33 |

***

### GitCommitInfo


Describes a single Git commit.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `id` | `string` | src/git/client.ts:40 |
|  `author` | `string` | src/git/client.ts:41 |
|  `emailAddress` | `string` | src/git/client.ts:42 |
|  `dateTime` | `string` | src/git/client.ts:43 |
|  `message` | `string` | src/git/client.ts:44 |

***

### GitBranch


Describes a Git branch (local or remote).

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `name` | `string` | src/git/client.ts:52 |
|  `remote` | `boolean` | src/git/client.ts:53 |
|  `current` | `boolean` | src/git/client.ts:54 |
|  `commitObjectId` | `string` | src/git/client.ts:55 |
|  `commitShortId` | `string` | src/git/client.ts:56 |
|  `commitDate` | `string` | src/git/client.ts:57 |
|  `commitMessage` | `string` | src/git/client.ts:58 |
|  `commitAuthor` | `string` | src/git/client.ts:59 |

***

### GitChangedFile


Describes a file that has been changed (staged or unstaged).

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `path` | `string` | src/git/client.ts:66 |
|  `type` | `number` | src/git/client.ts:67 |

***

### GitConnector


The IGitConnector provides the simplified methods for communicating with a Git SCM server.
This interface is primarily implemented by the object returned from the native Java facade.

#### Methods

##### getOriginUrls()

> ```ts
> getOriginUrls(): object;
> ```


> Gets the origin urls.

> > ::: info Returns
> > - **Type**: `object`
> > - **Description**: An object containing the fetch and push URLs. | Name | Type | Defined in | | ------ | ------ | ------ | | `fetchUrl` | `string` | src/git/client.ts:81 | | `pushUrl` | `string` | src/git/client.ts:81 |
> > :::

> ##### setFetchUrl()

> > ```ts
> > setFetchUrl(fetchUrl): void;
> > ```


> Sets the fetch url.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `fetchUrl` | `string` | The new fetch URL. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws URISyntaxException, GitAPIException
> :::

##### setPushUrl()

> ```ts
> setPushUrl(pushUrl): void;
> ```


> Sets the push url.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `pushUrl` | `string` | The new push URL. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws URISyntaxException, GitAPIException
> :::

##### add()

> ```ts
> add(filePattern): void;
> ```


> Adds file(s) to the staging index.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `filePattern` | `string` | File to add content from. Example: "." includes all files. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws IOException, NoFilepatternException, GitAPIException
> :::

##### addDeleted()

> ```ts
> addDeleted(filePattern): void;
> ```


> Adds deleted file(s) to the staging index.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `filePattern` | `string` | File to add content from. Example: "." includes all files. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws IOException, NoFilepatternException, GitAPIException
> :::

##### remove()

> ```ts
> remove(path): void;
> ```


> Remove from the index.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The path to be removed. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws IOException, NoFilepatternException, GitAPIException
> :::

##### revert()

> ```ts
> revert(path): void;
> ```


> Revert to head revision.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The path to be reverted. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws IOException, NoFilepatternException, GitAPIException
> :::

##### commit()

> ```ts
> commit(
>    message, 
>    name, 
>    email, 
>    all): void;
> ```


> Adds changes to the staging index, then performs a commit.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `message` | `string` | The commit message. |
> | `name` | `string` | The name of the committer. |
> | `email` | `string` | The email of the committer. |
> | `all` | `boolean` | If true, automatically stages modified and deleted files. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws Various Git exceptions
> :::

##### createBranch()

> ```ts
> createBranch(name, startPoint): void;
> ```


> Creates new branch from a particular start point.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The new branch name. |
> | `startPoint` | `string` | Valid tree-ish object (e.g., "master", "HEAD", commit hash). |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws RefAlreadyExistsException, GitAPIException
> :::

##### deleteBranch()

> ```ts
> deleteBranch(name): void;
> ```


> Deletes the branch.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The branch name to delete. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws RefAlreadyExistsException, GitAPIException
> :::

##### renameBranch()

> ```ts
> renameBranch(oldName, newName): void;
> ```


> Renames the branch.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `oldName` | `string` | The old branch name. |
> | `newName` | `string` | The new branch name. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws RefAlreadyExistsException, GitAPIException
> :::

##### createRemoteBranch()

> ```ts
> createRemoteBranch(
>    name, 
>    startPoint, 
>    username, 
>    password): void;
> ```


> Creates new remote branch from a particular start point.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The branch name. |
> | `startPoint` | `string` | Valid tree-ish object. |
> | `username` | `string` | Username for the remote repository. |
> | `password` | `string` | Password for the remote repository. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws RefAlreadyExistsException, GitAPIException
> :::

##### deleteRemoteBranch()

> ```ts
> deleteRemoteBranch(
>    name, 
>    username, 
>    password): void;
> ```


> Deletes the remote branch.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the remote branch to delete. |
> | `username` | `string` | Username for the remote repository. |
> | `password` | `string` | Password for the remote repository. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws RefAlreadyExistsException, GitAPIException
> :::

##### checkout()

> ```ts
> checkout(name): any;
> ```


> Checkout to a valid tree-ish object (e.g., branch name, commit hash).

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The tree-ish object. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The JGit Ref object.
> :::

###### Throws

RefAlreadyExistsException, GitAPIException

##### hardReset()

> ```ts
> hardReset(): void;
> ```


> Hard reset the repository. Resets working directory and staging index to match the Git repository HEAD.

> > ::: info Returns
> > - **Type**: `void`
> > - **Description**: ###### Throws CheckoutConflictException, GitAPIException
> > :::

> ##### pull()

> ###### Call Signature

> > ```ts
> > pull(): void;
> > ```


> Fetches from a remote repository and tries to merge into the current branch (Pull).

> > ::: info Returns
> > - **Type**: `void`
> > - **Description**: ###### Throws Various Git exceptions
> > :::

> ###### Call Signature

> > ```ts
> > pull(username, password): void;
> > ```


> Fetches from a remote repository and tries to merge into the current branch (Pull).

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `username` | `string` | Username for the remote repository. |
> | `password` | `string` | Password for the remote repository. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws Various Git exceptions
> :::

##### push()

> ```ts
> push(username, password): void;
> ```


> Pushes the committed changes to the remote repository.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `username` | `string` | Username for the remote repository. |
> | `password` | `string` | Password for the remote repository. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws InvalidRemoteException, TransportException, GitAPIException
> :::

##### rebase()

> ```ts
> rebase(name): void;
> ```


> Tries to rebase the selected branch on top of the current one.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The branch to rebase. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws NoHeadException, WrongRepositoryStateException, GitAPIException
> :::

##### status()

> ```ts
> status(): any;
> ```


> Get the current status of the Git repository.

> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: The JGit Status object.
> > :::

> ###### Throws

> NoWorkTreeException, GitAPIException

> ##### getBranch()

> > ```ts
> > getBranch(): string;
> > ```


> Get the name of the current branch of the Git repository.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The branch name as a string.
> > :::

> ###### Throws

> IOException

> ##### getLocalBranches()

> > ```ts
> > getLocalBranches(): GitBranch[];
> > ```


> List all the local branches info.

> ###### Returns

> [`GitBranch`](#gitbranch)[]

> A list of local [GitBranch](#gitbranch) objects.

> ###### Throws

> GitConnectorException

> ##### getRemoteBranches()

> > ```ts
> > getRemoteBranches(): GitBranch[];
> > ```


> List all the remote branches info.

> ###### Returns

> [`GitBranch`](#gitbranch)[]

> A list of remote [GitBranch](#gitbranch) objects.

> ###### Throws

> GitConnectorException

> ##### getUnstagedChanges()

> > ```ts
> > getUnstagedChanges(): GitChangedFile[];
> > ```


> Get the list of the unstaged files.

> ###### Returns

> [`GitChangedFile`](#gitchangedfile)[]

> A list of [GitChangedFile](#gitchangedfile) objects.

> ###### Throws

> GitConnectorException

> ##### getStagedChanges()

> > ```ts
> > getStagedChanges(): GitChangedFile[];
> > ```


> Get the list of the staged files.

> ###### Returns

> [`GitChangedFile`](#gitchangedfile)[]

> A list of [GitChangedFile](#gitchangedfile) objects.

> ###### Throws

> GitConnectorException

> ##### getFileContent()

> > ```ts
> > getFileContent(path, revStr): string;
> > ```


> Get file content from the HEAD.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The file path. |
> | `revStr` | `string` | The revision string (e.g., commit hash, branch name). |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The content of the file as a string.
> :::

###### Throws

GitConnectorException

##### getHistory()

> ```ts
> getHistory(path): GitCommitInfo[];
> ```


> Get history of the repository or a specific file.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The file path or null to get the entire repository history. |

###### Returns

[`GitCommitInfo`](#gitcommitinfo)[]

A list of [GitCommitInfo](#gitcommitinfo) objects.

###### Throws

GitConnectorException
