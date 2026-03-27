# utils/uuid

::: tip Documentation
- source: [utils/uuid.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/uuid.ts)
:::


## Overview

The Uuid API provides...


## Classes

### UUID


Utility class for generating and validating Universally Unique Identifiers (UUIDs).
It typically provides access to Type 4 (randomly generated) UUIDs.

#### Constructors

##### Constructor

```ts
new UUID(): UUID;
```

#### Methods
##### random()
> ::: info Returns
> - **Type**: `string`
> - **Description**: A string representing the newly generated UUID.
> :::
##### validate()

```ts
static validate(input): boolean;
```


Validates if the provided string conforms to the standard UUID format
(e.g., a valid 36-character string including hyphens).

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The string to validate. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: true if the input string is a valid UUID, false otherwise.
> :::