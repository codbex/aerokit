# db/repository

::: tip Documentation
- source: [db/repository.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/repository.ts)
:::


## Overview

The Repository API provides...


## Classes

### `abstract` Repository


Abstract base class for data access/business logic, wrapping the `store` API.
It handles entity metadata lookup, CRUD operations, translation, and event triggering.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* `Record`\ | The entity type (must be an object). |

#### Constructors

##### Constructor

```ts
new Repository(entityConstructor): Repository;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `entityConstructor` | `EntityConstructor` |

#### Methods
##### getEntityName()
> ::: info Returns
> - **Type**: `string`
> :::
##### getTableName()

```ts
protected getTableName(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### getIdName()

```ts
protected getIdName(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### getIdColumn()

```ts
protected getIdColumn(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### findAll()

```ts
findAll(options?): T[];
```


Finds all entities matching the given options.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `options` | `Options` |

##### findById()
**Parameters**
> ::: info Returns
> - **Type**: `T`
> :::
##### create()

```ts
create(entity): string | number;
```


Creates a new entity in the database.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `entity` | `T` |

##### update()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### upsert()

```ts
upsert(entity): string | number;
```


Creates the entity if the ID is null/undefined, otherwise updates it.
If an ID is provided but the entity doesn't exist, it creates it.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `entity` | `T` |

##### deleteById()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### count()

```ts
count(options?): number;
```


Counts the number of entities matching the given options.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `options?` | `Options` |

> ::: info Returns
> - **Type**: `number`
> :::
##### triggerEvent()

```ts
protected triggerEvent(_data): Promise;
```


Protected method intended for subclass overriding or internal event handling.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `_data` | [`EntityEvent`](#entityevent)\ |

## Interfaces
### EntityEvent
#### Type Parameters
#### Properties