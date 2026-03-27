# utils/digest

::: tip Documentation
- source: [utils/digest.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/digest.ts)
:::


## Overview

The Digest API provides...


## Classes

### Digest


#### Constructors

##### Constructor

```ts
new Digest(): Digest;
```

#### Methods
##### md5()
**Parameters**
##### md5AsNativeBytes()
**Parameters**
##### md5Hex()
**Parameters**
> ::: info Returns
> - **Type**: `string`
> :::
##### sha1()

```ts
static sha1(input): any[];
```


Calculate SHA1 digest from input (text or byte array) and return result as 20 elements byte array

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `input` | `string` \| `any`[] |

##### sha1AsNativeBytes()
**Parameters**
##### sha256()
**Parameters**
##### sha256AsNativeBytes()
**Parameters**
##### sha384()
**Parameters**
##### sha384AsNativeBytes()
**Parameters**
##### sha512()
**Parameters**
##### sha512AsNativeBytes()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> :::
##### sha1Hex()

```ts
static sha1Hex(input): string;
```


Calculate SHA1 digest from input (text or byte array) and return result as 40 character hex string

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `input` | `string` \| `any`[] |

> ::: info Returns
> - **Type**: `string`
> :::