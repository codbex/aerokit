# db/update

> [!tip]
> Auto-generated from
> - source: [db/update.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/update.ts)
> - version: 1.0.0


## Overview

Interface used for complex parameter types if needed, otherwise primitive types are used directly.
/
export type TypedUpdateParameter = {
  readonly type: string;
  readonly value: unknown;
};

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Update](#update)
- [Returns](#returns)
- [Interfaces](#interfaces)
  - [NamedUpdateParameter](#namedupdateparameter)
- [Type Aliases](#type-aliases)
  - [TypedUpdateParameter](#typedupdateparameter)

## Classes

### Update


Facade class for executing SQL UPDATE, INSERT, and DELETE statements.
Parameters array supports primitives e.g. `[1, 'John', 34.56]` or objects in format either `{'type':'[DATA_TYPE]', 'value':[VALUE]}` or `{'name':'[string]', 'type':'[DATA_TYPE]', 'value':[VALUE]}` e.g. `[{'type':'CHAR', 'value':'ISBN19202323322'}]` or `[{'name': 'order_number', 'type':'CHAR', 'value':'ISBN19202323322'}]`

## Returns

[`Update`](#update)

#### Methods

##### execute()

> ```ts
> static execute( sql, parameters?, datasourceName?): number;
> ```


> Executes a parameterized SQL update statement (INSERT, UPDATE, or DELETE).

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sql` | `string` | The SQL query to execute. |
> | `parameters?` | ( \| `string` \| `number` \| `boolean` \| `Date` \| [`TypedUpdateParameter`](#typedupdateparameter) \| [`NamedUpdateParameter`](#namedupdateparameter))[] | An optional array of values (primitives, TypedQueryParameter or NamedQueryParameter objects) to replace '?' or :paramName placeholders. |
> | `datasourceName?` | `string` | The name of the database connection to use (optional). |

> ::: info Returns
> - **Type**: `number`
> - **Description**: The number of rows affected by the statement.
> :::

## Interfaces

### NamedUpdateParameter


Interface defining a parameter for a named update query (using placeholders like :paramName).

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
|  `name` | `readonly` | `string` | src/db/update.ts:15 |
|  `type` | `readonly` | `string` | src/db/update.ts:16 |
|  `value` | `readonly` | `any` | src/db/update.ts:17 |

## Type Aliases

### TypedUpdateParameter

> ```ts
> type TypedUpdateParameter = object;
> ```


Interface used for complex parameter types if needed, otherwise primitive types are used directly.

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
|  `type` | `readonly` | `string` | src/db/update.ts:7 |
|  `value` | `readonly` | `unknown` | src/db/update.ts:8 |
