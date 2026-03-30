# platform/command

## Overview

::: tip Module
- source: [platform/command.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/platform/command.ts)
- last updated: 
:::



## Classes

### Command

#### execute()

Executes a system command with specified configuration, environment variables, and exclusions.

> ```ts
> static execute(command: string, options: CommandOptions, add: EnvironmentVariables, remove: any): CommandOutput;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `command` | `string` | The command string to execute (e.g., "ls -l"). |
> | `options` | `CommandOptions` | Optional configuration for the execution environment. |
> | `add` | `EnvironmentVariables` | Optional environment variables to add to the process. |
> | `remove` | `any` | Optional list of environment variable keys to remove from the process. |
>
> ::: info Returns
> - **Type**: `CommandOutput`
> - **Description**: A structured object containing the exit code and output streams.
> :::

