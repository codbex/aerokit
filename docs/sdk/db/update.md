# db/update

## Overview

::: tip Module
- source: [db/update.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/update.ts)
- last updated: 
:::



## Classes

### Update

#### execute()

Executes a parameterized SQL update statement (INSERT, UPDATE, or DELETE).

> ```ts
> static execute(sql: string, parameters: any, datasourceName: string): number;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sql` | `string` | The SQL query to execute. |
> | `parameters` | `any` | An optional array of values (primitives, TypedQueryParameter or NamedQueryParameter objects) to replace '?' or :paramName placeholders. |
> | `datasourceName` | `string` | The name of the database connection to use (optional). |
>
> ::: info Returns
> - **Type**: `number`
> - **Description**: The number of rows affected by the statement.
> :::

