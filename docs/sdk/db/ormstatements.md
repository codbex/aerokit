# db/ormstatements

> [!tip]
> Auto-generated from
> - source: [db/ormstatements.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/ormstatements.ts)
> - version: 1.0.0


## Overview

The Ormstatements API provides...

## Table of Contents

- [Overview](#overview)
- [Functions](#functions)
  - [ORMStatements()](#ormstatements())
  - [create()](#create())

## Functions

### ORMStatements()

> ```ts
> function ORMStatements(orm, dialect): void;
> ```


#### Parameters

| Parameter | Type |
| ------ | ------ |
| `orm` | `any` |
| `dialect` | [`SQLBuilder`](sql.md#sqlbuilder) |

#### Returns

`void`

***

### create()

> ```ts
> function create(orm, connection?): any;
> ```


#### Parameters

| Parameter | Type |
| ------ | ------ |
| `orm` | `any` |
| `connection?` | [`Connection`](database.md#connection) |

#### Returns

`any`
