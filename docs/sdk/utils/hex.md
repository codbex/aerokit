# utils/hex

::: tip Documentation
- source: [utils/hex.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/hex.ts)
:::


## Overview

The Hex API provides...


## Classes

### Hex


Utility class for performing **Hexadecimal encoding and decoding** of data.
It handles conversion between JavaScript strings, JavaScript byte arrays (any[]),
and the native Java byte arrays required by the underlying HexFacade.

#### Constructors

##### Constructor

```ts
new Hex(): Hex;
```

#### Methods
##### encode()
**Parameters**
> ::: info Returns
> - **Type**: `string`
> - **Description**: The resulting hexadecimal string.
> :::
##### encodeAsBytes()

```ts
static encodeAsBytes(input): any[];
```


Hexadecimal encoding: Converts the input data (text or byte array) into a
**JavaScript byte array (any[])** containing the hexadecimal representation.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` \| `any`[] | The data to encode, either as a string or a JavaScript byte array (any[]). |

##### encodeAsNativeBytes()
**Parameters**
##### decode()
**Parameters**
##### decodeAsNativeBytes()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> - **Description**: The decoded native Java byte array.
> :::