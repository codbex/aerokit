# core/env

> [!tip]
> Auto-generated from
> - source: [core/env.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/core/env.ts)
> - version: 1.0.0


## Overview

The Env API provides...

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Env](#env)
- [Returns](#returns)
- [Interfaces](#interfaces)
  - [EnvValues](#envvalues)

## Classes

### Env


## Returns

[`Env`](#env)

#### Methods

##### get()

> ```ts
> static get(name): string;
> ```


> Retrieves the value of the environment variable with the specified name.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the environment variable. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The variable's value as a string, or `undefined` if the variable is not set.
> :::

##### list()

> ```ts
> static list(): EnvValues;
> ```


Retrieves a map of all environment variables currently exposed to the application.

###### Returns

[`EnvValues`](#envvalues)

An [EnvValues](#envvalues) object containing all environment variables as key-value pairs.

## Interfaces

### EnvValues


Interface representing a map of environment variable names to their string values.

#### Indexable

> ```ts
> [key: string]: string
> ```
