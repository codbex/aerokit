# db/repository

> [!tip]
> Auto-generated from
> - source: [db/repository.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/repository.ts)
> - version: 1.0.0


## Overview

The Repository API provides...

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [`abstract` Repository](#`abstract`-repository)
- [Parameters](#parameters)
- [Interfaces](#interfaces)
  - [EntityEvent](#entityevent)

## Classes

### `abstract` Repository


Abstract base class for data access/business logic, wrapping the `store` API.
It handles entity metadata lookup, CRUD operations, translation, and event triggering.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* `Record`\ | The entity type (must be an object). |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `entityConstructor` | `EntityConstructor` |

###### Returns

[`Repository`](#abstract-repository)\

#### Methods

##### getEntityName()

> ```ts
> protected getEntityName(): string;
> ```


> > ::: info Returns
> > - **Type**: `string`
> > :::

> ##### getTableName()

> > ```ts
> > protected getTableName(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > :::

> ##### getIdName()

> > ```ts
> > protected getIdName(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > :::

> ##### getIdColumn()

> > ```ts
> > protected getIdColumn(): string;
> > ```


> > ::: info Returns
> > - **Type**: `string`
> > :::

> ##### findAll()

> > ```ts
> > findAll(options?): T[];
> > ```


> Finds all entities matching the given options.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `options` | `Options` |

> ::: info Returns
> - **Type**: `T`
> - **Description**: []
> :::

##### findById()

> ```ts
> findById(id, options?): T;
> ```


> Finds a single entity by its primary key ID.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `id` | `string` \| `number` |
> | `options` | `Options` |

> ::: info Returns
> - **Type**: `T`
> :::

##### create()

> ```ts
> create(entity): string | number;
> ```


> Creates a new entity in the database.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `entity` | `T` |

> ::: info Returns
> - **Type**: `string`
> - **Description**: \| `number` The generated ID (string or number).
> :::

##### update()

> ```ts
> update(entity): void;
> ```


> Updates an existing entity.
> The entity must contain the primary key.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `entity` | `T` |

> ::: info Returns
> - **Type**: `void`
> :::

##### upsert()

> ```ts
> upsert(entity): string | number;
> ```


> Creates the entity if the ID is null/undefined, otherwise updates it.
> If an ID is provided but the entity doesn't exist, it creates it.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `entity` | `T` |

> ::: info Returns
> - **Type**: `string`
> - **Description**: \| `number` The entity's ID.
> :::

##### deleteById()

> ```ts
> deleteById(id): void;
> ```


> Deletes an entity by its primary key ID.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `id` | `string` \| `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### count()

> ```ts
> count(options?): number;
> ```


> Counts the number of entities matching the given options.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `options?` | `Options` |

> ::: info Returns
> - **Type**: `number`
> :::

##### triggerEvent()

> ```ts
> protected triggerEvent(_data): Promise;
> ```


> Protected method intended for subclass overriding or internal event handling.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `_data` | [`EntityEvent`](#entityevent)\ |

> ::: info Returns
> - **Type**: `Promise`
> - **Description**: \
> :::

## Interfaces

### EntityEvent


Represents the data structure passed to the event trigger method before/after an operation.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
|  `operation` | `readonly` | `"update"` \| `"create"` \| `"delete"` | src/db/repository.ts:7 |
|  `table` | `readonly` | `string` | src/db/repository.ts:8 |
|  `entity` | `readonly` | `Partial`\ | src/db/repository.ts:9 |
|  `key` | `readonly` | `object` | src/db/repository.ts:10 |
| `key.name` | `public` | `string` | src/db/repository.ts:11 |
| `key.column` | `public` | `string` | src/db/repository.ts:12 |
| `key.value` | `public` | `string` \| `number` | src/db/repository.ts:13 |
|  `previousEntity?` | `readonly` | `T` | src/db/repository.ts:15 |
