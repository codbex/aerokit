# db/query

## Overview

::: tip Module
- source: [db/query.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/query.ts)
- last updated: 
:::



## Classes

### Query

#### execute()

Executes a standard SQL query with positional parameters. Parameters array supports primitives e.g. `[1, 'John', 34.56]` or objects in format either `{'type':'[DATA_TYPE]', 'value':[VALUE]}` or `{'name':'[string]', 'type':'[DATA_TYPE]', 'value':[VALUE]}` e.g. `[{'type':'CHAR', 'value':'ISBN19202323322'}]` or `[{'name': 'order_number', 'type':'CHAR', 'value':'ISBN19202323322'}]`

> ```ts
> static execute(sql: string, parameters: any, datasourceName: string, formatting: FormattingParameter): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sql` | `string` | The SQL query to execute. |
> | `parameters` | `any` | An optional array of values (primitives, TypedQueryParameter or NamedQueryParameter objects) to replace '?' or :paramName placeholders. |
> | `datasourceName` | `string` | The name of the database connection to use (optional). |
> | `formatting` | `FormattingParameter` | Optional formatting parameters for the result set (e.g., date format). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of records representing the query results.
> :::

#### executeNamed()

Executes a SQL query with named parameters (e.g., ":name", ":id").

> ```ts
> static executeNamed(sql: string, parameters: any, datasourceName: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sql` | `string` | The SQL query to execute. |
> | `parameters` | `any` | An optional array of NamedQueryParameter objects. |
> | `datasourceName` | `string` | The name of the database connection to use (optional). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of records representing the query results.
> :::

#### exportCsv()

Exports a SQL query with named parameters (e.g., ":name", ":id").

> ```ts
> static exportCsv(sql: string, parameters: any, datasourceName: string, fileName: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sql` | `string` | The SQL query to execute. |
> | `parameters` | `any` | An optional array of NamedQueryParameter objects. |
> | `datasourceName` | `string` | The name of the database connection to use (optional). |
> | `fileName` | `string` | The file name pattern. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of records representing the query results.
> :::

