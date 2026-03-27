# bpm/deployer

> [!tip]
> Auto-generated from
> - source: [bpm/deployer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/bpm/deployer.ts)
> - version: 1.0.0


## Overview

The Deployer API provides...

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Deployer](#deployer)
- [Returns](#returns)

## Classes

### Deployer


## Returns

[`Deployer`](#deployer)

#### Methods

##### deployProcess()

> ```ts
> static deployProcess(location): string;
> ```


> Deploys a new process definition from a specified location (e.g., a file path).

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `location` | `string` | The path or location of the BPMN XML file to be deployed. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The deployment ID assigned to the new process definition.
> :::

##### undeployProcess()

> ```ts
> static undeployProcess(location): void;
> ```


> Undeploys a process definition previously deployed from the specified location.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `location` | `string` | The path or location associated with the deployed BPMN file. |

> ::: info Returns
> - **Type**: `void`
> :::

##### deleteProcess()

> ```ts
> static deleteProcess(id, reason): void;
> ```


> Deletes a deployed process definition by its ID.

> > **Note:** This permanently removes the process definition and all its associated history and runtime data.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `id` | `string` | The ID of the process definition to delete. |
> | `reason` | `string` | The reason for deleting the process definition (e.g., "Obsolete"). |

> ::: info Returns
> - **Type**: `void`
> :::
