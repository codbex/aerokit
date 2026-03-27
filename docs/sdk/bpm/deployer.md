# bpm/deployer

::: tip Documentation
- source: [bpm/deployer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/bpm/deployer.ts)
:::

## Overview



## Classes

### Deployer

#### deployProcess()

Deploys a new process definition from a specified location (e.g., a file path).

> ```ts
> static deployProcess(location: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `location` | `string` | The path or location of the BPMN XML file to be deployed. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The deployment ID assigned to the new process definition.
> :::

#### undeployProcess()

Undeploys a process definition previously deployed from the specified location.

> ```ts
> static undeployProcess(location: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `location` | `string` | The path or location associated with the deployed BPMN file. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### deleteProcess()

Deletes a deployed process definition by its ID.

&gt; **Note:** This permanently removes the process definition and all its associated history and runtime data.

> ```ts
> static deleteProcess(id: string, reason: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `id` | `string` | The ID of the process definition to delete. |
> | `reason` | `string` | The reason for deleting the process definition (e.g., &quot;Obsolete&quot;). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

