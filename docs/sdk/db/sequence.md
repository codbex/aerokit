# db/sequence

::: tip Documentation
- source: [db/sequence.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/sequence.ts)
:::


## Overview

API Sequence

Provides static methods for managing and accessing database sequences.


## Classes

### Sequence


Utility class for interacting with database sequence objects.

#### Constructors

##### Constructor

```ts
new Sequence(): Sequence;
```

#### Methods
##### nextval()
**Parameters**
> ::: info Returns
> - **Type**: `number`
> - **Description**: The next sequence value as a number.
> :::
##### create()

```ts
static create(
   sequence, 
   start?, 
   datasourceName?): void;
```


Creates a new database sequence.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sequence` | `string` | The name of the sequence to create. |
| `start?` | `number` | Optional: The starting value for the sequence (defaults to 1 if not provided). |
| `datasourceName?` | `string` | Optional: The name of the database connection to use. |

> ::: info Returns
> - **Type**: `void`
> :::
##### drop()

```ts
static drop(sequence, datasourceName?): void;
```


Drops (deletes) an existing database sequence.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sequence` | `string` | The name of the sequence to drop. |
| `datasourceName?` | `string` | Optional: The name of the database connection to use. |

> ::: info Returns
> - **Type**: `void`
> :::