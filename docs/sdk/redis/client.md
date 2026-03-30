# redis/client

## Overview

::: tip Module
- source: [redis/client.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/redis/client.ts)
- last updated: 
:::



## Classes

### Client

#### append()

Appends a value to the value of a key. If the key does not exist,
it is created and set to the initial value.

> ```ts
> append(key: string, value: string): number;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key to append to. |
> | `value` | `string` | The value string to append. |
>
> ::: info Returns
> - **Type**: `number`
> - **Description**: The length of the string after the append operation.
> :::

#### bitcount()

Counts the number of set bits (1s) in the string value of a key.

> ```ts
> bitcount(key: string): number;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key to perform the bitcount on. |
>
> ::: info Returns
> - **Type**: `number`
> - **Description**: The number of set bits.
> :::

#### decr()

Decrements the number stored at key by one.

> ```ts
> decr(key: string): number;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key holding the numeric value. |
>
> ::: info Returns
> - **Type**: `number`
> - **Description**: The value of key after the decrement.
> :::

#### del()

Deletes the specified key.

> ```ts
> del(key: string): number;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key to delete. |
>
> ::: info Returns
> - **Type**: `number`
> - **Description**: The number of keys that were removed (1 if successful, 0 otherwise).
> :::

#### exists()

Checks if the specified key exists.

> ```ts
> exists(key: string): boolean;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key to check. |
>
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the key exists, false otherwise.
> :::

#### get()

Gets the value of the specified key.

> ```ts
> get(key: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key to retrieve the value for. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The value of the key, or null if the key does not exist.
> :::

#### incr()

Increments the number stored at key by one.

> ```ts
> incr(key: string): number;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key holding the numeric value. |
>
> ::: info Returns
> - **Type**: `number`
> - **Description**: The value of key after the increment.
> :::

#### keys()

Finds all keys matching the given pattern.

> ```ts
> keys(pattern: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `pattern` | `string` | The pattern to match keys against (e.g., "user:*"). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of matching keys.
> :::

#### set()

Sets the string value of a key.

> ```ts
> set(key: string, value: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key to set. |
> | `value` | `string` | The string value to assign to the key. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: 'OK' on success.
> :::

#### lindex()

Gets an element from a list by its zero-based index.

> ```ts
> lindex(key: string, index: number): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key of the list. |
> | `index` | `number` | The zero-based index (0 is the first element, -1 is the last). |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The element at the specified index, or null if the index is out of range.
> :::

#### llen()

Gets the length of the list stored at the key.

> ```ts
> llen(key: string): number;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key of the list. |
>
> ::: info Returns
> - **Type**: `number`
> - **Description**: The length of the list.
> :::

#### lpop()

Removes and returns the first element of the list stored at the key (Left POP).

> ```ts
> lpop(key: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key of the list. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The first element of the list, or null when the list is empty.
> :::

#### lpush()

Inserts all specified values at the head of the list stored at the key (Left PUSH).

> ```ts
> lpush(key: string, value: any): any;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key of the list. |
> | `value` | `any` | One or more values to prepend to the list. |
>
> ::: info Returns
> - **Type**: `any`
> - **Description**: The new length of the list.
> :::

#### lrange()

Returns the specified elements of the list stored at the key.

> ```ts
> lrange(key: string, start: number, stop: number): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key of the list. |
> | `start` | `number` | The starting zero-based offset. |
> | `stop` | `number` | The stopping zero-based offset. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of elements in the specified range.
> :::

#### rpop()

Removes and returns the last element of the list stored at the key (Right POP).

> ```ts
> rpop(key: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key of the list. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The last element of the list, or null when the list is empty.
> :::

#### rpush()

Inserts all specified values at the tail of the list stored at the key (Right PUSH).

> ```ts
> rpush(key: string, value: any): number;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key of the list. |
> | `value` | `any` | One or more values to append to the list. |
>
> ::: info Returns
> - **Type**: `number`
> - **Description**: The new length of the list.
> :::

