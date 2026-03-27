# io/bytes

::: tip Documentation
- source: [io/bytes.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/io/bytes.ts)
:::


## Overview

Provides utilities for converting and manipulating byte arrays,
facilitating conversions between JavaScript arrays, Java arrays, text, and integers.


## Classes

### Bytes


The Bytes class provides static methods for byte array operations, primarily
used to bridge data types between the JavaScript environment and native Java components.

#### Constructors

##### Constructor

```ts
new Bytes(): Bytes;
```

#### Methods
##### toJavaBytes()
**Parameters**
##### toJavaScriptBytes()
**Parameters**
##### textToByteArray()
**Parameters**
##### byteArrayToText()
**Parameters**
> ::: info Returns
> - **Type**: `string`
> - **Description**: The reconstructed text string.
> :::
##### intToByteArray()

```ts
static intToByteArray(value, byteOrder): any[];
```


Converts a 32-bit integer value into a byte array, respecting the specified byte order.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | The integer value to convert. |
| `byteOrder` | `"BIG_ENDIAN"` \| `"LITTLE_ENDIAN"` | Specifies the byte ordering: "BIG_ENDIAN" (most significant byte first) or "LITTLE_ENDIAN" (least significant byte first). |

##### byteArrayToInt()
**Parameters**
> ::: info Returns
> - **Type**: `number`
> - **Description**: The reconstructed integer value.
> :::