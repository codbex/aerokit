# utils/utf8

> [!tip]
> Auto-generated from
> - source: [utils/utf8.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/utf8.ts)
> - version: 1.0.0


## Overview

Utility class for performing UTF-8 encoding and decoding operations.
It provides methods to handle conversions between standard JavaScript strings and
raw UTF-8 byte representations.

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [UTF8](#utf8)
- [Returns](#returns)

## Classes

### UTF8


Utility class for performing UTF-8 encoding and decoding operations.
It provides methods to handle conversions between standard JavaScript strings and
raw UTF-8 byte representations.

## Returns

[`UTF8`](#utf8)

#### Methods

##### encode()

> ```ts
> static encode(input): string;
> ```


> Encodes the input (either a standard JavaScript string or a raw byte array)
> into a UTF-8 encoded string representation.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` \| `any`[] | The text string to be encoded, or a byte array to convert to its string representation. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The resulting UTF-8 encoded string.
> :::

##### decode()

> ```ts
> static decode(input): string;
> ```


> Decodes the input (either a UTF-8 encoded string or a raw byte array)
> back into a standard JavaScript string.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` \| `any`[] | The UTF-8 encoded string or byte array to be decoded. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The resulting standard decoded string.
> :::

##### bytesToString()

> ```ts
> static bytesToString( bytes, offset, length): string;
> ```


> Decodes a specific segment of a raw byte array into a standard string
> using UTF-8 encoding.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `bytes` | `any`[] | The raw byte array containing the UTF-8 data. |
> | `offset` | `number` | The starting index (inclusive) from which to begin decoding. |
> | `length` | `number` | The number of bytes to decode starting from the offset. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The decoded string segment.
> :::
