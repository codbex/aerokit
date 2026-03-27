# cache/cache

::: tip Documentation
- source: [cache/cache.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/cache/cache.ts)
:::


## Overview

Cache
* Provides a static utility for interacting with a server-side cache facade, enabling
simple key-value storage, retrieval, and invalidation operations.


## Classes

### Cache


#### Constructors

##### Constructor

```ts
new Cache(): Cache;
```

#### Methods
##### contains()
**Parameters**
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the key exists in the cache, false otherwise.
> :::
##### get()

```ts
static get(key): any;
```


Retrieves the value associated with the specified key from the cache.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `any` | The key to retrieve. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The cached value, or `undefined` if the key is not found.
> :::
##### set()

```ts
static set(key, data): void;
```


Stores a value in the cache under the specified key.
Note: The duration/time-to-live (TTL) is typically configured server-side.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to store the data under. |
| `data` | `any` | The data to store. |

> ::: info Returns
> - **Type**: `void`
> :::
##### delete()

```ts
static delete(key): void;
```


Removes the key and its associated value from the cache.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to delete. |

> ::: info Returns
> - **Type**: `void`
> :::
##### clear()

```ts
static clear(): void;
```


Clears all entries from the cache.

> ::: info Returns
> - **Type**: `void`
> :::