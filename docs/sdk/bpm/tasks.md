# bpm/tasks

> [!tip]
> Auto-generated from
> - source: [bpm/tasks.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/bpm/tasks.ts)
> - version: 1.0.0


## Overview

API Tasks
/

## Table of Contents

- [Overview](#overview)
- [Enumerations](#enumerations)
  - [DelegationState](#delegationstate)
  - [NullHandlingOnOrder](#nullhandlingonorder)
- [Classes](#classes)
  - [Tasks](#tasks)
- [Returns](#returns)
  - [TaskService](#taskservice)
- [Parameters](#parameters)
- [Interfaces](#interfaces)
  - [Task](#task)
  - [TaskInfo](#taskinfo)
  - [IdentityLinkInfo](#identitylinkinfo)
  - [IdentityLink](#identitylink)
  - [TaskBuilder](#taskbuilder)
  - [FormInfo](#forminfo)
  - [ValueFields](#valuefields)
  - [VariableInstance](#variableinstance)
  - [DataObject](#dataobject)
  - [Comment](#comment)
  - [TaskEvent](#taskevent)
  - [Attachment](#attachment)
  - [QueryProperty](#queryproperty)
  - [Query](#query)
  - [TaskInfoQuery](#taskinfoquery)

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


## Returns

[`Tasks`](#tasks)

#### Methods

##### list()

> ```ts
> static list(): TaskData[];
> ```


> ###### Returns

> `TaskData`[]

> ##### getVariable()

> > ```ts
> > static getVariable(taskId, variableName): any;
> > ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `variableName` | `string` |

> ::: info Returns
> - **Type**: `any`
> - **Description**: ##### getVariables() > ```ts static getVariables(taskId): Map; ``` Returns all variables. This will include all variables of parent scopes too.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> 
> ###### Returns
> 
> `Map`\
> 
> ##### setVariable()
> 
> > ```ts
> > static setVariable( taskId, variableName, value): void;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `variableName` | `string` |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setVariables() > ```ts static setVariables(taskId, variables): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `variables` | `Map`\ |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### complete() > ```ts static complete(taskId, variables?): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `variables` | \{ \[`key`: `string`\]: `any`; \} |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getTaskService() > ```ts static getTaskService(): TaskService; ```
> > :::

> ###### Returns

> [`TaskService`](#taskservice)

> ***

> ### TaskService


> Service which provides access to [Task](#task) and form related operations.

> ## Parameters

> | Parameter | Type |
> | ------ | ------ |
> | `taskService` | `any` |

> ###### Returns

> [`TaskService`](#taskservice)

> #### Methods

> ##### newTask()

> > ```ts
> > newTask(taskId?): Task;
> > ```


> Creates a new task that is not related to any process instance.

> The returned task is transient and must be saved with #saveTask(Task) 'manually'.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskId?` | `string` |
> 
> ###### Returns
> 
> [`Task`](#task)
> 
> ##### createTaskBuilder()
> 
> > ```ts
> > createTaskBuilder(): TaskBuilder;
> > ```
> 
> 
> > Create a builder for the task
> 
> > ###### Returns
> 
> > [`TaskBuilder`](#taskbuilder)
> 
> > task builder
> 
> > ##### saveTask()
> 
> > > ```ts
> > > saveTask(task): void;
> > > ```
> 
> 
> > Saves the given task to the persistent data store. If the task is already present in the persistent store, it is updated. After a new task has been saved, the task instance passed into this
> > method is updated with the id of the newly created task.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `task` | [`Task`](#task) | the task, cannot be null. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### bulkSaveTasks() > ```ts bulkSaveTasks(taskList): void; ``` Saves the given tasks to the persistent data store. If the tasks are already present in the persistent store, it is updated. After a new task has been saved, the task instance passed into this method is updated with the id of the newly created task.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskList` | [`Task`](#task)[] | the list of task instances, cannot be null. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### deleteTask() > ```ts deleteTask(taskId, cascade?): void; ``` Deletes the given task, not deleting historic information that is related to this task.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | The id of the task that will be deleted, cannot be null. If no task exists with the given taskId, the operation is ignored. |
> | `cascade?` | `boolean` | If cascade is true, also the historic information related to this task is deleted. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when the task with given id does not exist.
> :::

###### Throws

FlowableException
            when an error occurs while deleting the task or in case the task is part of a running process.

##### deleteTasks()

> ```ts
> deleteTasks(taskIds, cascade?): void;
> ```


> Deletes all tasks of the given collection, not deleting historic information that is related to these tasks.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskIds` | `string`[] | The id's of the tasks that will be deleted, cannot be null. All id's in the list that don't have an existing task will be ignored. |
> | `cascade?` | `boolean` | If cascade is true, also the historic information related to this task is deleted. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when one of the task does not exist.
> :::

###### Throws

FlowableException
            when an error occurs while deleting the tasks or in case one of the tasks is part of a running process.

##### deleteTaskWithReason()

> ```ts
> deleteTaskWithReason(taskId, deleteReason): void;
> ```


> Deletes the given task, not deleting historic information that is related to this task..

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | The id of the task that will be deleted, cannot be null. If no task exists with the given taskId, the operation is ignored. |
> | `deleteReason` | `string` | reason the task is deleted. Is recorded in history, if enabled. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when the task with given id does not exist.
> :::

###### Throws

FlowableException
            when an error occurs while deleting the task or in case the task is part of a running process

##### deleteTasksWithReason()

> ```ts
> deleteTasksWithReason(taskIds, deleteReason): void;
> ```


> Deletes all tasks of the given collection, not deleting historic information that is related to these tasks.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskIds` | `string`[] | The id's of the tasks that will be deleted, cannot be null. All id's in the list that don't have an existing task will be ignored. |
> | `deleteReason` | `string` | reason the task is deleted. Is recorded in history, if enabled. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when one of the tasks does not exist.
> :::

###### Throws

FlowableException
            when an error occurs while deleting the tasks or in case one of the tasks is part of a running process.

##### claim()

> ```ts
> claim(taskId, userId): void;
> ```


> Claim responsibility for a task: the given user is made assignee for the task. The difference with #setAssignee(String, String) is that here a check is done if the task already has a
> user assigned to it. No check is done whether the user is known by the identity component.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | task to claim, cannot be null. |
> | `userId` | `string` | user that claims the task. When userId is null the task is unclaimed, assigned to no one. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when the task doesn't exist.
> :::

###### Throws

org.flowable.common.engine.api.FlowableTaskAlreadyClaimedException
            when the task is already claimed by another user

##### unclaim()

> ```ts
> unclaim(taskId): void;
> ```


> A shortcut to #claim with null user in order to unclaim the task

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | task to unclaim, cannot be null. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when the task doesn't exist.
> :::

##### startProgress()

> ```ts
> startProgress(taskId, userId): void;
> ```


> Set the task state to in progress. No check is done whether the user is known by the identity component.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | task to change the state, cannot be null. |
> | `userId` | `string` | user that puts the task in progress. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when the task doesn't exist.
> :::

##### suspendTask()

> ```ts
> suspendTask(taskId, userId): void;
> ```


> Suspends the task. No check is done whether the user is known by the identity component.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | task to suspend, cannot be null. |
> | `userId` | `string` | user that suspends the task. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when the task doesn't exist.
> :::

##### activateTask()

> ```ts
> activateTask(taskId, userId): void;
> ```


> Activates the task. No check is done whether the user is known by the identity component.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | task to activate, cannot be null. |
> | `userId` | `string` | user that activates the task. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when the task doesn't exist.
> :::

##### delegateTask()

> ```ts
> delegateTask(taskId, userId): void;
> ```


> Delegates the task to another user. This means that the assignee is set and the delegation state is set to [DelegationState#PENDING](#enumeration-member-pending). If no owner is set on the task, the owner is set to
> the current assignee of the task.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | The id of the task that will be delegated. |
> | `userId` | `string` | The id of the user that will be set as assignee. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when no task exists with the given id.
> :::

##### resolveTask()

> ```ts
> resolveTask(
>    taskId, 
>    variables?, 
>    transientVariables?): void;
> ```


> Marks that the assignee is done with this task and that it can be send back to the owner. Can only be called when this task is [DelegationState#PENDING](#enumeration-member-pending) delegation. After this method
> returns, the [() delegationState](#getdelegationstate) is set to [DelegationState#RESOLVED](#enumeration-member-resolved).

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | the id of the task to resolve, cannot be null. |
> | `variables?` | `Map`\ | - |
> | `transientVariables?` | `Map`\ | - |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when no task exists with the given id.
> :::

##### complete()

> ```ts
> complete(
>    taskId, 
>    userId?, 
>    variables?, 
>    transientVariables?, 
>    localScope?): void;
> ```


> Called when the task is successfully executed.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | the id of the task to complete, cannot be null. |
> | `userId?` | `string` | user that completes the task. |
> | `variables?` | `Map`\ | task parameters. May be null or empty. |
> | `transientVariables?` | `Map`\ | task parameters. May be null or empty. |
> | `localScope?` | `boolean` | If true, the provided variables will be stored task-local, instead of process instance wide (which is the default behaviour). |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when no task exists with the given id.
> :::

###### Throws

FlowableException
            when this task is [DelegationState#PENDING](#enumeration-member-pending) delegation.

##### completeTaskWithForm()

> ```ts
> completeTaskWithForm(
>    taskId, 
>    formDefinitionId, 
>    outcome, 
>    variables, 
>    userId?, 
>    transientVariables?, 
>    localScope?): void;
> ```


> Called when the task is successfully executed, and the task form has been submitted.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | the id of the task to complete, cannot be null. |
> | `formDefinitionId` | `string` | the id of the form definition that is filled-in to complete the task, cannot be null. |
> | `outcome` | `string` | the outcome of the completed form, can be null. |
> | `variables` | `Map`\ | values of the completed form. May be null or empty. |
> | `userId?` | `string` | user that completes the task. |
> | `transientVariables?` | `Map`\ | additional transient values that need to added to the process instance transient variables. May be null or empty. |
> | `localScope?` | `boolean` | If true, the provided variables will be stored task-local, instead of process instance wide (which is the default for #complete(String, Map)). |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when no task exists with the given id.
> :::

##### getTaskFormModel()

> ```ts
> getTaskFormModel(taskId, ignoreVariables?): FormInfo;
> ```


> Gets a Form model instance of the task form of a specific task

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | id of the task, cannot be null. |
> | `ignoreVariables?` | `boolean` | should the variables be ignored when fetching the form model? |
> 
> ###### Returns
> 
> [`FormInfo`](#forminfo)
> 
> ###### Throws
> 
> FlowableObjectNotFoundException
>             when the task or form definition doesn't exist.
> 
> ##### setAssignee()
> 
> > ```ts
> > setAssignee(taskId, userId): void;
> > ```
> 
> 
> > Changes the assignee of the given task to the given userId. No check is done whether the user is known by the identity component.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | id of the task, cannot be null. |
> | `userId` | `string` | id of the user to use as assignee. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when the task or user doesn't exist.
> :::

##### setOwner()

> ```ts
> setOwner(taskId, userId): void;
> ```


> Transfers ownership of this task to another user. No check is done whether the user is known by the identity component.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | id of the task, cannot be null. |
> | `userId` | `string` | of the person that is receiving ownership. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when the task or user doesn't exist.
> :::

##### getIdentityLinksForTask()

> ```ts
> getIdentityLinksForTask(taskId): IdentityLink[];
> ```


> Retrieves the [IdentityLink](#identitylink)s associated with the given task. Such an [IdentityLink](#identitylink) informs how a certain identity (eg. group or user) is associated with a certain task (eg. as
> candidate, assignee, etc.)

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> 
> ###### Returns
> 
> [`IdentityLink`](#identitylink)[]
> 
> ##### addCandidateUser()
> 
> > ```ts
> > addCandidateUser(taskId, userId): void;
> > ```
> 
> 
> > Convenience shorthand for #addUserIdentityLink(String, String, String); with type IdentityLinkType#CANDIDATE
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | id of the task, cannot be null. |
> | `userId` | `string` | id of the user to use as candidate, cannot be null. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when the task or user doesn't exist.
> :::

##### addCandidateGroup()

> ```ts
> addCandidateGroup(taskId, groupId): void;
> ```


> Convenience shorthand for #addGroupIdentityLink(String, String, String); with type IdentityLinkType#CANDIDATE

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | id of the task, cannot be null. |
> | `groupId` | `string` | id of the group to use as candidate, cannot be null. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when the task or group doesn't exist.
> :::

##### addUserIdentityLink()

> ```ts
> addUserIdentityLink(
>    taskId, 
>    userId, 
>    identityLinkType): void;
> ```


> Involves a user with a task. The type of identity link is defined by the given identityLinkType.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | id of the task, cannot be null. |
> | `userId` | `string` | id of the user involve, cannot be null. |
> | `identityLinkType` | `string` | type of identityLink, cannot be null (@see IdentityLinkType). |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when the task or user doesn't exist.
> :::

##### addGroupIdentityLink()

> ```ts
> addGroupIdentityLink(
>    taskId, 
>    groupId, 
>    identityLinkType): void;
> ```


> Involves a group with a task. The type of identityLink is defined by the given identityLink.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | id of the task, cannot be null. |
> | `groupId` | `string` | id of the group to involve, cannot be null. |
> | `identityLinkType` | `string` | type of identity, cannot be null (@see IdentityLinkType). |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when the task or group doesn't exist.
> :::

##### deleteCandidateUser()

> ```ts
> deleteCandidateUser(taskId, userId): void;
> ```


> Convenience shorthand for #deleteUserIdentityLink(String, String, String); with type IdentityLinkType#CANDIDATE

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | id of the task, cannot be null. |
> | `userId` | `string` | id of the user to use as candidate, cannot be null. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when the task or user doesn't exist.
> :::

##### deleteCandidateGroup()

> ```ts
> deleteCandidateGroup(taskId, groupId): void;
> ```


> Convenience shorthand for #deleteGroupIdentityLink(String, String, String); with type IdentityLinkType#CANDIDATE

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | id of the task, cannot be null. |
> | `groupId` | `string` | id of the group to use as candidate, cannot be null. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when the task or group doesn't exist.
> :::

##### deleteUserIdentityLink()

> ```ts
> deleteUserIdentityLink(
>    taskId, 
>    userId, 
>    identityLinkType): void;
> ```


> Removes the association between a user and a task for the given identityLinkType.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | id of the task, cannot be null. |
> | `userId` | `string` | id of the user involve, cannot be null. |
> | `identityLinkType` | `string` | type of identityLink, cannot be null (@see IdentityLinkType). |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when the task or user doesn't exist.
> :::

##### deleteGroupIdentityLink()

> ```ts
> deleteGroupIdentityLink(
>    taskId, 
>    groupId, 
>    identityLinkType): void;
> ```


> Removes the association between a group and a task for the given identityLinkType.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | id of the task, cannot be null. |
> | `groupId` | `string` | id of the group to involve, cannot be null. |
> | `identityLinkType` | `string` | type of identity, cannot be null (@see IdentityLinkType). |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when the task or group doesn't exist.
> :::

##### setPriority()

> ```ts
> setPriority(taskId, priority): void;
> ```


> Changes the priority of the task.

> Authorization: actual owner / business admin

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | id of the task, cannot be null. |
> | `priority` | `number` | the new priority for the task. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when the task doesn't exist.
> :::

##### setDueDate()

> ```ts
> setDueDate(taskId, dueDate): void;
> ```


> Changes the due date of the task

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | id of the task, cannot be null. |
> | `dueDate` | `Date` | the new due date for the task |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableException             when the task doesn't exist.
> :::

##### setVariable()

> ```ts
> setVariable(
>    taskId, 
>    variableName, 
>    value): void;
> ```


> set variable on a task. If the variable is not already existing, it will be created in the most outer scope. This means the process instance in case this task is related to an execution.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `variableName` | `string` |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setVariables() > ```ts setVariables(taskId, variables): void; ``` set variables on a task. If the variable is not already existing, it will be created in the most outer scope. This means the process instance in case this task is related to an execution.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `variables` | `Map`\ |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setVariableLocal() > ```ts setVariableLocal(    taskId,     variableName,     value): void; ``` set variable on a task. If the variable is not already existing, it will be created in the task.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `variableName` | `string` |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setVariablesLocal() > ```ts setVariablesLocal(taskId, variables): void; ``` set variables on a task. If the variable is not already existing, it will be created in the task.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `variables` | `Map`\ |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getVariable() > ```ts getVariable(taskId, variableName): any; ``` get a variables and search in the task scope and if available also the execution scopes.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `variableName` | `string` |

> ::: info Returns
> - **Type**: `any`
> - **Description**: ##### getVariableInstance() > ```ts getVariableInstance(taskId, variableName): VariableInstance; ``` The variable. Searching for the variable is done in all scopes that are visible to the given task (including parent scopes). Returns null when no variable value is found with the given name.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | id of task, cannot be null. |
> | `variableName` | `string` | name of variable, cannot be null. |
> 
> ###### Returns
> 
> [`VariableInstance`](#variableinstance)
> 
> the variable or null if the variable is undefined.
> 
> ###### Throws
> 
> FlowableObjectNotFoundException
>             when no execution is found for the given taskId.
> 
> ##### hasVariable()
> 
> > ```ts
> > hasVariable(taskId, variableName): boolean;
> > ```
> 
> 
> > checks whether or not the task has a variable defined with the given name, in the task scope and if available also the execution scopes.
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `variableName` | `string` |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: ##### getVariableLocal() > ```ts getVariableLocal(taskId, variableName): any; ``` checks whether or not the task has a variable defined with the given name.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `variableName` | `string` |

> ::: info Returns
> - **Type**: `any`
> - **Description**: ##### getVariableInstanceLocal() > ```ts getVariableInstanceLocal(taskId, variableName): VariableInstance; ``` The variable for a task. Returns the variable when it is set for the task (and not searching parent scopes). Returns null when no variable is found with the given name.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | id of task, cannot be null. |
> | `variableName` | `string` | name of variable, cannot be null. |
> 
> ###### Returns
> 
> [`VariableInstance`](#variableinstance)
> 
> the variable or null if the variable is undefined.
> 
> ###### Throws
> 
> FlowableObjectNotFoundException
>             when no task is found for the given taskId.
> 
> ##### hasVariableLocal()
> 
> > ```ts
> > hasVariableLocal(taskId, variableName): boolean;
> > ```
> 
> 
> > checks whether or not the task has a variable defined with the given name, local task scope only.
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `variableName` | `string` |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: ##### getVariables() > ```ts getVariables(taskId, variableNames?): Map; ``` get all variables and search in the task scope and if available also the execution scopes. If you have many variables and you only need a few, consider using #getVariables(String, Collection) for better performance.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `variableNames?` | `string`[] |
> 
> ###### Returns
> 
> `Map`\
> 
> ##### getVariableInstances()
> 
> > ```ts
> > getVariableInstances(taskId, variableNames?): Map;
> > ```
> 
> 
> > All variables visible from the given task scope (including parent scopes).
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | id of task, cannot be null. |
> | `variableNames?` | `string`[] | the collection of variable names that should be retrieved. |
> 
> ###### Returns
> 
> `Map`\
> 
> the variable instances or an empty map if no such variables are found.
> 
> ###### Throws
> 
> FlowableObjectNotFoundException
>             when no task is found for the given taskId.
> 
> ##### getVariablesLocal()
> 
> > ```ts
> > getVariablesLocal(taskId, variableNames?): Map;
> > ```
> 
> 
> > get all variables and search only in the task scope. If you have many task local variables and you only need a few, consider using #getVariablesLocal(String, Collection) for better
> > performance.
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `variableNames?` | `string`[] |
> 
> ###### Returns
> 
> `Map`\
> 
> ##### getVariableInstancesLocalByTaskIds()
> 
> > ```ts
> > getVariableInstancesLocalByTaskIds(taskIds): VariableInstance[];
> > ```
> 
> 
> > get all variables and search only in the task scope.
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `taskIds` | `Set`\ |
> 
> ###### Returns
> 
> [`VariableInstance`](#variableinstance)[]
> 
> ##### getVariableInstancesLocal()
> 
> > ```ts
> > getVariableInstancesLocal(taskId, variableNames?): Map;
> > ```
> 
> 
> > All variable values that are defined in the task scope, without taking outer scopes into account. If you have many task local variables and you only need a few, consider using
> > #getVariableInstancesLocal(String, Collection) for better performance.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | id of task, cannot be null. |
> | `variableNames?` | `string`[] | - |
> 
> ###### Returns
> 
> `Map`\
> 
> the variables or an empty map if no such variables are found.
> 
> ###### Throws
> 
> FlowableObjectNotFoundException
>             when no task is found for the given taskId.
> 
> ##### removeVariable()
> 
> > ```ts
> > removeVariable(taskId, variableName): void;
> > ```
> 
> 
> > Removes the variable from the task. When the variable does not exist, nothing happens.
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `variableName` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### removeVariableLocal() > ```ts removeVariableLocal(taskId, variableName): void; ``` Removes the variable from the task (not considering parent scopes). When the variable does not exist, nothing happens.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `variableName` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### removeVariables() > ```ts removeVariables(taskId, variableNames): void; ``` Removes all variables in the given collection from the task. Non existing variable names are simply ignored.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `variableNames` | `string`[] |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### removeVariablesLocal() > ```ts removeVariablesLocal(taskId, variableNames): void; ``` Removes all variables in the given collection from the task (not considering parent scopes). Non existing variable names are simply ignored.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `variableNames` | `string`[] |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getDataObjects() > ```ts getDataObjects(    taskId,     dataObjectNames?,     locale?,  withLocalizationFallback?): Map; ``` All DataObjects visible from the given execution scope (including parent scopes).
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | id of task, cannot be null. |
> | `dataObjectNames?` | `string`[] | the collection of DataObject names that should be retrieved. |
> | `locale?` | `string` | locale the DataObject name and description should be returned in (if available). |
> | `withLocalizationFallback?` | `boolean` | When true localization will fallback to more general locales if the specified locale is not found. |
> 
> ###### Returns
> 
> `Map`\
> 
> the DataObjects or an empty map if no such variables are found.
> 
> ###### Throws
> 
> FlowableObjectNotFoundException
>             when no task is found for the given taskId.
> 
> ##### getDataObject()
> 
> > ```ts
> > getDataObject(
> >    taskId, 
> >    dataObject, 
> >    locale?, 
> >    withLocalizationFallback?): DataObject;
> > ```
> 
> 
> > The DataObject. Searching for the DataObject is done in all scopes that are visible to the given task (including parent scopes). Returns null when no DataObject value is found with the given
> > name.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskId` | `string` | id of task, cannot be null. |
> | `dataObject` | `string` | name of DataObject, cannot be null. |
> | `locale?` | `string` | locale the DataObject name and description should be returned in (if available). |
> | `withLocalizationFallback?` | `boolean` | When true localization will fallback to more general locales including the default locale of the JVM if the specified locale is not found. |
> 
> ###### Returns
> 
> [`DataObject`](#dataobject)
> 
> the DataObject or null if the variable is undefined.
> 
> ###### Throws
> 
> FlowableObjectNotFoundException
>             when no task is found for the given taskId.
> 
> ##### addComment()
> 
> > ```ts
> > addComment(
> >    taskId, 
> >    processInstanceId, 
> >    message, 
> >    type?): Comment;
> > ```
> 
> 
> > Add a comment to a task and/or process instance.
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `processInstanceId` | `string` |
> | `message` | `string` |
> | `type?` | `string` |
> 
> ###### Returns
> 
> [`Comment`](#comment)
> 
> ##### saveComment()
> 
> > ```ts
> > saveComment(comment): void;
> > ```
> 
> 
> > Update a comment to a task and/or process instance.
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `comment` | [`Comment`](#comment) |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getComment() > ```ts getComment(commentId): Comment; ``` Returns an individual comment with the given id. Returns null if no comment exists with the given id.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `commentId` | `string` |
> 
> ###### Returns
> 
> [`Comment`](#comment)
> 
> ##### deleteComments()
> 
> > ```ts
> > deleteComments(taskId, processInstanceId): void;
> > ```
> 
> 
> > Removes all comments from the provided task and/or process instance
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `processInstanceId` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### deleteComment() > ```ts deleteComment(commentId): void; ``` Removes an individual comment with the given id.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `commentId` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Throws FlowableObjectNotFoundException             when no comment exists with the given id.
> :::

##### getTaskComments()

> ```ts
> getTaskComments(taskId, type?): Comment[];
> ```


> The comments related to the given task.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> | `type?` | `string` |
> 
> ###### Returns
> 
> [`Comment`](#comment)[]
> 
> ##### getCommentsByType()
> 
> > ```ts
> > getCommentsByType(type): Comment[];
> > ```
> 
> 
> > All comments of a given type.
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `type` | `string` |
> 
> ###### Returns
> 
> [`Comment`](#comment)[]
> 
> ##### getTaskEvents()
> 
> > ```ts
> > getTaskEvents(taskId): TaskEvent[];
> > ```
> 
> 
> > The all events related to the given task.
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> 
> ###### Returns
> 
> [`TaskEvent`](#taskevent)[]
> 
> ##### getEvent()
> 
> > ```ts
> > getEvent(eventId): TaskEvent;
> > ```
> 
> 
> > Returns an individual event with the given id. Returns null if no event exists with the given id.
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `eventId` | `string` |
> 
> ###### Returns
> 
> [`TaskEvent`](#taskevent)
> 
> ##### getProcessInstanceComments()
> 
> > ```ts
> > getProcessInstanceComments(processInstanceId, type?): Comment[];
> > ```
> 
> 
> > The comments related to the given process instance.
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `processInstanceId` | `string` |
> | `type?` | `string` |
> 
> ###### Returns
> 
> [`Comment`](#comment)[]
> 
> ##### createAttachment()
> 
> > ```ts
> > createAttachment(
> >    attachmentType, 
> >    taskId, 
> >    processInstanceId, 
> >    attachmentName, 
> >    attachmentDescription, 
> >    content?, 
> >    url?): Attachment;
> > ```
> 
> 
> > Add a new attachment to a task and/or a process instance and use an input stream to provide the content
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `attachmentType` | `string` |
> | `taskId` | `string` |
> | `processInstanceId` | `string` |
> | `attachmentName` | `string` |
> | `attachmentDescription` | `string` |
> | `content?` | `any`[] |
> | `url?` | `string` |
> 
> ###### Returns
> 
> [`Attachment`](#attachment)
> 
> ##### saveAttachment()
> 
> > ```ts
> > saveAttachment(attachment): void;
> > ```
> 
> 
> > Update the name and description of an attachment
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `attachment` | [`Attachment`](#attachment) |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getAttachment() > ```ts getAttachment(attachmentId): Attachment; ``` Retrieve a particular attachment
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `attachmentId` | `string` |
> 
> ###### Returns
> 
> [`Attachment`](#attachment)
> 
> ##### getAttachmentContent()
> 
> > ```ts
> > getAttachmentContent(attachmentId): any[];
> > ```
> 
> 
> > Retrieve stream content of a particular attachment
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `attachmentId` | `string` |
> 
> ###### Returns
> 
> `any`[]
> 
> ##### getTaskAttachments()
> 
> > ```ts
> > getTaskAttachments(taskId): Attachment[];
> > ```
> 
> 
> > The list of attachments associated to a task
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |
> 
> ###### Returns
> 
> [`Attachment`](#attachment)[]
> 
> ##### getProcessInstanceAttachments()
> 
> > ```ts
> > getProcessInstanceAttachments(processInstanceId): Attachment[];
> > ```
> 
> 
> > The list of attachments associated to a process instance
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `processInstanceId` | `string` |
> 
> ###### Returns
> 
> [`Attachment`](#attachment)[]
> 
> ##### deleteAttachment()
> 
> > ```ts
> > deleteAttachment(attachmentId): void;
> > ```
> 
> 
> > Delete an attachment
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `attachmentId` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getSubTasks() > ```ts getSubTasks(parentTaskId): Task[]; ``` The list of subtasks for this parent task
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parentTaskId` | `string` |
> 
> ###### Returns
> 
> [`Task`](#task)[]
> 
> ## Interfaces
> 
> ### Task
> 
> 
> Represents one task for a human user.
> 
> #### Extends
> 
> - [`TaskInfo`](#taskinfo)
> 
> #### Properties
> 
> | Property | Type | Inherited from | Defined in |
> | ------ | ------ | ------ | ------ |
> |  `string` | `any` | [`TaskInfo`](#taskinfo).[`string`](#string-1) | src/bpm/tasks.ts:1258 |
> 
> #### Methods
> 
> ##### setName()
> 
> > ```ts
> > setName(name): void;
> > ```
> 
> 
> > Name or title of the task.
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setLocalizedName() > ```ts setLocalizedName(name): void; ``` Sets an optional localized name for the task.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setDescription() > ```ts setDescription(description): void; ``` Change the description of the task
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `description` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setLocalizedDescription() > ```ts setLocalizedDescription(description): void; ``` Sets an optional localized description for the task.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `description` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setPriority() > ```ts setPriority(priority): void; ``` Sets the indication of how important/urgent this task is
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `priority` | `number` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setOwner() > ```ts setOwner(owner): void; ``` The user id of the person that is responsible for this task.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `owner` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setAssignee() > ```ts setAssignee(assignee): void; ``` The user id of the person to which this task is delegated.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `assignee` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getDelegationState() > ```ts getDelegationState(): DelegationState; ``` The current [DelegationState](#delegationstate) for this task.
> :::

###### Returns

[`DelegationState`](#delegationstate)

##### setDelegationState()

> ```ts
> setDelegationState(delegationState): void;
> ```


> The current [DelegationState](#delegationstate) for this task.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `delegationState` | [`DelegationState`](#delegationstate) |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setDueDate() > ```ts setDueDate(dueDate): void; ``` Change due date of the task.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `dueDate` | `Date` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setCategory() > ```ts setCategory(category): void; ``` Change the category of the task. This is an optional field and allows to 'tag' tasks as belonging to a certain category.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `category` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setParentTaskId() > ```ts setParentTaskId(parentTaskId): void; ``` the parent task for which this task is a subtask
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parentTaskId` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setTenantId() > ```ts setTenantId(tenantId): void; ``` Change the tenantId of the task
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `tenantId` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setFormKey() > ```ts setFormKey(formKey): void; ``` Change the form key of the task
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `formKey` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### isSuspended() > ```ts isSuspended(): boolean; ``` Indicates whether this task is suspended or not.
> :::

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: ##### getId() > ```ts getId(): string; ``` DB id of the task.
> :::

> ::: info Returns
> - **Type**: `string`
> - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getId`](#getid-1)
> :::

##### getName()

> ```ts
> getName(): string;
> ```


> Name or title of the task.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getName`](#getname-1)
> > :::

> ##### getDescription()

> > ```ts
> > getDescription(): string;
> > ```


> Free text description of the task.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getDescription`](#getdescription-1)
> > :::

> ##### getPriority()

> > ```ts
> > getPriority(): number;
> > ```


> Indication of how important/urgent this task is

> > ::: info Returns
> > - **Type**: `number`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getPriority`](#getpriority-1)
> > :::

> ##### getOwner()

> > ```ts
> > getOwner(): string;
> > ```


> The user id of the person that is responsible for this task.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getOwner`](#getowner-1)
> > :::

> ##### getAssignee()

> > ```ts
> > getAssignee(): string;
> > ```


> The user id of the person to which this task is delegated.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getAssignee`](#getassignee-1)
> > :::

> ##### getProcessInstanceId()

> > ```ts
> > getProcessInstanceId(): string;
> > ```


> Reference to the process instance or null if it is not related to a process instance.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getProcessInstanceId`](#getprocessinstanceid-1)
> > :::

> ##### getExecutionId()

> > ```ts
> > getExecutionId(): string;
> > ```


> Reference to the path of execution or null if it is not related to a process instance.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getExecutionId`](#getexecutionid-1)
> > :::

> ##### getTaskDefinitionId()

> > ```ts
> > getTaskDefinitionId(): string;
> > ```


> Reference to the task definition or null if it is not related to any task definition.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getTaskDefinitionId`](#gettaskdefinitionid-1)
> > :::

> ##### getProcessDefinitionId()

> > ```ts
> > getProcessDefinitionId(): string;
> > ```


> Reference to the process definition or null if it is not related to a process.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getProcessDefinitionId`](#getprocessdefinitionid-1)
> > :::

> ##### getScopeId()

> > ```ts
> > getScopeId(): string;
> > ```


> Reference to a scope identifier or null if none is set (e.g. for bpmn process task it is null)

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getScopeId`](#getscopeid-1)
> > :::

> ##### getSubScopeId()

> > ```ts
> > getSubScopeId(): string;
> > ```


> Reference to a sub scope identifier or null if none is set (e.g. for bpmn process task it is null)

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getSubScopeId`](#getsubscopeid-1)
> > :::

> ##### getScopeType()

> > ```ts
> > getScopeType(): string;
> > ```


> Reference to a scope type or null if none is set (e.g. for bpmn process task it is null)

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getScopeType`](#getscopetype-1)
> > :::

> ##### getScopeDefinitionId()

> > ```ts
> > getScopeDefinitionId(): string;
> > ```


> Reference to a scope definition identifier or null if none is set (e.g. for bpmn process task it is null)

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getScopeDefinitionId`](#getscopedefinitionid-1)
> > :::

> ##### getPropagatedStageInstanceId()

> > ```ts
> > getPropagatedStageInstanceId(): string;
> > ```


> If this task runs in the context of a case and stage, this method returns it's closest parent stage instance id (the stage plan item instance id to be
> precise). Even if the direct parent of the task is a process which itself might have been created out of a process task of a case, its stage instance
> is reflected in the task.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: the stage instance id this task belongs to or null, if this task is not part of a case at all or is not a child element of a stage
> > :::

> ###### Inherited from

> [`TaskInfo`](#taskinfo).[`getPropagatedStageInstanceId`](#getpropagatedstageinstanceid-1)

> ##### getState()

> > ```ts
> > getState(): string;
> > ```


> The state of this task

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getState`](#getstate-1)
> > :::

> ##### getCreateTime()

> > ```ts
> > getCreateTime(): Date;
> > ```


> The date/time when this task was created

> > ::: info Returns
> > - **Type**: `Date`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getCreateTime`](#getcreatetime-1)
> > :::

> ##### getInProgressStartTime()

> > ```ts
> > getInProgressStartTime(): Date;
> > ```


> The date/time when this task was put in progress

> > ::: info Returns
> > - **Type**: `Date`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getInProgressStartTime`](#getinprogressstarttime-1)
> > :::

> ##### getInProgressStartedBy()

> > ```ts
> > getInProgressStartedBy(): string;
> > ```


> The user reference that put this task in progress

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getInProgressStartedBy`](#getinprogressstartedby-1)
> > :::

> ##### getClaimTime()

> > ```ts
> > getClaimTime(): Date;
> > ```


> The claim time of this task

> > ::: info Returns
> > - **Type**: `Date`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getClaimTime`](#getclaimtime-1)
> > :::

> ##### getClaimedBy()

> > ```ts
> > getClaimedBy(): String;
> > ```


> The user reference that claimed this task

> > ::: info Returns
> > - **Type**: `String`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getClaimedBy`](#getclaimedby-1)
> > :::

> ##### getSuspendedTime()

> > ```ts
> > getSuspendedTime(): Date;
> > ```


> The suspended time of this task

> > ::: info Returns
> > - **Type**: `Date`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getSuspendedTime`](#getsuspendedtime-1)
> > :::

> ##### getSuspendedBy()

> > ```ts
> > getSuspendedBy(): string;
> > ```


> The user reference that suspended this task

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getSuspendedBy`](#getsuspendedby-1)
> > :::

> ##### getTaskDefinitionKey()

> > ```ts
> > getTaskDefinitionKey(): string;
> > ```


> The id of the activity in the process defining this task or null if this is not related to a process

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getTaskDefinitionKey`](#gettaskdefinitionkey-1)
> > :::

> ##### getInProgressStartDueDate()

> > ```ts
> > getInProgressStartDueDate(): Date;
> > ```


> In progress start due date of the task.

> > ::: info Returns
> > - **Type**: `Date`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getInProgressStartDueDate`](#getinprogressstartduedate-1)
> > :::

> ##### getDueDate()

> > ```ts
> > getDueDate(): Date;
> > ```


> Due date of the task.

> > ::: info Returns
> > - **Type**: `Date`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getDueDate`](#getduedate-1)
> > :::

> ##### getCategory()

> > ```ts
> > getCategory(): any;
> > ```


> The category of the task. This is an optional field and allows to 'tag' tasks as belonging to a certain category.

> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getCategory`](#getcategory-1)
> > :::

> ##### getParentTaskId()

> > ```ts
> > getParentTaskId(): string;
> > ```


> The parent task for which this task is a subtask

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getParentTaskId`](#getparenttaskid-1)
> > :::

> ##### getTenantId()

> > ```ts
> > getTenantId(): string;
> > ```


> The tenant identifier of this task

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getTenantId`](#gettenantid-1)
> > :::

> ##### getFormKey()

> > ```ts
> > getFormKey(): string;
> > ```


> The form key for the user task

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`TaskInfo`](#taskinfo).[`getFormKey`](#getformkey-1)
> > :::

> ##### getTaskLocalVariables()

> > ```ts
> > getTaskLocalVariables(): Map;
> > ```


> Returns the local task variables if requested in the task query

> ###### Returns

> `Map`\

> ###### Inherited from

> [`TaskInfo`](#taskinfo).[`getTaskLocalVariables`](#gettasklocalvariables-1)

> ##### getProcessVariables()

> > ```ts
> > getProcessVariables(): Map;
> > ```


> Returns the process variables if requested in the task query

> ###### Returns

> `Map`\

> ###### Inherited from

> [`TaskInfo`](#taskinfo).[`getProcessVariables`](#getprocessvariables-1)

> ##### getCaseVariables()

> > ```ts
> > getCaseVariables(): Map;
> > ```


> Returns the case variables if requested in the task query

> ###### Returns

> `Map`\

> ###### Inherited from

> [`TaskInfo`](#taskinfo).[`getCaseVariables`](#getcasevariables-1)

> ##### getIdentityLinks()

> > ```ts
> > getIdentityLinks(): IdentityLinkInfo[];
> > ```


> Returns the identity links.

> ###### Returns

> [`IdentityLinkInfo`](#identitylinkinfo)[]

> ###### Inherited from

> [`TaskInfo`](#taskinfo).[`getIdentityLinks`](#getidentitylinks-1)

> ***

> ### TaskInfo


> #### Extended by

> - [`Task`](#task)

> #### Properties

> | Property | Type | Defined in |
> | ------ | ------ | ------ |
> |  `string` | `any` | src/bpm/tasks.ts:1258 |

> #### Methods

> ##### getId()

> > ```ts
> > getId(): string;
> > ```


> DB id of the task.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getName() > ```ts getName(): string; ``` Name or title of the task.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getDescription() > ```ts getDescription(): string; ``` Free text description of the task.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getPriority() > ```ts getPriority(): number; ``` Indication of how important/urgent this task is
> > :::

> > ::: info Returns
> > - **Type**: `number`
> > - **Description**: ##### getOwner() > ```ts getOwner(): string; ``` The user id of the person that is responsible for this task.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getAssignee() > ```ts getAssignee(): string; ``` The user id of the person to which this task is delegated.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getProcessInstanceId() > ```ts getProcessInstanceId(): string; ``` Reference to the process instance or null if it is not related to a process instance.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getExecutionId() > ```ts getExecutionId(): string; ``` Reference to the path of execution or null if it is not related to a process instance.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getTaskDefinitionId() > ```ts getTaskDefinitionId(): string; ``` Reference to the task definition or null if it is not related to any task definition.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getProcessDefinitionId() > ```ts getProcessDefinitionId(): string; ``` Reference to the process definition or null if it is not related to a process.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getScopeId() > ```ts getScopeId(): string; ``` Reference to a scope identifier or null if none is set (e.g. for bpmn process task it is null)
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getSubScopeId() > ```ts getSubScopeId(): string; ``` Reference to a sub scope identifier or null if none is set (e.g. for bpmn process task it is null)
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getScopeType() > ```ts getScopeType(): string; ``` Reference to a scope type or null if none is set (e.g. for bpmn process task it is null)
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getScopeDefinitionId() > ```ts getScopeDefinitionId(): string; ``` Reference to a scope definition identifier or null if none is set (e.g. for bpmn process task it is null)
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getPropagatedStageInstanceId() > ```ts getPropagatedStageInstanceId(): string; ``` If this task runs in the context of a case and stage, this method returns it's closest parent stage instance id (the stage plan item instance id to be precise). Even if the direct parent of the task is a process which itself might have been created out of a process task of a case, its stage instance is reflected in the task.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: the stage instance id this task belongs to or null, if this task is not part of a case at all or is not a child element of a stage
> > :::

> ##### getState()

> > ```ts
> > getState(): string;
> > ```


> The state of this task

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getCreateTime() > ```ts getCreateTime(): Date; ``` The date/time when this task was created
> > :::

> > ::: info Returns
> > - **Type**: `Date`
> > - **Description**: ##### getInProgressStartTime() > ```ts getInProgressStartTime(): Date; ``` The date/time when this task was put in progress
> > :::

> > ::: info Returns
> > - **Type**: `Date`
> > - **Description**: ##### getInProgressStartedBy() > ```ts getInProgressStartedBy(): string; ``` The user reference that put this task in progress
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getClaimTime() > ```ts getClaimTime(): Date; ``` The claim time of this task
> > :::

> > ::: info Returns
> > - **Type**: `Date`
> > - **Description**: ##### getClaimedBy() > ```ts getClaimedBy(): String; ``` The user reference that claimed this task
> > :::

> > ::: info Returns
> > - **Type**: `String`
> > - **Description**: ##### getSuspendedTime() > ```ts getSuspendedTime(): Date; ``` The suspended time of this task
> > :::

> > ::: info Returns
> > - **Type**: `Date`
> > - **Description**: ##### getSuspendedBy() > ```ts getSuspendedBy(): string; ``` The user reference that suspended this task
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getTaskDefinitionKey() > ```ts getTaskDefinitionKey(): string; ``` The id of the activity in the process defining this task or null if this is not related to a process
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getInProgressStartDueDate() > ```ts getInProgressStartDueDate(): Date; ``` In progress start due date of the task.
> > :::

> > ::: info Returns
> > - **Type**: `Date`
> > - **Description**: ##### getDueDate() > ```ts getDueDate(): Date; ``` Due date of the task.
> > :::

> > ::: info Returns
> > - **Type**: `Date`
> > - **Description**: ##### getCategory() > ```ts getCategory(): any; ``` The category of the task. This is an optional field and allows to 'tag' tasks as belonging to a certain category.
> > :::

> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: ##### getParentTaskId() > ```ts getParentTaskId(): string; ``` The parent task for which this task is a subtask
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getTenantId() > ```ts getTenantId(): string; ``` The tenant identifier of this task
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getFormKey() > ```ts getFormKey(): string; ``` The form key for the user task
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getTaskLocalVariables() > ```ts getTaskLocalVariables(): Map; ``` Returns the local task variables if requested in the task query
> > :::

> ###### Returns

> `Map`\

> ##### getProcessVariables()

> > ```ts
> > getProcessVariables(): Map;
> > ```


> Returns the process variables if requested in the task query

> ###### Returns

> `Map`\

> ##### getCaseVariables()

> > ```ts
> > getCaseVariables(): Map;
> > ```


> Returns the case variables if requested in the task query

> ###### Returns

> `Map`\

> ##### getIdentityLinks()

> > ```ts
> > getIdentityLinks(): IdentityLinkInfo[];
> > ```


> Returns the identity links.

> ###### Returns

> [`IdentityLinkInfo`](#identitylinkinfo)[]

> ***

> ### IdentityLinkInfo


> #### Extended by

> - [`IdentityLink`](#identitylink)

> #### Methods

> ##### getType()

> > ```ts
> > getType(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getUserId() > ```ts getUserId(): string; ```
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getGroupId() > ```ts getGroupId(): string; ```
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getTaskId() > ```ts getTaskId(): string; ```
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getProcessInstanceId() > ```ts getProcessInstanceId(): string; ```
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getScopeId() > ```ts getScopeId(): string; ```
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getSubScopeId() > ```ts getSubScopeId(): string; ```
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getScopeType() > ```ts getScopeType(): string; ```
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getScopeDefinitionId() > ```ts getScopeDefinitionId(): string; ```
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ***
> > :::

> ### IdentityLink


> #### Extends

> - [`IdentityLinkInfo`](#identitylinkinfo)

> #### Methods

> ##### getType()

> > ```ts
> > getType(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`IdentityLinkInfo`](#identitylinkinfo).[`getType`](#gettype)
> > :::

> ##### getUserId()

> > ```ts
> > getUserId(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`IdentityLinkInfo`](#identitylinkinfo).[`getUserId`](#getuserid)
> > :::

> ##### getGroupId()

> > ```ts
> > getGroupId(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`IdentityLinkInfo`](#identitylinkinfo).[`getGroupId`](#getgroupid)
> > :::

> ##### getTaskId()

> > ```ts
> > getTaskId(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`IdentityLinkInfo`](#identitylinkinfo).[`getTaskId`](#gettaskid)
> > :::

> ##### getProcessInstanceId()

> > ```ts
> > getProcessInstanceId(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`IdentityLinkInfo`](#identitylinkinfo).[`getProcessInstanceId`](#getprocessinstanceid-2)
> > :::

> ##### getScopeId()

> > ```ts
> > getScopeId(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`IdentityLinkInfo`](#identitylinkinfo).[`getScopeId`](#getscopeid-2)
> > :::

> ##### getSubScopeId()

> > ```ts
> > getSubScopeId(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`IdentityLinkInfo`](#identitylinkinfo).[`getSubScopeId`](#getsubscopeid-2)
> > :::

> ##### getScopeType()

> > ```ts
> > getScopeType(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`IdentityLinkInfo`](#identitylinkinfo).[`getScopeType`](#getscopetype-2)
> > :::

> ##### getScopeDefinitionId()

> > ```ts
> > getScopeDefinitionId(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ###### Inherited from [`IdentityLinkInfo`](#identitylinkinfo).[`getScopeDefinitionId`](#getscopedefinitionid-2)
> > :::

> ##### getProcessDefinitionId()

> > ```ts
> > getProcessDefinitionId(): string;
> > ```


> The process definition id associated with this identity link.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ***
> > :::

> ### TaskBuilder


> Wraps [TaskInfo](#taskinfo) to the builder.

> #### Methods

> ##### create()

> > ```ts
> > create(): Task;
> > ```


> Creates task instance according values set in the builder

> ###### Returns

> [`Task`](#task)

> task instance

> ##### id()

> > ```ts
> > id(id): TaskBuilder;
> > ```


> DB id of the task.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `id` | `string` |
> 
> ###### Returns
> 
> [`TaskBuilder`](#taskbuilder)
> 
> ##### getId()
> 
> > ```ts
> > getId(): string;
> > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### name() > ```ts name(name): TaskBuilder; ``` Name or title of the task.
> > > :::
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |
> 
> ###### Returns
> 
> [`TaskBuilder`](#taskbuilder)
> 
> ##### getName()
> 
> > ```ts
> > getName(): string;
> > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### description() > ```ts description(description): TaskBuilder; ``` Free text description of the task.
> > > :::
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `description` | `string` |
> 
> ###### Returns
> 
> [`TaskBuilder`](#taskbuilder)
> 
> ##### getDescription()
> 
> > ```ts
> > getDescription(): string;
> > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### priority() > ```ts priority(priority): TaskBuilder; ``` Indication of how important/urgent this task is
> > > :::
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `priority` | `number` |
> 
> ###### Returns
> 
> [`TaskBuilder`](#taskbuilder)
> 
> ##### getPriority()
> 
> > ```ts
> > getPriority(): number;
> > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `number`
> > > - **Description**: ##### owner() > ```ts owner(ownerId): TaskBuilder; ``` The userId of the person that is responsible for this task.
> > > :::
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `ownerId` | `string` |
> 
> ###### Returns
> 
> [`TaskBuilder`](#taskbuilder)
> 
> ##### getOwner()
> 
> > ```ts
> > getOwner(): string;
> > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### assignee() > ```ts assignee(assigneId): TaskBuilder; ``` The userId of the person to which this task is delegated.
> > > :::
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `assigneId` | `string` |
> 
> ###### Returns
> 
> [`TaskBuilder`](#taskbuilder)
> 
> ##### getAssignee()
> 
> > ```ts
> > getAssignee(): string;
> > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### dueDate() > ```ts dueDate(dueDate): TaskBuilder; ``` Change due date of the task.
> > > :::
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `dueDate` | `Date` |
> 
> ###### Returns
> 
> [`TaskBuilder`](#taskbuilder)
> 
> ##### getDueDate()
> 
> > ```ts
> > getDueDate(): Date;
> > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `Date`
> > > - **Description**: ##### category() > ```ts category(category): TaskBuilder; ``` Change the category of the task. This is an optional field and allows to 'tag' tasks as belonging to a certain category.
> > > :::
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `category` | `string` |
> 
> ###### Returns
> 
> [`TaskBuilder`](#taskbuilder)
> 
> ##### getCategory()
> 
> > ```ts
> > getCategory(): string;
> > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### parentTaskId() > ```ts parentTaskId(parentTaskId): TaskBuilder; ``` the parent task for which this task is a subtask
> > > :::
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `parentTaskId` | `string` |
> 
> ###### Returns
> 
> [`TaskBuilder`](#taskbuilder)
> 
> ##### getParentTaskId()
> 
> > ```ts
> > getParentTaskId(): string;
> > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### tenantId() > ```ts tenantId(tenantId): TaskBuilder; ``` Change the tenantId of the task
> > > :::
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `tenantId` | `string` |
> 
> ###### Returns
> 
> [`TaskBuilder`](#taskbuilder)
> 
> ##### getTenantId()
> 
> > ```ts
> > getTenantId(): string;
> > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### formKey() > ```ts formKey(formKey): TaskBuilder; ``` Change the form key of the task
> > > :::
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `formKey` | `string` |
> 
> ###### Returns
> 
> [`TaskBuilder`](#taskbuilder)
> 
> ##### getFormKey()
> 
> > ```ts
> > getFormKey(): string;
> > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### taskDefinitionId() > ```ts taskDefinitionId(taskDefinitionId): TaskBuilder; ``` task definition id to create task from
> > > :::
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `taskDefinitionId` | `string` |
> 
> ###### Returns
> 
> [`TaskBuilder`](#taskbuilder)
> 
> ##### getTaskDefinitionId()
> 
> > ```ts
> > getTaskDefinitionId(): string;
> > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### taskDefinitionKey() > ```ts taskDefinitionKey(taskDefinitionKey): TaskBuilder; ``` task definition key to create task from
> > > :::
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `taskDefinitionKey` | `string` |
> 
> ###### Returns
> 
> [`TaskBuilder`](#taskbuilder)
> 
> ##### getTaskDefinitionKey()
> 
> > ```ts
> > getTaskDefinitionKey(): string;
> > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### identityLinks() > ```ts identityLinks(identityLinks): TaskBuilder; ``` add identity links to the task
> > > :::
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `identityLinks` | `Set`\ |
> 
> ###### Returns
> 
> [`TaskBuilder`](#taskbuilder)
> 
> ##### getIdentityLinks()
> 
> > ```ts
> > getIdentityLinks(): Set;
> > ```
> 
> 
> > ###### Returns
> 
> > `Set`\
> 
> > ##### scopeId()
> 
> > > ```ts
> > > scopeId(scopeId): TaskBuilder;
> > > ```
> 
> 
> > add task scopeId
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `scopeId` | `string` |
> 
> ###### Returns
> 
> [`TaskBuilder`](#taskbuilder)
> 
> ##### getScopeId()
> 
> > ```ts
> > getScopeId(): string;
> > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### scopeType() > ```ts scopeType(scopeType): TaskBuilder; ``` Add scope type
> > > :::
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `scopeType` | `string` |
> 
> ###### Returns
> 
> [`TaskBuilder`](#taskbuilder)
> 
> ##### getScopeType()
> 
> > ```ts
> > getScopeType(): string;
> > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ***
> > > :::
> 
> > ### FormInfo
> 
> 
> > #### Methods
> 
> > ##### getId()
> 
> > > ```ts
> > > getId(): string;
> > > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### setId() > ```ts setId(id): void; ```
> > > :::
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `id` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getName() > ```ts getName(): string; ```
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### setName() > ```ts setName(name): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getDescription() > ```ts getDescription(): string; ```
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### setDescription() > ```ts setDescription(description): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `description` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getKey() > ```ts getKey(): string; ```
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### setKey() > ```ts setKey(key): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `key` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getVersion() > ```ts getVersion(): number; ```
> > :::

> > ::: info Returns
> > - **Type**: `number`
> > - **Description**: ##### setVersion() > ```ts setVersion(version): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `version` | `number` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getFormModel() > ```ts getFormModel(): any; ```
> > :::

> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: ##### setFormModel() > ```ts setFormModel(formModel): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `formModel` | `any` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ***
> :::

### ValueFields


#### Extended by

- [`VariableInstance`](#variableinstance)

#### Methods

##### getName()

> ```ts
> getName(): string;
> ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: the name of the variable
> > :::

> ##### getProcessInstanceId()

> > ```ts
> > getProcessInstanceId(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: the process instance id of the variable
> > :::

> ##### getExecutionId()

> > ```ts
> > getExecutionId(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: the execution id of the variable
> > :::

> ##### getScopeId()

> > ```ts
> > getScopeId(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: the scope id of the variable
> > :::

> ##### getSubScopeId()

> > ```ts
> > getSubScopeId(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: the sub scope id of the variable
> > :::

> ##### getScopeType()

> > ```ts
> > getScopeType(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: the scope type of the variable
> > :::

> ##### getTaskId()

> > ```ts
> > getTaskId(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: the task id of the variable
> > :::

> ##### getTextValue()

> > ```ts
> > getTextValue(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: the first text value, if any, or null.
> > :::

> ##### setTextValue()

> > ```ts
> > setTextValue(textValue): void;
> > ```


> Sets the first text value. A value of null is allowed.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `textValue` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getTextValue2() > ```ts getTextValue2(): string; ```
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: the second text value, if any, or null.
> > :::

> ##### setTextValue2()

> > ```ts
> > setTextValue2(textValue2): void;
> > ```


> Sets second text value. A value of null is allowed.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `textValue2` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getLongValue() > ```ts getLongValue(): number; ```
> > :::

> > ::: info Returns
> > - **Type**: `number`
> > - **Description**: the long value, if any, or null.
> > :::

> ##### setLongValue()

> > ```ts
> > setLongValue(longValue): void;
> > ```


> Sets the long value. A value of null is allowed.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `longValue` | `number` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getDoubleValue() > ```ts getDoubleValue(): number; ```
> > :::

> > ::: info Returns
> > - **Type**: `number`
> > - **Description**: the double value, if any, or null.
> > :::

> ##### setDoubleValue()

> > ```ts
> > setDoubleValue(doubleValue): void;
> > ```


> Sets the double value. A value of null is allowed.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `doubleValue` | `number` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getBytes() > ```ts getBytes(): any[]; ```
> > :::

> ###### Returns

> `any`[]

> the byte array value, if any, or null.

> ##### setBytes()

> > ```ts
> > setBytes(bytes): void;
> > ```


> Sets the byte array value. A value of null is allowed.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `bytes` | `any`[] |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getCachedValue() > ```ts getCachedValue(): any; ```
> > :::

> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: ##### setCachedValue() > ```ts setCachedValue(cachedValue): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `cachedValue` | `any` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ***
> :::

### VariableInstance


#### Extends

- [`ValueFields`](#valuefields)

#### Methods

##### getName()

> ```ts
> getName(): string;
> ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: the name of the variable
> > :::

> ###### Inherited from

> [`ValueFields`](#valuefields).[`getName`](#getname-4)

> ##### getProcessInstanceId()

> > ```ts
> > getProcessInstanceId(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: the process instance id of the variable
> > :::

> ###### Inherited from

> [`ValueFields`](#valuefields).[`getProcessInstanceId`](#getprocessinstanceid-4)

> ##### getExecutionId()

> > ```ts
> > getExecutionId(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: the execution id of the variable
> > :::

> ###### Inherited from

> [`ValueFields`](#valuefields).[`getExecutionId`](#getexecutionid-2)

> ##### getScopeId()

> > ```ts
> > getScopeId(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: the scope id of the variable
> > :::

> ###### Inherited from

> [`ValueFields`](#valuefields).[`getScopeId`](#getscopeid-5)

> ##### getSubScopeId()

> > ```ts
> > getSubScopeId(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: the sub scope id of the variable
> > :::

> ###### Inherited from

> [`ValueFields`](#valuefields).[`getSubScopeId`](#getsubscopeid-4)

> ##### getScopeType()

> > ```ts
> > getScopeType(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: the scope type of the variable
> > :::

> ###### Inherited from

> [`ValueFields`](#valuefields).[`getScopeType`](#getscopetype-5)

> ##### getTaskId()

> > ```ts
> > getTaskId(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: the task id of the variable
> > :::

> ###### Inherited from

> [`ValueFields`](#valuefields).[`getTaskId`](#gettaskid-2)

> ##### getTextValue()

> > ```ts
> > getTextValue(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: the first text value, if any, or null.
> > :::

> ###### Inherited from

> [`ValueFields`](#valuefields).[`getTextValue`](#gettextvalue)

> ##### setTextValue()

> > ```ts
> > setTextValue(textValue): void;
> > ```


> Sets the first text value. A value of null is allowed.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `textValue` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Inherited from [`ValueFields`](#valuefields).[`setTextValue`](#settextvalue)
> :::

##### getTextValue2()

> ```ts
> getTextValue2(): string;
> ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: the second text value, if any, or null.
> > :::

> ###### Inherited from

> [`ValueFields`](#valuefields).[`getTextValue2`](#gettextvalue2)

> ##### setTextValue2()

> > ```ts
> > setTextValue2(textValue2): void;
> > ```


> Sets second text value. A value of null is allowed.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `textValue2` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Inherited from [`ValueFields`](#valuefields).[`setTextValue2`](#settextvalue2)
> :::

##### getLongValue()

> ```ts
> getLongValue(): number;
> ```


> > ::: info Returns
> > - **Type**: `number`
> > - **Description**: the long value, if any, or null.
> > :::

> ###### Inherited from

> [`ValueFields`](#valuefields).[`getLongValue`](#getlongvalue)

> ##### setLongValue()

> > ```ts
> > setLongValue(longValue): void;
> > ```


> Sets the long value. A value of null is allowed.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `longValue` | `number` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Inherited from [`ValueFields`](#valuefields).[`setLongValue`](#setlongvalue)
> :::

##### getDoubleValue()

> ```ts
> getDoubleValue(): number;
> ```


> > ::: info Returns
> > - **Type**: `number`
> > - **Description**: the double value, if any, or null.
> > :::

> ###### Inherited from

> [`ValueFields`](#valuefields).[`getDoubleValue`](#getdoublevalue)

> ##### setDoubleValue()

> > ```ts
> > setDoubleValue(doubleValue): void;
> > ```


> Sets the double value. A value of null is allowed.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `doubleValue` | `number` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Inherited from [`ValueFields`](#valuefields).[`setDoubleValue`](#setdoublevalue)
> :::

##### getBytes()

> ```ts
> getBytes(): any[];
> ```


> ###### Returns

> `any`[]

> the byte array value, if any, or null.

> ###### Inherited from

> [`ValueFields`](#valuefields).[`getBytes`](#getbytes)

> ##### setBytes()

> > ```ts
> > setBytes(bytes): void;
> > ```


> Sets the byte array value. A value of null is allowed.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `bytes` | `any`[] |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Inherited from [`ValueFields`](#valuefields).[`setBytes`](#setbytes)
> :::

##### getCachedValue()

> ```ts
> getCachedValue(): any;
> ```


> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: ###### Inherited from [`ValueFields`](#valuefields).[`getCachedValue`](#getcachedvalue)
> > :::

> ##### setCachedValue()

> > ```ts
> > setCachedValue(cachedValue): void;
> > ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `cachedValue` | `any` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ###### Inherited from [`ValueFields`](#valuefields).[`setCachedValue`](#setcachedvalue)
> :::

##### getId()

> ```ts
> getId(): string;
> ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### setId() > ```ts setId(id): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `id` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setName() > ```ts setName(name): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setExecutionId() > ```ts setExecutionId(executionId): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `executionId` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setProcessInstanceId() > ```ts setProcessInstanceId(processInstanceId): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `processInstanceId` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setProcessDefinitionId() > ```ts setProcessDefinitionId(processDefinitionId): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `processDefinitionId` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getProcessDefinitionId() > ```ts getProcessDefinitionId(): string; ```
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getValue() > ```ts getValue(): any; ```
> > :::

> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: ##### setValue() > ```ts setValue(value): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getTypeName() > ```ts getTypeName(): string; ```
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### setTypeName() > ```ts setTypeName(typeName): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `typeName` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### isReadOnly() > ```ts isReadOnly(): boolean; ```
> > :::

> > ::: info Returns
> > - **Type**: `boolean`
> > - **Description**: ##### setTaskId() > ```ts setTaskId(taskId): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setScopeId() > ```ts setScopeId(scopeId): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `scopeId` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setSubScopeId() > ```ts setSubScopeId(subScopeId): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `subScopeId` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setScopeType() > ```ts setScopeType(scopeType): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `scopeType` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setScopeDefinitionId() > ```ts setScopeDefinitionId(scopeDefinitionId): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `scopeDefinitionId` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getScopeDefinitionId() > ```ts getScopeDefinitionId(): string; ```
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getMetaInfo() > ```ts getMetaInfo(): string; ```
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### setMetaInfo() > ```ts setMetaInfo(metaInfo): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `metaInfo` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ***
> :::

### DataObject


#### Methods

##### getId()

> ```ts
> getId(): string;
> ```


> The unique id of this Data Object.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getProcessInstanceId() > ```ts getProcessInstanceId(): string; ``` /** * The id of the process instance that this Data Object is associated with.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getExecutionId() > ```ts getExecutionId(): string; ``` The id of the execution in which this Data Object resides. A DataObject only resides on a process instance execution or a subprocess execution.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getName() > ```ts getName(): string; ``` Name of the DataObject.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getLocalizedName() > ```ts getLocalizedName(): string; ``` Localized Name of the DataObject.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getDescription() > ```ts getDescription(): string; ``` Description of the DataObject.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getValue() > ```ts getValue(): any; ``` Value of the DataObject.
> > :::

> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: ##### getType() > ```ts getType(): string; ``` Type of the DataObject.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getDataObjectDefinitionKey() > ```ts getDataObjectDefinitionKey(): string; ``` The id of the flow element in the process defining this data object.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ***
> > :::

> ### Comment


> #### Methods

> ##### getId()

> > ```ts
> > getId(): string;
> > ```


> unique identifier for this comment

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getUserId() > ```ts getUserId(): string; ``` reference to the user that made the comment
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### setUserId() > ```ts setUserId(userId): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `userId` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getTime() > ```ts getTime(): Date; ```
> > :::

> > ::: info Returns
> > - **Type**: `Date`
> > - **Description**: ##### setTime() > ```ts setTime(time): any; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `time` | `Date` |

> ::: info Returns
> - **Type**: `any`
> - **Description**: ##### getTaskId() > ```ts getTaskId(): string; ``` reference to the task on which this comment was made
> :::

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### setTaskId() > ```ts setTaskId(taskId): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getProcessInstanceId() > ```ts getProcessInstanceId(): string; ``` reference to the process instance on which this comment was made
> :::

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### setProcessInstanceId() > ```ts setProcessInstanceId(processInstanceId): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `processInstanceId` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getType() > ```ts getType(): string; ``` reference to the type given to the comment
> :::

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### setType() > ```ts setType(type): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `type` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getFullMessage() > ```ts getFullMessage(): string; ``` the full comment message the user had related to the task and/or process instance
> :::

> ::: info Returns
> - **Type**: `string`
> - **Description**: ###### See TaskService#getTaskComments(String)
> :::

##### setFullMessage()

> ```ts
> setFullMessage(fullMessage): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `fullMessage` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ***
> :::

### TaskEvent


#### Methods

##### getId()

> ```ts
> getId(): string;
> ```


> Unique identifier for this event

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getAction() > ```ts getAction(): string; ``` Indicates the type of of action and also indicates the meaning of the parts as exposed in #getMessageParts()
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getMessageParts() > ```ts getMessageParts(): string[]; ``` The meaning of the message parts is defined by the action as you can find in #getAction()
> > :::

> ###### Returns

> `string`[]

> ##### getMessage()

> > ```ts
> > getMessage(): string;
> > ```


> The message that can be used in case this action only has a single message part.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getUserId() > ```ts getUserId(): string; ``` reference to the user that made the comment
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getTime() > ```ts getTime(): Date; ``` time and date when the user made the comment
> > :::

> > ::: info Returns
> > - **Type**: `Date`
> > - **Description**: ##### getTaskId() > ```ts getTaskId(): string; ``` reference to the task on which this comment was made
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getProcessInstanceId() > ```ts getProcessInstanceId(): string; ``` reference to the process instance on which this comment was made
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ***
> > :::

> ### Attachment


> #### Methods

> ##### getId()

> > ```ts
> > getId(): string;
> > ```


> unique id for this attachment

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getName() > ```ts getName(): string; ``` free user defined short (max 255 chars) name for this attachment
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### setName() > ```ts setName(name): void; ``` free user defined short (max 255 chars) name for this attachment
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getDescription() > ```ts getDescription(): string; ``` long (max 255 chars) explanation what this attachment is about in context of the task and/or process instance it's linked to.
> :::

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### setDescription() > ```ts setDescription(description): void; ``` long (max 255 chars) explanation what this attachment is about in context of the task and/or process instance it's linked to.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `description` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getType() > ```ts getType(): string; ``` indication of the type of content that this attachment refers to. Can be mime type or any other indication.
> :::

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### getTaskId() > ```ts getTaskId(): string; ``` reference to the task to which this attachment is associated.
> :::

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### getProcessInstanceId() > ```ts getProcessInstanceId(): string; ``` reference to the process instance to which this attachment is associated.
> :::

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### getUrl() > ```ts getUrl(): string; ``` the remote URL in case this is remote content. If the attachment content was [(String, String, String, String, String, java.io.InputStream) uploaded with an](#createattachment), then this method returns null and the content can be fetched with [(String)](#getattachmentcontent).
> :::

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### getUserId() > ```ts getUserId(): string; ``` reference to the user who created this attachment.
> :::

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### getTime() > ```ts getTime(): Date; ``` timestamp when this attachment was created
> :::

> ::: info Returns
> - **Type**: `Date`
> - **Description**: ##### setTime() > ```ts setTime(time): void; ``` timestamp when this attachment was created
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `time` | `Date` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getContentId() > ```ts getContentId(): string; ``` the id of the byte array entity storing the content
> :::

> ::: info Returns
> - **Type**: `string`
> - **Description**: ***
> :::

### QueryProperty


#### Methods

##### getName()

> ```ts
> getName(): string;
> ```


> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ***
> > :::

> ### Query


> #### Extended by

> - [`TaskInfoQuery`](#taskinfoquery)

> #### Type Parameters

> | Type Parameter |
> | ------ |
> | `T` |
> | `U` |

> #### Methods

> ##### asc()

> > ```ts
> > asc(): T;
> > ```


> Order the results ascending on the given property as defined in this class (needs to come after a call to one of the orderByXxxx methods).

> > ::: info Returns
> > - **Type**: `T`
> > - **Description**: ##### desc() > ```ts desc(): T; ``` Order the results descending on the given property as defined in this class (needs to come after a call to one of the orderByXxxx methods).
> > :::

> > ::: info Returns
> > - **Type**: `T`
> > - **Description**: ##### orderBy()
> > :::

> ###### Call Signature

> > ```ts
> > orderBy(property): T;
> > ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `property` | [`QueryProperty`](#queryproperty) |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ###### Call Signature > ```ts orderBy(property, nullHandlingOnOrder): T; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `property` | [`QueryProperty`](#queryproperty) |
> | `nullHandlingOnOrder` | [`NullHandlingOnOrder`](#nullhandlingonorder) |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### count() > ```ts count(): number; ``` Executes the query and returns the number of results
> :::

> ::: info Returns
> - **Type**: `number`
> - **Description**: ##### singleResult() > ```ts singleResult(): U; ``` Executes the query and returns the resulting entity or null if no entity matches the query criteria.
> :::

> ::: info Returns
> - **Type**: `U`
> - **Description**: ###### Throws org.flowable.common.engine.api.FlowableException when the query results in more than one entities.
> :::

##### list()

> ```ts
> list(): U[];
> ```


> Executes the query and get a list of entities as the result.

> ###### Returns

> `U`[]

> ##### listPage()

> > ```ts
> > listPage(firstResult, maxResults): U[];
> > ```


> Executes the query and get a list of entities as the result.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `firstResult` | `number` |
> | `maxResults` | `number` |
> 
> ###### Returns
> 
> `U`[]
> 
> ***
> 
> ### TaskInfoQuery
> 
> 
> #### Extends
> 
> - [`Query`](#query)\
> 
> #### Type Parameters
> 
> | Type Parameter |
> | ------ |
> | `T` |
> | `V` *extends* [`TaskInfo`](#taskinfo) |
> 
> #### Methods
> 
> ##### asc()
> 
> > ```ts
> > asc(): T;
> > ```
> 
> 
> > Order the results ascending on the given property as defined in this class (needs to come after a call to one of the orderByXxxx methods).
> 
> > > ::: info Returns
> > > - **Type**: `T`
> > > - **Description**: ###### Inherited from [`Query`](#query).[`asc`](#asc)
> > > :::
> 
> > ##### desc()
> 
> > > ```ts
> > > desc(): T;
> > > ```
> 
> 
> > Order the results descending on the given property as defined in this class (needs to come after a call to one of the orderByXxxx methods).
> 
> > > ::: info Returns
> > > - **Type**: `T`
> > > - **Description**: ###### Inherited from [`Query`](#query).[`desc`](#desc)
> > > :::
> 
> > ##### orderBy()
> 
> > ###### Call Signature
> 
> > > ```ts
> > > orderBy(property): T;
> > > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `property` | [`QueryProperty`](#queryproperty) |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ###### Inherited from [`Query`](#query).[`orderBy`](#orderby)
> :::

###### Call Signature

> ```ts
> orderBy(property, nullHandlingOnOrder): T;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `property` | [`QueryProperty`](#queryproperty) |
> | `nullHandlingOnOrder` | [`NullHandlingOnOrder`](#nullhandlingonorder) |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ###### Inherited from [`Query`](#query).[`orderBy`](#orderby)
> :::

##### count()

> ```ts
> count(): number;
> ```


> Executes the query and returns the number of results

> > ::: info Returns
> > - **Type**: `number`
> > - **Description**: ###### Inherited from [`Query`](#query).[`count`](#count)
> > :::

> ##### singleResult()

> > ```ts
> > singleResult(): V;
> > ```


> Executes the query and returns the resulting entity or null if no entity matches the query criteria.

> > ::: info Returns
> > - **Type**: `V`
> > - **Description**: ###### Throws org.flowable.common.engine.api.FlowableException when the query results in more than one entities.
> > :::

> ###### Inherited from

> [`Query`](#query).[`singleResult`](#singleresult)

> ##### list()

> > ```ts
> > list(): V[];
> > ```


> Executes the query and get a list of entities as the result.

> ###### Returns

> `V`[]

> ###### Inherited from

> [`Query`](#query).[`list`](#list-1)

> ##### listPage()

> > ```ts
> > listPage(firstResult, maxResults): V[];
> > ```


> Executes the query and get a list of entities as the result.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `firstResult` | `number` |
> | `maxResults` | `number` |
> 
> ###### Returns
> 
> `V`[]
> 
> ###### Inherited from
> 
> [`Query`](#query).[`listPage`](#listpage)
> 
> ##### taskId()
> 
> > ```ts
> > taskId(taskId): T;
> > ```
> 
> 
> > Only select tasks with the given task id (in practice, there will be maximum one of this kind)
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `taskId` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskIds() > ```ts taskIds(taskIds): T; ``` Only select tasks with an id that is in the given list
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskIds` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ###### Throws FlowableIllegalArgumentException             When passed id list is empty or null or contains null String.
> :::

##### taskName()

> ```ts
> taskName(name): T;
> ```


> Only select tasks with the given name

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskNameIn() > ```ts taskNameIn(nameList): T; ``` Only select tasks with a name that is in the given list
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `nameList` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ###### Throws FlowableIllegalArgumentException             When passed name list is empty or null or contains null String.
> :::

##### taskNameInIgnoreCase()

> ```ts
> taskNameInIgnoreCase(nameList): T;
> ```


> Only select tasks with a name that is in the given list

> This method, unlike the #taskNameIn(Collection) method will not take in account the upper/lower case: both the input parameters as the column value are lowercased when the query is executed.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `nameList` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ###### Throws FlowableIllegalArgumentException             When passed name list is empty or null or contains null String.
> :::

##### taskNameLike()

> ```ts
> taskNameLike(nameLike): T;
> ```


> Only select tasks with a name matching the parameter. The syntax is that of SQL: for example usage: nameLike(%test%)

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `nameLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskNameLikeIgnoreCase() > ```ts taskNameLikeIgnoreCase(nameLike): T; ``` Only select tasks with a name matching the parameter. The syntax is that of SQL: for example usage: nameLike(%test%) This method, unlike the #taskNameLike(String) method will not take in account the upper/lower case: both the input parameter as the column value are lowercased when the query is executed.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `nameLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskDescription() > ```ts taskDescription(description): T; ``` Only select tasks with the given description.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `description` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskDescriptionLike() > ```ts taskDescriptionLike(descriptionLike): T; ``` Only select tasks with a description matching the parameter . The syntax is that of SQL: for example usage: descriptionLike(%test%)
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `descriptionLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskDescriptionLikeIgnoreCase() > ```ts taskDescriptionLikeIgnoreCase(descriptionLike): T; ``` Only select tasks with a description matching the parameter . The syntax is that of SQL: for example usage: descriptionLike(%test%) This method, unlike the #taskDescriptionLike(String) method will not take in account the upper/lower case: both the input parameter as the column value are lowercased when the query is executed.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `descriptionLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskPriority() > ```ts taskPriority(priority): T; ``` Only select tasks with the given priority.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `priority` | `number` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskMinPriority() > ```ts taskMinPriority(minPriority): T; ``` Only select tasks with the given priority or higher.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `minPriority` | `number` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskMaxPriority() > ```ts taskMaxPriority(maxPriority): T; ``` Only select tasks with the given priority or lower.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `maxPriority` | `number` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskAssignee() > ```ts taskAssignee(assignee): T; ``` Only select tasks which are assigned to the given user.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `assignee` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskAssigneeLike() > ```ts taskAssigneeLike(assigneeLike): T; ``` Only select tasks which were last assigned to an assignee like the given value. The syntax that should be used is the same as in SQL, eg. %test%.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `assigneeLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskAssigneeLikeIgnoreCase() > ```ts taskAssigneeLikeIgnoreCase(assigneeLikeIgnoreCase): T; ``` Only select tasks which were last assigned to an assignee like the given value. The syntax that should be used is the same as in SQL, eg. %test%. This method, unlike the #taskAssigneeLike(String) method will not take in account the upper/lower case: both the input parameter as the column value are lowercased when the query is executed.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `assigneeLikeIgnoreCase` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskUnassigned() > ```ts taskUnassigned(): T; ``` Only select tasks which don't have an assignee.
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskAssigned() > ```ts taskAssigned(): T; ``` Only select tasks which are assigned to any user
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskAssigneeIds() > ```ts taskAssigneeIds(assigneeListIds): T; ``` Only select tasks with an assignee that is in the given list
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `assigneeListIds` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ###### Throws FlowableIllegalArgumentException             When passed name list is empty or null or contains null String.
> :::

##### taskOwner()

> ```ts
> taskOwner(owner): T;
> ```


> Only select tasks for which the given user is the owner.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `owner` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskOwnerLike() > ```ts taskOwnerLike(ownerLike): T; ``` Only select tasks which were last assigned to an owner like the given value. The syntax that should be used is the same as in SQL, eg. %test%.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `ownerLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskOwnerLikeIgnoreCase() > ```ts taskOwnerLikeIgnoreCase(ownerLikeIgnoreCase): T; ``` Only select tasks which were last assigned to an owner like the given value. The syntax that should be used is the same as in SQL, eg. %test%. This method, unlike the #taskOwnerLike(String) method will not take in account the upper/lower case: both the input parameter as the column value are lowercased when the query is executed.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `ownerLikeIgnoreCase` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskCandidateUser() > ```ts taskCandidateUser(candidateUser): T; ``` Only select tasks for which the given user is a candidate.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `candidateUser` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskInvolvedUser() > ```ts taskInvolvedUser(involvedUser): T; ``` Only select tasks for which there exist an [IdentityLink](#identitylink) with the given user, including tasks which have been assigned to the given user (assignee) or owned by the given user (owner).
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `involvedUser` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskInvolvedGroups() > ```ts taskInvolvedGroups(involvedGroup): T; ``` Only select tasks for which there exist an [IdentityLink](#identitylink) with the given Groups.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `involvedGroup` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### ignoreAssigneeValue() > ```ts ignoreAssigneeValue(): T; ``` Allows to select a task using #taskCandidateGroup(String) #taskCandidateGroupIn(Collection) or #taskCandidateUser(String) but ignore the assignee value instead of querying for an empty assignee.
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskCandidateGroup() > ```ts taskCandidateGroup(candidateGroup): T; ``` Only select tasks for which users in the given group are candidates.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `candidateGroup` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskCandidateGroupIn() > ```ts taskCandidateGroupIn(candidateGroups): T; ``` Only select tasks for which the 'candidateGroup' is one of the given groups.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `candidateGroups` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ###### Throws FlowableIllegalArgumentException             When query is executed and #taskCandidateGroup(String) or #taskCandidateUser(String) has been executed on the query instance. When passed group list is empty or             null.
> :::

##### taskTenantId()

> ```ts
> taskTenantId(tenantId): T;
> ```


> Only select tasks that have the given tenant id.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `tenantId` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskTenantIdLike() > ```ts taskTenantIdLike(tenantIdLike): T; ``` Only select tasks with a tenant id like the given one.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `tenantIdLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskWithoutTenantId() > ```ts taskWithoutTenantId(): T; ``` Only select tasks that do not have a tenant id.
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processInstanceId() > ```ts processInstanceId(processInstanceId): T; ``` Only select tasks for the given process instance id.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `processInstanceId` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processInstanceIdIn() > ```ts processInstanceIdIn(processInstanceIds): T; ``` Only select tasks for the given process ids.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `processInstanceIds` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### withoutProcessInstanceId() > ```ts withoutProcessInstanceId(): T; ``` Only select tasks without a process instance id.
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processInstanceBusinessKey() > ```ts processInstanceBusinessKey(processInstanceBusinessKey): T; ``` Only select tasks for the given business key
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `processInstanceBusinessKey` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processInstanceBusinessKeyLike() > ```ts processInstanceBusinessKeyLike(processInstanceBusinessKeyLike): T; ``` Only select tasks with a business key like the given value The syntax is that of SQL: for example usage: processInstanceBusinessKeyLike("%test%").
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `processInstanceBusinessKeyLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processInstanceBusinessKeyLikeIgnoreCase() > ```ts processInstanceBusinessKeyLikeIgnoreCase(processInstanceBusinessKeyLikeIgnoreCase): T; ``` Only select tasks with a business key like the given value The syntax is that of SQL: for example usage: processInstanceBusinessKeyLike("%test%"). This method, unlike the #processInstanceBusinessKeyLike(String) method will not take in account the upper/lower case: both the input parameter as the column value are lowercased when the query is executed.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `processInstanceBusinessKeyLikeIgnoreCase` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### executionId() > ```ts executionId(executionId): T; ``` Only select tasks for the given execution.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `executionId` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### caseInstanceId() > ```ts caseInstanceId(caseInstanceId): T; ``` Only select tasks for the given case instance.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `caseInstanceId` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### caseDefinitionId() > ```ts caseDefinitionId(caseDefinitionId): T; ``` Only select tasks for the given case definition.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `caseDefinitionId` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### caseDefinitionKey() > ```ts caseDefinitionKey(caseDefinitionKey): T; ``` Only select tasks which are part of a case instance which has the given case definition key.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `caseDefinitionKey` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### caseDefinitionKeyLike() > ```ts caseDefinitionKeyLike(caseDefinitionKeyLike): T; ``` Only select tasks which are part of a case instance which has a case definition key like the given value. The syntax that should be used is the same as in SQL, eg. %test%.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `caseDefinitionKeyLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### caseDefinitionKeyLikeIgnoreCase() > ```ts caseDefinitionKeyLikeIgnoreCase(caseDefinitionKeyLikeIgnoreCase): T; ``` Only select tasks which are part of a case instance which has a case definition key like the given value. The syntax that should be used is the same as in SQL, eg. %test%. This method, unlike the #caseDefinitionKeyLike(String) method will not take in account the upper/lower case: both the input parameter as the column value are lowercased when the query is executed.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `caseDefinitionKeyLikeIgnoreCase` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### caseDefinitionKeyIn() > ```ts caseDefinitionKeyIn(caseDefinitionKeys): T; ``` Only select tasks that have a case definition for which the key is present in the given list *
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `caseDefinitionKeys` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### planItemInstanceId() > ```ts planItemInstanceId(planItemInstanceId): T; ``` Only select tasks for the given plan item instance.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `planItemInstanceId` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### scopeId() > ```ts scopeId(scopeId): T; ``` Only select tasks for the given scope identifier.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `scopeId` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### subScopeId() > ```ts subScopeId(subScopeId): T; ``` Only select tasks for the given sub scope identifier.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `subScopeId` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### scopeType() > ```ts scopeType(scopeType): T; ``` Only select tasks for the given scope type.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `scopeType` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### scopeDefinitionId() > ```ts scopeDefinitionId(scopeDefinitionId): T; ``` Only select tasks for the given scope definition identifier.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `scopeDefinitionId` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### propagatedStageInstanceId() > ```ts propagatedStageInstanceId(propagatedStageInstanceId): T; ``` Only select tasks for the given stage, defined through its stage instance id.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `propagatedStageInstanceId` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processInstanceIdWithChildren() > ```ts processInstanceIdWithChildren(processInstanceId): T; ``` Select all tasks for the given process instance id and its children.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `processInstanceId` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### caseInstanceIdWithChildren() > ```ts caseInstanceIdWithChildren(caseInstanceId): T; ``` Select all tasks for the given case instance id and its children.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `caseInstanceId` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskCreatedOn() > ```ts taskCreatedOn(createTime): T; ``` Only select tasks that are created on the given date.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `createTime` | `Date` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskCreatedBefore() > ```ts taskCreatedBefore(before): T; ``` Only select tasks that are created before the given date.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `before` | `Date` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskCreatedAfter() > ```ts taskCreatedAfter(after): T; ``` Only select tasks that are created after the given date.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `after` | `Date` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskInProgressStartTimeOn() > ```ts taskInProgressStartTimeOn(claimedTime): T; ``` Only select tasks that are started in progress on the given date.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `claimedTime` | `Date` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskInProgressStartTimeBefore() > ```ts taskInProgressStartTimeBefore(before): T; ``` Only select tasks that are started in progress before the given date.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `before` | `Date` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskInProgressStartTimeAfter() > ```ts taskInProgressStartTimeAfter(after): T; ``` Only select tasks that are started in progress after the given date.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `after` | `Date` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskInProgressStartedBy() > ```ts taskInProgressStartedBy(startedBy): T; ``` Select all tasks that have an in progress started user reference for the given value.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `startedBy` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskClaimedOn() > ```ts taskClaimedOn(claimedTime): T; ``` Only select tasks that are claimed on the given date.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `claimedTime` | `Date` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskClaimedBefore() > ```ts taskClaimedBefore(before): T; ``` Only select tasks that are claimed before the given date.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `before` | `Date` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskClaimedAfter() > ```ts taskClaimedAfter(after): T; ``` Only select tasks that are claimed after the given date.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `after` | `Date` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskClaimedBy() > ```ts taskClaimedBy(claimedBy): T; ``` Select all tasks that have a claimed by user reference for the given value.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `claimedBy` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskSuspendedOn() > ```ts taskSuspendedOn(suspendedTime): T; ``` Only select tasks that are suspended on the given date.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `suspendedTime` | `Date` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskSuspendedBefore() > ```ts taskSuspendedBefore(before): T; ``` Only select tasks that are suspended before the given date.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `before` | `Date` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskSuspendedAfter() > ```ts taskSuspendedAfter(after): T; ``` Only select tasks that are suspended after the given date.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `after` | `Date` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskSuspendedBy() > ```ts taskSuspendedBy(suspendedBy): T; ``` Select all tasks that have a suspended by user reference for the given value.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `suspendedBy` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskCategory() > ```ts taskCategory(category): T; ``` Only select tasks with the given category.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `category` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskCategoryIn() > ```ts taskCategoryIn(taskCategoryInList): T; ``` Only select tasks belonging to one of the categories in the given list.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskCategoryInList` | `string`[] | - |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ###### Throws FlowableIllegalArgumentException When passed category list is empty or null or contains null String.
> :::

##### taskCategoryNotIn()

> ```ts
> taskCategoryNotIn(taskCategoryNotInList): T;
> ```


> Only select tasks with a defined category which do not belong to a category present in the given list.

> NOTE: This method does not return tasks without category e.g. tasks having a null category.
> To include null categories, use query.or().taskCategoryNotIn(...).taskWithoutCategory().endOr()


> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `taskCategoryNotInList` | `string`[] | - |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ###### Throws FlowableIllegalArgumentException When passed category list is empty or null or contains null String.
> :::

###### See

#taskWithoutCategory

##### taskWithoutCategory()

> ```ts
> taskWithoutCategory(): T;
> ```


> Selects tasks without category.

> Can also be used in conjunction with other filter criteria to include tasks without category e.g. in or queries.


> > ::: info Returns
> > - **Type**: `T`
> > - **Description**: ###### See #taskCategoryNotIn(Collection)
> > :::

> ##### taskWithFormKey()

> > ```ts
> > taskWithFormKey(): T;
> > ```


> Only select tasks with form key.

> > ::: info Returns
> > - **Type**: `T`
> > - **Description**: ##### taskFormKey() > ```ts taskFormKey(formKey): T; ``` Only select tasks with the given formKey.
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `formKey` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskDefinitionKey() > ```ts taskDefinitionKey(key): T; ``` Only select tasks with the given taskDefinitionKey. The task definition key is the id of the userTask: &lt;userTask id="xxx" .../&gt;
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `key` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskDefinitionKeyLike() > ```ts taskDefinitionKeyLike(keyLike): T; ``` Only select tasks with a taskDefinitionKey that match the given parameter. The syntax is that of SQL: for example usage: taskDefinitionKeyLike("%test%"). The task definition key is the id of the userTask: &lt;userTask id="xxx" .../&gt;
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `keyLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskDefinitionKeys() > ```ts taskDefinitionKeys(keys): T; ``` Only select tasks with the given taskDefinitionKeys. The task definition key is the id of the userTask: &lt;userTask id="xxx" .../&gt;
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `keys` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskState() > ```ts taskState(state): T; ``` Only select tasks with the given state.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `state` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskInProgressStartDueDate() > ```ts taskInProgressStartDueDate(dueDate): T; ``` Only select tasks with the given in progress start due date.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `dueDate` | `Date` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskInProgressStartDueBefore() > ```ts taskInProgressStartDueBefore(dueDate): T; ``` Only select tasks which have an in progress start due date before the given date.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `dueDate` | `Date` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskInProgressStartDueAfter() > ```ts taskInProgressStartDueAfter(dueDate): T; ``` Only select tasks which have an in progress start due date after the given date.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `dueDate` | `Date` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### withoutTaskInProgressStartDueDate() > ```ts withoutTaskInProgressStartDueDate(): T; ``` Only select tasks with no in progress start due date.
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskDueDate() > ```ts taskDueDate(dueDate): T; ``` Only select tasks with the given due date.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `dueDate` | `Date` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskDueBefore() > ```ts taskDueBefore(dueDate): T; ``` Only select tasks which have a due date before the given date.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `dueDate` | `Date` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskDueAfter() > ```ts taskDueAfter(dueDate): T; ``` Only select tasks which have a due date after the given date.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `dueDate` | `Date` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### withoutTaskDueDate() > ```ts withoutTaskDueDate(): T; ``` Only select tasks with no due date.
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processDefinitionKey() > ```ts processDefinitionKey(processDefinitionKey): T; ``` Only select tasks which are part of a process instance which has the given process definition key.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `processDefinitionKey` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processDefinitionKeyLike() > ```ts processDefinitionKeyLike(processDefinitionKeyLike): T; ``` Only select tasks which are part of a process instance which has a process definition key like the given value. The syntax that should be used is the same as in SQL, eg. %test%.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `processDefinitionKeyLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processDefinitionKeyLikeIgnoreCase() > ```ts processDefinitionKeyLikeIgnoreCase(processDefinitionKeyLikeIgnoreCase): T; ``` Only select tasks which are part of a process instance which has a process definition key like the given value. The syntax that should be used is the same as in SQL, eg. %test%. This method, unlike the #processDefinitionKeyLike(String) method will not take in account the upper/lower case: both the input parameter as the column value are lowercased when the query is executed.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `processDefinitionKeyLikeIgnoreCase` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processDefinitionKeyIn() > ```ts processDefinitionKeyIn(processDefinitionKeys): T; ``` Only select tasks that have a process definition for which the key is present in the given list *
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `processDefinitionKeys` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskDefinitionId() > ```ts taskDefinitionId(taskDefinitionId): T; ``` Only select tasks which created from the given task definition referenced by id.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `taskDefinitionId` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processDefinitionId() > ```ts processDefinitionId(processDefinitionId): T; ``` Only select tasks which are part of a process instance which has the given process definition id.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `processDefinitionId` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processDefinitionName() > ```ts processDefinitionName(processDefinitionName): T; ``` Only select tasks which are part of a process instance which has the given process definition name.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `processDefinitionName` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processDefinitionNameLike() > ```ts processDefinitionNameLike(processDefinitionNameLike): T; ``` Only select tasks which are part of a process instance which has a process definition name like the given value. The syntax that should be used is the same as in SQL, eg. %test%.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `processDefinitionNameLike` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processCategoryIn() > ```ts processCategoryIn(processCategoryInList): T; ``` Only select tasks which are part of a process instance whose definition belongs to the category which is present in the given list.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `processCategoryInList` | `string`[] | - |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ###### Throws FlowableIllegalArgumentException             When passed category list is empty or null or contains null String.
> :::

##### processCategoryNotIn()

> ```ts
> processCategoryNotIn(processCategoryNotInList): T;
> ```


> Only select tasks which are part of a process instance whose definition does not belong to the category which is present in the given list.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `processCategoryNotInList` | `string`[] | - |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ###### Throws FlowableIllegalArgumentException             When passed category list is empty or null or contains null String.
> :::

##### deploymentId()

> ```ts
> deploymentId(deploymentId): T;
> ```


> Only select tasks which are part of a process instance which has the given deployment id.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `deploymentId` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### deploymentIdIn() > ```ts deploymentIdIn(deploymentIds): T; ``` Only select tasks which are part of a process instance which has the given deployment id.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `deploymentIds` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### cmmnDeploymentId() > ```ts cmmnDeploymentId(cmmnDeploymentId): T; ``` Only select tasks which are related to a case instance for to the given deployment id.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `cmmnDeploymentId` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### cmmnDeploymentIdIn() > ```ts cmmnDeploymentIdIn(cmmnDeploymentIds): T; ``` Only select tasks which are related to a case instances for the given deployment id.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `cmmnDeploymentIds` | `string`[] |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### withoutScopeId() > ```ts withoutScopeId(): T; ``` Only select tasks which don't have a scope id set.
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskVariableValueEquals()
> :::

###### Call Signature

> ```ts
> taskVariableValueEquals(variableName, variableValue): T;
> ```


> Only select tasks which have a local task variable with the given name set to the given value.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `variableName` | `string` |
> | `variableValue` | `any` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ###### Call Signature > ```ts taskVariableValueEquals(variableValue): T; ``` Only select tasks which have at least one local task variable with the given value.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `variableValue` | `any` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskVariableValueEqualsIgnoreCase() > ```ts taskVariableValueEqualsIgnoreCase(name, value): T; ``` Only select tasks which have a local string variable with the given value, case insensitive. This method only works if your database has encoding/collation that supports case-sensitive queries. For example, use "collate UTF-8" on MySQL and for MSSQL, select one of the case-sensitive Collations available (MSDN Server Collation Reference).
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |
> | `value` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskVariableValueNotEquals() > ```ts taskVariableValueNotEquals(variableName, variableValue): T; ``` Only select tasks which have a local task variable with the given name, but with a different value than the passed value. Byte-arrays and Serializable objects (which are not primitive type wrappers) are not supported.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `variableName` | `string` |
> | `variableValue` | `any` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskVariableValueNotEqualsIgnoreCase() > ```ts taskVariableValueNotEqualsIgnoreCase(name, value): T; ``` Only select tasks which have a local string variable with is not the given value, case insensitive. This method only works if your database has encoding/collation that supports case-sensitive queries. For example, use "collate UTF-8" on MySQL and for MSSQL, select one of the case-sensitive Collations available (MSDN Server Collation Reference).
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |
> | `value` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskVariableValueGreaterThan() > ```ts taskVariableValueGreaterThan(name, value): T; ``` Only select tasks which have a local variable value greater than the passed value when they ended. Booleans, Byte-arrays and Serializable objects (which are not primitive type wrappers) are not supported.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |
> | `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskVariableValueGreaterThanOrEqual() > ```ts taskVariableValueGreaterThanOrEqual(name, value): T; ``` Only select tasks which have a local variable value greater than or equal to the passed value when they ended. Booleans, Byte-arrays and Serializable objects (which are not primitive type wrappers) are not supported.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |
> | `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskVariableValueLessThan() > ```ts taskVariableValueLessThan(name, value): T; ``` Only select tasks which have a local variable value less than the passed value when the ended.Booleans, Byte-arrays and Serializable objects (which are not primitive type wrappers) are not supported.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |
> | `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskVariableValueLessThanOrEqual() > ```ts taskVariableValueLessThanOrEqual(name, value): T; ``` Only select tasks which have a local variable value less than or equal to the passed value when they ended. Booleans, Byte-arrays and Serializable objects (which are not primitive type wrappers) are not supported.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |
> | `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskVariableValueLike() > ```ts taskVariableValueLike(name, value): T; ``` Only select tasks which have a local variable value like the given value when they ended. This can be used on string variables only.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |
> | `value` | `string` | cannot be null. The string can include the wildcard character '%' to express like-strategy: starts with (string%), ends with (%string) or contains (%string%). |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskVariableValueLikeIgnoreCase() > ```ts taskVariableValueLikeIgnoreCase(name, value): T; ``` Only select tasks which have a local variable value like the given value (case insensitive) when they ended. This can be used on string variables only.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |
> | `value` | `string` | cannot be null. The string can include the wildcard character '%' to express like-strategy: starts with (string%), ends with (%string) or contains (%string%). |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskVariableExists() > ```ts taskVariableExists(name): T; ``` Only select tasks which have a local variable with the given name.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskVariableNotExists() > ```ts taskVariableNotExists(name): T; ``` Only select tasks which does not have a local variable with the given name.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processVariableValueEquals()
> :::

###### Call Signature

> ```ts
> processVariableValueEquals(variableName, variableValue): T;
> ```


> Only select tasks which are part of a process that has a variable with the given name set to the given value.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `variableName` | `string` |
> | `variableValue` | `any` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ###### Call Signature > ```ts processVariableValueEquals(variableValue): T; ``` Only select tasks which are part of a process that has at least one variable with the given value.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `variableValue` | `any` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processVariableValueEqualsIgnoreCase() > ```ts processVariableValueEqualsIgnoreCase(name, value): T; ``` Only select tasks which are part of a process that has a local string variable which is not the given value, case insensitive. This method only works if your database has encoding/collation that supports case-sensitive queries. For example, use "collate UTF-8" on MySQL and for MSSQL, select one of the case-sensitive Collations available (MSDN Server Collation Reference).
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |
> | `value` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processVariableValueNotEquals() > ```ts processVariableValueNotEquals(variableName, variableValue): T; ``` Only select tasks which have a variable with the given name, but with a different value than the passed value. Byte-arrays and Serializable objects (which are not primitive type wrappers) are not supported.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `variableName` | `string` |
> | `variableValue` | `any` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processVariableValueNotEqualsIgnoreCase() > ```ts processVariableValueNotEqualsIgnoreCase(name, value): T; ``` Only select tasks which are part of a process that has a string variable with the given value, case insensitive. This method only works if your database has encoding/collation that supports case-sensitive queries. For example, use "collate UTF-8" on MySQL and for MSSQL, select one of the case-sensitive Collations available (MSDN Server Collation Reference).
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |
> | `value` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processVariableValueGreaterThan() > ```ts processVariableValueGreaterThan(name, value): T; ``` Only select tasks which have a global variable value greater than the passed value when they ended. Booleans, Byte-arrays and Serializable objects (which are not primitive type wrappers) are not supported.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |
> | `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processVariableValueGreaterThanOrEqual() > ```ts processVariableValueGreaterThanOrEqual(name, value): T; ``` Only select tasks which have a global variable value greater than or equal to the passed value when they ended. Booleans, Byte-arrays and Serializable objects (which are not primitive type wrappers) are not supported.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |
> | `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processVariableValueLessThan() > ```ts processVariableValueLessThan(name, value): T; ``` Only select tasks which have a global variable value less than the passed value when the ended.Booleans, Byte-arrays and Serializable objects (which are not primitive type wrappers) are not supported.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |
> | `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processVariableValueLessThanOrEqual() > ```ts processVariableValueLessThanOrEqual(name, value): T; ``` Only select tasks which have a global variable value less than or equal to the passed value when they ended. Booleans, Byte-arrays and Serializable objects (which are not primitive type wrappers) are not supported.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |
> | `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processVariableValueLike() > ```ts processVariableValueLike(name, value): T; ``` Only select tasks which have a global variable value like the given value when they ended. This can be used on string variables only.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |
> | `value` | `string` | cannot be null. The string can include the wildcard character '%' to express like-strategy: starts with (string%), ends with (%string) or contains (%string%). |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processVariableValueLikeIgnoreCase() > ```ts processVariableValueLikeIgnoreCase(name, value): T; ``` Only select tasks which have a global variable value like the given value (case insensitive) when they ended. This can be used on string variables only.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |
> | `value` | `string` | cannot be null. The string can include the wildcard character '%' to express like-strategy: starts with (string%), ends with (%string) or contains (%string%). |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processVariableExists() > ```ts processVariableExists(name): T; ``` Only select tasks which have a global variable with the given name.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### processVariableNotExists() > ```ts processVariableNotExists(name): T; ``` Only select tasks which does not have a global variable with the given name.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### caseVariableValueEquals()
> :::

###### Call Signature

> ```ts
> caseVariableValueEquals(variableName, variableValue): T;
> ```


> Only select tasks which are part of a case that has a variable with the given name set to the given value.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `variableName` | `string` |
> | `variableValue` | `any` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ###### Call Signature > ```ts caseVariableValueEquals(variableValue): T; ``` Only select tasks which are part of a case that has at least one variable with the given value.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `variableValue` | `any` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### caseVariableValueEqualsIgnoreCase() > ```ts caseVariableValueEqualsIgnoreCase(name, value): T; ``` Only select tasks which are part of a case that has a local string variable which is not the given value, case insensitive. This method only works if your database has encoding/collation that supports case-sensitive queries. For example, use "collate UTF-8" on MySQL and for MSSQL, select one of the case-sensitive Collations available (MSDN Server Collation Reference).
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |
> | `value` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### caseVariableValueNotEquals() > ```ts caseVariableValueNotEquals(variableName, variableValue): T; ``` Only select tasks which have a variable with the given name, but with a different value than the passed value. Byte-arrays and Serializable objects (which are not primitive type wrappers) are not supported.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `variableName` | `string` |
> | `variableValue` | `any` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### caseVariableValueNotEqualsIgnoreCase() > ```ts caseVariableValueNotEqualsIgnoreCase(name, value): T; ``` Only select tasks which are part of a case that has a string variable with the given value, case insensitive. This method only works if your database has encoding/collation that supports case-sensitive queries. For example, use "collate UTF-8" on MySQL and for MSSQL, select one of the case-sensitive Collations available (MSDN Server Collation Reference).
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |
> | `value` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### caseVariableValueGreaterThan() > ```ts caseVariableValueGreaterThan(name, value): T; ``` Only select tasks which have a global variable value greater than the passed value when they ended. Booleans, Byte-arrays and Serializable objects (which are not primitive type wrappers) are not supported.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |
> | `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### caseVariableValueGreaterThanOrEqual() > ```ts caseVariableValueGreaterThanOrEqual(name, value): T; ``` Only select tasks which have a global variable value greater than or equal to the passed value when they ended. Booleans, Byte-arrays and Serializable objects (which are not primitive type wrappers) are not supported.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |
> | `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### caseVariableValueLessThan() > ```ts caseVariableValueLessThan(name, value): T; ``` Only select tasks which have a global variable value less than the passed value when the ended.Booleans, Byte-arrays and Serializable objects (which are not primitive type wrappers) are not supported.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |
> | `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### caseVariableValueLessThanOrEqual() > ```ts caseVariableValueLessThanOrEqual(name, value): T; ``` Only select tasks which have a global variable value less than or equal to the passed value when they ended. Booleans, Byte-arrays and Serializable objects (which are not primitive type wrappers) are not supported.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |
> | `value` | `any` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### caseVariableValueLike() > ```ts caseVariableValueLike(name, value): T; ``` Only select tasks which have a global variable value like the given value when they ended. This can be used on string variables only.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |
> | `value` | `string` | cannot be null. The string can include the wildcard character '%' to express like-strategy: starts with (string%), ends with (%string) or contains (%string%). |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### caseVariableValueLikeIgnoreCase() > ```ts caseVariableValueLikeIgnoreCase(name, value): T; ``` Only select tasks which have a global variable value like the given value (case insensitive) when they ended. This can be used on string variables only.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |
> | `value` | `string` | cannot be null. The string can include the wildcard character '%' to express like-strategy: starts with (string%), ends with (%string) or contains (%string%). |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### caseVariableExists() > ```ts caseVariableExists(name): T; ``` Only select tasks which have a global variable with the given name.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### caseVariableNotExists() > ```ts caseVariableNotExists(name): T; ``` Only select tasks which does not have a global variable with the given name.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | cannot be null. |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskRootScopeId() > ```ts taskRootScopeId(parentScopeId): T; ``` Only selects tasks which with the given root scope id
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parentScopeId` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### taskParentScopeId() > ```ts taskParentScopeId(parentScopeId): T; ``` Only selects tasks which with the given parent scope id
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parentScopeId` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### includeTaskLocalVariables() > ```ts includeTaskLocalVariables(): T; ``` Include local task variables in the task query result
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### includeProcessVariables() > ```ts includeProcessVariables(): T; ``` Include global process variables in the task query result
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### includeCaseVariables() > ```ts includeCaseVariables(): T; ``` Include global case variables in the task query result
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### includeIdentityLinks() > ```ts includeIdentityLinks(): T; ``` Include identity links in the task query result
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### locale() > ```ts locale(locale): T; ``` Localize task name and description to specified locale.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `locale` | `string` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### withLocalizationFallback() > ```ts withLocalizationFallback(): T; ``` Instruct localization to fallback to more general locales including the default locale of the JVM if the specified locale is not found.
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### or() > ```ts or(): T; ``` All query clauses called will be added to a single or-statement. This or-statement will be included with the other already existing clauses in the query, joined by an 'and'. Calling endOr() will add all clauses to the regular query again. Calling or() after or() has been called or calling endOr() after endOr() has been called will result in an exception. It is possible to call or() endOr() several times if each or() has a matching endOr(), e.g.: query.\ .or().\.\.endOr() .\.\ .or().\.\.endOr() will result in: conditionA &amp; (conditionB | conditionC) &amp; conditionD &amp; conditionE &amp; (conditionF | conditionG)
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### endOr() > ```ts endOr(): T; ```
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### orderByTaskId() > ```ts orderByTaskId(): T; ``` Order by task id (needs to be followed by #asc() or #desc()).
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### orderByTaskName() > ```ts orderByTaskName(): T; ``` Order by task name (needs to be followed by #asc() or #desc()).
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### orderByTaskDescription() > ```ts orderByTaskDescription(): T; ``` Order by description (needs to be followed by #asc() or #desc()).
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### orderByTaskPriority() > ```ts orderByTaskPriority(): T; ``` Order by priority (needs to be followed by #asc() or #desc()).
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### orderByTaskAssignee() > ```ts orderByTaskAssignee(): T; ``` Order by assignee (needs to be followed by #asc() or #desc()).
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### orderByTaskCreateTime() > ```ts orderByTaskCreateTime(): T; ``` Order by the time on which the tasks were created (needs to be followed by #asc() or #desc()).
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### orderByProcessInstanceId() > ```ts orderByProcessInstanceId(): T; ``` Order by process instance id (needs to be followed by #asc() or #desc()).
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### orderByExecutionId() > ```ts orderByExecutionId(): T; ``` Order by execution id (needs to be followed by #asc() or #desc()).
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### orderByProcessDefinitionId() > ```ts orderByProcessDefinitionId(): T; ``` Order by process definition id (needs to be followed by #asc() or #desc()).
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### orderByTaskDueDate() > ```ts orderByTaskDueDate(): T; ``` Order by task due date (needs to be followed by #asc() or #desc()).
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### orderByTaskOwner() > ```ts orderByTaskOwner(): T; ``` Order by task owner (needs to be followed by #asc() or #desc()).
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### orderByTaskDefinitionKey() > ```ts orderByTaskDefinitionKey(): T; ``` Order by task definition key (needs to be followed by #asc() or #desc()).
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### orderByTenantId() > ```ts orderByTenantId(): T; ``` Order by tenant id (needs to be followed by #asc() or #desc()).
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### orderByDueDateNullsFirst() > ```ts orderByDueDateNullsFirst(): T; ``` Order by due date (needs to be followed by #asc() or #desc()). If any of the tasks have null for the due date, these will be first in the result.
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### orderByDueDateNullsLast() > ```ts orderByDueDateNullsLast(): T; ``` Order by due date (needs to be followed by #asc() or #desc()). If any of the tasks have null for the due date, these will be last in the result.
> :::

> ::: info Returns
> - **Type**: `T`
> - **Description**: ##### orderByCategory() > ```ts orderByCategory(): T; ``` Order by category (needs to be followed by #asc() or #desc()).
> :::

> ::: info Returns
> - **Type**: `T`
> :::
