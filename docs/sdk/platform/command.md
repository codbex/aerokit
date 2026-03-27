# platform/command

> [!tip]
> Auto-generated from
> - source: [platform/command.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/platform/command.ts)
> - version: 1.0.0


## Overview

Provides a wrapper for executing system commands via the platform's CommandEngine.
/
const CommandFacade = Java.type("org.eclipse.dirigible.components.api.platform.CommandFacade");
const ProcessExecutionOptions = Java.type("org.eclipse.dirigible.commons.process.execution.ProcessExecutionOptions");

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Command](#command)
- [Returns](#returns)

## Classes

### Command


Command

#### Description

Static utility class for executing system commands.

## Returns

[`Command`](#command)

#### Methods

##### execute()

> ```ts
> static execute( command, options?, add?, remove?): CommandOutput;
> ```


> Executes a system command with specified configuration, environment variables, and exclusions.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `command` | `string` | The command string to execute (e.g., "ls -l"). |
> | `options?` | `CommandOptions` | Optional configuration for the execution environment. |
> | `add?` | `EnvironmentVariables` | Optional environment variables to add to the process. |
> | `remove?` | `string`[] | Optional list of environment variable keys to remove from the process. |

> ::: info Returns
> - **Type**: `CommandOutput`
> - **Description**: A structured object containing the exit code and output streams.
> :::
