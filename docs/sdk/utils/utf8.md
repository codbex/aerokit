# utils/utf8

## Overview



::: tip Module
- source: [utils/utf8.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/utf8.ts)
- last updated: 
:::

## Classes

### UTF8

#### encode()

Encodes the input (either a standard JavaScript string or a raw byte array)
into a UTF-8 encoded string representation.

> ```ts
> static encode(input: any): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `any` | The text string to be encoded, or a byte array to convert to its string representation. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The resulting UTF-8 encoded string.
> :::

#### decode()

Decodes the input (either a UTF-8 encoded string or a raw byte array)
back into a standard JavaScript string.

> ```ts
> static decode(input: any): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `any` | The UTF-8 encoded string or byte array to be decoded. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The resulting standard decoded string.
> :::

#### bytesToString()

Decodes a specific segment of a raw byte array into a standard string
using UTF-8 encoding.

> ```ts
> static bytesToString(bytes: any, offset: number, length: number): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `bytes` | `any` | The raw byte array containing the UTF-8 data. |
> | `offset` | `number` | The starting index (inclusive) from which to begin decoding. |
> | `length` | `number` | The number of bytes to decode starting from the offset. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The decoded string segment.
> :::

