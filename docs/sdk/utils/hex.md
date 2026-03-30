# utils/hex

## Overview

::: tip Module
- source: [utils/hex.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/hex.ts)
- last updated: 
:::



## Classes

### Hex

#### encode()

Hexadecimal encoding: Converts the input data (text or byte array) into a
standard **hexadecimal string representation**.

> ```ts
> static encode(input: any): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `any` | The data to encode, either as a string or a JavaScript byte array (any[]). |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The resulting hexadecimal string.
> :::

#### encodeAsBytes()

Hexadecimal encoding: Converts the input data (text or byte array) into a
**JavaScript byte array (any[])** containing the hexadecimal representation.

> ```ts
> static encodeAsBytes(input: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `any` | The data to encode, either as a string or a JavaScript byte array (any[]). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: The resulting byte array containing the hexadecimal data.
> :::

#### encodeAsNativeBytes()

Hexadecimal encoding: Converts the input data (text or byte array) into a
**native Java byte array** containing the hexadecimal representation.
This method is generally for internal use.

> ```ts
> static encodeAsNativeBytes(input: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `any` | The data to encode, either as a string or a JavaScript byte array (any[]). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: The resulting native Java byte array.
> :::

#### decode()

Hexadecimal decoding: Converts a hexadecimal input (text or byte array) back into
the original **raw byte array (JavaScript any[])**.

> ```ts
> static decode(input: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `any` | The hexadecimal data to decode, either as a string or a JavaScript byte array (any[]). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: The decoded raw byte array (any[]). Returns null if decoding fails or input is null.
> :::

#### decodeAsNativeBytes()

Hexadecimal decoding: Converts a hexadecimal input (text or byte array) back into
the original **native Java raw byte array**. This method is generally for internal use.

> ```ts
> static decodeAsNativeBytes(input: any): any;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `any` | The hexadecimal data to decode, either as a string or a JavaScript byte array (any[]). |
>
> ::: info Returns
> - **Type**: `any`
> - **Description**: The decoded native Java byte array.
> :::

