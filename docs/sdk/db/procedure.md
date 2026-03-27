# db/procedure

> [!tip]
> Auto-generated from
> - source: [db/procedure.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/procedure.ts)
> - version: 1.0.0


## Overview

The Procedure API provides...

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Procedure](#procedure)
- [Returns](#returns)
- [Interfaces](#interfaces)
  - [ProcedureParameter](#procedureparameter)

## Classes

### Procedure


## Returns

[`Procedure`](#procedure)

#### Methods

##### create()

> ```ts
> static create(sql, datasourceName?): void;
> ```


> Executes a DDL/DML statement to create or modify a stored procedure without results.
> *

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sql` | `string` | The SQL statement (e.g., CREATE PROCEDURE). |
> | `datasourceName?` | `string` | Optional name of the data source to use. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### execute() > ```ts static execute( sql, parameters?, datasourceName?): any[]; ``` Executes a stored procedure call and returns the result set(s). *
> :::

> **Parameters**

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `sql` | `string` | `undefined` | The callable statement (e.g., {CALL my_procedure(?, ?)}). |
| `parameters?` | (`string` \| `number` \| [`ProcedureParameter`](#procedureparameter))[] | `[]` | An array of parameters. Primitives (string/number) are automatically typed. Use ProcedureParameter for explicit types. |
| `datasourceName?` | `string` | `undefined` | Optional name of the data source to use. |

###### Returns

`any`[]

An array of JSON objects representing the result set(s).

## Interfaces

### ProcedureParameter


ProcedureParameter

#### Description

Defines a structured parameter for procedure calls, allowing the type 
to be explicitly defined when the natural JavaScript type mapping is insufficient.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `type` | `string` | src/db/procedure.ts:14 |
|  `value` | `any` | src/db/procedure.ts:15 |
