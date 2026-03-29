# platform/engines

## Overview



::: tip Module
- source: [platform/engines.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/platform/engines.ts)
- last updated: 
:::

## Classes

### Engine

#### getTypes()

Retrieves the list of available engine types from the platform.

> ```ts
> static getTypes(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of supported engine type names.
> :::

#### execute()

Executes a project script or process using the configured engine type.

> ```ts
> execute(projectName: string, projectFilePath: string, projectFilePathParam: string, parameters: ExecutionParameters, debug: boolean): any;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `projectName` | `string` | The name of the project. |
> | `projectFilePath` | `string` | The relative path to the main file to execute within the project (e.g., "lib/script.js"). |
> | `projectFilePathParam` | `string` | A secondary file path parameter (often unused or context-specific). |
> | `parameters` | `ExecutionParameters` | An object containing key/value parameters to pass to the script context. |
> | `debug` | `boolean` | Whether to execute in debug mode. |
>
> ::: info Returns
> - **Type**: `any`
> - **Description**: The result returned by the executed script.
> :::

