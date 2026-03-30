# utils/uuid

## Overview

::: tip Module
- source: [utils/uuid.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/uuid.ts)
- last updated: 
:::



## Classes

### UUID

#### random()

Generates a new random UUID (Type 4).
The generated string is typically in the format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx.

> ```ts
> static random(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: A string representing the newly generated UUID.
> :::

#### validate()

Validates if the provided string conforms to the standard UUID format
(e.g., a valid 36-character string including hyphens).

> ```ts
> static validate(input: string): boolean;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The string to validate. |
>
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: true if the input string is a valid UUID, false otherwise.
> :::

