# cache/cache

> [!tip]
> Auto-generated from
> - source: [cache/cache.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/cache/cache.ts)
> - version: 1.0.0


## Overview

The Cache API provides...

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Cache](#cache)
- [Returns](#returns)

## Classes

### Cache


## Returns

[`Cache`](#cache)

#### Methods

##### contains()

> ```ts
> static contains(key): boolean;
> ```


> Checks if the cache contains a value for the specified key.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key to check. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the key exists in the cache, false otherwise.
> :::

##### get()

> ```ts
> static get(key): any;
> ```


> Retrieves the value associated with the specified key from the cache.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `any` | The key to retrieve. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The cached value, or `undefined` if the key is not found.
> :::

##### set()

> ```ts
> static set(key, data): void;
> ```


> Stores a value in the cache under the specified key.
> Note: The duration/time-to-live (TTL) is typically configured server-side.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key to store the data under. |
> | `data` | `any` | The data to store. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### delete() > ```ts static delete(key): void; ``` Removes the key and its associated value from the cache.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key to delete. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### clear() > ```ts static clear(): void; ``` Clears all entries from the cache.
> :::

> ::: info Returns
> - **Type**: `void`
> :::
