# bpm/tasks

::: tip Documentation
- source: [bpm/tasks.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/bpm/tasks.ts)
:::


## Overview

API Tasks


## Enumerations

### DelegationState


#### Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
|  `PENDING` | `0` | The owner delegated the task and wants to review the result after the assignee has resolved the task. When the assignee completes the task, the task is marked as #RESOLVED and sent back to the owner. When that happens, the owner is set as the assignee so that the owner gets this task back in the ToDo. | src/bpm/tasks.ts:1331 |
|  `RESOLVED` | `1` | The assignee has resolved the task, the assignee was set to the owner again and the owner now finds this task back in the ToDo list for review. The owner now is able to complete the task. | src/bpm/tasks.ts:1336 |

***

### NullHandlingOnOrder


#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
|  `NULLS_FIRST` | `0` | src/bpm/tasks.ts:1791 |
|  `NULLS_LAST` | `1` | src/bpm/tasks.ts:1791 |

## Classes

### Tasks


#### Constructors

##### Constructor

```ts
new Tasks(): Tasks;
```

#### Methods
##### list()
##### getVariable()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> :::
##### getVariables()

```ts
static getVariables(taskId): Map;
```


Returns all variables. This will include all variables of parent scopes too.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |

##### setVariable()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### setVariables()

```ts
static setVariables(taskId, variables): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |
| `variables` | `Map`\ |

> ::: info Returns
> - **Type**: `void`
> :::
##### complete()

```ts
static complete(taskId, variables?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |
| `variables` | \{ \[`key`: `string`\]: `any`; \} |

> ::: info Returns
> - **Type**: `void`
> :::
##### getTaskService()

```ts
static getTaskService(): TaskService;
```


### TaskService
#### Constructors
##### Constructor
**Parameters**
#### Methods
##### newTask()
**Parameters**
##### createTaskBuilder()
##### saveTask()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### bulkSaveTasks()

```ts
bulkSaveTasks(taskList): void;
```


Saves the given tasks to the persistent data store. If the tasks are already present in the persistent store, it is updated. After a new task has been saved, the task instance passed into this
method is updated with the id of the newly created task.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskList` | [`Task`](#task)[] | the list of task instances, cannot be null. |

> ::: info Returns
> - **Type**: `void`
> :::
##### deleteTask()

```ts
deleteTask(taskId, cascade?): void;
```


Deletes the given task, not deleting historic information that is related to this task.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | The id of the task that will be deleted, cannot be null. If no task exists with the given taskId, the operation is ignored. |
| `cascade?` | `boolean` | If cascade is true, also the historic information related to this task is deleted. |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when the task with given id does not exist.

###### Throws

FlowableException
            when an error occurs while deleting the task or in case the task is part of a running process.

##### deleteTasks()

```ts
deleteTasks(taskIds, cascade?): void;
```


Deletes all tasks of the given collection, not deleting historic information that is related to these tasks.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskIds` | `string`[] | The id's of the tasks that will be deleted, cannot be null. All id's in the list that don't have an existing task will be ignored. |
| `cascade?` | `boolean` | If cascade is true, also the historic information related to this task is deleted. |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when one of the task does not exist.

###### Throws

FlowableException
            when an error occurs while deleting the tasks or in case one of the tasks is part of a running process.

##### deleteTaskWithReason()

```ts
deleteTaskWithReason(taskId, deleteReason): void;
```


Deletes the given task, not deleting historic information that is related to this task..

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | The id of the task that will be deleted, cannot be null. If no task exists with the given taskId, the operation is ignored. |
| `deleteReason` | `string` | reason the task is deleted. Is recorded in history, if enabled. |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when the task with given id does not exist.

###### Throws

FlowableException
            when an error occurs while deleting the task or in case the task is part of a running process

##### deleteTasksWithReason()

```ts
deleteTasksWithReason(taskIds, deleteReason): void;
```


Deletes all tasks of the given collection, not deleting historic information that is related to these tasks.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskIds` | `string`[] | The id's of the tasks that will be deleted, cannot be null. All id's in the list that don't have an existing task will be ignored. |
| `deleteReason` | `string` | reason the task is deleted. Is recorded in history, if enabled. |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when one of the tasks does not exist.

###### Throws

FlowableException
            when an error occurs while deleting the tasks or in case one of the tasks is part of a running process.

##### claim()

```ts
claim(taskId, userId): void;
```


Claim responsibility for a task: the given user is made assignee for the task. The difference with #setAssignee(String, String) is that here a check is done if the task already has a
user assigned to it. No check is done whether the user is known by the identity component.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | task to claim, cannot be null. |
| `userId` | `string` | user that claims the task. When userId is null the task is unclaimed, assigned to no one. |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when the task doesn't exist.

###### Throws

org.flowable.common.engine.api.FlowableTaskAlreadyClaimedException
            when the task is already claimed by another user

##### unclaim()

```ts
unclaim(taskId): void;
```


A shortcut to #claim with null user in order to unclaim the task

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | task to unclaim, cannot be null. |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when the task doesn't exist.

##### startProgress()

```ts
startProgress(taskId, userId): void;
```


Set the task state to in progress. No check is done whether the user is known by the identity component.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | task to change the state, cannot be null. |
| `userId` | `string` | user that puts the task in progress. |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when the task doesn't exist.

##### suspendTask()

```ts
suspendTask(taskId, userId): void;
```


Suspends the task. No check is done whether the user is known by the identity component.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | task to suspend, cannot be null. |
| `userId` | `string` | user that suspends the task. |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when the task doesn't exist.

##### activateTask()

```ts
activateTask(taskId, userId): void;
```


Activates the task. No check is done whether the user is known by the identity component.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | task to activate, cannot be null. |
| `userId` | `string` | user that activates the task. |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when the task doesn't exist.

##### delegateTask()

```ts
delegateTask(taskId, userId): void;
```


Delegates the task to another user. This means that the assignee is set and the delegation state is set to [DelegationState#PENDING](#enumeration-member-pending). If no owner is set on the task, the owner is set to
the current assignee of the task.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | The id of the task that will be delegated. |
| `userId` | `string` | The id of the user that will be set as assignee. |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when no task exists with the given id.

##### resolveTask()

```ts
resolveTask(
   taskId, 
   variables?, 
   transientVariables?): void;
```


Marks that the assignee is done with this task and that it can be send back to the owner. Can only be called when this task is [DelegationState#PENDING](#enumeration-member-pending) delegation. After this method
returns, the [() delegationState](#getdelegationstate) is set to [DelegationState#RESOLVED](#enumeration-member-resolved).

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | the id of the task to resolve, cannot be null. |
| `variables?` | `Map`\ | - |
| `transientVariables?` | `Map`\ | - |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when no task exists with the given id.

##### complete()

```ts
complete(
   taskId, 
   userId?, 
   variables?, 
   transientVariables?, 
   localScope?): void;
```


Called when the task is successfully executed.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | the id of the task to complete, cannot be null. |
| `userId?` | `string` | user that completes the task. |
| `variables?` | `Map`\ | task parameters. May be null or empty. |
| `transientVariables?` | `Map`\ | task parameters. May be null or empty. |
| `localScope?` | `boolean` | If true, the provided variables will be stored task-local, instead of process instance wide (which is the default behaviour). |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when no task exists with the given id.

###### Throws

FlowableException
            when this task is [DelegationState#PENDING](#enumeration-member-pending) delegation.

##### completeTaskWithForm()

```ts
completeTaskWithForm(
   taskId, 
   formDefinitionId, 
   outcome, 
   variables, 
   userId?, 
   transientVariables?, 
   localScope?): void;
```


Called when the task is successfully executed, and the task form has been submitted.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | the id of the task to complete, cannot be null. |
| `formDefinitionId` | `string` | the id of the form definition that is filled-in to complete the task, cannot be null. |
| `outcome` | `string` | the outcome of the completed form, can be null. |
| `variables` | `Map`\ | values of the completed form. May be null or empty. |
| `userId?` | `string` | user that completes the task. |
| `transientVariables?` | `Map`\ | additional transient values that need to added to the process instance transient variables. May be null or empty. |
| `localScope?` | `boolean` | If true, the provided variables will be stored task-local, instead of process instance wide (which is the default for #complete(String, Map)). |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when no task exists with the given id.

##### getTaskFormModel()

```ts
getTaskFormModel(taskId, ignoreVariables?): FormInfo;
```


Gets a Form model instance of the task form of a specific task

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | id of the task, cannot be null. |
| `ignoreVariables?` | `boolean` | should the variables be ignored when fetching the form model? |

###### Throws
##### setAssignee()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when the task or user doesn't exist.

##### setOwner()

```ts
setOwner(taskId, userId): void;
```


Transfers ownership of this task to another user. No check is done whether the user is known by the identity component.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | id of the task, cannot be null. |
| `userId` | `string` | of the person that is receiving ownership. |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when the task or user doesn't exist.

##### getIdentityLinksForTask()

```ts
getIdentityLinksForTask(taskId): IdentityLink[];
```


Retrieves the [IdentityLink](#identitylink)s associated with the given task. Such an [IdentityLink](#identitylink) informs how a certain identity (eg. group or user) is associated with a certain task (eg. as
candidate, assignee, etc.)

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |

##### addCandidateUser()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when the task or user doesn't exist.

##### addCandidateGroup()

```ts
addCandidateGroup(taskId, groupId): void;
```


Convenience shorthand for #addGroupIdentityLink(String, String, String); with type IdentityLinkType#CANDIDATE

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | id of the task, cannot be null. |
| `groupId` | `string` | id of the group to use as candidate, cannot be null. |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when the task or group doesn't exist.

##### addUserIdentityLink()

```ts
addUserIdentityLink(
   taskId, 
   userId, 
   identityLinkType): void;
```


Involves a user with a task. The type of identity link is defined by the given identityLinkType.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | id of the task, cannot be null. |
| `userId` | `string` | id of the user involve, cannot be null. |
| `identityLinkType` | `string` | type of identityLink, cannot be null (@see IdentityLinkType). |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when the task or user doesn't exist.

##### addGroupIdentityLink()

```ts
addGroupIdentityLink(
   taskId, 
   groupId, 
   identityLinkType): void;
```


Involves a group with a task. The type of identityLink is defined by the given identityLink.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | id of the task, cannot be null. |
| `groupId` | `string` | id of the group to involve, cannot be null. |
| `identityLinkType` | `string` | type of identity, cannot be null (@see IdentityLinkType). |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when the task or group doesn't exist.

##### deleteCandidateUser()

```ts
deleteCandidateUser(taskId, userId): void;
```


Convenience shorthand for #deleteUserIdentityLink(String, String, String); with type IdentityLinkType#CANDIDATE

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | id of the task, cannot be null. |
| `userId` | `string` | id of the user to use as candidate, cannot be null. |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when the task or user doesn't exist.

##### deleteCandidateGroup()

```ts
deleteCandidateGroup(taskId, groupId): void;
```


Convenience shorthand for #deleteGroupIdentityLink(String, String, String); with type IdentityLinkType#CANDIDATE

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | id of the task, cannot be null. |
| `groupId` | `string` | id of the group to use as candidate, cannot be null. |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when the task or group doesn't exist.

##### deleteUserIdentityLink()

```ts
deleteUserIdentityLink(
   taskId, 
   userId, 
   identityLinkType): void;
```


Removes the association between a user and a task for the given identityLinkType.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | id of the task, cannot be null. |
| `userId` | `string` | id of the user involve, cannot be null. |
| `identityLinkType` | `string` | type of identityLink, cannot be null (@see IdentityLinkType). |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when the task or user doesn't exist.

##### deleteGroupIdentityLink()

```ts
deleteGroupIdentityLink(
   taskId, 
   groupId, 
   identityLinkType): void;
```


Removes the association between a group and a task for the given identityLinkType.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | id of the task, cannot be null. |
| `groupId` | `string` | id of the group to involve, cannot be null. |
| `identityLinkType` | `string` | type of identity, cannot be null (@see IdentityLinkType). |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when the task or group doesn't exist.

##### setPriority()

```ts
setPriority(taskId, priority): void;
```


Changes the priority of the task.

Authorization: actual owner / business admin

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | id of the task, cannot be null. |
| `priority` | `number` | the new priority for the task. |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when the task doesn't exist.

##### setDueDate()

```ts
setDueDate(taskId, dueDate): void;
```


Changes the due date of the task

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | id of the task, cannot be null. |
| `dueDate` | `Date` | the new due date for the task |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableException
            when the task doesn't exist.

##### setVariable()

```ts
setVariable(
   taskId, 
   variableName, 
   value): void;
```


set variable on a task. If the variable is not already existing, it will be created in the most outer scope. This means the process instance in case this task is related to an execution.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |
| `variableName` | `string` |
| `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setVariables()

```ts
setVariables(taskId, variables): void;
```


set variables on a task. If the variable is not already existing, it will be created in the most outer scope. This means the process instance in case this task is related to an execution.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |
| `variables` | `Map`\ |

> ::: info Returns
> - **Type**: `void`
> :::
##### setVariableLocal()

```ts
setVariableLocal(
   taskId, 
   variableName, 
   value): void;
```


set variable on a task. If the variable is not already existing, it will be created in the task.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |
| `variableName` | `string` |
| `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setVariablesLocal()

```ts
setVariablesLocal(taskId, variables): void;
```


set variables on a task. If the variable is not already existing, it will be created in the task.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |
| `variables` | `Map`\ |

> ::: info Returns
> - **Type**: `void`
> :::
##### getVariable()

```ts
getVariable(taskId, variableName): any;
```


get a variables and search in the task scope and if available also the execution scopes.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |
| `variableName` | `string` |

> ::: info Returns
> - **Type**: `any`
> :::
##### getVariableInstance()

```ts
getVariableInstance(taskId, variableName): VariableInstance;
```


The variable. Searching for the variable is done in all scopes that are visible to the given task (including parent scopes). Returns null when no variable value is found with the given name.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | id of task, cannot be null. |
| `variableName` | `string` | name of variable, cannot be null. |

###### Throws
##### hasVariable()
**Parameters**
> ::: info Returns
> - **Type**: `boolean`
> :::
##### getVariableLocal()

```ts
getVariableLocal(taskId, variableName): any;
```


checks whether or not the task has a variable defined with the given name.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |
| `variableName` | `string` |

> ::: info Returns
> - **Type**: `any`
> :::
##### getVariableInstanceLocal()

```ts
getVariableInstanceLocal(taskId, variableName): VariableInstance;
```


The variable for a task. Returns the variable when it is set for the task (and not searching parent scopes). Returns null when no variable is found with the given name.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | id of task, cannot be null. |
| `variableName` | `string` | name of variable, cannot be null. |

###### Throws
##### hasVariableLocal()
**Parameters**
> ::: info Returns
> - **Type**: `boolean`
> :::
##### getVariables()

```ts
getVariables(taskId, variableNames?): Map;
```


get all variables and search in the task scope and if available also the execution scopes. If you have many variables and you only need a few, consider using
#getVariables(String, Collection) for better performance.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |
| `variableNames?` | `string`[] |

##### getVariableInstances()
**Parameters**
###### Throws
##### getVariablesLocal()
**Parameters**
##### getVariableInstancesLocalByTaskIds()
**Parameters**
##### getVariableInstancesLocal()
#getVariableInstancesLocal(String, Collection) for better performance.
**Parameters**
###### Throws
##### removeVariable()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### removeVariableLocal()

```ts
removeVariableLocal(taskId, variableName): void;
```


Removes the variable from the task (not considering parent scopes). When the variable does not exist, nothing happens.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |
| `variableName` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### removeVariables()

```ts
removeVariables(taskId, variableNames): void;
```


Removes all variables in the given collection from the task. Non existing variable names are simply ignored.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |
| `variableNames` | `string`[] |

> ::: info Returns
> - **Type**: `void`
> :::
##### removeVariablesLocal()

```ts
removeVariablesLocal(taskId, variableNames): void;
```


Removes all variables in the given collection from the task (not considering parent scopes). Non existing variable names are simply ignored.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |
| `variableNames` | `string`[] |

> ::: info Returns
> - **Type**: `void`
> :::
##### getDataObjects()

```ts
getDataObjects(
   taskId, 
   dataObjectNames?, 
   locale?, 
withLocalizationFallback?): Map;
```


All DataObjects visible from the given execution scope (including parent scopes).

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | id of task, cannot be null. |
| `dataObjectNames?` | `string`[] | the collection of DataObject names that should be retrieved. |
| `locale?` | `string` | locale the DataObject name and description should be returned in (if available). |
| `withLocalizationFallback?` | `boolean` | When true localization will fallback to more general locales if the specified locale is not found. |

###### Throws
##### getDataObject()
**Parameters**
###### Throws
##### addComment()
**Parameters**
##### saveComment()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### getComment()

```ts
getComment(commentId): Comment;
```


Returns an individual comment with the given id. Returns null if no comment exists with the given id.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `commentId` | `string` |

##### deleteComments()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### deleteComment()

```ts
deleteComment(commentId): void;
```


Removes an individual comment with the given id.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `commentId` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
###### Throws

FlowableObjectNotFoundException
            when no comment exists with the given id.

##### getTaskComments()

```ts
getTaskComments(taskId, type?): Comment[];
```


The comments related to the given task.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |
| `type?` | `string` |

##### getCommentsByType()
**Parameters**
##### getTaskEvents()
**Parameters**
##### getEvent()
**Parameters**
##### getProcessInstanceComments()
**Parameters**
##### createAttachment()
**Parameters**
##### saveAttachment()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### getAttachment()

```ts
getAttachment(attachmentId): Attachment;
```


Retrieve a particular attachment

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `attachmentId` | `string` |

##### getAttachmentContent()
**Parameters**
##### getTaskAttachments()
**Parameters**
##### getProcessInstanceAttachments()
**Parameters**
##### deleteAttachment()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### getSubTasks()

```ts
getSubTasks(parentTaskId): Task[];
```


The list of subtasks for this parent task

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parentTaskId` | `string` |

## Interfaces
### Task
#### Extends
#### Properties
#### Methods
##### setName()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### setLocalizedName()

```ts
setLocalizedName(name): void;
```


Sets an optional localized name for the task.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setDescription()

```ts
setDescription(description): void;
```


Change the description of the task

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `description` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setLocalizedDescription()

```ts
setLocalizedDescription(description): void;
```


Sets an optional localized description for the task.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `description` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setPriority()

```ts
setPriority(priority): void;
```


Sets the indication of how important/urgent this task is

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `priority` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setOwner()

```ts
setOwner(owner): void;
```


The user id of the person that is responsible for this task.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `owner` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setAssignee()

```ts
setAssignee(assignee): void;
```


The user id of the person to which this task is delegated.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `assignee` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getDelegationState()

```ts
getDelegationState(): DelegationState;
```


The current [DelegationState](#delegationstate) for this task.

##### setDelegationState()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### setDueDate()

```ts
setDueDate(dueDate): void;
```


Change due date of the task.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `dueDate` | `Date` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setCategory()

```ts
setCategory(category): void;
```


Change the category of the task. This is an optional field and allows to 'tag' tasks as belonging to a certain category.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `category` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setParentTaskId()

```ts
setParentTaskId(parentTaskId): void;
```


the parent task for which this task is a subtask

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parentTaskId` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setTenantId()

```ts
setTenantId(tenantId): void;
```


Change the tenantId of the task

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `tenantId` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setFormKey()

```ts
setFormKey(formKey): void;
```


Change the form key of the task

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `formKey` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### isSuspended()

```ts
isSuspended(): boolean;
```


Indicates whether this task is suspended or not.

> ::: info Returns
> - **Type**: `boolean`
> :::
##### getId()

```ts
getId(): string;
```


DB id of the task.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getId`](#getid-1)

##### getName()

```ts
getName(): string;
```


Name or title of the task.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getName`](#getname-1)

##### getDescription()

```ts
getDescription(): string;
```


Free text description of the task.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getDescription`](#getdescription-1)

##### getPriority()

```ts
getPriority(): number;
```


Indication of how important/urgent this task is

> ::: info Returns
> - **Type**: `number`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getPriority`](#getpriority-1)

##### getOwner()

```ts
getOwner(): string;
```


The user id of the person that is responsible for this task.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getOwner`](#getowner-1)

##### getAssignee()

```ts
getAssignee(): string;
```


The user id of the person to which this task is delegated.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getAssignee`](#getassignee-1)

##### getProcessInstanceId()

```ts
getProcessInstanceId(): string;
```


Reference to the process instance or null if it is not related to a process instance.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getProcessInstanceId`](#getprocessinstanceid-1)

##### getExecutionId()

```ts
getExecutionId(): string;
```


Reference to the path of execution or null if it is not related to a process instance.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getExecutionId`](#getexecutionid-1)

##### getTaskDefinitionId()

```ts
getTaskDefinitionId(): string;
```


Reference to the task definition or null if it is not related to any task definition.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getTaskDefinitionId`](#gettaskdefinitionid-1)

##### getProcessDefinitionId()

```ts
getProcessDefinitionId(): string;
```


Reference to the process definition or null if it is not related to a process.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getProcessDefinitionId`](#getprocessdefinitionid-1)

##### getScopeId()

```ts
getScopeId(): string;
```


Reference to a scope identifier or null if none is set (e.g. for bpmn process task it is null)

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getScopeId`](#getscopeid-1)

##### getSubScopeId()

```ts
getSubScopeId(): string;
```


Reference to a sub scope identifier or null if none is set (e.g. for bpmn process task it is null)

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getSubScopeId`](#getsubscopeid-1)

##### getScopeType()

```ts
getScopeType(): string;
```


Reference to a scope type or null if none is set (e.g. for bpmn process task it is null)

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getScopeType`](#getscopetype-1)

##### getScopeDefinitionId()

```ts
getScopeDefinitionId(): string;
```


Reference to a scope definition identifier or null if none is set (e.g. for bpmn process task it is null)

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getScopeDefinitionId`](#getscopedefinitionid-1)

##### getPropagatedStageInstanceId()

```ts
getPropagatedStageInstanceId(): string;
```


If this task runs in the context of a case and stage, this method returns it's closest parent stage instance id (the stage plan item instance id to be
precise). Even if the direct parent of the task is a process which itself might have been created out of a process task of a case, its stage instance
is reflected in the task.

> ::: info Returns
> - **Type**: `string`
> - **Description**: the stage instance id this task belongs to or null, if this task is not part of a case at all or is not a child element of a stage
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getPropagatedStageInstanceId`](#getpropagatedstageinstanceid-1)

##### getState()

```ts
getState(): string;
```


The state of this task

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getState`](#getstate-1)

##### getCreateTime()

```ts
getCreateTime(): Date;
```


The date/time when this task was created

> ::: info Returns
> - **Type**: `Date`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getCreateTime`](#getcreatetime-1)

##### getInProgressStartTime()

```ts
getInProgressStartTime(): Date;
```


The date/time when this task was put in progress

> ::: info Returns
> - **Type**: `Date`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getInProgressStartTime`](#getinprogressstarttime-1)

##### getInProgressStartedBy()

```ts
getInProgressStartedBy(): string;
```


The user reference that put this task in progress

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getInProgressStartedBy`](#getinprogressstartedby-1)

##### getClaimTime()

```ts
getClaimTime(): Date;
```


The claim time of this task

> ::: info Returns
> - **Type**: `Date`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getClaimTime`](#getclaimtime-1)

##### getClaimedBy()

```ts
getClaimedBy(): String;
```


The user reference that claimed this task

> ::: info Returns
> - **Type**: `String`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getClaimedBy`](#getclaimedby-1)

##### getSuspendedTime()

```ts
getSuspendedTime(): Date;
```


The suspended time of this task

> ::: info Returns
> - **Type**: `Date`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getSuspendedTime`](#getsuspendedtime-1)

##### getSuspendedBy()

```ts
getSuspendedBy(): string;
```


The user reference that suspended this task

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getSuspendedBy`](#getsuspendedby-1)

##### getTaskDefinitionKey()

```ts
getTaskDefinitionKey(): string;
```


The id of the activity in the process defining this task or null if this is not related to a process

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getTaskDefinitionKey`](#gettaskdefinitionkey-1)

##### getInProgressStartDueDate()

```ts
getInProgressStartDueDate(): Date;
```


In progress start due date of the task.

> ::: info Returns
> - **Type**: `Date`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getInProgressStartDueDate`](#getinprogressstartduedate-1)

##### getDueDate()

```ts
getDueDate(): Date;
```


Due date of the task.

> ::: info Returns
> - **Type**: `Date`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getDueDate`](#getduedate-1)

##### getCategory()

```ts
getCategory(): any;
```


The category of the task. This is an optional field and allows to 'tag' tasks as belonging to a certain category.

> ::: info Returns
> - **Type**: `any`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getCategory`](#getcategory-1)

##### getParentTaskId()

```ts
getParentTaskId(): string;
```


The parent task for which this task is a subtask

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getParentTaskId`](#getparenttaskid-1)

##### getTenantId()

```ts
getTenantId(): string;
```


The tenant identifier of this task

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getTenantId`](#gettenantid-1)

##### getFormKey()

```ts
getFormKey(): string;
```


The form key for the user task

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`TaskInfo`](#taskinfo).[`getFormKey`](#getformkey-1)

##### getTaskLocalVariables()

```ts
getTaskLocalVariables(): Map;
```


Returns the local task variables if requested in the task query

###### Inherited from
##### getProcessVariables()
###### Inherited from
##### getCaseVariables()
###### Inherited from
##### getIdentityLinks()
###### Inherited from
### TaskInfo
#### Extended by
#### Properties
#### Methods
##### getId()
> ::: info Returns
> - **Type**: `string`
> :::
##### getName()

```ts
getName(): string;
```


Name or title of the task.

> ::: info Returns
> - **Type**: `string`
> :::
##### getDescription()

```ts
getDescription(): string;
```


Free text description of the task.

> ::: info Returns
> - **Type**: `string`
> :::
##### getPriority()

```ts
getPriority(): number;
```


Indication of how important/urgent this task is

> ::: info Returns
> - **Type**: `number`
> :::
##### getOwner()

```ts
getOwner(): string;
```


The user id of the person that is responsible for this task.

> ::: info Returns
> - **Type**: `string`
> :::
##### getAssignee()

```ts
getAssignee(): string;
```


The user id of the person to which this task is delegated.

> ::: info Returns
> - **Type**: `string`
> :::
##### getProcessInstanceId()

```ts
getProcessInstanceId(): string;
```


Reference to the process instance or null if it is not related to a process instance.

> ::: info Returns
> - **Type**: `string`
> :::
##### getExecutionId()

```ts
getExecutionId(): string;
```


Reference to the path of execution or null if it is not related to a process instance.

> ::: info Returns
> - **Type**: `string`
> :::
##### getTaskDefinitionId()

```ts
getTaskDefinitionId(): string;
```


Reference to the task definition or null if it is not related to any task definition.

> ::: info Returns
> - **Type**: `string`
> :::
##### getProcessDefinitionId()

```ts
getProcessDefinitionId(): string;
```


Reference to the process definition or null if it is not related to a process.

> ::: info Returns
> - **Type**: `string`
> :::
##### getScopeId()

```ts
getScopeId(): string;
```


Reference to a scope identifier or null if none is set (e.g. for bpmn process task it is null)

> ::: info Returns
> - **Type**: `string`
> :::
##### getSubScopeId()

```ts
getSubScopeId(): string;
```


Reference to a sub scope identifier or null if none is set (e.g. for bpmn process task it is null)

> ::: info Returns
> - **Type**: `string`
> :::
##### getScopeType()

```ts
getScopeType(): string;
```


Reference to a scope type or null if none is set (e.g. for bpmn process task it is null)

> ::: info Returns
> - **Type**: `string`
> :::
##### getScopeDefinitionId()

```ts
getScopeDefinitionId(): string;
```


Reference to a scope definition identifier or null if none is set (e.g. for bpmn process task it is null)

> ::: info Returns
> - **Type**: `string`
> :::
##### getPropagatedStageInstanceId()

```ts
getPropagatedStageInstanceId(): string;
```


If this task runs in the context of a case and stage, this method returns it's closest parent stage instance id (the stage plan item instance id to be
precise). Even if the direct parent of the task is a process which itself might have been created out of a process task of a case, its stage instance
is reflected in the task.

> ::: info Returns
> - **Type**: `string`
> - **Description**: the stage instance id this task belongs to or null, if this task is not part of a case at all or is not a child element of a stage
> :::
##### getState()

```ts
getState(): string;
```


The state of this task

> ::: info Returns
> - **Type**: `string`
> :::
##### getCreateTime()

```ts
getCreateTime(): Date;
```


The date/time when this task was created

> ::: info Returns
> - **Type**: `Date`
> :::
##### getInProgressStartTime()

```ts
getInProgressStartTime(): Date;
```


The date/time when this task was put in progress

> ::: info Returns
> - **Type**: `Date`
> :::
##### getInProgressStartedBy()

```ts
getInProgressStartedBy(): string;
```


The user reference that put this task in progress

> ::: info Returns
> - **Type**: `string`
> :::
##### getClaimTime()

```ts
getClaimTime(): Date;
```


The claim time of this task

> ::: info Returns
> - **Type**: `Date`
> :::
##### getClaimedBy()

```ts
getClaimedBy(): String;
```


The user reference that claimed this task

> ::: info Returns
> - **Type**: `String`
> :::
##### getSuspendedTime()

```ts
getSuspendedTime(): Date;
```


The suspended time of this task

> ::: info Returns
> - **Type**: `Date`
> :::
##### getSuspendedBy()

```ts
getSuspendedBy(): string;
```


The user reference that suspended this task

> ::: info Returns
> - **Type**: `string`
> :::
##### getTaskDefinitionKey()

```ts
getTaskDefinitionKey(): string;
```


The id of the activity in the process defining this task or null if this is not related to a process

> ::: info Returns
> - **Type**: `string`
> :::
##### getInProgressStartDueDate()

```ts
getInProgressStartDueDate(): Date;
```


In progress start due date of the task.

> ::: info Returns
> - **Type**: `Date`
> :::
##### getDueDate()

```ts
getDueDate(): Date;
```


Due date of the task.

> ::: info Returns
> - **Type**: `Date`
> :::
##### getCategory()

```ts
getCategory(): any;
```


The category of the task. This is an optional field and allows to 'tag' tasks as belonging to a certain category.

> ::: info Returns
> - **Type**: `any`
> :::
##### getParentTaskId()

```ts
getParentTaskId(): string;
```


The parent task for which this task is a subtask

> ::: info Returns
> - **Type**: `string`
> :::
##### getTenantId()

```ts
getTenantId(): string;
```


The tenant identifier of this task

> ::: info Returns
> - **Type**: `string`
> :::
##### getFormKey()

```ts
getFormKey(): string;
```


The form key for the user task

> ::: info Returns
> - **Type**: `string`
> :::
##### getTaskLocalVariables()

```ts
getTaskLocalVariables(): Map;
```


Returns the local task variables if requested in the task query

##### getProcessVariables()
##### getCaseVariables()
##### getIdentityLinks()
### IdentityLinkInfo
#### Extended by
#### Methods
##### getType()
> ::: info Returns
> - **Type**: `string`
> :::
##### getUserId()

```ts
getUserId(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### getGroupId()

```ts
getGroupId(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### getTaskId()

```ts
getTaskId(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### getProcessInstanceId()

```ts
getProcessInstanceId(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### getScopeId()

```ts
getScopeId(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### getSubScopeId()

```ts
getSubScopeId(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### getScopeType()

```ts
getScopeType(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### getScopeDefinitionId()

```ts
getScopeDefinitionId(): string;
```


> ::: info Returns
> - **Type**: `string`
> - **Description**: ***
> :::
### IdentityLink


#### Extends

- [`IdentityLinkInfo`](#identitylinkinfo)

#### Methods

##### getType()

```ts
getType(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`IdentityLinkInfo`](#identitylinkinfo).[`getType`](#gettype)

##### getUserId()

```ts
getUserId(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`IdentityLinkInfo`](#identitylinkinfo).[`getUserId`](#getuserid)

##### getGroupId()

```ts
getGroupId(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`IdentityLinkInfo`](#identitylinkinfo).[`getGroupId`](#getgroupid)

##### getTaskId()

```ts
getTaskId(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`IdentityLinkInfo`](#identitylinkinfo).[`getTaskId`](#gettaskid)

##### getProcessInstanceId()

```ts
getProcessInstanceId(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`IdentityLinkInfo`](#identitylinkinfo).[`getProcessInstanceId`](#getprocessinstanceid-2)

##### getScopeId()

```ts
getScopeId(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`IdentityLinkInfo`](#identitylinkinfo).[`getScopeId`](#getscopeid-2)

##### getSubScopeId()

```ts
getSubScopeId(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`IdentityLinkInfo`](#identitylinkinfo).[`getSubScopeId`](#getsubscopeid-2)

##### getScopeType()

```ts
getScopeType(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`IdentityLinkInfo`](#identitylinkinfo).[`getScopeType`](#getscopetype-2)

##### getScopeDefinitionId()

```ts
getScopeDefinitionId(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

[`IdentityLinkInfo`](#identitylinkinfo).[`getScopeDefinitionId`](#getscopedefinitionid-2)

##### getProcessDefinitionId()

```ts
getProcessDefinitionId(): string;
```


The process definition id associated with this identity link.

> ::: info Returns
> - **Type**: `string`
> - **Description**: ***
> :::
### TaskBuilder


Wraps [TaskInfo](#taskinfo) to the builder.

#### Methods

##### create()

```ts
create(): Task;
```


Creates task instance according values set in the builder

##### id()
**Parameters**
##### getId()
> ::: info Returns
> - **Type**: `string`
> :::
##### name()

```ts
name(name): TaskBuilder;
```


Name or title of the task.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

##### getName()
> ::: info Returns
> - **Type**: `string`
> :::
##### description()

```ts
description(description): TaskBuilder;
```


Free text description of the task.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `description` | `string` |

##### getDescription()
> ::: info Returns
> - **Type**: `string`
> :::
##### priority()

```ts
priority(priority): TaskBuilder;
```


Indication of how important/urgent this task is

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `priority` | `number` |

##### getPriority()
> ::: info Returns
> - **Type**: `number`
> :::
##### owner()

```ts
owner(ownerId): TaskBuilder;
```


The userId of the person that is responsible for this task.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `ownerId` | `string` |

##### getOwner()
> ::: info Returns
> - **Type**: `string`
> :::
##### assignee()

```ts
assignee(assigneId): TaskBuilder;
```


The userId of the person to which this task is delegated.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `assigneId` | `string` |

##### getAssignee()
> ::: info Returns
> - **Type**: `string`
> :::
##### dueDate()

```ts
dueDate(dueDate): TaskBuilder;
```


Change due date of the task.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `dueDate` | `Date` |

##### getDueDate()
> ::: info Returns
> - **Type**: `Date`
> :::
##### category()

```ts
category(category): TaskBuilder;
```


Change the category of the task. This is an optional field and allows to 'tag' tasks as belonging to a certain category.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `category` | `string` |

##### getCategory()
> ::: info Returns
> - **Type**: `string`
> :::
##### parentTaskId()

```ts
parentTaskId(parentTaskId): TaskBuilder;
```


the parent task for which this task is a subtask

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parentTaskId` | `string` |

##### getParentTaskId()
> ::: info Returns
> - **Type**: `string`
> :::
##### tenantId()

```ts
tenantId(tenantId): TaskBuilder;
```


Change the tenantId of the task

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `tenantId` | `string` |

##### getTenantId()
> ::: info Returns
> - **Type**: `string`
> :::
##### formKey()

```ts
formKey(formKey): TaskBuilder;
```


Change the form key of the task

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `formKey` | `string` |

##### getFormKey()
> ::: info Returns
> - **Type**: `string`
> :::
##### taskDefinitionId()

```ts
taskDefinitionId(taskDefinitionId): TaskBuilder;
```


task definition id to create task from

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskDefinitionId` | `string` |

##### getTaskDefinitionId()
> ::: info Returns
> - **Type**: `string`
> :::
##### taskDefinitionKey()

```ts
taskDefinitionKey(taskDefinitionKey): TaskBuilder;
```


task definition key to create task from

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskDefinitionKey` | `string` |

##### getTaskDefinitionKey()
> ::: info Returns
> - **Type**: `string`
> :::
##### identityLinks()

```ts
identityLinks(identityLinks): TaskBuilder;
```


add identity links to the task

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `identityLinks` | `Set`\ |

##### getIdentityLinks()
##### scopeId()
**Parameters**
##### getScopeId()
> ::: info Returns
> - **Type**: `string`
> :::
##### scopeType()

```ts
scopeType(scopeType): TaskBuilder;
```


Add scope type

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `scopeType` | `string` |

##### getScopeType()
> ::: info Returns
> - **Type**: `string`
> - **Description**: ***
> :::
### FormInfo


#### Methods

##### getId()

```ts
getId(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### setId()

```ts
setId(id): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getName()

```ts
getName(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### setName()

```ts
setName(name): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getDescription()

```ts
getDescription(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### setDescription()

```ts
setDescription(description): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `description` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getKey()

```ts
getKey(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### setKey()

```ts
setKey(key): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getVersion()

```ts
getVersion(): number;
```


> ::: info Returns
> - **Type**: `number`
> :::
##### setVersion()

```ts
setVersion(version): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `version` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getFormModel()

```ts
getFormModel(): any;
```


> ::: info Returns
> - **Type**: `any`
> :::
##### setFormModel()

```ts
setFormModel(formModel): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `formModel` | `any` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ***
> :::
### ValueFields


#### Extended by

- [`VariableInstance`](#variableinstance)

#### Methods

##### getName()

```ts
getName(): string;
```


> ::: info Returns
> - **Type**: `string`
> - **Description**: the name of the variable
> :::
##### getProcessInstanceId()

```ts
getProcessInstanceId(): string;
```


> ::: info Returns
> - **Type**: `string`
> - **Description**: the process instance id of the variable
> :::
##### getExecutionId()

```ts
getExecutionId(): string;
```


> ::: info Returns
> - **Type**: `string`
> - **Description**: the execution id of the variable
> :::
##### getScopeId()

```ts
getScopeId(): string;
```


> ::: info Returns
> - **Type**: `string`
> - **Description**: the scope id of the variable
> :::
##### getSubScopeId()

```ts
getSubScopeId(): string;
```


> ::: info Returns
> - **Type**: `string`
> - **Description**: the sub scope id of the variable
> :::
##### getScopeType()

```ts
getScopeType(): string;
```


> ::: info Returns
> - **Type**: `string`
> - **Description**: the scope type of the variable
> :::
##### getTaskId()

```ts
getTaskId(): string;
```


> ::: info Returns
> - **Type**: `string`
> - **Description**: the task id of the variable
> :::
##### getTextValue()

```ts
getTextValue(): string;
```


> ::: info Returns
> - **Type**: `string`
> - **Description**: the first text value, if any, or null.
> :::
##### setTextValue()

```ts
setTextValue(textValue): void;
```


Sets the first text value. A value of null is allowed.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `textValue` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getTextValue2()

```ts
getTextValue2(): string;
```


> ::: info Returns
> - **Type**: `string`
> - **Description**: the second text value, if any, or null.
> :::
##### setTextValue2()

```ts
setTextValue2(textValue2): void;
```


Sets second text value. A value of null is allowed.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `textValue2` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getLongValue()

```ts
getLongValue(): number;
```


> ::: info Returns
> - **Type**: `number`
> - **Description**: the long value, if any, or null.
> :::
##### setLongValue()

```ts
setLongValue(longValue): void;
```


Sets the long value. A value of null is allowed.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `longValue` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getDoubleValue()

```ts
getDoubleValue(): number;
```


> ::: info Returns
> - **Type**: `number`
> - **Description**: the double value, if any, or null.
> :::
##### setDoubleValue()

```ts
setDoubleValue(doubleValue): void;
```


Sets the double value. A value of null is allowed.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `doubleValue` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getBytes()

```ts
getBytes(): any[];
```


##### setBytes()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### getCachedValue()

```ts
getCachedValue(): any;
```


> ::: info Returns
> - **Type**: `any`
> :::
##### setCachedValue()

```ts
setCachedValue(cachedValue): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `cachedValue` | `any` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ***
> :::
### VariableInstance


#### Extends

- [`ValueFields`](#valuefields)

#### Methods

##### getName()

```ts
getName(): string;
```


> ::: info Returns
> - **Type**: `string`
> - **Description**: the name of the variable
> :::
###### Inherited from

[`ValueFields`](#valuefields).[`getName`](#getname-4)

##### getProcessInstanceId()

```ts
getProcessInstanceId(): string;
```


> ::: info Returns
> - **Type**: `string`
> - **Description**: the process instance id of the variable
> :::
###### Inherited from

[`ValueFields`](#valuefields).[`getProcessInstanceId`](#getprocessinstanceid-4)

##### getExecutionId()

```ts
getExecutionId(): string;
```


> ::: info Returns
> - **Type**: `string`
> - **Description**: the execution id of the variable
> :::
###### Inherited from

[`ValueFields`](#valuefields).[`getExecutionId`](#getexecutionid-2)

##### getScopeId()

```ts
getScopeId(): string;
```


> ::: info Returns
> - **Type**: `string`
> - **Description**: the scope id of the variable
> :::
###### Inherited from

[`ValueFields`](#valuefields).[`getScopeId`](#getscopeid-5)

##### getSubScopeId()

```ts
getSubScopeId(): string;
```


> ::: info Returns
> - **Type**: `string`
> - **Description**: the sub scope id of the variable
> :::
###### Inherited from

[`ValueFields`](#valuefields).[`getSubScopeId`](#getsubscopeid-4)

##### getScopeType()

```ts
getScopeType(): string;
```


> ::: info Returns
> - **Type**: `string`
> - **Description**: the scope type of the variable
> :::
###### Inherited from

[`ValueFields`](#valuefields).[`getScopeType`](#getscopetype-5)

##### getTaskId()

```ts
getTaskId(): string;
```


> ::: info Returns
> - **Type**: `string`
> - **Description**: the task id of the variable
> :::
###### Inherited from

[`ValueFields`](#valuefields).[`getTaskId`](#gettaskid-2)

##### getTextValue()

```ts
getTextValue(): string;
```


> ::: info Returns
> - **Type**: `string`
> - **Description**: the first text value, if any, or null.
> :::
###### Inherited from

[`ValueFields`](#valuefields).[`getTextValue`](#gettextvalue)

##### setTextValue()

```ts
setTextValue(textValue): void;
```


Sets the first text value. A value of null is allowed.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `textValue` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
###### Inherited from

[`ValueFields`](#valuefields).[`setTextValue`](#settextvalue)

##### getTextValue2()

```ts
getTextValue2(): string;
```


> ::: info Returns
> - **Type**: `string`
> - **Description**: the second text value, if any, or null.
> :::
###### Inherited from

[`ValueFields`](#valuefields).[`getTextValue2`](#gettextvalue2)

##### setTextValue2()

```ts
setTextValue2(textValue2): void;
```


Sets second text value. A value of null is allowed.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `textValue2` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
###### Inherited from

[`ValueFields`](#valuefields).[`setTextValue2`](#settextvalue2)

##### getLongValue()

```ts
getLongValue(): number;
```


> ::: info Returns
> - **Type**: `number`
> - **Description**: the long value, if any, or null.
> :::
###### Inherited from

[`ValueFields`](#valuefields).[`getLongValue`](#getlongvalue)

##### setLongValue()

```ts
setLongValue(longValue): void;
```


Sets the long value. A value of null is allowed.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `longValue` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
###### Inherited from

[`ValueFields`](#valuefields).[`setLongValue`](#setlongvalue)

##### getDoubleValue()

```ts
getDoubleValue(): number;
```


> ::: info Returns
> - **Type**: `number`
> - **Description**: the double value, if any, or null.
> :::
###### Inherited from

[`ValueFields`](#valuefields).[`getDoubleValue`](#getdoublevalue)

##### setDoubleValue()

```ts
setDoubleValue(doubleValue): void;
```


Sets the double value. A value of null is allowed.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `doubleValue` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
###### Inherited from

[`ValueFields`](#valuefields).[`setDoubleValue`](#setdoublevalue)

##### getBytes()

```ts
getBytes(): any[];
```


###### Inherited from
##### setBytes()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
###### Inherited from

[`ValueFields`](#valuefields).[`setBytes`](#setbytes)

##### getCachedValue()

```ts
getCachedValue(): any;
```


> ::: info Returns
> - **Type**: `any`
> :::
###### Inherited from

[`ValueFields`](#valuefields).[`getCachedValue`](#getcachedvalue)

##### setCachedValue()

```ts
setCachedValue(cachedValue): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `cachedValue` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::
###### Inherited from

[`ValueFields`](#valuefields).[`setCachedValue`](#setcachedvalue)

##### getId()

```ts
getId(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### setId()

```ts
setId(id): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setName()

```ts
setName(name): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setExecutionId()

```ts
setExecutionId(executionId): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `executionId` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setProcessInstanceId()

```ts
setProcessInstanceId(processInstanceId): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `processInstanceId` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setProcessDefinitionId()

```ts
setProcessDefinitionId(processDefinitionId): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `processDefinitionId` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getProcessDefinitionId()

```ts
getProcessDefinitionId(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### getValue()

```ts
getValue(): any;
```


> ::: info Returns
> - **Type**: `any`
> :::
##### setValue()

```ts
setValue(value): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getTypeName()

```ts
getTypeName(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### setTypeName()

```ts
setTypeName(typeName): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `typeName` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### isReadOnly()

```ts
isReadOnly(): boolean;
```


> ::: info Returns
> - **Type**: `boolean`
> :::
##### setTaskId()

```ts
setTaskId(taskId): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setScopeId()

```ts
setScopeId(scopeId): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `scopeId` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setSubScopeId()

```ts
setSubScopeId(subScopeId): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `subScopeId` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setScopeType()

```ts
setScopeType(scopeType): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `scopeType` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setScopeDefinitionId()

```ts
setScopeDefinitionId(scopeDefinitionId): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `scopeDefinitionId` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getScopeDefinitionId()

```ts
getScopeDefinitionId(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### getMetaInfo()

```ts
getMetaInfo(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### setMetaInfo()

```ts
setMetaInfo(metaInfo): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `metaInfo` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ***
> :::
### DataObject


#### Methods

##### getId()

```ts
getId(): string;
```


The unique id of this Data Object.

> ::: info Returns
> - **Type**: `string`
> :::
##### getProcessInstanceId()

```ts
getProcessInstanceId(): string;
```


/**
* The id of the process instance that this Data Object is associated with.

> ::: info Returns
> - **Type**: `string`
> :::
##### getExecutionId()

```ts
getExecutionId(): string;
```


The id of the execution in which this Data Object resides. A DataObject only resides on a process instance
execution or a subprocess execution.

> ::: info Returns
> - **Type**: `string`
> :::
##### getName()

```ts
getName(): string;
```


Name of the DataObject.

> ::: info Returns
> - **Type**: `string`
> :::
##### getLocalizedName()

```ts
getLocalizedName(): string;
```


Localized Name of the DataObject.

> ::: info Returns
> - **Type**: `string`
> :::
##### getDescription()

```ts
getDescription(): string;
```


Description of the DataObject.

> ::: info Returns
> - **Type**: `string`
> :::
##### getValue()

```ts
getValue(): any;
```


Value of the DataObject.

> ::: info Returns
> - **Type**: `any`
> :::
##### getType()

```ts
getType(): string;
```


Type of the DataObject.

> ::: info Returns
> - **Type**: `string`
> :::
##### getDataObjectDefinitionKey()

```ts
getDataObjectDefinitionKey(): string;
```


The id of the flow element in the process defining this data object.

> ::: info Returns
> - **Type**: `string`
> - **Description**: ***
> :::
### Comment


#### Methods

##### getId()

```ts
getId(): string;
```


unique identifier for this comment

> ::: info Returns
> - **Type**: `string`
> :::
##### getUserId()

```ts
getUserId(): string;
```


reference to the user that made the comment

> ::: info Returns
> - **Type**: `string`
> :::
##### setUserId()

```ts
setUserId(userId): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getTime()

```ts
getTime(): Date;
```


> ::: info Returns
> - **Type**: `Date`
> :::
##### setTime()

```ts
setTime(time): any;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `time` | `Date` |

> ::: info Returns
> - **Type**: `any`
> :::
##### getTaskId()

```ts
getTaskId(): string;
```


reference to the task on which this comment was made

> ::: info Returns
> - **Type**: `string`
> :::
##### setTaskId()

```ts
setTaskId(taskId): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getProcessInstanceId()

```ts
getProcessInstanceId(): string;
```


reference to the process instance on which this comment was made

> ::: info Returns
> - **Type**: `string`
> :::
##### setProcessInstanceId()

```ts
setProcessInstanceId(processInstanceId): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `processInstanceId` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getType()

```ts
getType(): string;
```


reference to the type given to the comment

> ::: info Returns
> - **Type**: `string`
> :::
##### setType()

```ts
setType(type): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getFullMessage()

```ts
getFullMessage(): string;
```


the full comment message the user had related to the task and/or process instance

> ::: info Returns
> - **Type**: `string`
> :::
###### See

TaskService#getTaskComments(String)

##### setFullMessage()

```ts
setFullMessage(fullMessage): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `fullMessage` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ***
> :::
### TaskEvent


#### Methods

##### getId()

```ts
getId(): string;
```


Unique identifier for this event

> ::: info Returns
> - **Type**: `string`
> :::
##### getAction()

```ts
getAction(): string;
```


Indicates the type of of action and also indicates the meaning of the parts as exposed in #getMessageParts()

> ::: info Returns
> - **Type**: `string`
> :::
##### getMessageParts()

```ts
getMessageParts(): string[];
```


The meaning of the message parts is defined by the action as you can find in #getAction()

##### getMessage()
> ::: info Returns
> - **Type**: `string`
> :::
##### getUserId()

```ts
getUserId(): string;
```


reference to the user that made the comment

> ::: info Returns
> - **Type**: `string`
> :::
##### getTime()

```ts
getTime(): Date;
```


time and date when the user made the comment

> ::: info Returns
> - **Type**: `Date`
> :::
##### getTaskId()

```ts
getTaskId(): string;
```


reference to the task on which this comment was made

> ::: info Returns
> - **Type**: `string`
> :::
##### getProcessInstanceId()

```ts
getProcessInstanceId(): string;
```


reference to the process instance on which this comment was made

> ::: info Returns
> - **Type**: `string`
> - **Description**: ***
> :::
### Attachment


#### Methods

##### getId()

```ts
getId(): string;
```


unique id for this attachment

> ::: info Returns
> - **Type**: `string`
> :::
##### getName()

```ts
getName(): string;
```


free user defined short (max 255 chars) name for this attachment

> ::: info Returns
> - **Type**: `string`
> :::
##### setName()

```ts
setName(name): void;
```


free user defined short (max 255 chars) name for this attachment

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getDescription()

```ts
getDescription(): string;
```


long (max 255 chars) explanation what this attachment is about in context of the task and/or process instance it's linked to.

> ::: info Returns
> - **Type**: `string`
> :::
##### setDescription()

```ts
setDescription(description): void;
```


long (max 255 chars) explanation what this attachment is about in context of the task and/or process instance it's linked to.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `description` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getType()

```ts
getType(): string;
```


indication of the type of content that this attachment refers to. Can be mime type or any other indication.

> ::: info Returns
> - **Type**: `string`
> :::
##### getTaskId()

```ts
getTaskId(): string;
```


reference to the task to which this attachment is associated.

> ::: info Returns
> - **Type**: `string`
> :::
##### getProcessInstanceId()

```ts
getProcessInstanceId(): string;
```


reference to the process instance to which this attachment is associated.

> ::: info Returns
> - **Type**: `string`
> :::
##### getUrl()

```ts
getUrl(): string;
```


the remote URL in case this is remote content. If the attachment content was [(String, String, String, String, String, java.io.InputStream) uploaded with an](#createattachment), then this method returns null and the content can be fetched with [(String)](#getattachmentcontent).

> ::: info Returns
> - **Type**: `string`
> :::
##### getUserId()

```ts
getUserId(): string;
```


reference to the user who created this attachment.

> ::: info Returns
> - **Type**: `string`
> :::
##### getTime()

```ts
getTime(): Date;
```


timestamp when this attachment was created

> ::: info Returns
> - **Type**: `Date`
> :::
##### setTime()

```ts
setTime(time): void;
```


timestamp when this attachment was created

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `time` | `Date` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getContentId()

```ts
getContentId(): string;
```


the id of the byte array entity storing the content

> ::: info Returns
> - **Type**: `string`
> - **Description**: ***
> :::
### QueryProperty


#### Methods

##### getName()

```ts
getName(): string;
```


> ::: info Returns
> - **Type**: `string`
> - **Description**: ***
> :::
### Query


#### Extended by

- [`TaskInfoQuery`](#taskinfoquery)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

#### Methods

##### asc()

```ts
asc(): T;
```


Order the results ascending on the given property as defined in this class (needs to come after a call to one of the orderByXxxx methods).

> ::: info Returns
> - **Type**: `T`
> :::
##### desc()

```ts
desc(): T;
```


Order the results descending on the given property as defined in this class (needs to come after a call to one of the orderByXxxx methods).

> ::: info Returns
> - **Type**: `T`
> :::
##### orderBy()

###### Call Signature

```ts
orderBy(property): T;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `property` | [`QueryProperty`](#queryproperty) |

> ::: info Returns
> - **Type**: `T`
> :::
###### Call Signature

```ts
orderBy(property, nullHandlingOnOrder): T;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `property` | [`QueryProperty`](#queryproperty) |
| `nullHandlingOnOrder` | [`NullHandlingOnOrder`](#nullhandlingonorder) |

> ::: info Returns
> - **Type**: `T`
> :::
##### count()

```ts
count(): number;
```


Executes the query and returns the number of results

> ::: info Returns
> - **Type**: `number`
> :::
##### singleResult()

```ts
singleResult(): U;
```


Executes the query and returns the resulting entity or null if no entity matches the query criteria.

> ::: info Returns
> - **Type**: `U`
> :::
###### Throws

org.flowable.common.engine.api.FlowableException when the query results in more than one entities.

##### list()

```ts
list(): U[];
```


Executes the query and get a list of entities as the result.

##### listPage()
**Parameters**
### TaskInfoQuery
#### Extends
#### Type Parameters
#### Methods
##### asc()
> ::: info Returns
> - **Type**: `T`
> :::
###### Inherited from

[`Query`](#query).[`asc`](#asc)

##### desc()

```ts
desc(): T;
```


Order the results descending on the given property as defined in this class (needs to come after a call to one of the orderByXxxx methods).

> ::: info Returns
> - **Type**: `T`
> :::
###### Inherited from

[`Query`](#query).[`desc`](#desc)

##### orderBy()

###### Call Signature

```ts
orderBy(property): T;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `property` | [`QueryProperty`](#queryproperty) |

> ::: info Returns
> - **Type**: `T`
> :::
###### Inherited from

[`Query`](#query).[`orderBy`](#orderby)

###### Call Signature

```ts
orderBy(property, nullHandlingOnOrder): T;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `property` | [`QueryProperty`](#queryproperty) |
| `nullHandlingOnOrder` | [`NullHandlingOnOrder`](#nullhandlingonorder) |

> ::: info Returns
> - **Type**: `T`
> :::
###### Inherited from

[`Query`](#query).[`orderBy`](#orderby)

##### count()

```ts
count(): number;
```


Executes the query and returns the number of results

> ::: info Returns
> - **Type**: `number`
> :::
###### Inherited from

[`Query`](#query).[`count`](#count)

##### singleResult()

```ts
singleResult(): V;
```


Executes the query and returns the resulting entity or null if no entity matches the query criteria.

> ::: info Returns
> - **Type**: `V`
> :::
###### Throws

org.flowable.common.engine.api.FlowableException when the query results in more than one entities.

###### Inherited from

[`Query`](#query).[`singleResult`](#singleresult)

##### list()

```ts
list(): V[];
```


Executes the query and get a list of entities as the result.

###### Inherited from
##### listPage()
**Parameters**
###### Inherited from
##### taskId()
**Parameters**
> ::: info Returns
> - **Type**: `T`
> :::
##### taskIds()

```ts
taskIds(taskIds): T;
```


Only select tasks with an id that is in the given list

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskIds` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> :::
###### Throws

FlowableIllegalArgumentException
            When passed id list is empty or null or contains null String.

##### taskName()

```ts
taskName(name): T;
```


Only select tasks with the given name

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskNameIn()

```ts
taskNameIn(nameList): T;
```


Only select tasks with a name that is in the given list

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `nameList` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> :::
###### Throws

FlowableIllegalArgumentException
            When passed name list is empty or null or contains null String.

##### taskNameInIgnoreCase()

```ts
taskNameInIgnoreCase(nameList): T;
```


Only select tasks with a name that is in the given list

This method, unlike the #taskNameIn(Collection) method will not take in account the upper/lower case: both the input parameters as the column value are lowercased when the query is executed.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `nameList` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> :::
###### Throws

FlowableIllegalArgumentException
            When passed name list is empty or null or contains null String.

##### taskNameLike()

```ts
taskNameLike(nameLike): T;
```


Only select tasks with a name matching the parameter. The syntax is that of SQL: for example usage: nameLike(%test%)

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `nameLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskNameLikeIgnoreCase()

```ts
taskNameLikeIgnoreCase(nameLike): T;
```


Only select tasks with a name matching the parameter. The syntax is that of SQL: for example usage: nameLike(%test%)

This method, unlike the #taskNameLike(String) method will not take in account the upper/lower case: both the input parameter as the column value are lowercased when the query is
executed.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `nameLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskDescription()

```ts
taskDescription(description): T;
```


Only select tasks with the given description.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `description` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskDescriptionLike()

```ts
taskDescriptionLike(descriptionLike): T;
```


Only select tasks with a description matching the parameter . The syntax is that of SQL: for example usage: descriptionLike(%test%)

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `descriptionLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskDescriptionLikeIgnoreCase()

```ts
taskDescriptionLikeIgnoreCase(descriptionLike): T;
```


Only select tasks with a description matching the parameter . The syntax is that of SQL: for example usage: descriptionLike(%test%)

This method, unlike the #taskDescriptionLike(String) method will not take in account the upper/lower case: both the input parameter as the column value are lowercased when the query is
executed.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `descriptionLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskPriority()

```ts
taskPriority(priority): T;
```


Only select tasks with the given priority.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `priority` | `number` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskMinPriority()

```ts
taskMinPriority(minPriority): T;
```


Only select tasks with the given priority or higher.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `minPriority` | `number` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskMaxPriority()

```ts
taskMaxPriority(maxPriority): T;
```


Only select tasks with the given priority or lower.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `maxPriority` | `number` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskAssignee()

```ts
taskAssignee(assignee): T;
```


Only select tasks which are assigned to the given user.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `assignee` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskAssigneeLike()

```ts
taskAssigneeLike(assigneeLike): T;
```


Only select tasks which were last assigned to an assignee like the given value. The syntax that should be used is the same as in SQL, eg. %test%.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `assigneeLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskAssigneeLikeIgnoreCase()

```ts
taskAssigneeLikeIgnoreCase(assigneeLikeIgnoreCase): T;
```


Only select tasks which were last assigned to an assignee like the given value. The syntax that should be used is the same as in SQL, eg. %test%.

This method, unlike the #taskAssigneeLike(String) method will not take in account the upper/lower case: both the input parameter as the column value are lowercased when the query is
executed.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `assigneeLikeIgnoreCase` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskUnassigned()

```ts
taskUnassigned(): T;
```


Only select tasks which don't have an assignee.

> ::: info Returns
> - **Type**: `T`
> :::
##### taskAssigned()

```ts
taskAssigned(): T;
```


Only select tasks which are assigned to any user

> ::: info Returns
> - **Type**: `T`
> :::
##### taskAssigneeIds()

```ts
taskAssigneeIds(assigneeListIds): T;
```


Only select tasks with an assignee that is in the given list

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `assigneeListIds` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> :::
###### Throws

FlowableIllegalArgumentException
            When passed name list is empty or null or contains null String.

##### taskOwner()

```ts
taskOwner(owner): T;
```


Only select tasks for which the given user is the owner.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `owner` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskOwnerLike()

```ts
taskOwnerLike(ownerLike): T;
```


Only select tasks which were last assigned to an owner like the given value. The syntax that should be used is the same as in SQL, eg. %test%.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `ownerLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskOwnerLikeIgnoreCase()

```ts
taskOwnerLikeIgnoreCase(ownerLikeIgnoreCase): T;
```


Only select tasks which were last assigned to an owner like the given value. The syntax that should be used is the same as in SQL, eg. %test%.

This method, unlike the #taskOwnerLike(String) method will not take in account the upper/lower case: both the input parameter as the column value are lowercased when the query is
executed.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `ownerLikeIgnoreCase` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskCandidateUser()

```ts
taskCandidateUser(candidateUser): T;
```


Only select tasks for which the given user is a candidate.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `candidateUser` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskInvolvedUser()

```ts
taskInvolvedUser(involvedUser): T;
```


Only select tasks for which there exist an [IdentityLink](#identitylink) with the given user, including tasks which have been assigned to the given user (assignee) or owned by the given user (owner).

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `involvedUser` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskInvolvedGroups()

```ts
taskInvolvedGroups(involvedGroup): T;
```


Only select tasks for which there exist an [IdentityLink](#identitylink) with the given Groups.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `involvedGroup` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> :::
##### ignoreAssigneeValue()

```ts
ignoreAssigneeValue(): T;
```


Allows to select a task using #taskCandidateGroup(String) #taskCandidateGroupIn(Collection) or #taskCandidateUser(String) but ignore the assignee value instead of querying for an empty assignee.

> ::: info Returns
> - **Type**: `T`
> :::
##### taskCandidateGroup()

```ts
taskCandidateGroup(candidateGroup): T;
```


Only select tasks for which users in the given group are candidates.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `candidateGroup` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskCandidateGroupIn()

```ts
taskCandidateGroupIn(candidateGroups): T;
```


Only select tasks for which the 'candidateGroup' is one of the given groups.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `candidateGroups` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> :::
###### Throws

FlowableIllegalArgumentException
            When query is executed and #taskCandidateGroup(String) or #taskCandidateUser(String) has been executed on the query instance. When passed group list is empty or
            null.

##### taskTenantId()

```ts
taskTenantId(tenantId): T;
```


Only select tasks that have the given tenant id.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `tenantId` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskTenantIdLike()

```ts
taskTenantIdLike(tenantIdLike): T;
```


Only select tasks with a tenant id like the given one.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `tenantIdLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskWithoutTenantId()

```ts
taskWithoutTenantId(): T;
```


Only select tasks that do not have a tenant id.

> ::: info Returns
> - **Type**: `T`
> :::
##### processInstanceId()

```ts
processInstanceId(processInstanceId): T;
```


Only select tasks for the given process instance id.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `processInstanceId` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### processInstanceIdIn()

```ts
processInstanceIdIn(processInstanceIds): T;
```


Only select tasks for the given process ids.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `processInstanceIds` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> :::
##### withoutProcessInstanceId()

```ts
withoutProcessInstanceId(): T;
```


Only select tasks without a process instance id.

> ::: info Returns
> - **Type**: `T`
> :::
##### processInstanceBusinessKey()

```ts
processInstanceBusinessKey(processInstanceBusinessKey): T;
```


Only select tasks for the given business key

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `processInstanceBusinessKey` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### processInstanceBusinessKeyLike()

```ts
processInstanceBusinessKeyLike(processInstanceBusinessKeyLike): T;
```


Only select tasks with a business key like the given value The syntax is that of SQL: for example usage: processInstanceBusinessKeyLike("%test%").

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `processInstanceBusinessKeyLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### processInstanceBusinessKeyLikeIgnoreCase()

```ts
processInstanceBusinessKeyLikeIgnoreCase(processInstanceBusinessKeyLikeIgnoreCase): T;
```


Only select tasks with a business key like the given value The syntax is that of SQL: for example usage: processInstanceBusinessKeyLike("%test%").

This method, unlike the #processInstanceBusinessKeyLike(String) method will not take in account the upper/lower case: both the input parameter as the column value are lowercased when
the query is executed.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `processInstanceBusinessKeyLikeIgnoreCase` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### executionId()

```ts
executionId(executionId): T;
```


Only select tasks for the given execution.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `executionId` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### caseInstanceId()

```ts
caseInstanceId(caseInstanceId): T;
```


Only select tasks for the given case instance.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `caseInstanceId` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### caseDefinitionId()

```ts
caseDefinitionId(caseDefinitionId): T;
```


Only select tasks for the given case definition.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `caseDefinitionId` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### caseDefinitionKey()

```ts
caseDefinitionKey(caseDefinitionKey): T;
```


Only select tasks which are part of a case instance which has the given case definition key.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `caseDefinitionKey` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### caseDefinitionKeyLike()

```ts
caseDefinitionKeyLike(caseDefinitionKeyLike): T;
```


Only select tasks which are part of a case instance which has a case definition key like the given value. The syntax that should be used is the same as in SQL, eg. %test%.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `caseDefinitionKeyLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### caseDefinitionKeyLikeIgnoreCase()

```ts
caseDefinitionKeyLikeIgnoreCase(caseDefinitionKeyLikeIgnoreCase): T;
```


Only select tasks which are part of a case instance which has a case definition key like the given value. The syntax that should be used is the same as in SQL, eg. %test%.

This method, unlike the #caseDefinitionKeyLike(String) method will not take in account the upper/lower case: both the input parameter as the column value are lowercased when the
query is executed.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `caseDefinitionKeyLikeIgnoreCase` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### caseDefinitionKeyIn()

```ts
caseDefinitionKeyIn(caseDefinitionKeys): T;
```


Only select tasks that have a case definition for which the key is present in the given list *

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `caseDefinitionKeys` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> :::
##### planItemInstanceId()

```ts
planItemInstanceId(planItemInstanceId): T;
```


Only select tasks for the given plan item instance.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `planItemInstanceId` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### scopeId()

```ts
scopeId(scopeId): T;
```


Only select tasks for the given scope identifier.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `scopeId` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### subScopeId()

```ts
subScopeId(subScopeId): T;
```


Only select tasks for the given sub scope identifier.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `subScopeId` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### scopeType()

```ts
scopeType(scopeType): T;
```


Only select tasks for the given scope type.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `scopeType` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### scopeDefinitionId()

```ts
scopeDefinitionId(scopeDefinitionId): T;
```


Only select tasks for the given scope definition identifier.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `scopeDefinitionId` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### propagatedStageInstanceId()

```ts
propagatedStageInstanceId(propagatedStageInstanceId): T;
```


Only select tasks for the given stage, defined through its stage instance id.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `propagatedStageInstanceId` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### processInstanceIdWithChildren()

```ts
processInstanceIdWithChildren(processInstanceId): T;
```


Select all tasks for the given process instance id and its children.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `processInstanceId` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### caseInstanceIdWithChildren()

```ts
caseInstanceIdWithChildren(caseInstanceId): T;
```


Select all tasks for the given case instance id and its children.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `caseInstanceId` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskCreatedOn()

```ts
taskCreatedOn(createTime): T;
```


Only select tasks that are created on the given date.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `createTime` | `Date` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskCreatedBefore()

```ts
taskCreatedBefore(before): T;
```


Only select tasks that are created before the given date.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `before` | `Date` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskCreatedAfter()

```ts
taskCreatedAfter(after): T;
```


Only select tasks that are created after the given date.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `after` | `Date` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskInProgressStartTimeOn()

```ts
taskInProgressStartTimeOn(claimedTime): T;
```


Only select tasks that are started in progress on the given date.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `claimedTime` | `Date` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskInProgressStartTimeBefore()

```ts
taskInProgressStartTimeBefore(before): T;
```


Only select tasks that are started in progress before the given date.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `before` | `Date` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskInProgressStartTimeAfter()

```ts
taskInProgressStartTimeAfter(after): T;
```


Only select tasks that are started in progress after the given date.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `after` | `Date` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskInProgressStartedBy()

```ts
taskInProgressStartedBy(startedBy): T;
```


Select all tasks that have an in progress started user reference for the given value.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `startedBy` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskClaimedOn()

```ts
taskClaimedOn(claimedTime): T;
```


Only select tasks that are claimed on the given date.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `claimedTime` | `Date` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskClaimedBefore()

```ts
taskClaimedBefore(before): T;
```


Only select tasks that are claimed before the given date.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `before` | `Date` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskClaimedAfter()

```ts
taskClaimedAfter(after): T;
```


Only select tasks that are claimed after the given date.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `after` | `Date` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskClaimedBy()

```ts
taskClaimedBy(claimedBy): T;
```


Select all tasks that have a claimed by user reference for the given value.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `claimedBy` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskSuspendedOn()

```ts
taskSuspendedOn(suspendedTime): T;
```


Only select tasks that are suspended on the given date.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `suspendedTime` | `Date` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskSuspendedBefore()

```ts
taskSuspendedBefore(before): T;
```


Only select tasks that are suspended before the given date.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `before` | `Date` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskSuspendedAfter()

```ts
taskSuspendedAfter(after): T;
```


Only select tasks that are suspended after the given date.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `after` | `Date` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskSuspendedBy()

```ts
taskSuspendedBy(suspendedBy): T;
```


Select all tasks that have a suspended by user reference for the given value.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `suspendedBy` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskCategory()

```ts
taskCategory(category): T;
```


Only select tasks with the given category.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `category` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskCategoryIn()

```ts
taskCategoryIn(taskCategoryInList): T;
```


Only select tasks belonging to one of the categories in the given list.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskCategoryInList` | `string`[] | - |

> ::: info Returns
> - **Type**: `T`
> :::
###### Throws

FlowableIllegalArgumentException When passed category list is empty or null or contains null String.

##### taskCategoryNotIn()

```ts
taskCategoryNotIn(taskCategoryNotInList): T;
```


Only select tasks with a defined category which do not belong to a category present in the given list.

NOTE: This method does not return tasks without category e.g. tasks having a null category.
To include null categories, use query.or().taskCategoryNotIn(...).taskWithoutCategory().endOr()


**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskCategoryNotInList` | `string`[] | - |

> ::: info Returns
> - **Type**: `T`
> :::
###### Throws

FlowableIllegalArgumentException When passed category list is empty or null or contains null String.

###### See

#taskWithoutCategory

##### taskWithoutCategory()

```ts
taskWithoutCategory(): T;
```


Selects tasks without category.

Can also be used in conjunction with other filter criteria to include tasks without category e.g. in or queries.


> ::: info Returns
> - **Type**: `T`
> :::
###### See

#taskCategoryNotIn(Collection)

##### taskWithFormKey()

```ts
taskWithFormKey(): T;
```


Only select tasks with form key.

> ::: info Returns
> - **Type**: `T`
> :::
##### taskFormKey()

```ts
taskFormKey(formKey): T;
```


Only select tasks with the given formKey.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `formKey` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskDefinitionKey()

```ts
taskDefinitionKey(key): T;
```


Only select tasks with the given taskDefinitionKey. The task definition key is the id of the userTask: &lt;userTask id="xxx" .../&gt;

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskDefinitionKeyLike()

```ts
taskDefinitionKeyLike(keyLike): T;
```


Only select tasks with a taskDefinitionKey that match the given parameter. The syntax is that of SQL: for example usage: taskDefinitionKeyLike("%test%"). The task definition key is the id of
the userTask: &lt;userTask id="xxx" .../&gt;

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `keyLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskDefinitionKeys()

```ts
taskDefinitionKeys(keys): T;
```


Only select tasks with the given taskDefinitionKeys. The task definition key is the id of the userTask: &lt;userTask id="xxx" .../&gt;

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `keys` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskState()

```ts
taskState(state): T;
```


Only select tasks with the given state.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `state` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskInProgressStartDueDate()

```ts
taskInProgressStartDueDate(dueDate): T;
```


Only select tasks with the given in progress start due date.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `dueDate` | `Date` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskInProgressStartDueBefore()

```ts
taskInProgressStartDueBefore(dueDate): T;
```


Only select tasks which have an in progress start due date before the given date.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `dueDate` | `Date` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskInProgressStartDueAfter()

```ts
taskInProgressStartDueAfter(dueDate): T;
```


Only select tasks which have an in progress start due date after the given date.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `dueDate` | `Date` |

> ::: info Returns
> - **Type**: `T`
> :::
##### withoutTaskInProgressStartDueDate()

```ts
withoutTaskInProgressStartDueDate(): T;
```


Only select tasks with no in progress start due date.

> ::: info Returns
> - **Type**: `T`
> :::
##### taskDueDate()

```ts
taskDueDate(dueDate): T;
```


Only select tasks with the given due date.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `dueDate` | `Date` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskDueBefore()

```ts
taskDueBefore(dueDate): T;
```


Only select tasks which have a due date before the given date.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `dueDate` | `Date` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskDueAfter()

```ts
taskDueAfter(dueDate): T;
```


Only select tasks which have a due date after the given date.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `dueDate` | `Date` |

> ::: info Returns
> - **Type**: `T`
> :::
##### withoutTaskDueDate()

```ts
withoutTaskDueDate(): T;
```


Only select tasks with no due date.

> ::: info Returns
> - **Type**: `T`
> :::
##### processDefinitionKey()

```ts
processDefinitionKey(processDefinitionKey): T;
```


Only select tasks which are part of a process instance which has the given process definition key.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `processDefinitionKey` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### processDefinitionKeyLike()

```ts
processDefinitionKeyLike(processDefinitionKeyLike): T;
```


Only select tasks which are part of a process instance which has a process definition key like the given value. The syntax that should be used is the same as in SQL, eg. %test%.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `processDefinitionKeyLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### processDefinitionKeyLikeIgnoreCase()

```ts
processDefinitionKeyLikeIgnoreCase(processDefinitionKeyLikeIgnoreCase): T;
```


Only select tasks which are part of a process instance which has a process definition key like the given value. The syntax that should be used is the same as in SQL, eg. %test%.

This method, unlike the #processDefinitionKeyLike(String) method will not take in account the upper/lower case: both the input parameter as the column value are lowercased when the
query is executed.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `processDefinitionKeyLikeIgnoreCase` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### processDefinitionKeyIn()

```ts
processDefinitionKeyIn(processDefinitionKeys): T;
```


Only select tasks that have a process definition for which the key is present in the given list *

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `processDefinitionKeys` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskDefinitionId()

```ts
taskDefinitionId(taskDefinitionId): T;
```


Only select tasks which created from the given task definition referenced by id.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `taskDefinitionId` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### processDefinitionId()

```ts
processDefinitionId(processDefinitionId): T;
```


Only select tasks which are part of a process instance which has the given process definition id.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `processDefinitionId` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### processDefinitionName()

```ts
processDefinitionName(processDefinitionName): T;
```


Only select tasks which are part of a process instance which has the given process definition name.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `processDefinitionName` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### processDefinitionNameLike()

```ts
processDefinitionNameLike(processDefinitionNameLike): T;
```


Only select tasks which are part of a process instance which has a process definition name like the given value. The syntax that should be used is the same as in SQL, eg. %test%.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `processDefinitionNameLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### processCategoryIn()

```ts
processCategoryIn(processCategoryInList): T;
```


Only select tasks which are part of a process instance whose definition belongs to the category which is present in the given list.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `processCategoryInList` | `string`[] | - |

> ::: info Returns
> - **Type**: `T`
> :::
###### Throws

FlowableIllegalArgumentException
            When passed category list is empty or null or contains null String.

##### processCategoryNotIn()

```ts
processCategoryNotIn(processCategoryNotInList): T;
```


Only select tasks which are part of a process instance whose definition does not belong to the category which is present in the given list.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `processCategoryNotInList` | `string`[] | - |

> ::: info Returns
> - **Type**: `T`
> :::
###### Throws

FlowableIllegalArgumentException
            When passed category list is empty or null or contains null String.

##### deploymentId()

```ts
deploymentId(deploymentId): T;
```


Only select tasks which are part of a process instance which has the given deployment id.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `deploymentId` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### deploymentIdIn()

```ts
deploymentIdIn(deploymentIds): T;
```


Only select tasks which are part of a process instance which has the given deployment id.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `deploymentIds` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> :::
##### cmmnDeploymentId()

```ts
cmmnDeploymentId(cmmnDeploymentId): T;
```


Only select tasks which are related to a case instance for to the given deployment id.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `cmmnDeploymentId` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### cmmnDeploymentIdIn()

```ts
cmmnDeploymentIdIn(cmmnDeploymentIds): T;
```


Only select tasks which are related to a case instances for the given deployment id.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `cmmnDeploymentIds` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> :::
##### withoutScopeId()

```ts
withoutScopeId(): T;
```


Only select tasks which don't have a scope id set.

> ::: info Returns
> - **Type**: `T`
> :::
##### taskVariableValueEquals()

###### Call Signature

```ts
taskVariableValueEquals(variableName, variableValue): T;
```


Only select tasks which have a local task variable with the given name set to the given value.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `variableName` | `string` |
| `variableValue` | `any` |

> ::: info Returns
> - **Type**: `T`
> :::
###### Call Signature

```ts
taskVariableValueEquals(variableValue): T;
```


Only select tasks which have at least one local task variable with the given value.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `variableValue` | `any` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskVariableValueEqualsIgnoreCase()

```ts
taskVariableValueEqualsIgnoreCase(name, value): T;
```


Only select tasks which have a local string variable with the given value, case insensitive.

This method only works if your database has encoding/collation that supports case-sensitive queries. For example, use "collate UTF-8" on MySQL and for MSSQL, select one of the case-sensitive
Collations available (MSDN Server Collation Reference).


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskVariableValueNotEquals()

```ts
taskVariableValueNotEquals(variableName, variableValue): T;
```


Only select tasks which have a local task variable with the given name, but with a different value than the passed value. Byte-arrays and Serializable objects (which are not primitive
type wrappers) are not supported.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `variableName` | `string` |
| `variableValue` | `any` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskVariableValueNotEqualsIgnoreCase()

```ts
taskVariableValueNotEqualsIgnoreCase(name, value): T;
```


Only select tasks which have a local string variable with is not the given value, case insensitive.

This method only works if your database has encoding/collation that supports case-sensitive queries. For example, use "collate UTF-8" on MySQL and for MSSQL, select one of the case-sensitive
Collations available (MSDN Server Collation Reference).


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskVariableValueGreaterThan()

```ts
taskVariableValueGreaterThan(name, value): T;
```


Only select tasks which have a local variable value greater than the passed value when they ended. Booleans, Byte-arrays and Serializable objects (which are not primitive type wrappers)
are not supported.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |
| `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskVariableValueGreaterThanOrEqual()

```ts
taskVariableValueGreaterThanOrEqual(name, value): T;
```


Only select tasks which have a local variable value greater than or equal to the passed value when they ended. Booleans, Byte-arrays and Serializable objects (which are not primitive
type wrappers) are not supported.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |
| `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskVariableValueLessThan()

```ts
taskVariableValueLessThan(name, value): T;
```


Only select tasks which have a local variable value less than the passed value when the ended.Booleans, Byte-arrays and Serializable objects (which are not primitive type wrappers) are
not supported.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |
| `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskVariableValueLessThanOrEqual()

```ts
taskVariableValueLessThanOrEqual(name, value): T;
```


Only select tasks which have a local variable value less than or equal to the passed value when they ended. Booleans, Byte-arrays and Serializable objects (which are not primitive type
wrappers) are not supported.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |
| `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskVariableValueLike()

```ts
taskVariableValueLike(name, value): T;
```


Only select tasks which have a local variable value like the given value when they ended. This can be used on string variables only.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |
| `value` | `string` | cannot be null. The string can include the wildcard character '%' to express like-strategy: starts with (string%), ends with (%string) or contains (%string%). |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskVariableValueLikeIgnoreCase()

```ts
taskVariableValueLikeIgnoreCase(name, value): T;
```


Only select tasks which have a local variable value like the given value (case insensitive) when they ended. This can be used on string variables only.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |
| `value` | `string` | cannot be null. The string can include the wildcard character '%' to express like-strategy: starts with (string%), ends with (%string) or contains (%string%). |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskVariableExists()

```ts
taskVariableExists(name): T;
```


Only select tasks which have a local variable with the given name.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskVariableNotExists()

```ts
taskVariableNotExists(name): T;
```


Only select tasks which does not have a local variable with the given name.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> :::
##### processVariableValueEquals()

###### Call Signature

```ts
processVariableValueEquals(variableName, variableValue): T;
```


Only select tasks which are part of a process that has a variable with the given name set to the given value.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `variableName` | `string` |
| `variableValue` | `any` |

> ::: info Returns
> - **Type**: `T`
> :::
###### Call Signature

```ts
processVariableValueEquals(variableValue): T;
```


Only select tasks which are part of a process that has at least one variable with the given value.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `variableValue` | `any` |

> ::: info Returns
> - **Type**: `T`
> :::
##### processVariableValueEqualsIgnoreCase()

```ts
processVariableValueEqualsIgnoreCase(name, value): T;
```


Only select tasks which are part of a process that has a local string variable which is not the given value, case insensitive.

This method only works if your database has encoding/collation that supports case-sensitive queries. For example, use "collate UTF-8" on MySQL and for MSSQL, select one of the case-sensitive
Collations available (MSDN Server Collation Reference).


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### processVariableValueNotEquals()

```ts
processVariableValueNotEquals(variableName, variableValue): T;
```


Only select tasks which have a variable with the given name, but with a different value than the passed value. Byte-arrays and Serializable objects (which are not primitive type
wrappers) are not supported.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `variableName` | `string` |
| `variableValue` | `any` |

> ::: info Returns
> - **Type**: `T`
> :::
##### processVariableValueNotEqualsIgnoreCase()

```ts
processVariableValueNotEqualsIgnoreCase(name, value): T;
```


Only select tasks which are part of a process that has a string variable with the given value, case insensitive.

This method only works if your database has encoding/collation that supports case-sensitive queries. For example, use "collate UTF-8" on MySQL and for MSSQL, select one of the case-sensitive
Collations available (MSDN Server Collation Reference).


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### processVariableValueGreaterThan()

```ts
processVariableValueGreaterThan(name, value): T;
```


Only select tasks which have a global variable value greater than the passed value when they ended. Booleans, Byte-arrays and Serializable objects (which are not primitive type
wrappers) are not supported.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |
| `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> :::
##### processVariableValueGreaterThanOrEqual()

```ts
processVariableValueGreaterThanOrEqual(name, value): T;
```


Only select tasks which have a global variable value greater than or equal to the passed value when they ended. Booleans, Byte-arrays and Serializable objects (which are not primitive
type wrappers) are not supported.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |
| `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> :::
##### processVariableValueLessThan()

```ts
processVariableValueLessThan(name, value): T;
```


Only select tasks which have a global variable value less than the passed value when the ended.Booleans, Byte-arrays and Serializable objects (which are not primitive type wrappers) are
not supported.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |
| `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> :::
##### processVariableValueLessThanOrEqual()

```ts
processVariableValueLessThanOrEqual(name, value): T;
```


Only select tasks which have a global variable value less than or equal to the passed value when they ended. Booleans, Byte-arrays and Serializable objects (which are not primitive type
wrappers) are not supported.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |
| `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> :::
##### processVariableValueLike()

```ts
processVariableValueLike(name, value): T;
```


Only select tasks which have a global variable value like the given value when they ended. This can be used on string variables only.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |
| `value` | `string` | cannot be null. The string can include the wildcard character '%' to express like-strategy: starts with (string%), ends with (%string) or contains (%string%). |

> ::: info Returns
> - **Type**: `T`
> :::
##### processVariableValueLikeIgnoreCase()

```ts
processVariableValueLikeIgnoreCase(name, value): T;
```


Only select tasks which have a global variable value like the given value (case insensitive) when they ended. This can be used on string variables only.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |
| `value` | `string` | cannot be null. The string can include the wildcard character '%' to express like-strategy: starts with (string%), ends with (%string) or contains (%string%). |

> ::: info Returns
> - **Type**: `T`
> :::
##### processVariableExists()

```ts
processVariableExists(name): T;
```


Only select tasks which have a global variable with the given name.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> :::
##### processVariableNotExists()

```ts
processVariableNotExists(name): T;
```


Only select tasks which does not have a global variable with the given name.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> :::
##### caseVariableValueEquals()

###### Call Signature

```ts
caseVariableValueEquals(variableName, variableValue): T;
```


Only select tasks which are part of a case that has a variable with the given name set to the given value.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `variableName` | `string` |
| `variableValue` | `any` |

> ::: info Returns
> - **Type**: `T`
> :::
###### Call Signature

```ts
caseVariableValueEquals(variableValue): T;
```


Only select tasks which are part of a case that has at least one variable with the given value.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `variableValue` | `any` |

> ::: info Returns
> - **Type**: `T`
> :::
##### caseVariableValueEqualsIgnoreCase()

```ts
caseVariableValueEqualsIgnoreCase(name, value): T;
```


Only select tasks which are part of a case that has a local string variable which is not the given value, case insensitive.

This method only works if your database has encoding/collation that supports case-sensitive queries. For example, use "collate UTF-8" on MySQL and for MSSQL, select one of the case-sensitive
Collations available (MSDN Server Collation Reference).


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### caseVariableValueNotEquals()

```ts
caseVariableValueNotEquals(variableName, variableValue): T;
```


Only select tasks which have a variable with the given name, but with a different value than the passed value. Byte-arrays and Serializable objects (which are not primitive type
wrappers) are not supported.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `variableName` | `string` |
| `variableValue` | `any` |

> ::: info Returns
> - **Type**: `T`
> :::
##### caseVariableValueNotEqualsIgnoreCase()

```ts
caseVariableValueNotEqualsIgnoreCase(name, value): T;
```


Only select tasks which are part of a case that has a string variable with the given value, case insensitive.

This method only works if your database has encoding/collation that supports case-sensitive queries. For example, use "collate UTF-8" on MySQL and for MSSQL, select one of the case-sensitive
Collations available (MSDN Server Collation Reference).


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### caseVariableValueGreaterThan()

```ts
caseVariableValueGreaterThan(name, value): T;
```


Only select tasks which have a global variable value greater than the passed value when they ended. Booleans, Byte-arrays and Serializable objects (which are not primitive type
wrappers) are not supported.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |
| `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> :::
##### caseVariableValueGreaterThanOrEqual()

```ts
caseVariableValueGreaterThanOrEqual(name, value): T;
```


Only select tasks which have a global variable value greater than or equal to the passed value when they ended. Booleans, Byte-arrays and Serializable objects (which are not primitive
type wrappers) are not supported.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |
| `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> :::
##### caseVariableValueLessThan()

```ts
caseVariableValueLessThan(name, value): T;
```


Only select tasks which have a global variable value less than the passed value when the ended.Booleans, Byte-arrays and Serializable objects (which are not primitive type wrappers) are
not supported.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |
| `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> :::
##### caseVariableValueLessThanOrEqual()

```ts
caseVariableValueLessThanOrEqual(name, value): T;
```


Only select tasks which have a global variable value less than or equal to the passed value when they ended. Booleans, Byte-arrays and Serializable objects (which are not primitive type
wrappers) are not supported.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |
| `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> :::
##### caseVariableValueLike()

```ts
caseVariableValueLike(name, value): T;
```


Only select tasks which have a global variable value like the given value when they ended. This can be used on string variables only.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |
| `value` | `string` | cannot be null. The string can include the wildcard character '%' to express like-strategy: starts with (string%), ends with (%string) or contains (%string%). |

> ::: info Returns
> - **Type**: `T`
> :::
##### caseVariableValueLikeIgnoreCase()

```ts
caseVariableValueLikeIgnoreCase(name, value): T;
```


Only select tasks which have a global variable value like the given value (case insensitive) when they ended. This can be used on string variables only.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |
| `value` | `string` | cannot be null. The string can include the wildcard character '%' to express like-strategy: starts with (string%), ends with (%string) or contains (%string%). |

> ::: info Returns
> - **Type**: `T`
> :::
##### caseVariableExists()

```ts
caseVariableExists(name): T;
```


Only select tasks which have a global variable with the given name.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> :::
##### caseVariableNotExists()

```ts
caseVariableNotExists(name): T;
```


Only select tasks which does not have a global variable with the given name.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskRootScopeId()

```ts
taskRootScopeId(parentScopeId): T;
```


Only selects tasks which with the given root scope id

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parentScopeId` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### taskParentScopeId()

```ts
taskParentScopeId(parentScopeId): T;
```


Only selects tasks which with the given parent scope id

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parentScopeId` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### includeTaskLocalVariables()

```ts
includeTaskLocalVariables(): T;
```


Include local task variables in the task query result

> ::: info Returns
> - **Type**: `T`
> :::
##### includeProcessVariables()

```ts
includeProcessVariables(): T;
```


Include global process variables in the task query result

> ::: info Returns
> - **Type**: `T`
> :::
##### includeCaseVariables()

```ts
includeCaseVariables(): T;
```


Include global case variables in the task query result

> ::: info Returns
> - **Type**: `T`
> :::
##### includeIdentityLinks()

```ts
includeIdentityLinks(): T;
```


Include identity links in the task query result

> ::: info Returns
> - **Type**: `T`
> :::
##### locale()

```ts
locale(locale): T;
```


Localize task name and description to specified locale.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `locale` | `string` |

> ::: info Returns
> - **Type**: `T`
> :::
##### withLocalizationFallback()

```ts
withLocalizationFallback(): T;
```


Instruct localization to fallback to more general locales including the default locale of the JVM if the specified locale is not found.

> ::: info Returns
> - **Type**: `T`
> :::
##### or()

```ts
or(): T;
```


All query clauses called will be added to a single or-statement. This or-statement will be included with the other already existing clauses in the query, joined by an 'and'.

Calling endOr() will add all clauses to the regular query again. Calling or() after or() has been called or calling endOr() after endOr() has been called will result in an exception.
It is possible to call or() endOr() several times if each or() has a matching endOr(), e.g.:

query.\
.or().\.\.endOr()
.\.\
.or().\.\.endOr()

will result in: conditionA &amp; (conditionB | conditionC) &amp; conditionD &amp; conditionE &amp; (conditionF | conditionG)

> ::: info Returns
> - **Type**: `T`
> :::
##### endOr()

```ts
endOr(): T;
```


> ::: info Returns
> - **Type**: `T`
> :::
##### orderByTaskId()

```ts
orderByTaskId(): T;
```


Order by task id (needs to be followed by #asc() or #desc()).

> ::: info Returns
> - **Type**: `T`
> :::
##### orderByTaskName()

```ts
orderByTaskName(): T;
```


Order by task name (needs to be followed by #asc() or #desc()).

> ::: info Returns
> - **Type**: `T`
> :::
##### orderByTaskDescription()

```ts
orderByTaskDescription(): T;
```


Order by description (needs to be followed by #asc() or #desc()).

> ::: info Returns
> - **Type**: `T`
> :::
##### orderByTaskPriority()

```ts
orderByTaskPriority(): T;
```


Order by priority (needs to be followed by #asc() or #desc()).

> ::: info Returns
> - **Type**: `T`
> :::
##### orderByTaskAssignee()

```ts
orderByTaskAssignee(): T;
```


Order by assignee (needs to be followed by #asc() or #desc()).

> ::: info Returns
> - **Type**: `T`
> :::
##### orderByTaskCreateTime()

```ts
orderByTaskCreateTime(): T;
```


Order by the time on which the tasks were created (needs to be followed by #asc() or #desc()).

> ::: info Returns
> - **Type**: `T`
> :::
##### orderByProcessInstanceId()

```ts
orderByProcessInstanceId(): T;
```


Order by process instance id (needs to be followed by #asc() or #desc()).

> ::: info Returns
> - **Type**: `T`
> :::
##### orderByExecutionId()

```ts
orderByExecutionId(): T;
```


Order by execution id (needs to be followed by #asc() or #desc()).

> ::: info Returns
> - **Type**: `T`
> :::
##### orderByProcessDefinitionId()

```ts
orderByProcessDefinitionId(): T;
```


Order by process definition id (needs to be followed by #asc() or #desc()).

> ::: info Returns
> - **Type**: `T`
> :::
##### orderByTaskDueDate()

```ts
orderByTaskDueDate(): T;
```


Order by task due date (needs to be followed by #asc() or #desc()).

> ::: info Returns
> - **Type**: `T`
> :::
##### orderByTaskOwner()

```ts
orderByTaskOwner(): T;
```


Order by task owner (needs to be followed by #asc() or #desc()).

> ::: info Returns
> - **Type**: `T`
> :::
##### orderByTaskDefinitionKey()

```ts
orderByTaskDefinitionKey(): T;
```


Order by task definition key (needs to be followed by #asc() or #desc()).

> ::: info Returns
> - **Type**: `T`
> :::
##### orderByTenantId()

```ts
orderByTenantId(): T;
```


Order by tenant id (needs to be followed by #asc() or #desc()).

> ::: info Returns
> - **Type**: `T`
> :::
##### orderByDueDateNullsFirst()

```ts
orderByDueDateNullsFirst(): T;
```


Order by due date (needs to be followed by #asc() or #desc()). If any of the tasks have null for the due date, these will be first in the result.

> ::: info Returns
> - **Type**: `T`
> :::
##### orderByDueDateNullsLast()

```ts
orderByDueDateNullsLast(): T;
```


Order by due date (needs to be followed by #asc() or #desc()). If any of the tasks have null for the due date, these will be last in the result.

> ::: info Returns
> - **Type**: `T`
> :::
##### orderByCategory()

```ts
orderByCategory(): T;
```


Order by category (needs to be followed by #asc() or #desc()).

> ::: info Returns
> - **Type**: `T`
> :::