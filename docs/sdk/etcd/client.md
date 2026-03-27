# etcd/client

> [!tip]
> Auto-generated from
> - source: [etcd/client.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/etcd/client.ts)
> - version: 1.0.0


## Overview

Converts a string to a native Etcd ByteSequence object.
@param str The string to convert.
@returns The native ByteSequence object (Java type).
/
function StringToByteSequence(str: string): any {
    return EtcdFacade.stringToByteSequence(str);
}

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Header](#header)
- [Parameters](#parameters)
  - [GetResponse](#getresponse)
- [Parameters](#parameters)
  - [Client](#client)
- [Returns](#returns)

## Classes

### Header


Represents the header metadata of an Etcd response.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `native` | `any` |

###### Returns

[`Header`](#header)

#### Methods

##### getRevision()

> ```ts
> getRevision(): string;
> ```


> The revision of the key-value store when the request was processed.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getClusterId() > ```ts getClusterId(): string; ``` The ID of the cluster which the request was sent to.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getMemberId() > ```ts getMemberId(): string; ``` The ID of the member which the request was handled by.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getRaftTerm() > ```ts getRaftTerm(): string; ``` The Raft term.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ***
> > :::

> ### GetResponse

Represents the response object for a Get operation from Etcd.



> Represents the response object for a Get operation from Etcd.

> ## Parameters

> | Parameter | Type |
> | ------ | ------ |
> | `native` | `any` |

> ###### Returns

> [`GetResponse`](#getresponse)

> #### Methods

> ##### getHeader()

> > ```ts
> > getHeader(): Header;
> > ```


> Retrieves the response header containing cluster metadata.

> ###### Returns

> [`Header`](#header)

> ##### getKvsString()

> > ```ts
> > getKvsString(): object;
> > ```


> Retrieves the Key-Value pairs with values converted to strings.

> > ::: info Returns
> > - **Type**: `object`
> > - **Description**: ##### getKvsByteArray() > ```ts getKvsByteArray(): object; ``` Retrieves the Key-Value pairs with values converted to Int8Array (byte arrays).
> > :::

> > ::: info Returns
> > - **Type**: `object`
> > - **Description**: ##### getCount() > ```ts getCount(): number; ``` Retrieves the number of Key-Value pairs returned.
> > :::

> > ::: info Returns
> > - **Type**: `number`
> > - **Description**: ***
> > :::

> ### Client

Client facade for interacting with the Etcd key-value store.



> Client facade for interacting with the Etcd key-value store.

> ## Returns

> [`Client`](#client)

> #### Methods

> ##### putStringValue()

> > ```ts
> > putStringValue(key, value): void;
> > ```


> Puts (writes) a string value to the specified key.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key to write to. |
> | `value` | `string` | The string value. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### putByteArrayValue() > ```ts putByteArrayValue(key, value): void; ``` Puts (writes) a byte array value to the specified key.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key to write to. |
> | `value` | `Int8Array` | The Int8Array (byte array) value. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getHeader() > ```ts getHeader(key): Header; ``` Retrieves the response header metadata for a key.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key to query. |
> 
> ###### Returns
> 
> [`Header`](#header)
> 
> The [Header](#header) object.
> 
> ##### getKvsStringValue()
> 
> > ```ts
> > getKvsStringValue(key): object;
> > ```
> 
> 
> > Retrieves the Key-Value pairs as a JavaScript object with string values.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key (or key prefix) to query. |

> ::: info Returns
> - **Type**: `object`
> - **Description**: An object mapping keys to string values.
> :::

##### getKvsByteArrayValue()

> ```ts
> getKvsByteArrayValue(key): object;
> ```


> Retrieves the Key-Value pairs as a JavaScript object with Int8Array values.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key (or key prefix) to query. |

> ::: info Returns
> - **Type**: `object`
> - **Description**: An object mapping keys to Int8Array values.
> :::

##### getCount()

> ```ts
> getCount(key): number;
> ```


> Retrieves the count of Key-Value pairs matching the key (or key prefix).

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key (or key prefix) to query. |

> ::: info Returns
> - **Type**: `number`
> - **Description**: The count of matching entries.
> :::

##### delete()

> ```ts
> delete(key): void;
> ```


> Deletes the specified key.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The key to delete. |

> ::: info Returns
> - **Type**: `void`
> :::
