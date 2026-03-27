# redis/client

::: tip Documentation
- source: [redis/client.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/redis/client.ts)
:::


## Overview

Redis Client

This class serves as a facade for common Redis operations, providing a convenient
JavaScript interface that wraps the underlying Java Redis client implementation.


## Classes

### Client


#### Constructors

##### Constructor

```ts
new Client(): Client;
```


Initializes the Redis Client and retrieves the native client instance
from the Redis Facade.

#### Methods
##### append()
**Parameters**
> ::: info Returns
> - **Type**: `number`
> - **Description**: The length of the string after the append operation.
> :::
##### bitcount()

```ts
bitcount(key): number;
```


Counts the number of set bits (1s) in the string value of a key.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to perform the bitcount on. |

> ::: info Returns
> - **Type**: `number`
> - **Description**: The number of set bits.
> :::
##### decr()

```ts
decr(key): number;
```


Decrements the number stored at key by one.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key holding the numeric value. |

> ::: info Returns
> - **Type**: `number`
> - **Description**: The value of key after the decrement.
> :::
##### del()

```ts
del(key): number;
```


Deletes the specified key.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to delete. |

> ::: info Returns
> - **Type**: `number`
> - **Description**: The number of keys that were removed (1 if successful, 0 otherwise).
> :::
##### exists()

```ts
exists(key): boolean;
```


Checks if the specified key exists.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to check. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the key exists, false otherwise.
> :::
##### get()

```ts
get(key): string;
```


Gets the value of the specified key.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to retrieve the value for. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The value of the key, or null if the key does not exist.
> :::
##### incr()

```ts
incr(key): number;
```


Increments the number stored at key by one.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key holding the numeric value. |

> ::: info Returns
> - **Type**: `number`
> - **Description**: The value of key after the increment.
> :::
##### keys()

```ts
keys(pattern): string[];
```


Finds all keys matching the given pattern.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pattern` | `string` | The pattern to match keys against (e.g., "user:*"). |

##### set()
**Parameters**
> ::: info Returns
> - **Type**: `string`
> - **Description**: 'OK' on success.
> :::
##### lindex()

```ts
lindex(key, index): string;
```


Gets an element from a list by its zero-based index.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key of the list. |
| `index` | `number` | The zero-based index (0 is the first element, -1 is the last). |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The element at the specified index, or null if the index is out of range.
> :::
##### llen()

```ts
llen(key): number;
```


Gets the length of the list stored at the key.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key of the list. |

> ::: info Returns
> - **Type**: `number`
> - **Description**: The length of the list.
> :::
##### lpop()

```ts
lpop(key): string;
```


Removes and returns the first element of the list stored at the key (Left POP).

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key of the list. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The first element of the list, or null when the list is empty.
> :::
##### lpush()

```ts
lpush(key, ...value): any;
```


Inserts all specified values at the head of the list stored at the key (Left PUSH).

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key of the list. |
| ...`value` | `string`[] | One or more values to prepend to the list. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The new length of the list.
> :::
##### lrange()

```ts
lrange(
   key, 
   start, 
   stop): string[];
```


Returns the specified elements of the list stored at the key.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key of the list. |
| `start` | `number` | The starting zero-based offset. |
| `stop` | `number` | The stopping zero-based offset. |

##### rpop()
**Parameters**
> ::: info Returns
> - **Type**: `string`
> - **Description**: The last element of the list, or null when the list is empty.
> :::
##### rpush()

```ts
rpush(key, ...value): number;
```


Inserts all specified values at the tail of the list stored at the key (Right PUSH).

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key of the list. |
| ...`value` | `string`[] | One or more values to append to the list. |

> ::: info Returns
> - **Type**: `number`
> - **Description**: The new length of the list.
> :::