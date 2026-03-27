# core/globals

::: tip Documentation
- source: [core/globals.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/core/globals.ts)
:::

## Overview



## Classes

### Globals

#### get()

Retrieves the value of the global variable with the specified name.

> ```ts
> static get(name: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the global variable. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: The variable&#x27;s value as a string, or &#x60;undefined&#x60; if the variable is not set or its value is null.
> :::

#### set()

Sets the value of a global variable.
If the variable already exists, its value is overwritten.

> ```ts
> static set(name: string, value: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the global variable. |
> | `value` | `string` | The value to set (must be a string). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### list()

Retrieves a map of all global variables currently defined in the application.

> ```ts
> static list(): GlobalsValues;
> ```
>
>
> ::: info Returns
> - **Type**: `GlobalsValues`
> - **Description**: A GlobalsValues object containing all global variables as key-value pairs.
> :::

