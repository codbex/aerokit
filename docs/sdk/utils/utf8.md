# utils/utf8

::: tip Documentation
- source: [utils/utf8.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/utf8.ts)
:::


## Overview

The Utf8 API provides...


## Classes

### UTF8


Utility class for performing UTF-8 encoding and decoding operations.
It provides methods to handle conversions between standard JavaScript strings and
raw UTF-8 byte representations.

#### Constructors

##### Constructor

```ts
new UTF8(): UTF8;
```

#### Methods
##### encode()
**Parameters**
> ::: info Returns
> - **Type**: `string`
> - **Description**: The resulting UTF-8 encoded string.
> :::
##### decode()

```ts
static decode(input): string;
```


Decodes the input (either a UTF-8 encoded string or a raw byte array)
back into a standard JavaScript string.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` \| `any`[] | The UTF-8 encoded string or byte array to be decoded. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The resulting standard decoded string.
> :::
##### bytesToString()

```ts
static bytesToString(
   bytes, 
   offset, 
   length): string;
```


Decodes a specific segment of a raw byte array into a standard string
using UTF-8 encoding.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `bytes` | `any`[] | The raw byte array containing the UTF-8 data. |
| `offset` | `number` | The starting index (inclusive) from which to begin decoding. |
| `length` | `number` | The number of bytes to decode starting from the offset. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The decoded string segment.
> :::