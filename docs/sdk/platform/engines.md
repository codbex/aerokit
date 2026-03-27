# platform/engines

> [!tip]
> Auto-generated from
> - source: [platform/engines.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/platform/engines.ts)
> - version: 1.0.0


## Overview

Interface defining the execution parameters expected by the Engine class.
/
export interface ExecutionParameters {
	[key: string]: any
}

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Engine](#engine)
- [Parameters](#parameters)
- [Interfaces](#interfaces)
  - [ExecutionParameters](#executionparameters)

## Classes

### Engine


Engine

#### Description

Represents a specific execution engine type (e.g., JavaScript, Groovy)
and provides methods to interact with the platform's execution facade.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The type of the execution engine (e.g., "javascript"). |

###### Returns

[`Engine`](#engine)

#### Methods

##### getTypes()

> ```ts
> static getTypes(): string[];
> ```


> Retrieves the list of available engine types from the platform.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: [] An array of supported engine type names.
> > :::

> ##### execute()

> > ```ts
> > execute(
> >    projectName, 
> >    projectFilePath, 
> >    projectFilePathParam, 
> >    parameters, 
> >    debug?): any;
> > ```


> Executes a project script or process using the configured engine type.

> **Parameters**

> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `projectName` | `string` | `undefined` | The name of the project. |
> | `projectFilePath` | `string` | `undefined` | The relative path to the main file to execute within the project (e.g., "lib/script.js"). |
> | `projectFilePathParam` | `string` | `undefined` | A secondary file path parameter (often unused or context-specific). |
> | `parameters` | [`ExecutionParameters`](#executionparameters) | `undefined` | An object containing key/value parameters to pass to the script context. |
> | `debug?` | `boolean` | `false` | Whether to execute in debug mode. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The result returned by the executed script.
> :::

## Interfaces

### ExecutionParameters


Interface defining the execution parameters expected by the Engine class.

#### Indexable

> ```ts
> [key: string]: any
> ```
