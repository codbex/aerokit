# db/repository

::: tip Documentation
- source: [db/repository.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/repository.ts)
:::

## Overview



## Classes

### Repository

#### getEntityName()



> ```ts
> getEntityName(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: 
> :::

#### getTableName()



> ```ts
> getTableName(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: 
> :::

#### getIdName()



> ```ts
> getIdName(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: 
> :::

#### getIdColumn()



> ```ts
> getIdColumn(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: 
> :::

#### findAll()

Finds all entities matching the given options.

> ```ts
> findAll(options: Options): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `options` | `Options` |  |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### findById()

Finds a single entity by its primary key ID.

> ```ts
> findById(id: any, options: Options): T;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `id` | `any` |  |
> | `options` | `Options` |  |
>
> ::: info Returns
> - **Type**: `T`
> - **Description**: 
> :::

#### create()

Creates a new entity in the database.

> ```ts
> create(entity: T): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `entity` | `T` |  |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: The generated ID (string or number).
> :::

#### update()

Updates an existing entity.
The entity must contain the primary key.

> ```ts
> update(entity: T): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `entity` | `T` |  |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### upsert()

Creates the entity if the ID is null/undefined, otherwise updates it.
If an ID is provided but the entity doesn&#x27;t exist, it creates it.

> ```ts
> upsert(entity: T): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `entity` | `T` |  |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: The entity&#x27;s ID.
> :::

#### deleteById()

Deletes an entity by its primary key ID.

> ```ts
> deleteById(id: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `id` | `any` |  |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### count()

Counts the number of entities matching the given options.

> ```ts
> count(options: Options): number;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `options` | `Options` |  |
>
> ::: info Returns
> - **Type**: `number`
> - **Description**: 
> :::

#### triggerEvent()

Protected method intended for subclass overriding or internal event handling.

> ```ts
> triggerEvent(_data: EntityEvent): Promise;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `_data` | `EntityEvent` |  |
>
> ::: info Returns
> - **Type**: `Promise`
> - **Description**: 
> :::

