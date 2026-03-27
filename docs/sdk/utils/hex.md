# utils/hex

> [!tip]
> Auto-generated from
> - source: [utils/hex.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/hex.ts)
> - version: 1.0.0


## Overview

Utility class for performing **Hexadecimal encoding and decoding** of data.
It handles conversion between JavaScript strings, JavaScript byte arrays (any[]),
and the native Java byte arrays required by the underlying HexFacade.

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Hex](#hex)
- [Returns](#returns)

## Classes

### Hex


Utility class for performing **Hexadecimal encoding and decoding** of data.
It handles conversion between JavaScript strings, JavaScript byte arrays (any[]),
and the native Java byte arrays required by the underlying HexFacade.

## Returns

[`Hex`](#hex)

#### Methods

##### encode()

> ```ts
> static encode(input): string;
> ```


> Hexadecimal encoding: Converts the input data (text or byte array) into a
> standard **hexadecimal string representation**.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` \| `any`[] | The data to encode, either as a string or a JavaScript byte array (any[]). |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The resulting hexadecimal string.
> :::

##### encodeAsBytes()

> ```ts
> static encodeAsBytes(input): any[];
> ```


> Hexadecimal encoding: Converts the input data (text or byte array) into a
> **JavaScript byte array (any[])** containing the hexadecimal representation.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` \| `any`[] | The data to encode, either as a string or a JavaScript byte array (any[]). |
> 
> ###### Returns
> 
> `any`[]
> 
> The resulting byte array containing the hexadecimal data.
> 
> ##### encodeAsNativeBytes()
> 
> > ```ts
> > static encodeAsNativeBytes(input): any[];
> > ```
> 
> 
> > Hexadecimal encoding: Converts the input data (text or byte array) into a
> > **native Java byte array** containing the hexadecimal representation.
> > This method is generally for internal use.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` \| `any`[] | The data to encode, either as a string or a JavaScript byte array (any[]). |
> 
> ###### Returns
> 
> `any`[]
> 
> The resulting native Java byte array.
> 
> ##### decode()
> 
> > ```ts
> > static decode(input): any[];
> > ```
> 
> 
> > Hexadecimal decoding: Converts a hexadecimal input (text or byte array) back into
> > the original **raw byte array (JavaScript any[])**.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` \| `any`[] | The hexadecimal data to decode, either as a string or a JavaScript byte array (any[]). |
> 
> ###### Returns
> 
> `any`[]
> 
> The decoded raw byte array (any[]). Returns null if decoding fails or input is null.
> 
> ##### decodeAsNativeBytes()
> 
> > ```ts
> > static decodeAsNativeBytes(input): any;
> > ```
> 
> 
> > Hexadecimal decoding: Converts a hexadecimal input (text or byte array) back into
> > the original **native Java raw byte array**. This method is generally for internal use.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` \| `any`[] | The hexadecimal data to decode, either as a string or a JavaScript byte array (any[]). |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The decoded native Java byte array.
> :::
