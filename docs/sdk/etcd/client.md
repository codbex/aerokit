# etcd/client

::: tip Documentation
- source: [etcd/client.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/etcd/client.ts)
:::


## Overview

The Client API provides...


## Classes

### Header


Represents the header metadata of an Etcd response.

#### Constructors

##### Constructor

```ts
new Header(native): Header;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `native` | `any` |

#### Methods
##### getRevision()
> ::: info Returns
> - **Type**: `string`
> :::
##### getClusterId()

```ts
getClusterId(): string;
```


The ID of the cluster which the request was sent to.

> ::: info Returns
> - **Type**: `string`
> :::
##### getMemberId()

```ts
getMemberId(): string;
```


The ID of the member which the request was handled by.

> ::: info Returns
> - **Type**: `string`
> :::
##### getRaftTerm()

```ts
getRaftTerm(): string;
```


The Raft term.

> ::: info Returns
> - **Type**: `string`
> - **Description**: ***
> :::
### GetResponse


Represents the response object for a Get operation from Etcd.

#### Constructors

##### Constructor

```ts
new GetResponse(native): GetResponse;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `native` | `any` |

#### Methods
##### getHeader()
##### getKvsString()
> ::: info Returns
> - **Type**: `object`
> :::
##### getKvsByteArray()

```ts
getKvsByteArray(): object;
```


Retrieves the Key-Value pairs with values converted to Int8Array (byte arrays).

> ::: info Returns
> - **Type**: `object`
> :::
##### getCount()

```ts
getCount(): number;
```


Retrieves the number of Key-Value pairs returned.

> ::: info Returns
> - **Type**: `number`
> - **Description**: ***
> :::
### Client


Client facade for interacting with the Etcd key-value store.

#### Constructors

##### Constructor

```ts
new Client(): Client;
```


#### Methods
##### putStringValue()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### putByteArrayValue()

```ts
putByteArrayValue(key, value): void;
```


Puts (writes) a byte array value to the specified key.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to write to. |
| `value` | `Int8Array` | The Int8Array (byte array) value. |

> ::: info Returns
> - **Type**: `void`
> :::
##### getHeader()

```ts
getHeader(key): Header;
```


Retrieves the response header metadata for a key.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to query. |

##### getKvsStringValue()
**Parameters**
> ::: info Returns
> - **Type**: `object`
> - **Description**: An object mapping keys to string values.
> :::
##### getKvsByteArrayValue()

```ts
getKvsByteArrayValue(key): object;
```


Retrieves the Key-Value pairs as a JavaScript object with Int8Array values.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key (or key prefix) to query. |

> ::: info Returns
> - **Type**: `object`
> - **Description**: An object mapping keys to Int8Array values.
> :::
##### getCount()

```ts
getCount(key): number;
```


Retrieves the count of Key-Value pairs matching the key (or key prefix).

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key (or key prefix) to query. |

> ::: info Returns
> - **Type**: `number`
> - **Description**: The count of matching entries.
> :::
##### delete()

```ts
delete(key): void;
```


Deletes the specified key.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to delete. |

> ::: info Returns
> - **Type**: `void`
> :::