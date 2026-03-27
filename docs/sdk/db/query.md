# db/query

> [!tip]
> Auto-generated from
> - source: [db/query.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/query.ts)
> - version: 1.0.0


## Overview

API Query

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Query](#query)
- [Returns](#returns)
- [Interfaces](#interfaces)
  - [NamedQueryParameter](#namedqueryparameter)
  - [FormattingParameter](#formattingparameter)
- [Type Aliases](#type-aliases)
  - [TypedQueryParameter](#typedqueryparameter)

## Classes

### Query


Provides static methods for executing parameterized SQL SELECT statements.

## Returns

[`Query`](#query)

#### Methods

##### execute()

> ```ts
> static execute( sql, parameters?, datasourceName?, formatting?): any[];
> ```


> Executes a standard SQL query with positional parameters. Parameters array supports primitives e.g. `[1, 'John', 34.56]` or objects in format either `{'type':'[DATA_TYPE]', 'value':[VALUE]}` or `{'name':'[string]', 'type':'[DATA_TYPE]', 'value':[VALUE]}` e.g. `[{'type':'CHAR', 'value':'ISBN19202323322'}]` or `[{'name': 'order_number', 'type':'CHAR', 'value':'ISBN19202323322'}]`

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sql` | `string` | The SQL query to execute. |
> | `parameters?` | \| `string` \| ( \| `string` \| `number` \| `boolean` \| `Date` \| [`TypedQueryParameter`](#typedqueryparameter) \| [`NamedQueryParameter`](#namedqueryparameter))[] | An optional array of values (primitives, TypedQueryParameter or NamedQueryParameter objects) to replace '?' or :paramName placeholders. |
> | `datasourceName?` | `string` | The name of the database connection to use (optional). |
> | `formatting?` | [`FormattingParameter`](#formattingparameter) | Optional formatting parameters for the result set (e.g., date format). |

> ::: info Returns
> - **Type**: `any`
> - **Description**: [] An array of records representing the query results.
> :::

##### executeNamed()

> ```ts
> static executeNamed( sql, parameters?, datasourceName?): any[];
> ```


> Executes a SQL query with named parameters (e.g., ":name", ":id").

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sql` | `string` | The SQL query to execute. |
> | `parameters?` | [`NamedQueryParameter`](#namedqueryparameter)[] | An optional array of NamedQueryParameter objects. |
> | `datasourceName?` | `string` | The name of the database connection to use (optional). |

> ::: info Returns
> - **Type**: `any`
> - **Description**: [] An array of records representing the query results.
> :::

##### exportCsv()

> ```ts
> static exportCsv( sql, parameters?, datasourceName?, fileName?): void;
> ```


> Exports a SQL query with named parameters (e.g., ":name", ":id").

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sql` | `string` | The SQL query to execute. |
> | `parameters?` | [`NamedQueryParameter`](#namedqueryparameter)[] | An optional array of NamedQueryParameter objects. |
> | `datasourceName?` | `string` | The name of the database connection to use (optional). |
> | `fileName?` | `string` | The file name pattern. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of records representing the query results.
> :::

## Interfaces

### NamedQueryParameter


Interface defining a parameter for a named query (using placeholders like :paramName).

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
|  `name` | `readonly` | `string` | src/db/query.ts:22 |
|  `type` | `readonly` | `string` | src/db/query.ts:23 |
|  `value` | `readonly` | `any` | src/db/query.ts:24 |

***

### FormattingParameter


Interface to specify formatting options for the query result set.

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
|  `dateFormat` | `readonly` | `string` | src/db/query.ts:31 |

## Type Aliases

### TypedQueryParameter

> ```ts
> type TypedQueryParameter = object;
> ```


Interface used to wrap complex or specific values for non-named queries.

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
|  `type` | `readonly` | `string` | src/db/query.ts:14 |
|  `value` | `readonly` | `unknown` | src/db/query.ts:15 |
