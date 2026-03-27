# db/orm

> [!tip]
> Auto-generated from
> - source: [db/orm.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/orm.ts)
> - version: 1.0.0


## Overview

The Orm API provides...

## Table of Contents

- [Overview](#overview)
- [Interfaces](#interfaces)
  - [ORMDefinition](#ormdefinition)
- [Functions](#functions)
  - [ORM()](#orm())
  - [get()](#get())

## Interfaces

### ORMDefinition


Supported ORM schema:
```
{
	 name: ,
  table: ,
  properties: [{
	   name: ,
	   column: ,
	   id: ,
	   required: ,
	   unique: ,
	   dbValue: ,
	   value: ,
	   allowedOps: 
  }],
	 associations: [{
	   name: ,
    joinKey: ,
    key: ,
    type: ,
    targetDao: ,
    joinDao: ,
    defaults: ,
  }]
}
```

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `table` | `string` | src/db/orm.ts:34 |
|  `properties` | `object`[] | src/db/orm.ts:35 |

## Functions

### ORM()

> ```ts
> function ORM(orm): void;
> ```


#### Parameters

| Parameter | Type |
| ------ | ------ |
| `orm` | [`ORMDefinition`](#ormdefinition) |

#### Returns

`void`

***

### get()

> ```ts
> function get(orm): any;
> ```


#### Parameters

| Parameter | Type |
| ------ | ------ |
| `orm` | [`ORMDefinition`](#ormdefinition) |

#### Returns

`any`
