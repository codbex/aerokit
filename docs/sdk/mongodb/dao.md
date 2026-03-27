# mongodb/dao

> [!tip]
> Auto-generated from
> - source: [mongodb/dao.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/mongodb/dao.ts)
> - version: 1.0.0


## Overview

The Dao API provides...

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [DAO](#dao)
- [Parameters](#parameters)
- [Functions](#functions)
  - [create()](#create())
  - [dao()](#dao())

## Classes

### DAO


## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `orm` | `any` | `undefined` |
| `logCtxName` | `string` | `'mongodb.dao'` |

###### Returns

[`DAO`](#dao)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `$log` | `any` | src/mongodb/dao.ts:16 |

#### Methods

##### notify()

> ```ts
> notify(event, ...a): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `event` | `any` |
> | ...`a` | `any`[] |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### createNoSQLEntity() > ```ts createNoSQLEntity(entity): any; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `entity` | `any` |

> ::: info Returns
> - **Type**: `any`
> - **Description**: ##### validateEntity() > ```ts validateEntity(entity, skip): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `entity` | `any` |
> | `skip` | `any` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### insert() > ```ts insert(_entity): any; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `_entity` | `any` |

> ::: info Returns
> - **Type**: `any`
> - **Description**: ##### update() > ```ts update(entity): DAO; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `entity` | `any` |
> 
> ###### Returns
> 
> [`DAO`](#dao)
> 
> ##### remove()
> 
> > ```ts
> > remove(id): void;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `id` | `any` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### expand() > ```ts expand(expansionPath, context): void; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `expansionPath` | `any` |
> | `context` | `any` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### find() > ```ts find(    id,     expand,     select): any; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `id` | `any` |
> | `expand` | `any` |
> | `select` | `any` |

> ::: info Returns
> - **Type**: `any`
> - **Description**: ##### count() > ```ts count(): number; ```
> > :::

> > ::: info Returns
> > - **Type**: `number`
> > - **Description**: ##### list() > ```ts list(settings): any[]; ```
> > :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `settings` | `any` |
> 
> ###### Returns
> 
> `any`[]
> 
> ##### existsTable()
> 
> > ```ts
> > existsTable(): boolean;
> > ```
> 

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: ##### createTable() > ```ts createTable(): void; ```
> :::

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### dropTable() > ```ts dropTable(): DAO; ```
> :::

###### Returns

[`DAO`](#dao)

## Functions

### create()

> ```ts
> function create(
>    oDefinition, 
>    logCtxName, 
>    dataSourceName, 
>    databaseType): DAO;
> ```


oDefinition can be table definition or standard orm definition object. Or it can be a valid path to
a .table file, or any other text file contianing a standard dao orm definition.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `oDefinition` | `any` |
| `logCtxName` | `any` |
| `dataSourceName` | `any` |
| `databaseType` | `any` |

#### Returns

[`DAO`](#dao)

***

### dao()

> ```ts
> function dao(
>    oDefinition, 
>    logCtxName, 
>    dataSourceName, 
>    databaseType): DAO;
> ```


#### Parameters

| Parameter | Type |
| ------ | ------ |
| `oDefinition` | `any` |
| `logCtxName` | `any` |
| `dataSourceName` | `any` |
| `databaseType` | `any` |

#### Returns

[`DAO`](#dao)
