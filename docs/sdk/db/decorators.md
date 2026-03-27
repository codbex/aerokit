# db/decorators

> [!tip]
> Auto-generated from
> - source: [db/decorators.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/decorators.ts)
> - version: 1.0.0


## Overview

The Decorators API provides...

## Table of Contents

- [Overview](#overview)
- [Interfaces](#interfaces)
  - [ColumnOptions](#columnoptions)
  - [OneToManyOptions](#onetomanyoptions)
  - [ManyToOneOptions](#manytooneoptions)
  - [EntityConstructor](#entityconstructor)
- [Parameters](#parameters)
- [Type Aliases](#type-aliases)
  - [ColumnTypes](#columntypes)
- [Functions](#functions)
  - [Documentation()](#documentation())
  - [Entity()](#entity())
  - [Table()](#table())
  - [Column()](#column())
  - [Id()](#id())
  - [CreatedAt()](#createdat())
  - [UpdatedAt()](#updatedat())
  - [CreatedBy()](#createdby())
  - [UpdatedBy()](#updatedby())
  - [Generated()](#generated())
  - [OneToMany()](#onetomany())
  - [ManyToOne()](#manytoone())

## Interfaces

### ColumnOptions


#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `name?` | `string` | src/db/decorators.ts:42 |
|  `type?` | [`ColumnTypes`](#columntypes) \| `string` & `object` | src/db/decorators.ts:43 |
|  `length?` | `number` | src/db/decorators.ts:44 |
|  `nullable?` | `boolean` | src/db/decorators.ts:45 |
|  `defaultValue?` | `string` | src/db/decorators.ts:46 |
|  `precision?` | `number` | src/db/decorators.ts:47 |
|  `scale?` | `number` | src/db/decorators.ts:48 |

***

### OneToManyOptions


#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `table?` | `string` | src/db/decorators.ts:52 |
|  `joinColumn` | `string` | src/db/decorators.ts:53 |
|  `cascade?` | `"none"` \| `"all"` \| `"persist"` \| `"merge"` \| `"remove"` | src/db/decorators.ts:54 |
|  `inverse?` | `boolean` | src/db/decorators.ts:55 |
|  `lazy?` | `boolean` | src/db/decorators.ts:56 |
|  `fetch?` | `"select"` \| `"join"` | src/db/decorators.ts:57 |
|  `joinColumnNotNull?` | `boolean` | src/db/decorators.ts:58 |

***

### ManyToOneOptions


#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `joinColumn?` | `string` | src/db/decorators.ts:62 |
|  `cascade?` | `"none"` \| `"all"` \| `"persist"` \| `"merge"` \| `"remove"` | src/db/decorators.ts:63 |
|  `nullable?` | `boolean` | src/db/decorators.ts:64 |
|  `lazy?` | `boolean` | src/db/decorators.ts:65 |
|  `fetch?` | `"select"` \| `"join"` | src/db/decorators.ts:66 |

***

### EntityConstructor


#### Extends

- `Function`

## Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `any`[] |

> ::: info Returns
> - **Type**: `any`
> - **Description**: ###### Inherited from > ```ts Function.constructor ```
> :::

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `$entity_name` | `string` | src/db/decorators.ts:85 |
|  `$table_name` | `string` | src/db/decorators.ts:86 |
|  `$id_name` | `string` | src/db/decorators.ts:87 |
|  `$id_column` | `string` | src/db/decorators.ts:88 |
|  `$initialized?` | `boolean` | src/db/decorators.ts:89 |
|  `$documentation?` | `string` | src/db/decorators.ts:90 |

## Type Aliases

### ColumnTypes

> ```ts
> type ColumnTypes = 
>   | "integer"
>   | "long"
>   | "short"
>   | "byte"
>   | "float"
>   | "double"
>   | "big_integer"
>   | "big_decimal"
>   | "string"
>   | "char"
>   | "text"
>   | "nstring"
>   | "ntext"
>   | "date"
>   | "time"
>   | "timestamp"
>   | "calendar"
>   | "calendar_date"
>   | "instant"
>   | "boolean"
>   | "true_false"
>   | "yes_no"
>   | "numeric_boolean"
>   | "binary"
>   | "blob"
>   | "clob"
>   | "materialized_blob"
>   | "materialized_clob"
>   | "serializable"
>   | "any"
>   | "object"
>   | "uuid-char"
>   | "uuid-binary"
>   | "json"
>   | "jsonb"
>   | "xml";
> ```


## Functions

### Documentation()

> ```ts
> function Documentation(description): (value, context) => any;
> ```


Adds documentation metadata to a class or a field.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `description` | `string` |

#### Returns

(`value`, `context`) => `any`

***

### Entity()

> ```ts
> function Entity(entityName?): (value, context) => void;
> ```


Marks a class as an entity and initiates metadata finalization.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entityName?` | `string` | The name of the entity (defaults to class name). |

#### Returns

(`value`, `context`) => `void`

***

### Table()

> ```ts
> function Table(tableName?): (value, context) => T;
> ```


Specifies the database table name for the entity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tableName?` | `string` | The table name (defaults to uppercase class name). |

#### Returns

\(`value`, `context`) => `T`

***

### Column()

> ```ts
> function Column(options?): (_, context) => void;
> ```


Marks a property as a standard database column.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`ColumnOptions`](#columnoptions) |

#### Returns

(`_`, `context`) => `void`

***

### Id()

> ```ts
> function Id(): (_, context) => void;
> ```


Marks a property as the entity's primary key.

#### Returns

(`_`, `context`) => `void`

***

### CreatedAt()

> ```ts
> function CreatedAt(): (_, context) => void;
> ```


Marks a property as the entity's created at timestamp.

#### Returns

(`_`, `context`) => `void`

***

### UpdatedAt()

> ```ts
> function UpdatedAt(): (_, context) => void;
> ```


Marks a property as the entity's update at timestamp.

#### Returns

(`_`, `context`) => `void`

***

### CreatedBy()

> ```ts
> function CreatedBy(): (_, context) => void;
> ```


Marks a property as the entity's creation actor.

#### Returns

(`_`, `context`) => `void`

***

### UpdatedBy()

> ```ts
> function UpdatedBy(): (_, context) => void;
> ```


Marks a property as the entity's update actor.

#### Returns

(`_`, `context`) => `void`

***

### Generated()

> ```ts
> function Generated(strategy): (_, context) => void;
> ```


Marks a property as a generated value (e.g., auto-increment).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `strategy` | `string` | The generation strategy (e.g., "IDENTITY"). Parameter is currently unused in logic. |

#### Returns

(`_`, `context`) => `void`

***

### OneToMany()

> ```ts
> function OneToMany(typeFunction, options): (_, context) => void;
> ```


Defines a one-to-many relationship.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `typeFunction` | () => `Function` |
| `options` | [`OneToManyOptions`](#onetomanyoptions) |

#### Returns

(`_`, `context`) => `void`

***

### ManyToOne()

> ```ts
> function ManyToOne(typeFunction, options?): (_, context) => void;
> ```


Defines a many-to-one relationship.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `typeFunction` | () => `Function` |
| `options` | [`ManyToOneOptions`](#manytooneoptions) |

#### Returns

(`_`, `context`) => `void`
