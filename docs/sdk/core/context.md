# core/context

## Overview

::: tip Module
- source: [core/context.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/core/context.ts)
- last updated: 
:::



## Classes

### Context

#### get()

Retrieves the value associated with the specified name from the global context.

> ```ts
> static get(name: string): any;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the context variable. |
>
> ::: info Returns
> - **Type**: `any`
> - **Description**: The context value, or `undefined` if the name is not found or the value is null.
> :::

#### set()

Stores a value in the global context under the specified name.
If the name already exists, its value is overwritten.

> ```ts
> static set(name: string, value: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the context variable. |
> | `value` | `any` | The value to store. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

