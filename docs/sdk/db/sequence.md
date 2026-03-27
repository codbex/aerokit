# db/sequence

> [!tip]
> Auto-generated from
> - source: [db/sequence.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/sequence.ts)
> - version: 1.0.0


## Overview

API Sequence

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Sequence](#sequence)
- [Returns](#returns)

## Classes

### Sequence


Utility class for interacting with database sequence objects.

## Returns

[`Sequence`](#sequence)

#### Methods

##### nextval()

> ```ts
> static nextval( sequence, tableName?, datasourceName?): number;
> ```


> Retrieves the next available value from a specified sequence.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sequence` | `string` | The name of the database sequence. |
> | `tableName?` | `string` | Optional: The name of the table associated with the sequence (depends on database dialect/facade implementation). |
> | `datasourceName?` | `string` | Optional: The name of the database connection to use. |

> ::: info Returns
> - **Type**: `number`
> - **Description**: The next sequence value as a number.
> :::

##### create()

> ```ts
> static create( sequence, start?, datasourceName?): void;
> ```


> Creates a new database sequence.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sequence` | `string` | The name of the sequence to create. |
> | `start?` | `number` | Optional: The starting value for the sequence (defaults to 1 if not provided). |
> | `datasourceName?` | `string` | Optional: The name of the database connection to use. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### drop() > ```ts static drop(sequence, datasourceName?): void; ``` Drops (deletes) an existing database sequence.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sequence` | `string` | The name of the sequence to drop. |
> | `datasourceName?` | `string` | Optional: The name of the database connection to use. |

> ::: info Returns
> - **Type**: `void`
> :::
