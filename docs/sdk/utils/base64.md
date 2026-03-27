# utils/base64

::: tip Documentation
- source: [utils/base64.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/base64.ts)
:::


## Overview

The Base64 API provides...


## Classes

### Base64


Utility class for performing **Base64 encoding and decoding** of data.
It handles conversion between JavaScript strings, JavaScript byte arrays (any[]),
and the native Java byte arrays required by the underlying Base64Facade.

#### Constructors

##### Constructor

```ts
new Base64(): Base64;
```

#### Methods
##### encode()
**Parameters**
> ::: info Returns
> - **Type**: `string`
> - **Description**: The resulting Base64 encoded string.
> :::
##### encodeAsBytes()

```ts
static encodeAsBytes(input): any[];
```


Base64 encoding: Converts the input data (text or byte array) into a
**JavaScript byte array (any[])** containing the Base64 encoded representation.

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