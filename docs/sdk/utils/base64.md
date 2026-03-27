# utils/base64

> [!tip]
> Auto-generated from
> - source: [utils/base64.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/base64.ts)
> - version: 1.0.0


## Overview

Utility class for performing **Base64 encoding and decoding** of data.
It handles conversion between JavaScript strings, JavaScript byte arrays (any[]),
and the native Java byte arrays required by the underlying Base64Facade.

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Base64](#base64)
- [Returns](#returns)

## Classes

### Base64


Utility class for performing **Base64 encoding and decoding** of data.
It handles conversion between JavaScript strings, JavaScript byte arrays (any[]),
and the native Java byte arrays required by the underlying Base64Facade.

## Returns

[`Base64`](#base64)

#### Methods

##### encode()

> ```ts
> static encode(input): string;
> ```


> Base64 encoding: Converts the input data (text or byte array) into a
> standard **Base64 encoded string representation**.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` \| `any`[] | The data to encode, either as a string or a JavaScript byte array (any[]). |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The resulting Base64 encoded string.
> :::

##### encodeAsBytes()

> ```ts
> static encodeAsBytes(input): any[];
> ```


> Base64 encoding: Converts the input data (text or byte array) into a
> **JavaScript byte array (any[])** containing the Base64 encoded representation.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` \| `any`[] | The data to encode, either as a string or a JavaScript byte array (any[]). |

> ::: info Returns
> - **Type**: `any`
> - **Description**: [] The resulting byte array containing the Base64 encoded data.
> :::

##### encodeAsNativeBytes()

> ```ts
> static encodeAsNativeBytes(input): any[];
> ```


> Base64 encoding: Converts the input data (text or byte array) into a
> **native Java byte array** containing the Base64 encoded representation.
> This method is generally for internal use.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` \| `any`[] | The data to encode, either as a string or a JavaScript byte array (any[]). |

> ::: info Returns
> - **Type**: `any`
> - **Description**: [] The resulting native Java byte array containing the Base64 data.
> :::

##### decode()

> ```ts
> static decode(input): any[];
> ```


> Base64 decoding: Converts a Base64 input (text or byte array) back into
> the original **raw byte array (JavaScript any[])**.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` \| `any`[] | The Base64 data to decode, either as a string or a JavaScript byte array (any[]). |

> ::: info Returns
> - **Type**: `any`
> - **Description**: [] The decoded raw byte array (any[]). Returns null if decoding fails or input is null.
> :::

##### decodeAsNativeBytes()

> ```ts
> static decodeAsNativeBytes(input): any[];
> ```


> Base64 decoding: Converts a Base64 input (text or byte array) back into
> the original **native Java raw byte array**. This method is generally for internal use.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` \| `any`[] | The Base64 data to decode, either as a string or a JavaScript byte array (any[]). |

> ::: info Returns
> - **Type**: `any`
> - **Description**: [] The decoded native Java byte array.
> :::
