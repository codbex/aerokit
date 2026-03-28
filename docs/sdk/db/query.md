# db/query

::: tip Documentation
- source: [db/query.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/query.ts)
:::

## Overview



## Classes

### Query

#### execute()

Executes a standard SQL query with positional parameters. Parameters array supports primitives e.g. &#x60;[1, &#x27;John&#x27;, 34.56]&#x60; or objects in format either &#x60;{&#x27;type&#x27;:&#x27;[DATA_TYPE]&#x27;, &#x27;value&#x27;:[VALUE]}&#x60; or &#x60;{&#x27;name&#x27;:&#x27;[string]&#x27;, &#x27;type&#x27;:&#x27;[DATA_TYPE]&#x27;, &#x27;value&#x27;:[VALUE]}&#x60; e.g. &#x60;[{&#x27;type&#x27;:&#x27;CHAR&#x27;, &#x27;value&#x27;:&#x27;ISBN19202323322&#x27;}]&#x60; or &#x60;[{&#x27;name&#x27;: &#x27;order_number&#x27;, &#x27;type&#x27;:&#x27;CHAR&#x27;, &#x27;value&#x27;:&#x27;ISBN19202323322&#x27;}]&#x60;

> ```ts
> static execute(sql: string, parameters: any, datasourceName: string, formatting: FormattingParameter): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sql` | `string` | The SQL query to execute. |
> | `parameters` | `any` | An optional array of values (primitives, TypedQueryParameter or NamedQueryParameter objects) to replace &#x27;?&#x27; or :paramName placeholders. |
> | `datasourceName` | `string` | The name of the database connection to use (optional). |
> | `formatting` | `FormattingParameter` | Optional formatting parameters for the result set (e.g., date format). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of records representing the query results.
> :::

#### executeNamed()

Executes a SQL query with named parameters (e.g., &quot;:name&quot;, &quot;:id&quot;).

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

Exports a SQL query with named parameters (e.g., &quot;:name&quot;, &quot;:id&quot;).

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

