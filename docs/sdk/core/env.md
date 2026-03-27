# core/env

::: tip Documentation
- source: [core/env.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/core/env.ts)
:::

## Overview



## Classes

### Env

#### get()

Retrieves the value of the environment variable with the specified name.

> ```ts
> static get(name: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the environment variable. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: The variable&#x27;s value as a string, or &#x60;undefined&#x60; if the variable is not set.
> :::

#### list()

Retrieves a map of all environment variables currently exposed to the application.

> ```ts
> static list(): EnvValues;
> ```
>
>
> ::: info Returns
> - **Type**: `EnvValues`
> - **Description**: An EnvValues object containing all environment variables as key-value pairs.
> :::

