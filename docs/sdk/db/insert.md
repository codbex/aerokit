# db/insert

> [!tip]
> Auto-generated from
> - source: [db/insert.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/insert.ts)
> - version: 1.0.0


## Overview

Interface used to wrap complex or other specific values for database insertion.
/
export interface InsertParameter {
	readonly value: any;
}

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Insert](#insert)
- [Returns](#returns)
- [Interfaces](#interfaces)
  - [InsertParameter](#insertparameter)

## Classes

### Insert


Provides static methods for executing INSERT SQL statements.

## Returns

[`Insert`](#insert)

#### Methods

##### execute()

> ```ts
> static execute( sql, parameters?, datasourceName?): Record[];
> ```


> Executes a single parameterized INSERT statement.
> *

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sql` | `string` | The SQL query to execute, with '?' placeholders for parameters. |
| `parameters?` | `ParameterValue`[] | An optional array of values to replace the '?' placeholders. |
| `datasourceName?` | `string` | The name of the database connection to use (optional). |

###### Returns

`Record`\[]

An array of records representing the result of the insertion (e.g., generated keys).

##### executeMany()

> ```ts
> static executeMany( sql, parameters?, datasourceName?): Record[];
> ```


> Executes multiple parameterized INSERT statements as a batch operation.
> *

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sql` | `string` | The SQL query to execute, with '?' placeholders for parameters. |
| `parameters?` | `ParameterValue`[][] | An optional array of parameter arrays, where each inner array corresponds to one execution of the SQL statement. |
| `datasourceName?` | `string` | The name of the database connection to use (optional). |

###### Returns

`Record`\[]

An array of records representing the results of the batched insertions.

## Interfaces

### InsertParameter


Interface used to wrap complex or other specific values for database insertion.

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
|  `value` | `readonly` | `any` | src/db/insert.ts:7 |
