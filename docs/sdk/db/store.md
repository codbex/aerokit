# db/store

::: tip Documentation
- source: [db/store.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/store.ts)
:::


## Overview

The Store API provides...


## Enumerations

### Operator


Defines the available comparison operators for query conditions.

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
|  `EQ` | `"="` | src/db/store.ts:7 |
|  `NE` | `""` | src/db/store.ts:8 |
|  `GT` | `">"` | src/db/store.ts:9 |
|  `LT` | `" `GE` | `">="` | src/db/store.ts:11 |
|  `LE` | `" `LIKE` | `"LIKE"` | src/db/store.ts:13 |
|  `BETWEEN` | `"BETWEEN"` | src/db/store.ts:14 |
|  `IN` | `"IN"` | src/db/store.ts:15 |

***

### Direction


Defines the direction for sorting.

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
|  `ASC` | `"ASC"` | src/db/store.ts:22 |
|  `DESC` | `"DESC"` | src/db/store.ts:23 |

## Classes

### Store


Facade class for interacting with the underlying Dirigible Data Store.
All methods serialize/deserialize JavaScript objects to/from JSON strings
before interacting with the native Java facade.

#### Constructors

##### Constructor

```ts
new Store(): Store;
```

#### Methods
##### save()
**Parameters**
##### upsert()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### update()

```ts
static update(name, entry): void;
```


Updates an existing entry.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The entity/table name. |
| `entry` | `any` | The JavaScript object with the ID and updated data. |

> ::: info Returns
> - **Type**: `void`
> :::
##### list()

```ts
static list(name, options?): any[];
```


Lists entries based on optional filtering, sorting, and pagination options.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The entity/table name. |
| `options?` | [`Options`](#options) | Optional [Options](#options) for query execution. |

##### count()
**Parameters**
> ::: info Returns
> - **Type**: `number`
> - **Description**: The count of matching entries.
> :::
##### get()

```ts
static get(name, id): any;
```


Retrieves a single entry by its ID.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The entity/table name. |
| `id` | `any` | The ID of the entry. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The entry object, or undefined if not found.
> :::
##### remove()

```ts
static remove(name, id): void;
```


Deletes an entry by its ID.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The entity/table name. |
| `id` | `any` | The ID of the entry to remove. |

> ::: info Returns
> - **Type**: `void`
> :::
##### find()

```ts
static find(
   name, 
   example, 
   limit?, 
   offset?): any[];
```


Finds entries matching an example object (query-by-example).

**Parameters**

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `name` | `string` | `undefined` | The entity/table name. |
| `example` | `any` | `undefined` | An object containing properties to match. |
| `limit` | `number` | `100` | Maximum number of results to return. |
| `offset` | `number` | `0` | Number of results to skip. |

##### query()
**Parameters**
##### queryNative()
**Parameters**
##### getEntityName()
**Parameters**
> ::: info Returns
> - **Type**: `string`
> :::
##### getTableName()

```ts
static getTableName(name): string;
```


Gets the underlying database table name for the entity.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

> ::: info Returns
> - **Type**: `string`
> :::
##### getIdName()

```ts
static getIdName(name): string;
```


Gets the property name used as the ID field in the entity object.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

> ::: info Returns
> - **Type**: `string`
> :::
##### getIdColumn()

```ts
static getIdColumn(name): string;
```


Gets the underlying database column name used for the ID field.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

> ::: info Returns
> - **Type**: `string`
> :::
## Interfaces

### Condition


Represents a single condition for filtering data.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `propertyName` | `string` | src/db/store.ts:30 |
|  `operator` | [`Operator`](#operator) | src/db/store.ts:31 |
|  `value` | `any` | src/db/store.ts:32 |

***

### Sort


Represents a single sorting instruction.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `propertyName` | `string` | src/db/store.ts:39 |
|  `direction` | [`Direction`](#direction) | src/db/store.ts:40 |

***

### Options


Defines optional parameters for list and count operations.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `conditions?` | [`Condition`](#condition)[] | src/db/store.ts:47 |
|  `sorts?` | [`Sort`](#sort)[] | src/db/store.ts:48 |
|  `limit?` | `number` | src/db/store.ts:49 |
|  `offset?` | `number` | src/db/store.ts:50 |
|  `language?` | `string` | src/db/store.ts:51 |
