# mongodb/dao

## Overview

::: tip Module
- source: [mongodb/dao.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/mongodb/dao.ts)
- last updated: 
:::



## Classes

### DAO

#### notify()



> ```ts
> notify(event: any, a: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `event` | `any` |  |
> | `a` | `any` |  |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### createNoSQLEntity()



> ```ts
> createNoSQLEntity(entity: any): any;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `entity` | `any` |  |
>
> ::: info Returns
> - **Type**: `any`
> - **Description**: 
> :::

#### validateEntity()



> ```ts
> validateEntity(entity: any, skip: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `entity` | `any` |  |
> | `skip` | `any` |  |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### insert()



> ```ts
> insert(_entity: any): any;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `_entity` | `any` |  |
>
> ::: info Returns
> - **Type**: `any`
> - **Description**: 
> :::

#### update()



> ```ts
> update(entity: any): DAO;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `entity` | `any` |  |
>
> ::: info Returns
> - **Type**: `DAO`
> - **Description**: 
> :::

#### remove()



> ```ts
> remove(id: any): void;
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

#### expand()



> ```ts
> expand(expansionPath: any, context: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `expansionPath` | `any` |  |
> | `context` | `any` |  |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### find()



> ```ts
> find(id: any, expand: any, select: any): any;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `id` | `any` |  |
> | `expand` | `any` |  |
> | `select` | `any` |  |
>
> ::: info Returns
> - **Type**: `any`
> - **Description**: 
> :::

#### count()



> ```ts
> count(): number;
> ```
>
>
> ::: info Returns
> - **Type**: `number`
> - **Description**: 
> :::

#### list()



> ```ts
> list(settings: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `settings` | `any` |  |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### existsTable()



> ```ts
> existsTable(): boolean;
> ```
>
>
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: 
> :::

#### createTable()



> ```ts
> createTable(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### dropTable()



> ```ts
> dropTable(): DAO;
> ```
>
>
> ::: info Returns
> - **Type**: `DAO`
> - **Description**: 
> :::

