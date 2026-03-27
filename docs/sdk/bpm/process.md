# bpm/process

> [!tip]
> Auto-generated from
> - source: [bpm/process.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/bpm/process.ts)
> - version: 1.0.0


## Overview

API Process
* Provides methods for interacting with process instances,
including starting, updating metadata, and managing variables.
/

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [BpmnError](#bpmnerror)
- [Parameters](#parameters)
  - [Process](#process)
- [Returns](#returns)

## Classes

### BpmnError


## Parameters

| Parameter | Type |
| ------ | ------ |
| `code` | `string` |
| `message?` | `string` |

###### Returns

[`BpmnError`](#bpmnerror)

***

### Process


## Returns

[`Process`](#process)

#### Methods

##### start()

> ```ts
> static start( key, businessKey?, parameters?): string;
> ```


> Starts a new process instance for a given process definition key.

> **Parameters**

> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `key` | `string` | `undefined` | The process definition key (ID) of the process to start. |
> | `businessKey` | `string` | `''` | An optional business key to associate with the process instance. Defaults to an empty string. |
> | `parameters` | \{ \[`key`: `string`\]: `any`; \} | `{}` | An optional map of process variables to pass to the process instance upon starting. Defaults to an empty object. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The unique ID of the newly started process instance.
> :::

##### setProcessInstanceName()

> ```ts
> static setProcessInstanceName(processInstanceId, name): void;
> ```


> Sets a human-readable name for an existing process instance.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `processInstanceId` | `string` | The ID of the process instance to update. |
> | `name` | `string` | The new name for the process instance. |

> ::: info Returns
> - **Type**: `void`
> :::

##### updateBusinessKey()

> ```ts
> static updateBusinessKey(processInstanceId, businessKey): void;
> ```


> Updates the business key of an existing process instance.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `processInstanceId` | `string` | The ID of the process instance to update. |
> | `businessKey` | `string` | The new business key. |

> ::: info Returns
> - **Type**: `void`
> :::

##### updateBusinessStatus()

> ```ts
> static updateBusinessStatus(processInstanceId, businessStatus): void;
> ```


> Updates the business status of an existing process instance.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `processInstanceId` | `string` | The ID of the process instance to update. |
> | `businessStatus` | `string` | The new business status. |

> ::: info Returns
> - **Type**: `void`
> :::

##### getVariable()

> ```ts
> static getVariable(processInstanceId, variableName): any;
> ```


> Retrieves the value of a specific variable from a process instance.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `processInstanceId` | `string` | The ID of the process instance. |
> | `variableName` | `string` | The name of the variable to retrieve. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The value of the variable, or `null` if the variable does not exist. The type is `any` as it depends on the stored value.
> :::

##### getVariables()

> ```ts
> static getVariables(processInstanceId): any;
> ```


> Retrieves all variables associated with a process instance.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `processInstanceId` | `string` | The ID of the process instance. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: An object containing all variables for the process instance, where keys are variable names and values are the variable values.
> :::

##### setVariable()

> ```ts
> static setVariable( processInstanceId, variableName, value): void;
> ```


> Sets or updates the value of a variable in a process instance.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `processInstanceId` | `string` | The ID of the process instance. |
> | `variableName` | `string` | The name of the variable to set. |
> | `value` | `any` | The new value for the variable. The type is `any` to accommodate different data types. |

> ::: info Returns
> - **Type**: `void`
> :::

##### removeVariable()

> ```ts
> static removeVariable(processInstanceId, variableName): void;
> ```


> Removes a variable from a process instance.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `processInstanceId` | `string` | The ID of the process instance. |
> | `variableName` | `string` | The name of the variable to remove. |

> ::: info Returns
> - **Type**: `void`
> :::

##### correlateMessageEvent()

> ```ts
> static correlateMessageEvent( processInstanceId, messageName, variables): void;
> ```


> Correlates a message event with a running process instance.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `processInstanceId` | `string` | The ID of the process instance to correlate the message to. |
> | `messageName` | `string` | The name of the message event defined in the BPMN process. |
> | `variables` | `Map`\ | A map of variables (`Map`) to pass along with the message event. |

> ::: info Returns
> - **Type**: `void`
> :::

##### getExecutionContext()

> ```ts
> static getExecutionContext(): ExecutionContext;
> ```


Retrieves the current execution context object, typically used within an execution listener or service task.

> ::: info Returns
> - **Type**: `ExecutionContext`
> - **Description**: A new instance of the `ExecutionContext` containing details about the current process execution path.
> :::

##### getTaskContext()

> ```ts
> static getTaskContext(): TaskContext;
> ```


Retrieves the current task context object, typically used within a task listener or service task.

> ::: info Returns
> - **Type**: `TaskContext`
> - **Description**: A new instance of the `TaskContext` containing details about the current task.
> :::
