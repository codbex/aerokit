# db/procedure

## Overview

::: tip Module
- source: [db/procedure.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/procedure.ts)
- last updated: 
:::



## Classes

### Procedure

#### create()

Executes a DDL/DML statement to create or modify a stored procedure without results.
*

> ```ts
> static create(sql: string, datasourceName: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sql` | `string` | The SQL statement (e.g., CREATE PROCEDURE). |
> | `datasourceName` | `string` | Optional name of the data source to use. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### execute()

Executes a stored procedure call and returns the result set(s).
*

> ```ts
> static execute(sql: string, parameters: any, datasourceName: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sql` | `string` | The callable statement (e.g., {CALL my_procedure(?, ?)}). |
> | `parameters` | `any` | An array of parameters. Primitives (string/number) are automatically typed. Use ProcedureParameter for explicit types. |
> | `datasourceName` | `string` | Optional name of the data source to use. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of JSON objects representing the result set(s).
> :::

