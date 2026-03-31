# io/bytes

## Overview

::: tip Module
- package: `n/a`
- source: [io/bytes.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/io/bytes.ts)
- last updated: 
:::



## Classes

### Bytes

#### toJavaBytes()

Converts a native JavaScript byte array (an array of numbers) to a Java byte array.
This is used internally by the API layer to pass data to Java methods.

> ```ts
> static toJavaBytes(bytes: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `bytes` | `any` | The JavaScript array of bytes (e.g., [104, 101, 108, 108, 111]). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: A native Java byte array (internal representation).
> :::

#### toJavaScriptBytes()

Converts a native Java byte array back to a JavaScript array of numbers.
This is used internally by the API layer to retrieve data from Java methods.

> ```ts
> static toJavaScriptBytes(internalBytes: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `internalBytes` | `any` | The native Java byte array. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: A JavaScript array containing the byte values (numbers).
> :::

#### textToByteArray()

Converts a standard text string into a byte array using the default platform encoding.

> ```ts
> static textToByteArray(text: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `text` | `string` | The input text string. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: A JavaScript array representing the bytes of the text.
> :::

#### byteArrayToText()

Converts a byte array back into a text string.

> ```ts
> static byteArrayToText(data: any): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `data` | `any` | The JavaScript array of bytes. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The reconstructed text string.
> :::

#### intToByteArray()

Converts a 32-bit integer value into a byte array, respecting the specified byte order.

> ```ts
> static intToByteArray(value: number, byteOrder: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `value` | `number` | The integer value to convert. |
> | `byteOrder` | `any` | Specifies the byte ordering: "BIG_ENDIAN" (most significant byte first) or "LITTLE_ENDIAN" (least significant byte first). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: A JavaScript array representing the 4-byte integer.
> :::

#### byteArrayToInt()

Converts a 4-byte array back into a 32-bit integer value, respecting the specified byte order.

> ```ts
> static byteArrayToInt(data: any, byteOrder: any): number;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `data` | `any` | The 4-byte array (JavaScript array of numbers). |
> | `byteOrder` | `any` | Specifies the byte ordering used during conversion. |
>
> ::: info Returns
> - **Type**: `number`
> - **Description**: The reconstructed integer value.
> :::

