# utils/base64

## Overview

::: tip Module
- package: `n/a`
- source: [utils/base64.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/base64.ts)
- last updated: 
:::



## Classes

### Base64

#### encode()

Base64 encoding: Converts the input data (text or byte array) into a
standard **Base64 encoded string representation**.

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
> - **Description**: The resulting Base64 encoded string.
> :::

#### encodeAsBytes()

Base64 encoding: Converts the input data (text or byte array) into a
**JavaScript byte array (any[])** containing the Base64 encoded representation.

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
> - **Description**: The resulting byte array containing the Base64 encoded data.
> :::

#### encodeAsNativeBytes()

Base64 encoding: Converts the input data (text or byte array) into a
**native Java byte array** containing the Base64 encoded representation.
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
> - **Description**: The resulting native Java byte array containing the Base64 data.
> :::

#### decode()

Base64 decoding: Converts a Base64 input (text or byte array) back into
the original **raw byte array (JavaScript any[])**.

> ```ts
> static decode(input: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `any` | The Base64 data to decode, either as a string or a JavaScript byte array (any[]). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: The decoded raw byte array (any[]). Returns null if decoding fails or input is null.
> :::

#### decodeAsNativeBytes()

Base64 decoding: Converts a Base64 input (text or byte array) back into
the original **native Java raw byte array**. This method is generally for internal use.

> ```ts
> static decodeAsNativeBytes(input: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `any` | The Base64 data to decode, either as a string or a JavaScript byte array (any[]). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: The decoded native Java byte array.
> :::

