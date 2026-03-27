# utils/digest

> [!tip]
> Auto-generated from
> - source: [utils/digest.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/digest.ts)
> - version: 1.0.0


## Overview

The Digest API provides...

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Digest](#digest)
- [Returns](#returns)

## Classes

### Digest


## Returns

[`Digest`](#digest)

#### Methods

##### md5()

> ```ts
> static md5(input): any[];
> ```


> Calculate MD5 digest from input (text or byte array) and return result as byte array

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `input` | `string` \| `any`[] |

> ::: info Returns
> - **Type**: `any`
> - **Description**: []
> :::

##### md5AsNativeBytes()

> ```ts
> static md5AsNativeBytes(input): any[];
> ```


> Calculate MD5 digest from input (text or byte array) and return result as 16 elements java native byte array

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `input` | `string` \| `any`[] |

> ::: info Returns
> - **Type**: `any`
> - **Description**: []
> :::

##### md5Hex()

> ```ts
> static md5Hex(input): string;
> ```


> Calculate MD5 digest from input (text or byte array) and return result as 32 character hex string

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `input` | `string` \| `any`[] |

> ::: info Returns
> - **Type**: `string`
> :::

##### sha1()

> ```ts
> static sha1(input): any[];
> ```


> Calculate SHA1 digest from input (text or byte array) and return result as 20 elements byte array

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `input` | `string` \| `any`[] |

> ::: info Returns
> - **Type**: `any`
> - **Description**: []
> :::

##### sha1AsNativeBytes()

> ```ts
> static sha1AsNativeBytes(input): any[];
> ```


> Calculate SHA1 digest from input (text or byte array) and return result as 20 elements java native byte array

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `input` | `string` \| `any`[] |

> ::: info Returns
> - **Type**: `any`
> - **Description**: []
> :::

##### sha256()

> ```ts
> static sha256(input): any[];
> ```


> Calculate SHA256 digest from input (text or byte array) and return result as 32 elements byte array

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `input` | `string` \| `any`[] |

> ::: info Returns
> - **Type**: `any`
> - **Description**: []
> :::

##### sha256AsNativeBytes()

> ```ts
> static sha256AsNativeBytes(input): any[];
> ```


> Calculate SHA256 digest from input (text or byte array) and return result as 32 elements java native byte array

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `input` | `string` \| `any`[] |

> ::: info Returns
> - **Type**: `any`
> - **Description**: []
> :::

##### sha384()

> ```ts
> static sha384(input): any[];
> ```


> Calculate SHA384 digest from input (text or byte array) and return result as 48 elements byte array

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `input` | `string` \| `any`[] |

> ::: info Returns
> - **Type**: `any`
> - **Description**: []
> :::

##### sha384AsNativeBytes()

> ```ts
> static sha384AsNativeBytes(input): any[];
> ```


> Calculate SHA384 digest from input (text or byte array) and return result as 48 elements java native byte array

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `input` | `string` \| `any`[] |

> ::: info Returns
> - **Type**: `any`
> - **Description**: []
> :::

##### sha512()

> ```ts
> static sha512(input): any[];
> ```


> Calculate SHA512 digest from input (text or byte array) and return result as 64 elements byte array

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `input` | `string` \| `any`[] |

> ::: info Returns
> - **Type**: `any`
> - **Description**: []
> :::

##### sha512AsNativeBytes()

> ```ts
> static sha512AsNativeBytes(input): any;
> ```


> Calculate SHA512 digest from input (text or byte array) and return result as 64 elements java native byte array

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `input` | `string` \| `any`[] |

> ::: info Returns
> - **Type**: `any`
> :::

##### sha1Hex()

> ```ts
> static sha1Hex(input): string;
> ```


> Calculate SHA1 digest from input (text or byte array) and return result as 40 character hex string

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `input` | `string` \| `any`[] |

> ::: info Returns
> - **Type**: `string`
> :::
