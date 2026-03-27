# mongodb/dao

::: tip Documentation
- source: [mongodb/dao.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/mongodb/dao.ts)
:::


## Overview

The Dao API provides...


## Classes

### DAO


#### Constructors

##### Constructor

```ts
new DAO(orm, logCtxName?): DAO;
```


**Parameters**

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `orm` | `any` | `undefined` |
| `logCtxName` | `string` | `'mongodb.dao'` |

#### Properties
#### Methods
##### notify()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### createNoSQLEntity()

```ts
createNoSQLEntity(entity): any;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `entity` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::
##### validateEntity()

```ts
validateEntity(entity, skip): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `entity` | `any` |
| `skip` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::
##### insert()

```ts
insert(_entity): any;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `_entity` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::
##### update()

```ts
update(entity): DAO;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `entity` | `any` |

##### remove()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### expand()

```ts
expand(expansionPath, context): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `expansionPath` | `any` |
| `context` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::
##### find()

```ts
find(
   id, 
   expand, 
   select): any;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `id` | `any` |
| `expand` | `any` |
| `select` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::
##### count()

```ts
count(): number;
```


> ::: info Returns
> - **Type**: `number`
> :::
##### list()

```ts
list(settings): any[];
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `settings` | `any` |

##### existsTable()
> ::: info Returns
> - **Type**: `boolean`
> :::
##### createTable()

```ts
createTable(): void;
```


> ::: info Returns
> - **Type**: `void`
> :::
##### dropTable()

```ts
dropTable(): DAO;
```


## Functions
### create()
#### Parameters
#### Returns
### dao()
#### Parameters
#### Returns