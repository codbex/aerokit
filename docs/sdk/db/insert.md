# db/insert

::: tip Documentation
- source: [db/insert.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/insert.ts)
:::

## Overview



## Classes

### Insert

#### execute()

Executes a single parameterized INSERT statement.
*

> ```ts
> static execute(sql: string, parameters: any, datasourceName: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sql` | `string` | The SQL query to execute, with &#x27;?&#x27; placeholders for parameters. |
> | `parameters` | `any` | An optional array of values to replace the &#x27;?&#x27; placeholders. |
> | `datasourceName` | `string` | The name of the database connection to use (optional). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of records representing the result of the insertion (e.g., generated keys).
> :::

#### executeMany()

Executes multiple parameterized INSERT statements as a batch operation.
*

> ```ts
> static executeMany(sql: string, parameters: any, datasourceName: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sql` | `string` | The SQL query to execute, with &#x27;?&#x27; placeholders for parameters. |
> | `parameters` | `any` | An optional array of parameter arrays, where each inner array corresponds to one execution of the SQL statement. |
> | `datasourceName` | `string` | The name of the database connection to use (optional). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of records representing the results of the batched insertions.
> :::

