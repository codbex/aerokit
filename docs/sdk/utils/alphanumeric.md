# utils/alphanumeric

## Overview



::: tip Module
- source: [utils/alphanumeric.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/alphanumeric.ts)
- last updated: 
:::

## Classes

### Alphanumeric

#### toAlphanumeric()



> ```ts
> static toAlphanumeric(string: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `string` | `string` |  |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: 
> :::

#### randomString()

Generates a random alphanumeric sequence with the specified length

> ```ts
> static randomString(length: number, charset: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `length` | `number` | {Integer} Defaults to 4 |
> | `charset` | `string` |  |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: 
> :::

#### alphanumeric()

Generates a random alphanumeric sequence with the specified length

> ```ts
> static alphanumeric(length: number, lowercase: boolean): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `length` | `number` | {Integer} Defaults to 4 |
> | `lowercase` | `boolean` | {Boolean} Defaults to true |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: 
> :::

#### alpha()

Generates a random ASCII sequence with the specified length

> ```ts
> static alpha(length: number, lowercase: boolean): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `length` | `number` | {Integer} Defaults to 4 |
> | `lowercase` | `boolean` | {Boolean} Defaults to true |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: 
> :::

#### numeric()

Generates a random numeric value

> ```ts
> static numeric(length: number): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `length` | `number` | {Integer} Defaults to 4 |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: 
> :::

#### isNumeric()

Tests is the provided `str` argument is a valid numeric sequence.

> ```ts
> static isNumeric(str: string): boolean;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `str` | `string` | {String} the string to test |
>
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: 
> :::

#### isAlphanumeric()

Tests is the provided `str` argument is a valid alphanumeric sequence.

> ```ts
> static isAlphanumeric(str: string): boolean;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `str` | `string` | {String} the string to test |
>
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: 
> :::

