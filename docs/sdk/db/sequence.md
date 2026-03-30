# db/sequence

## Overview

::: tip Module
- source: [db/sequence.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/sequence.ts)
- last updated: 
:::



## Classes

### Sequence

#### nextval()

Retrieves the next available value from a specified sequence.

> ```ts
> static nextval(sequence: string, tableName: string, datasourceName: string): number;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sequence` | `string` | The name of the database sequence. |
> | `tableName` | `string` | Optional: The name of the table associated with the sequence (depends on database dialect/facade implementation). |
> | `datasourceName` | `string` | Optional: The name of the database connection to use. |
>
> ::: info Returns
> - **Type**: `number`
> - **Description**: The next sequence value as a number.
> :::

#### create()

Creates a new database sequence.

> ```ts
> static create(sequence: string, start: number, datasourceName: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sequence` | `string` | The name of the sequence to create. |
> | `start` | `number` | Optional: The starting value for the sequence (defaults to 1 if not provided). |
> | `datasourceName` | `string` | Optional: The name of the database connection to use. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### drop()

Drops (deletes) an existing database sequence.

> ```ts
> static drop(sequence: string, datasourceName: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sequence` | `string` | The name of the sequence to drop. |
> | `datasourceName` | `string` | Optional: The name of the database connection to use. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

