# db/dao

::: tip Documentation
- source: [db/dao.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/dao.ts)
:::


## Overview

The Dao API provides...


## Functions

### DAO()

```ts
function DAO(
   orm, 
   logCtxName?, 
   dataSourceName?): void;
```


#### Parameters

| Parameter | Type |
| ------ | ------ |
| `orm` | [`ORMDefinition`](orm.md#ormdefinition) |
| `logCtxName?` | `string` |
| `dataSourceName?` | `string` |

#### Returns

`void`

***

### create()

```ts
function create(
   oDefinition, 
   logCtxName?, 
   dataSourceName?): any;
```


oDefinition can be table definition or standard orm definition object. Or it can be a valid path to
a .table file, or any other text file contianing a standard dao orm definition.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `oDefinition` | `any` |
| `logCtxName?` | `string` |
| `dataSourceName?` | `string` |

#### Returns

`any`

***

### dao()

```ts
function dao(
   oDefinition, 
   logCtxName?, 
   dataSourceName?): any;
```


#### Parameters

| Parameter | Type |
| ------ | ------ |
| `oDefinition` | `any` |
| `logCtxName?` | `string` |
| `dataSourceName?` | `string` |

#### Returns

`any`
