# cache/cache

## Overview

::: tip Module
- source: [cache/cache.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/cache/cache.ts)
- last updated: 
:::



## Classes

### Cache

#### contains()

Checks if the cache contains a value for the specified key.

> ```ts
> static contains(key: string): boolean;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key to check. |
>
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the key exists in the cache, false otherwise.
> :::

#### get()

Retrieves the value associated with the specified key from the cache.

> ```ts
> static get(key: any): any;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `any` | The key to retrieve. |
>
> ::: info Returns
> - **Type**: `any`
> - **Description**: The cached value, or `undefined` if the key is not found.
> :::

#### set()

Stores a value in the cache under the specified key.
Note: The duration/time-to-live (TTL) is typically configured server-side.

> ```ts
> static set(key: string, data: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key to store the data under. |
> | `data` | `any` | The data to store. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### delete()

Removes the key and its associated value from the cache.

> ```ts
> static delete(key: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key to delete. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### clear()

Clears all entries from the cache.

> ```ts
> static clear(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

