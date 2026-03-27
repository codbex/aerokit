# core/globals

> [!tip]
> Auto-generated from
> - source: [core/globals.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/core/globals.ts)
> - version: 1.0.0


## Overview

The Globals API provides...

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Globals](#globals)
- [Returns](#returns)
- [Interfaces](#interfaces)
  - [GlobalsValues](#globalsvalues)

## Classes

### Globals


## Returns

[`Globals`](#globals)

#### Methods

##### get()

> ```ts
> static get(name): string;
> ```


> Retrieves the value of the global variable with the specified name.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the global variable. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The variable's value as a string, or `undefined` if the variable is not set or its value is null.
> :::

##### set()

> ```ts
> static set(name, value): void;
> ```


> Sets the value of a global variable.
> If the variable already exists, its value is overwritten.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the global variable. |
> | `value` | `string` | The value to set (must be a string). |

> ::: info Returns
> - **Type**: `void`
> :::

##### list()

> ```ts
> static list(): GlobalsValues;
> ```


Retrieves a map of all global variables currently defined in the application.

###### Returns

[`GlobalsValues`](#globalsvalues)

A [GlobalsValues](#globalsvalues) object containing all global variables as key-value pairs.

## Interfaces

### GlobalsValues


Interface representing a map of global variable names to their string values.

#### Indexable

> ```ts
> [key: string]: string
> ```
