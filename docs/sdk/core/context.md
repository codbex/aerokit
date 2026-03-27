# core/context

> [!tip]
> Auto-generated from
> - source: [core/context.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/core/context.ts)
> - version: 1.0.0


## Overview

The Context API provides...

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Context](#context)
- [Returns](#returns)

## Classes

### Context


## Returns

[`Context`](#context)

#### Methods

##### get()

> ```ts
> static get(name): any;
> ```


> Retrieves the value associated with the specified name from the global context.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the context variable. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The context value, or `undefined` if the name is not found or the value is null.
> :::

##### set()

> ```ts
> static set(name, value): void;
> ```


> Stores a value in the global context under the specified name.
> If the name already exists, its value is overwritten.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the context variable. |
> | `value` | `any` | The value to store. |

> ::: info Returns
> - **Type**: `void`
> :::
