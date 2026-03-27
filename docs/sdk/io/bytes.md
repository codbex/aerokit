# io/bytes

> [!tip]
> Auto-generated from
> - source: [io/bytes.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/io/bytes.ts)
> - version: 1.0.0


## Overview

Provides utilities for converting and manipulating byte arrays,
facilitating conversions between JavaScript arrays, Java arrays, text, and integers.
/

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Bytes](#bytes)
- [Returns](#returns)

## Classes

### Bytes


The Bytes class provides static methods for byte array operations, primarily
used to bridge data types between the JavaScript environment and native Java components.

## Returns

[`Bytes`](#bytes)

#### Methods

##### toJavaBytes()

> ```ts
> static toJavaBytes(bytes): any[];
> ```


> Converts a native JavaScript byte array (an array of numbers) to a Java byte array.
> This is used internally by the API layer to pass data to Java methods.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `bytes` | `any`[] | The JavaScript array of bytes (e.g., [104, 101, 108, 108, 111]). |

> ::: info Returns
> - **Type**: `any`
> - **Description**: [] A native Java byte array (internal representation).
> :::

##### toJavaScriptBytes()

> ```ts
> static toJavaScriptBytes(internalBytes): any[];
> ```


> Converts a native Java byte array back to a JavaScript array of numbers.
> This is used internally by the API layer to retrieve data from Java methods.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `internalBytes` | `any`[] | The native Java byte array. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: [] A JavaScript array containing the byte values (numbers).
> :::

##### textToByteArray()

> ```ts
> static textToByteArray(text): any[];
> ```


> Converts a standard text string into a byte array using the default platform encoding.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `text` | `string` | The input text string. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: [] A JavaScript array representing the bytes of the text.
> :::

##### byteArrayToText()

> ```ts
> static byteArrayToText(data): string;
> ```


> Converts a byte array back into a text string.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `data` | `any`[] | The JavaScript array of bytes. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The reconstructed text string.
> :::

##### intToByteArray()

> ```ts
> static intToByteArray(value, byteOrder): any[];
> ```


> Converts a 32-bit integer value into a byte array, respecting the specified byte order.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `value` | `number` | The integer value to convert. |
> | `byteOrder` | `"BIG_ENDIAN"` \| `"LITTLE_ENDIAN"` | Specifies the byte ordering: "BIG_ENDIAN" (most significant byte first) or "LITTLE_ENDIAN" (least significant byte first). |

> ::: info Returns
> - **Type**: `any`
> - **Description**: [] A JavaScript array representing the 4-byte integer.
> :::

##### byteArrayToInt()

> ```ts
> static byteArrayToInt(data, byteOrder): number;
> ```


> Converts a 4-byte array back into a 32-bit integer value, respecting the specified byte order.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `data` | `any`[] | The 4-byte array (JavaScript array of numbers). |
> | `byteOrder` | `"BIG_ENDIAN"` \| `"LITTLE_ENDIAN"` | Specifies the byte ordering used during conversion. |

> ::: info Returns
> - **Type**: `number`
> - **Description**: The reconstructed integer value.
> :::
