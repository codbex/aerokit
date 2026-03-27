# utils/alphanumeric

> [!tip]
> Auto-generated from
> - source: [utils/alphanumeric.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/alphanumeric.ts)
> - version: 1.0.0


## Overview

The Alphanumeric API provides...

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Alphanumeric](#alphanumeric)
- [Returns](#returns)

## Classes

### Alphanumeric


## Returns

[`Alphanumeric`](#alphanumeric)

#### Methods

##### toAlphanumeric()

> ```ts
> static toAlphanumeric(string): string;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `string` | `string` |

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### randomString() > ```ts static randomString(length, charset): string; ``` Generates a random alphanumeric sequence with the specified length
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `length` | `number` | {Integer} Defaults to 4 |
> | `charset` | `string` | - |

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### alphanumeric() > ```ts static alphanumeric(length, lowercase): string; ``` Generates a random alphanumeric sequence with the specified length
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `length` | `number` | {Integer} Defaults to 4 |
> | `lowercase` | `boolean` | {Boolean} Defaults to true |

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### alpha() > ```ts static alpha(length, lowercase): string; ``` Generates a random ASCII sequence with the specified length
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `length` | `number` | {Integer} Defaults to 4 |
> | `lowercase` | `boolean` | {Boolean} Defaults to true |

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### numeric() > ```ts static numeric(length): string; ``` Generates a random numeric value
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `length` | `number` | {Integer} Defaults to 4 |

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### isNumeric() > ```ts static isNumeric(str): boolean; ``` Tests is the provided `str` argument is a valid numeric sequence.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `str` | `string` | {String} the string to test |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: ##### isAlphanumeric() > ```ts static isAlphanumeric(str): boolean; ``` Tests is the provided `str` argument is a valid alphanumeric sequence.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `str` | `string` | {String} the string to test |

> ::: info Returns
> - **Type**: `boolean`
> :::
