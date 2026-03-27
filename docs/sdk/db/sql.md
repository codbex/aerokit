# db/sql

> [!tip]
> Auto-generated from
> - source: [db/sql.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/sql.ts)
> - version: 1.0.0


## Overview

Union type representing all supported SQL data types.
/
export type DataType =
	"VARCHAR"
	| "TEXT"
	| "CHAR"
	| "DATE"
	| "SECONDDATE"
	| "TIME"
	| "DATETIME"
	| "TIMESTAMP"
	| "INTEGER"
	| "INT"
	| "TINYINT"
	| "BIGINT"
	| "SMALLINT"
	| "REAL"
	| "DOUBLE"
	| "DOUBLE PRECISIO"
	| "BOOLEAN"
	| "BLOB"
	| "DECIMAL"
	| "BIT"
	| "NVARCHAR"
	| "FLOAT"
	| "BYTE"
	| "NCLOB"
	| "ARRAY"
	| "VARBINARY"
	| "BINARY VARYIN"
	| "SHORTTEXT"
	| "ALPHANUM"
	| "CLOB"
	| "SMALLDECIMAL"
	| "BINARY"
	| "ST_POINT"
	| "ST_GEOMETRY"
	| "CHARACTER VARYIN"
	| "BINARY LARG OBJECT"
	| "CHARACTER LARG OBJECT"
	| "CHARACTER"
	| "NCHAR"
	| "NUMERIC";

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [SQLBuilder](#sqlbuilder)
- [Parameters](#parameters)
  - [SelectBuilder](#selectbuilder)
- [Parameters](#parameters)
  - [InsertBuilder](#insertbuilder)
- [Parameters](#parameters)
  - [UpdateBuilder](#updatebuilder)
- [Parameters](#parameters)
  - [DeleteBuilder](#deletebuilder)
- [Parameters](#parameters)
  - [NextvalBuilder](#nextvalbuilder)
- [Parameters](#parameters)
  - [CreateBuilder](#createbuilder)
- [Parameters](#parameters)
  - [CreateTableBuilder](#createtablebuilder)
- [Parameters](#parameters)
  - [CreateViewBuilder](#createviewbuilder)
- [Parameters](#parameters)
  - [CreateSequenceBuilder](#createsequencebuilder)
- [Parameters](#parameters)
  - [DropBuilder](#dropbuilder)
- [Parameters](#parameters)
  - [DropTableBuilder](#droptablebuilder)
- [Parameters](#parameters)
  - [DropViewBuilder](#dropviewbuilder)
- [Parameters](#parameters)
  - [DropSequenceBuilder](#dropsequencebuilder)
- [Parameters](#parameters)
- [Type Aliases](#type-aliases)
  - [DataType](#datatype)

## Classes

### SQLBuilder


Main entry point for the SQL Builder. Acts as a factory for specific builders.

#### Extends

- `AbstractSQLBuilder`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `connection?` | [`Connection`](database.md#connection) |

###### Returns

[`SQLBuilder`](#sqlbuilder)

###### Inherited from

> ```ts
> AbstractSQLBuilder.constructor
> ```

> #### Properties

> | Property | Modifier | Type | Default value | Inherited from | Defined in |
> | ------ | ------ | ------ | ------ | ------ | ------ |
> |  `params` | `readonly` | `any`[] | `[]` | `AbstractSQLBuilder.params` | src/db/sql.ts:58 |
> |  `connection?` | `readonly` | [`Connection`](database.md#connection) | `undefined` | `AbstractSQLBuilder.connection` | src/db/sql.ts:59 |
> |  `native` | `protected` | `any` | `undefined` | `AbstractSQLBuilder.native` | src/db/sql.ts:60 |

> #### Methods

> ##### prepareBuilder()

> > ```ts
> > protected prepareBuilder(builder): any;
> > ```


> Hook for subclasses to set up the native builder object (e.g., calling .select()).

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `builder` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.prepareBuilder
> ```

> ##### parameters()

> > ```ts
> > parameters(): any[];
> > ```


> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: []
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.parameters
> > ```

> ##### addParameter()

> > ```ts
> > protected addParameter(value): void;
> > ```


> Adds parameter(s) to the internal list. Handles single values and arrays of values.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.addParameter
> ```

> ##### build()

> > ```ts
> > build(): string;
> > ```


> Builds and returns the final SQL string.

> > ::: info Returns
> > - **Type**: `string`
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.build
> > ```

> ##### getDialect()

> > ```ts
> > static getDialect(connection?): SQLBuilder;
> > ```


> Factory method to get a dialect-specific SQLBuilder instance.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `connection?` | [`Connection`](database.md#connection) |
> 
> ###### Returns
> 
> [`SQLBuilder`](#sqlbuilder)
> 
> ##### select()
> 
> > ```ts
> > select(): SelectBuilder;
> > ```
> 
> 
> > ###### Returns
> 
> > [`SelectBuilder`](#selectbuilder)
> 
> > ##### insert()
> 
> > > ```ts
> > > insert(): InsertBuilder;
> > > ```
> 
> 
> > ###### Returns
> 
> > [`InsertBuilder`](#insertbuilder)
> 
> > ##### update()
> 
> > > ```ts
> > > update(): UpdateBuilder;
> > > ```
> 
> 
> > ###### Returns
> 
> > [`UpdateBuilder`](#updatebuilder)
> 
> > ##### delete()
> 
> > > ```ts
> > > delete(): DeleteBuilder;
> > > ```
> 
> 
> > ###### Returns
> 
> > [`DeleteBuilder`](#deletebuilder)
> 
> > ##### nextval()
> 
> > > ```ts
> > > nextval(name): NextvalBuilder;
> > > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |
> 
> ###### Returns
> 
> [`NextvalBuilder`](#nextvalbuilder)
> 
> ##### create()
> 
> > ```ts
> > create(): CreateBuilder;
> > ```
> 
> 
> > ###### Returns
> 
> > [`CreateBuilder`](#createbuilder)
> 
> > ##### drop()
> 
> > > ```ts
> > > drop(): DropBuilder;
> > > ```
> 
> 
> > ###### Returns
> 
> > [`DropBuilder`](#dropbuilder)
> 
> > ***
> 
> > ### SelectBuilder

Factory method to get a dialect-specific SQLBuilder instance.
/
	public static getDialect(connection?: Connection): SQLBuilder {
		return new SQLBuilder(connection);
	}

> 
> 
> > Builder for SELECT statements.
> 
> > #### Extends
> 
> > - `AbstractSQLBuilder`
> 
> > ## Parameters
> 
> > | Parameter | Type |
> > | ------ | ------ |
> > | `connection?` | [`Connection`](database.md#connection) |
> 
> > ###### Returns
> 
> > [`SelectBuilder`](#selectbuilder)
> 
> > ###### Inherited from
> 
> > > ```ts
> > > AbstractSQLBuilder.constructor
> > > ```
> 
> > #### Properties
> 
> > | Property | Modifier | Type | Default value | Inherited from | Defined in |
> > | ------ | ------ | ------ | ------ | ------ | ------ |
> > |  `params` | `readonly` | `any`[] | `[]` | `AbstractSQLBuilder.params` | src/db/sql.ts:58 |
> > |  `connection?` | `readonly` | [`Connection`](database.md#connection) | `undefined` | `AbstractSQLBuilder.connection` | src/db/sql.ts:59 |
> > |  `native` | `protected` | `any` | `undefined` | `AbstractSQLBuilder.native` | src/db/sql.ts:60 |
> 
> > #### Methods
> 
> > ##### parameters()
> 
> > > ```ts
> > > parameters(): any[];
> > > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `any`
> > > - **Description**: []
> > > :::
> 
> > ###### Inherited from
> 
> > > ```ts
> > > AbstractSQLBuilder.parameters
> > > ```
> 
> > ##### addParameter()
> 
> > > ```ts
> > > protected addParameter(value): void;
> > > ```
> 
> 
> > Adds parameter(s) to the internal list. Handles single values and arrays of values.
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.addParameter
> ```

> ##### build()

> > ```ts
> > build(): string;
> > ```


> Builds and returns the final SQL string.

> > ::: info Returns
> > - **Type**: `string`
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.build
> > ```

> ##### prepareBuilder()

> > ```ts
> > protected prepareBuilder(builder): any;
> > ```


> Hook for subclasses to set up the native builder object (e.g., calling .select()).

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `builder` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::

###### Overrides

> ```ts
> AbstractSQLBuilder.prepareBuilder
> ```

> ##### distinct()

> > ```ts
> > distinct(): SelectBuilder;
> > ```


> ###### Returns

> [`SelectBuilder`](#selectbuilder)

> ##### forUpdate()

> > ```ts
> > forUpdate(): SelectBuilder;
> > ```


> ###### Returns

> [`SelectBuilder`](#selectbuilder)

> ##### column()

> > ```ts
> > column(column): SelectBuilder;
> > ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `column` | `string` |
> 
> ###### Returns
> 
> [`SelectBuilder`](#selectbuilder)
> 
> ##### from()
> 
> > ```ts
> > from(table, alias?): SelectBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `table` | `string` |
> | `alias?` | `string` |
> 
> ###### Returns
> 
> [`SelectBuilder`](#selectbuilder)
> 
> ##### join()
> 
> > ```ts
> > join(
> >    table, 
> >    on, 
> >    alias?, 
> >    parameters?): SelectBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `table` | `string` |
> | `on` | `string` |
> | `alias?` | `string` |
> | `parameters?` | `any` |
> 
> ###### Returns
> 
> [`SelectBuilder`](#selectbuilder)
> 
> ##### innerJoin()
> 
> > ```ts
> > innerJoin(
> >    table, 
> >    on, 
> >    alias?, 
> >    parameters?): SelectBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `table` | `string` |
> | `on` | `string` |
> | `alias?` | `string` |
> | `parameters?` | `any` |
> 
> ###### Returns
> 
> [`SelectBuilder`](#selectbuilder)
> 
> ##### outerJoin()
> 
> > ```ts
> > outerJoin(
> >    table, 
> >    on, 
> >    alias?, 
> >    parameters?): SelectBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `table` | `string` |
> | `on` | `string` |
> | `alias?` | `string` |
> | `parameters?` | `any` |
> 
> ###### Returns
> 
> [`SelectBuilder`](#selectbuilder)
> 
> ##### leftJoin()
> 
> > ```ts
> > leftJoin(
> >    table, 
> >    on, 
> >    alias?, 
> >    parameters?): SelectBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `table` | `string` |
> | `on` | `string` |
> | `alias?` | `string` |
> | `parameters?` | `any` |
> 
> ###### Returns
> 
> [`SelectBuilder`](#selectbuilder)
> 
> ##### rightJoin()
> 
> > ```ts
> > rightJoin(
> >    table, 
> >    on, 
> >    alias?, 
> >    parameters?): SelectBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `table` | `string` |
> | `on` | `string` |
> | `alias?` | `string` |
> | `parameters?` | `any` |
> 
> ###### Returns
> 
> [`SelectBuilder`](#selectbuilder)
> 
> ##### fullJoin()
> 
> > ```ts
> > fullJoin(
> >    table, 
> >    on, 
> >    alias?, 
> >    parameters?): SelectBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `table` | `string` |
> | `on` | `string` |
> | `alias?` | `string` |
> | `parameters?` | `any` |
> 
> ###### Returns
> 
> [`SelectBuilder`](#selectbuilder)
> 
> ##### where()
> 
> > ```ts
> > where(condition, parameters?): SelectBuilder;
> > ```
> 
> 
> > Sets the WHERE condition.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `condition` | `string` | The SQL condition string (e.g., "column1 = ?"). |
> | `parameters?` | `any` | Optional parameters to replace '?' in the condition. |
> 
> ###### Returns
> 
> [`SelectBuilder`](#selectbuilder)
> 
> ##### order()
> 
> > ```ts
> > order(column, asc?): SelectBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type | Default value |
> | ------ | ------ | ------ |
> | `column` | `string` | `undefined` |
> | `asc` | `boolean` | `true` |
> 
> ###### Returns
> 
> [`SelectBuilder`](#selectbuilder)
> 
> ##### group()
> 
> > ```ts
> > group(column): SelectBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `column` | `string` |
> 
> ###### Returns
> 
> [`SelectBuilder`](#selectbuilder)
> 
> ##### limit()
> 
> > ```ts
> > limit(limit): SelectBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `limit` | `number` |
> 
> ###### Returns
> 
> [`SelectBuilder`](#selectbuilder)
> 
> ##### offset()
> 
> > ```ts
> > offset(offset): SelectBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `offset` | `number` |
> 
> ###### Returns
> 
> [`SelectBuilder`](#selectbuilder)
> 
> ##### having()
> 
> > ```ts
> > having(having): SelectBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `having` | `string` |
> 
> ###### Returns
> 
> [`SelectBuilder`](#selectbuilder)
> 
> ##### union()
> 
> > ```ts
> > union(select): SelectBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `select` | `string` |
> 
> ###### Returns
> 
> [`SelectBuilder`](#selectbuilder)
> 
> ***
> 
> ### InsertBuilder

Sets the WHERE condition.
@param condition The SQL condition string (e.g., "column1 = ?").
@param parameters Optional parameters to replace '?' in the condition.
/
	public where(condition: string, parameters?: any | any[]): SelectBuilder {
		this.native.where(condition);
		this.addParameter(parameters); // arguments[1] in JS
		return this;
	}

> 
> 
> Builder for INSERT statements.
> 
> #### Extends
> 
> - `AbstractSQLBuilder`
> 
> ## Parameters
> 
> | Parameter | Type |
> | ------ | ------ |
> | `connection?` | [`Connection`](database.md#connection) |
> 
> ###### Returns
> 
> [`InsertBuilder`](#insertbuilder)
> 
> ###### Inherited from
> 
> > ```ts
> > AbstractSQLBuilder.constructor
> > ```
> 
> > #### Properties
> 
> > | Property | Modifier | Type | Default value | Inherited from | Defined in |
> > | ------ | ------ | ------ | ------ | ------ | ------ |
> > |  `params` | `readonly` | `any`[] | `[]` | `AbstractSQLBuilder.params` | src/db/sql.ts:58 |
> > |  `connection?` | `readonly` | [`Connection`](database.md#connection) | `undefined` | `AbstractSQLBuilder.connection` | src/db/sql.ts:59 |
> > |  `native` | `protected` | `any` | `undefined` | `AbstractSQLBuilder.native` | src/db/sql.ts:60 |
> 
> > #### Methods
> 
> > ##### parameters()
> 
> > > ```ts
> > > parameters(): any[];
> > > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `any`
> > > - **Description**: []
> > > :::
> 
> > ###### Inherited from
> 
> > > ```ts
> > > AbstractSQLBuilder.parameters
> > > ```
> 
> > ##### addParameter()
> 
> > > ```ts
> > > protected addParameter(value): void;
> > > ```
> 
> 
> > Adds parameter(s) to the internal list. Handles single values and arrays of values.
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.addParameter
> ```

> ##### build()

> > ```ts
> > build(): string;
> > ```


> Builds and returns the final SQL string.

> > ::: info Returns
> > - **Type**: `string`
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.build
> > ```

> ##### prepareBuilder()

> > ```ts
> > protected prepareBuilder(builder): any;
> > ```


> Hook for subclasses to set up the native builder object (e.g., calling .select()).

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `builder` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::

###### Overrides

> ```ts
> AbstractSQLBuilder.prepareBuilder
> ```

> ##### into()

> > ```ts
> > into(table): InsertBuilder;
> > ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `table` | `string` |
> 
> ###### Returns
> 
> [`InsertBuilder`](#insertbuilder)
> 
> ##### column()
> 
> > ```ts
> > column(column): InsertBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `column` | `string` |
> 
> ###### Returns
> 
> [`InsertBuilder`](#insertbuilder)
> 
> ##### value()
> 
> > ```ts
> > value(value, parameters?): InsertBuilder;
> > ```
> 
> 
> > Sets the value for the last column specified.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `value` | `string` | The value placeholder (e.g., "?") or literal. |
> | `parameters?` | `any` | Optional parameters if a placeholder was used. |
> 
> ###### Returns
> 
> [`InsertBuilder`](#insertbuilder)
> 
> ##### select()
> 
> > ```ts
> > select(select): InsertBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `select` | `string` |
> 
> ###### Returns
> 
> [`InsertBuilder`](#insertbuilder)
> 
> ***
> 
> ### UpdateBuilder

Sets the value for the last column specified.
@param value The value placeholder (e.g., "?") or literal.
@param parameters Optional parameters if a placeholder was used.
/
	public value(value: string, parameters?: any | any[]): InsertBuilder {
		this.native.value(value);
		this.addParameter(parameters); // arguments[1] in JS
		return this;
	}

> 
> 
> Builder for UPDATE statements.
> 
> #### Extends
> 
> - `AbstractSQLBuilder`
> 
> ## Parameters
> 
> | Parameter | Type |
> | ------ | ------ |
> | `connection?` | [`Connection`](database.md#connection) |
> 
> ###### Returns
> 
> [`UpdateBuilder`](#updatebuilder)
> 
> ###### Inherited from
> 
> > ```ts
> > AbstractSQLBuilder.constructor
> > ```
> 
> > #### Properties
> 
> > | Property | Modifier | Type | Default value | Inherited from | Defined in |
> > | ------ | ------ | ------ | ------ | ------ | ------ |
> > |  `params` | `readonly` | `any`[] | `[]` | `AbstractSQLBuilder.params` | src/db/sql.ts:58 |
> > |  `connection?` | `readonly` | [`Connection`](database.md#connection) | `undefined` | `AbstractSQLBuilder.connection` | src/db/sql.ts:59 |
> > |  `native` | `protected` | `any` | `undefined` | `AbstractSQLBuilder.native` | src/db/sql.ts:60 |
> 
> > #### Methods
> 
> > ##### parameters()
> 
> > > ```ts
> > > parameters(): any[];
> > > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `any`
> > > - **Description**: []
> > > :::
> 
> > ###### Inherited from
> 
> > > ```ts
> > > AbstractSQLBuilder.parameters
> > > ```
> 
> > ##### addParameter()
> 
> > > ```ts
> > > protected addParameter(value): void;
> > > ```
> 
> 
> > Adds parameter(s) to the internal list. Handles single values and arrays of values.
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.addParameter
> ```

> ##### build()

> > ```ts
> > build(): string;
> > ```


> Builds and returns the final SQL string.

> > ::: info Returns
> > - **Type**: `string`
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.build
> > ```

> ##### prepareBuilder()

> > ```ts
> > protected prepareBuilder(builder): any;
> > ```


> Hook for subclasses to set up the native builder object (e.g., calling .select()).

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `builder` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::

###### Overrides

> ```ts
> AbstractSQLBuilder.prepareBuilder
> ```

> ##### table()

> > ```ts
> > table(table): UpdateBuilder;
> > ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `table` | `string` |
> 
> ###### Returns
> 
> [`UpdateBuilder`](#updatebuilder)
> 
> ##### set()
> 
> > ```ts
> > set(
> >    column, 
> >    value, 
> >    parameters?): UpdateBuilder;
> > ```
> 
> 
> > Sets a column to a value.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `column` | `string` | The column name. |
> | `value` | `string` | The value placeholder (e.g., "?") or literal. |
> | `parameters?` | `any` | Optional parameters if a placeholder was used. |
> 
> ###### Returns
> 
> [`UpdateBuilder`](#updatebuilder)
> 
> ##### where()
> 
> > ```ts
> > where(condition, parameters?): UpdateBuilder;
> > ```
> 
> 
> > Sets the WHERE condition for the update.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `condition` | `string` | The SQL condition string (e.g., "column1 = ?"). |
> | `parameters?` | `any` | Optional parameters to replace '?' in the condition. |
> 
> ###### Returns
> 
> [`UpdateBuilder`](#updatebuilder)
> 
> ***
> 
> ### DeleteBuilder

Sets a column to a value.
@param column The column name.
@param value The value placeholder (e.g., "?") or literal.
@param parameters Optional parameters if a placeholder was used.
/
	public set(column: string, value: string, parameters?: any | any[]): UpdateBuilder {
		this.native.set(column, value);
		this.addParameter(parameters); // arguments[2] in JS
		return this;
	}

> 
> 
> Builder for DELETE statements.
> 
> #### Extends
> 
> - `AbstractSQLBuilder`
> 
> ## Parameters
> 
> | Parameter | Type |
> | ------ | ------ |
> | `connection?` | [`Connection`](database.md#connection) |
> 
> ###### Returns
> 
> [`DeleteBuilder`](#deletebuilder)
> 
> ###### Inherited from
> 
> > ```ts
> > AbstractSQLBuilder.constructor
> > ```
> 
> > #### Properties
> 
> > | Property | Modifier | Type | Default value | Inherited from | Defined in |
> > | ------ | ------ | ------ | ------ | ------ | ------ |
> > |  `params` | `readonly` | `any`[] | `[]` | `AbstractSQLBuilder.params` | src/db/sql.ts:58 |
> > |  `connection?` | `readonly` | [`Connection`](database.md#connection) | `undefined` | `AbstractSQLBuilder.connection` | src/db/sql.ts:59 |
> > |  `native` | `protected` | `any` | `undefined` | `AbstractSQLBuilder.native` | src/db/sql.ts:60 |
> 
> > #### Methods
> 
> > ##### parameters()
> 
> > > ```ts
> > > parameters(): any[];
> > > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `any`
> > > - **Description**: []
> > > :::
> 
> > ###### Inherited from
> 
> > > ```ts
> > > AbstractSQLBuilder.parameters
> > > ```
> 
> > ##### addParameter()
> 
> > > ```ts
> > > protected addParameter(value): void;
> > > ```
> 
> 
> > Adds parameter(s) to the internal list. Handles single values and arrays of values.
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.addParameter
> ```

> ##### build()

> > ```ts
> > build(): string;
> > ```


> Builds and returns the final SQL string.

> > ::: info Returns
> > - **Type**: `string`
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.build
> > ```

> ##### prepareBuilder()

> > ```ts
> > protected prepareBuilder(builder): any;
> > ```


> Hook for subclasses to set up the native builder object (e.g., calling .select()).

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `builder` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::

###### Overrides

> ```ts
> AbstractSQLBuilder.prepareBuilder
> ```

> ##### from()

> > ```ts
> > from(table): DeleteBuilder;
> > ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `table` | `string` |
> 
> ###### Returns
> 
> [`DeleteBuilder`](#deletebuilder)
> 
> ##### where()
> 
> > ```ts
> > where(condition, parameters?): DeleteBuilder;
> > ```
> 
> 
> > Sets the WHERE condition for the deletion.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `condition` | `string` | The SQL condition string (e.g., "column1 = ?"). |
> | `parameters?` | `any` | Optional parameters to replace '?' in the condition. |
> 
> ###### Returns
> 
> [`DeleteBuilder`](#deletebuilder)
> 
> ***
> 
> ### NextvalBuilder

Sets the WHERE condition for the deletion.
@param condition The SQL condition string (e.g., "column1 = ?").
@param parameters Optional parameters to replace '?' in the condition.
/
	public where(condition: string, parameters?: any | any[]): DeleteBuilder {
		this.native.where(condition);
		this.addParameter(parameters); // arguments[1] in JS
		return this;
	}
}

> 
> 
> Builder for selecting the next value from a sequence.
> 
> #### Extends
> 
> - `AbstractSQLBuilder`
> 
> ## Parameters
> 
> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |
> | `connection?` | [`Connection`](database.md#connection) |
> 
> ###### Returns
> 
> [`NextvalBuilder`](#nextvalbuilder)
> 
> ###### Overrides
> 
> > ```ts
> > AbstractSQLBuilder.constructor
> > ```
> 
> > #### Properties
> 
> > | Property | Modifier | Type | Default value | Inherited from | Defined in |
> > | ------ | ------ | ------ | ------ | ------ | ------ |
> > |  `params` | `readonly` | `any`[] | `[]` | `AbstractSQLBuilder.params` | src/db/sql.ts:58 |
> > |  `connection?` | `readonly` | [`Connection`](database.md#connection) | `undefined` | `AbstractSQLBuilder.connection` | src/db/sql.ts:59 |
> > |  `native` | `protected` | `any` | `undefined` | `AbstractSQLBuilder.native` | src/db/sql.ts:60 |
> 
> > #### Methods
> 
> > ##### parameters()
> 
> > > ```ts
> > > parameters(): any[];
> > > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `any`
> > > - **Description**: []
> > > :::
> 
> > ###### Inherited from
> 
> > > ```ts
> > > AbstractSQLBuilder.parameters
> > > ```
> 
> > ##### addParameter()
> 
> > > ```ts
> > > protected addParameter(value): void;
> > > ```
> 
> 
> > Adds parameter(s) to the internal list. Handles single values and arrays of values.
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.addParameter
> ```

> ##### build()

> > ```ts
> > build(): string;
> > ```


> Builds and returns the final SQL string.

> > ::: info Returns
> > - **Type**: `string`
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.build
> > ```

> ##### prepareBuilder()

> > ```ts
> > protected prepareBuilder(builder): any;
> > ```


> Hook for subclasses to set up the native builder object (e.g., calling .select()).

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `builder` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::

###### Overrides

> ```ts
> AbstractSQLBuilder.prepareBuilder
> ```

> ***

> ### CreateBuilder

Builder for CREATE statements (Table, View, Sequence).



> Builder for CREATE statements (Table, View, Sequence).

> #### Extends

> - `AbstractSQLBuilder`

> ## Parameters

> | Parameter | Type |
> | ------ | ------ |
> | `connection?` | [`Connection`](database.md#connection) |

> ###### Returns

> [`CreateBuilder`](#createbuilder)

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.constructor
> > ```

> #### Properties

> | Property | Modifier | Type | Default value | Inherited from | Defined in |
> | ------ | ------ | ------ | ------ | ------ | ------ |
> |  `params` | `readonly` | `any`[] | `[]` | `AbstractSQLBuilder.params` | src/db/sql.ts:58 |
> |  `connection?` | `readonly` | [`Connection`](database.md#connection) | `undefined` | `AbstractSQLBuilder.connection` | src/db/sql.ts:59 |
> |  `native` | `protected` | `any` | `undefined` | `AbstractSQLBuilder.native` | src/db/sql.ts:60 |

> #### Methods

> ##### prepareBuilder()

> > ```ts
> > protected prepareBuilder(builder): any;
> > ```


> Hook for subclasses to set up the native builder object (e.g., calling .select()).

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `builder` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.prepareBuilder
> ```

> ##### parameters()

> > ```ts
> > parameters(): any[];
> > ```


> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: []
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.parameters
> > ```

> ##### addParameter()

> > ```ts
> > protected addParameter(value): void;
> > ```


> Adds parameter(s) to the internal list. Handles single values and arrays of values.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.addParameter
> ```

> ##### build()

> > ```ts
> > build(): string;
> > ```


> Builds and returns the final SQL string.

> > ::: info Returns
> > - **Type**: `string`
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.build
> > ```

> ##### table()

> > ```ts
> > table(table): CreateTableBuilder;
> > ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `table` | `string` |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ##### view()
> 
> > ```ts
> > view(view): CreateViewBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `view` | `string` |
> 
> ###### Returns
> 
> [`CreateViewBuilder`](#createviewbuilder)
> 
> ##### sequence()
> 
> > ```ts
> > sequence(sequence): CreateSequenceBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `sequence` | `string` |
> 
> ###### Returns
> 
> [`CreateSequenceBuilder`](#createsequencebuilder)
> 
> ***
> 
> ### CreateTableBuilder

Builder for CREATE TABLE statements.

> 
> 
> Builder for CREATE TABLE statements.
> 
> #### Extends
> 
> - `AbstractSQLBuilder`
> 
> ## Parameters
> 
> | Parameter | Type |
> | ------ | ------ |
> | `table` | `string` |
> | `connection?` | [`Connection`](database.md#connection) |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ###### Overrides
> 
> > ```ts
> > AbstractSQLBuilder.constructor
> > ```
> 
> > #### Properties
> 
> > | Property | Modifier | Type | Default value | Inherited from | Defined in |
> > | ------ | ------ | ------ | ------ | ------ | ------ |
> > |  `params` | `readonly` | `any`[] | `[]` | `AbstractSQLBuilder.params` | src/db/sql.ts:58 |
> > |  `connection?` | `readonly` | [`Connection`](database.md#connection) | `undefined` | `AbstractSQLBuilder.connection` | src/db/sql.ts:59 |
> > |  `native` | `protected` | `any` | `undefined` | `AbstractSQLBuilder.native` | src/db/sql.ts:60 |
> 
> > #### Methods
> 
> > ##### prepareBuilder()
> 
> > > ```ts
> > > protected prepareBuilder(builder): any;
> > > ```
> 
> 
> > Hook for subclasses to set up the native builder object (e.g., calling .select()).
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `builder` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.prepareBuilder
> ```

> ##### parameters()

> > ```ts
> > parameters(): any[];
> > ```


> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: []
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.parameters
> > ```

> ##### addParameter()

> > ```ts
> > protected addParameter(value): void;
> > ```


> Adds parameter(s) to the internal list. Handles single values and arrays of values.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.addParameter
> ```

> ##### build()

> > ```ts
> > build(): string;
> > ```


> Builds and returns the final SQL string.

> > ::: info Returns
> > - **Type**: `string`
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.build
> > ```

> ##### column()

> > ```ts
> > column(
> >    name, 
> >    type, 
> >    isPrimaryKey?, 
> >    isNullable?, 
> >    isUnique?, 
> >    isIdentity?, 
> >    isFuzzyIndexEnabled?, ...
> >    args): CreateTableBuilder;
> > ```


> Adds a generic column definition.

> **Parameters**

> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `name` | `string` | `undefined` | - |
> | `type` | [`DataType`](#datatype) | `undefined` | - |
> | `isPrimaryKey` | `boolean` | `false` | - |
> | `isNullable` | `boolean` | `true` | - |
> | `isUnique` | `boolean` | `false` | - |
> | `isIdentity` | `boolean` | `false` | - |
> | `isFuzzyIndexEnabled` | `boolean` | `false` | - |
> | ...`args` | `string`[] | `undefined` | Additional dialect-specific arguments passed as an array to native. |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ##### columnVarchar()
> 
> > ```ts
> > columnVarchar(
> >    name, 
> >    length, 
> >    isPrimaryKey?, 
> >    isNullable?, 
> >    isUnique?, 
> >    isIdentity?, ...
> >    args): CreateTableBuilder;
> > ```
> 
> 
> > Adds a VARCHAR column.
> 
> > **Parameters**
> 
> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `name` | `string` | `undefined` | - |
> | `length` | `number` | `undefined` | - |
> | `isPrimaryKey` | `boolean` | `false` | - |
> | `isNullable` | `boolean` | `true` | - |
> | `isUnique` | `boolean` | `false` | - |
> | `isIdentity` | `boolean` | `false` | - |
> | ...`args` | `string`[] | `undefined` | Additional dialect-specific arguments passed as an array to native. |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ##### columnNvarchar()
> 
> > ```ts
> > columnNvarchar(
> >    name, 
> >    length, 
> >    isPrimaryKey?, 
> >    isNullable?, 
> >    isUnique?, 
> >    isIdentity?, ...
> >    args): CreateTableBuilder;
> > ```
> 
> 
> > Adds an NVARCHAR column.
> 
> > **Parameters**
> 
> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `name` | `string` | `undefined` | - |
> | `length` | `number` | `undefined` | - |
> | `isPrimaryKey` | `boolean` | `false` | - |
> | `isNullable` | `boolean` | `true` | - |
> | `isUnique` | `boolean` | `false` | - |
> | `isIdentity` | `boolean` | `false` | - |
> | ...`args` | `string`[] | `undefined` | Additional dialect-specific arguments passed as an array to native. |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ##### columnChar()
> 
> > ```ts
> > columnChar(
> >    name, 
> >    length, 
> >    isPrimaryKey?, 
> >    isNullable?, 
> >    isUnique?, 
> >    isIdentity?, ...
> >    args): CreateTableBuilder;
> > ```
> 
> 
> > Adds a CHAR column.
> 
> > **Parameters**
> 
> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `name` | `string` | `undefined` | - |
> | `length` | `number` | `undefined` | - |
> | `isPrimaryKey` | `boolean` | `false` | - |
> | `isNullable` | `boolean` | `true` | - |
> | `isUnique` | `boolean` | `false` | - |
> | `isIdentity` | `boolean` | `false` | - |
> | ...`args` | `string`[] | `undefined` | Additional dialect-specific arguments passed as an array to native. |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ##### columnDate()
> 
> > ```ts
> > columnDate(
> >    name, 
> >    isPrimaryKey?, 
> >    isNullable?, 
> >    isUnique?, ...
> >    args): CreateTableBuilder;
> > ```
> 
> 
> > Adds a DATE column.
> 
> > **Parameters**
> 
> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `name` | `string` | `undefined` | - |
> | `isPrimaryKey` | `boolean` | `false` | - |
> | `isNullable` | `boolean` | `true` | - |
> | `isUnique` | `boolean` | `false` | - |
> | ...`args` | `string`[] | `undefined` | Additional dialect-specific arguments passed as an array to native. |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ##### columnTime()
> 
> > ```ts
> > columnTime(
> >    name, 
> >    isPrimaryKey?, 
> >    isNullable?, 
> >    isUnique?, ...
> >    args): CreateTableBuilder;
> > ```
> 
> 
> > Adds a TIME column.
> 
> > **Parameters**
> 
> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `name` | `string` | `undefined` | - |
> | `isPrimaryKey` | `boolean` | `false` | - |
> | `isNullable` | `boolean` | `true` | - |
> | `isUnique` | `boolean` | `false` | - |
> | ...`args` | `string`[] | `undefined` | Additional dialect-specific arguments passed as an array to native. |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ##### columnTimestamp()
> 
> > ```ts
> > columnTimestamp(
> >    name, 
> >    isPrimaryKey?, 
> >    isNullable?, 
> >    isUnique?, ...
> >    args): CreateTableBuilder;
> > ```
> 
> 
> > Adds a TIMESTAMP column.
> 
> > **Parameters**
> 
> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `name` | `string` | `undefined` | - |
> | `isPrimaryKey` | `boolean` | `false` | - |
> | `isNullable` | `boolean` | `true` | - |
> | `isUnique` | `boolean` | `false` | - |
> | ...`args` | `string`[] | `undefined` | Additional dialect-specific arguments passed as an array to native. |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ##### columnInteger()
> 
> > ```ts
> > columnInteger(
> >    name, 
> >    isPrimaryKey?, 
> >    isNullable?, 
> >    isUnique?, 
> >    isIdentity?, ...
> >    args): CreateTableBuilder;
> > ```
> 
> 
> > Adds an INTEGER column.
> 
> > **Parameters**
> 
> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `name` | `string` | `undefined` | - |
> | `isPrimaryKey` | `boolean` | `false` | - |
> | `isNullable` | `boolean` | `true` | - |
> | `isUnique` | `boolean` | `false` | - |
> | `isIdentity` | `boolean` | `false` | - |
> | ...`args` | `string`[] | `undefined` | Additional dialect-specific arguments passed as an array to native. |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ##### columnTinyint()
> 
> > ```ts
> > columnTinyint(
> >    name, 
> >    isPrimaryKey?, 
> >    isNullable?, 
> >    isUnique?, ...
> >    args): CreateTableBuilder;
> > ```
> 
> 
> > Adds a TINYINT column.
> 
> > **Parameters**
> 
> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `name` | `string` | `undefined` | - |
> | `isPrimaryKey` | `boolean` | `false` | - |
> | `isNullable` | `boolean` | `true` | - |
> | `isUnique` | `boolean` | `false` | - |
> | ...`args` | `string`[] | `undefined` | Additional dialect-specific arguments passed as an array to native. |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ##### columnBigint()
> 
> > ```ts
> > columnBigint(
> >    name, 
> >    isPrimaryKey?, 
> >    isNullable?, 
> >    isUnique?, 
> >    isIdentity?, ...
> >    args): CreateTableBuilder;
> > ```
> 
> 
> > Adds a BIGINT column.
> 
> > **Parameters**
> 
> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `name` | `string` | `undefined` | - |
> | `isPrimaryKey` | `boolean` | `false` | - |
> | `isNullable` | `boolean` | `true` | - |
> | `isUnique` | `boolean` | `false` | - |
> | `isIdentity` | `boolean` | `false` | - |
> | ...`args` | `string`[] | `undefined` | Additional dialect-specific arguments passed as an array to native. |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ##### columnSmallint()
> 
> > ```ts
> > columnSmallint(
> >    name, 
> >    isPrimaryKey?, 
> >    isNullable?, 
> >    isUnique?, ...
> >    args): CreateTableBuilder;
> > ```
> 
> 
> > Adds a SMALLINT column.
> 
> > **Parameters**
> 
> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `name` | `string` | `undefined` | - |
> | `isPrimaryKey` | `boolean` | `false` | - |
> | `isNullable` | `boolean` | `true` | - |
> | `isUnique` | `boolean` | `false` | - |
> | ...`args` | `string`[] | `undefined` | Additional dialect-specific arguments passed as an array to native. |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ##### columnReal()
> 
> > ```ts
> > columnReal(
> >    name, 
> >    isPrimaryKey?, 
> >    isNullable?, 
> >    isUnique?, ...
> >    args): CreateTableBuilder;
> > ```
> 
> 
> > Adds a REAL column.
> 
> > **Parameters**
> 
> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `name` | `string` | `undefined` | - |
> | `isPrimaryKey` | `boolean` | `false` | - |
> | `isNullable` | `boolean` | `true` | - |
> | `isUnique` | `boolean` | `false` | - |
> | ...`args` | `string`[] | `undefined` | Additional dialect-specific arguments passed as an array to native. |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ##### columnDouble()
> 
> > ```ts
> > columnDouble(
> >    name, 
> >    isPrimaryKey?, 
> >    isNullable?, 
> >    isUnique?, ...
> >    args): CreateTableBuilder;
> > ```
> 
> 
> > Adds a DOUBLE column.
> 
> > **Parameters**
> 
> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `name` | `string` | `undefined` | - |
> | `isPrimaryKey` | `boolean` | `false` | - |
> | `isNullable` | `boolean` | `true` | - |
> | `isUnique` | `boolean` | `false` | - |
> | ...`args` | `string`[] | `undefined` | Additional dialect-specific arguments passed as an array to native. |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ##### columnBoolean()
> 
> > ```ts
> > columnBoolean(
> >    name, 
> >    isPrimaryKey?, 
> >    isNullable?, 
> >    isUnique?, ...
> >    args): CreateTableBuilder;
> > ```
> 
> 
> > Adds a BOOLEAN column.
> 
> > **Parameters**
> 
> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `name` | `string` | `undefined` | - |
> | `isPrimaryKey` | `boolean` | `false` | - |
> | `isNullable` | `boolean` | `true` | - |
> | `isUnique` | `boolean` | `false` | - |
> | ...`args` | `string`[] | `undefined` | Additional dialect-specific arguments passed as an array to native. |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ##### columnBlob()
> 
> > ```ts
> > columnBlob(
> >    name, 
> >    isNullable?, ...
> >    args): CreateTableBuilder;
> > ```
> 
> 
> > Adds a BLOB column.
> 
> > **Parameters**
> 
> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `name` | `string` | `undefined` | - |
> | `isNullable` | `boolean` | `true` | - |
> | ...`args` | `string`[] | `undefined` | Additional dialect-specific arguments passed as an array to native. |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ##### columnDecimal()
> 
> > ```ts
> > columnDecimal(
> >    name, 
> >    precision, 
> >    scale, 
> >    isPrimaryKey?, 
> >    isNullable?, 
> >    isUnique?, 
> >    isIdentity?, ...
> >    args): CreateTableBuilder;
> > ```
> 
> 
> > Adds a DECIMAL column with precision and scale.
> 
> > **Parameters**
> 
> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `name` | `string` | `undefined` | - |
> | `precision` | `number` | `undefined` | - |
> | `scale` | `number` | `undefined` | - |
> | `isPrimaryKey` | `boolean` | `false` | - |
> | `isNullable` | `boolean` | `true` | - |
> | `isUnique` | `boolean` | `false` | - |
> | `isIdentity` | `boolean` | `false` | - |
> | ...`args` | `string`[] | `undefined` | Additional dialect-specific arguments passed as an array to native. |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ##### primaryKey()
> 
> > ```ts
> > primaryKey(columns, name?): CreateTableBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `columns` | `string`[] |
> | `name?` | `string` |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ##### foreignKey()
> 
> > ```ts
> > foreignKey(
> >    name, 
> >    columns, 
> >    referencedTable, 
> >    referencedColumns, 
> >    referencedTableSchema?): CreateTableBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |
> | `columns` | `string`[] |
> | `referencedTable` | `string` |
> | `referencedColumns` | `string`[] |
> | `referencedTableSchema?` | `string` |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ##### unique()
> 
> > ```ts
> > unique(name, columns): CreateTableBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |
> | `columns` | `string`[] |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ##### check()
> 
> > ```ts
> > check(name, expression): CreateTableBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |
> | `expression` | `string` |
> 
> ###### Returns
> 
> [`CreateTableBuilder`](#createtablebuilder)
> 
> ***
> 
> ### CreateViewBuilder

Adds a generic column definition.
@param args Additional dialect-specific arguments passed as an array to native.
/
	public column(
		name: string, 
		type: DataType, 
		isPrimaryKey = false, 
		isNullable = true, 
		isUnique = false, 
		isIdentity = false, 
		isFuzzyIndexEnabled = false, 
		...args: string[]
	): CreateTableBuilder {
		const dataType = DataTypeEnum.valueOfByName(type);
		this.native.column(name, dataType, isPrimaryKey, isNullable, isUnique, isIdentity, isFuzzyIndexEnabled, Array.from(args));
		return this;
	}

> 
> 
> Builder for CREATE VIEW statements.
> 
> #### Extends
> 
> - `AbstractSQLBuilder`
> 
> ## Parameters
> 
> | Parameter | Type |
> | ------ | ------ |
> | `view` | `string` |
> | `connection?` | [`Connection`](database.md#connection) |
> 
> ###### Returns
> 
> [`CreateViewBuilder`](#createviewbuilder)
> 
> ###### Overrides
> 
> > ```ts
> > AbstractSQLBuilder.constructor
> > ```
> 
> > #### Properties
> 
> > | Property | Modifier | Type | Default value | Inherited from | Defined in |
> > | ------ | ------ | ------ | ------ | ------ | ------ |
> > |  `params` | `readonly` | `any`[] | `[]` | `AbstractSQLBuilder.params` | src/db/sql.ts:58 |
> > |  `connection?` | `readonly` | [`Connection`](database.md#connection) | `undefined` | `AbstractSQLBuilder.connection` | src/db/sql.ts:59 |
> > |  `native` | `protected` | `any` | `undefined` | `AbstractSQLBuilder.native` | src/db/sql.ts:60 |
> 
> > #### Methods
> 
> > ##### prepareBuilder()
> 
> > > ```ts
> > > protected prepareBuilder(builder): any;
> > > ```
> 
> 
> > Hook for subclasses to set up the native builder object (e.g., calling .select()).
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `builder` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.prepareBuilder
> ```

> ##### parameters()

> > ```ts
> > parameters(): any[];
> > ```


> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: []
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.parameters
> > ```

> ##### addParameter()

> > ```ts
> > protected addParameter(value): void;
> > ```


> Adds parameter(s) to the internal list. Handles single values and arrays of values.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.addParameter
> ```

> ##### build()

> > ```ts
> > build(): string;
> > ```


> Builds and returns the final SQL string.

> > ::: info Returns
> > - **Type**: `string`
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.build
> > ```

> ##### column()

> > ```ts
> > column(column): CreateViewBuilder;
> > ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `column` | `string` |
> 
> ###### Returns
> 
> [`CreateViewBuilder`](#createviewbuilder)
> 
> ##### asSelect()
> 
> > ```ts
> > asSelect(select): CreateViewBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `select` | `string` |
> 
> ###### Returns
> 
> [`CreateViewBuilder`](#createviewbuilder)
> 
> ***
> 
> ### CreateSequenceBuilder

Builder for CREATE SEQUENCE statements.

> 
> 
> Builder for CREATE SEQUENCE statements.
> 
> #### Extends
> 
> - `AbstractSQLBuilder`
> 
> ## Parameters
> 
> | Parameter | Type |
> | ------ | ------ |
> | `sequence` | `string` |
> | `connection?` | [`Connection`](database.md#connection) |
> 
> ###### Returns
> 
> [`CreateSequenceBuilder`](#createsequencebuilder)
> 
> ###### Overrides
> 
> > ```ts
> > AbstractSQLBuilder.constructor
> > ```
> 
> > #### Properties
> 
> > | Property | Modifier | Type | Default value | Inherited from | Defined in |
> > | ------ | ------ | ------ | ------ | ------ | ------ |
> > |  `params` | `readonly` | `any`[] | `[]` | `AbstractSQLBuilder.params` | src/db/sql.ts:58 |
> > |  `connection?` | `readonly` | [`Connection`](database.md#connection) | `undefined` | `AbstractSQLBuilder.connection` | src/db/sql.ts:59 |
> > |  `native` | `protected` | `any` | `undefined` | `AbstractSQLBuilder.native` | src/db/sql.ts:60 |
> 
> > #### Methods
> 
> > ##### prepareBuilder()
> 
> > > ```ts
> > > protected prepareBuilder(builder): any;
> > > ```
> 
> 
> > Hook for subclasses to set up the native builder object (e.g., calling .select()).
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `builder` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.prepareBuilder
> ```

> ##### parameters()

> > ```ts
> > parameters(): any[];
> > ```


> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: []
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.parameters
> > ```

> ##### addParameter()

> > ```ts
> > protected addParameter(value): void;
> > ```


> Adds parameter(s) to the internal list. Handles single values and arrays of values.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.addParameter
> ```

> ##### build()

> > ```ts
> > build(): string;
> > ```


> Builds and returns the final SQL string.

> > ::: info Returns
> > - **Type**: `string`
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.build
> > ```

> ***

> ### DropBuilder

Builder for DROP statements (Table, View, Sequence).



> Builder for DROP statements (Table, View, Sequence).

> #### Extends

> - `AbstractSQLBuilder`

> ## Parameters

> | Parameter | Type |
> | ------ | ------ |
> | `connection?` | [`Connection`](database.md#connection) |

> ###### Returns

> [`DropBuilder`](#dropbuilder)

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.constructor
> > ```

> #### Properties

> | Property | Modifier | Type | Default value | Inherited from | Defined in |
> | ------ | ------ | ------ | ------ | ------ | ------ |
> |  `params` | `readonly` | `any`[] | `[]` | `AbstractSQLBuilder.params` | src/db/sql.ts:58 |
> |  `connection?` | `readonly` | [`Connection`](database.md#connection) | `undefined` | `AbstractSQLBuilder.connection` | src/db/sql.ts:59 |
> |  `native` | `protected` | `any` | `undefined` | `AbstractSQLBuilder.native` | src/db/sql.ts:60 |

> #### Methods

> ##### prepareBuilder()

> > ```ts
> > protected prepareBuilder(builder): any;
> > ```


> Hook for subclasses to set up the native builder object (e.g., calling .select()).

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `builder` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.prepareBuilder
> ```

> ##### parameters()

> > ```ts
> > parameters(): any[];
> > ```


> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: []
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.parameters
> > ```

> ##### addParameter()

> > ```ts
> > protected addParameter(value): void;
> > ```


> Adds parameter(s) to the internal list. Handles single values and arrays of values.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.addParameter
> ```

> ##### build()

> > ```ts
> > build(): string;
> > ```


> Builds and returns the final SQL string.

> > ::: info Returns
> > - **Type**: `string`
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.build
> > ```

> ##### table()

> > ```ts
> > table(table): DropTableBuilder;
> > ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `table` | `string` |
> 
> ###### Returns
> 
> [`DropTableBuilder`](#droptablebuilder)
> 
> ##### view()
> 
> > ```ts
> > view(view): DropViewBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `view` | `string` |
> 
> ###### Returns
> 
> [`DropViewBuilder`](#dropviewbuilder)
> 
> ##### sequence()
> 
> > ```ts
> > sequence(sequence): DropSequenceBuilder;
> > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `sequence` | `string` |
> 
> ###### Returns
> 
> [`DropSequenceBuilder`](#dropsequencebuilder)
> 
> ***
> 
> ### DropTableBuilder

Builder for DROP TABLE statements.

> 
> 
> Builder for DROP TABLE statements.
> 
> #### Extends
> 
> - `AbstractSQLBuilder`
> 
> ## Parameters
> 
> | Parameter | Type |
> | ------ | ------ |
> | `table` | `string` |
> | `connection?` | [`Connection`](database.md#connection) |
> 
> ###### Returns
> 
> [`DropTableBuilder`](#droptablebuilder)
> 
> ###### Overrides
> 
> > ```ts
> > AbstractSQLBuilder.constructor
> > ```
> 
> > #### Properties
> 
> > | Property | Modifier | Type | Default value | Inherited from | Defined in |
> > | ------ | ------ | ------ | ------ | ------ | ------ |
> > |  `params` | `readonly` | `any`[] | `[]` | `AbstractSQLBuilder.params` | src/db/sql.ts:58 |
> > |  `connection?` | `readonly` | [`Connection`](database.md#connection) | `undefined` | `AbstractSQLBuilder.connection` | src/db/sql.ts:59 |
> > |  `native` | `protected` | `any` | `undefined` | `AbstractSQLBuilder.native` | src/db/sql.ts:60 |
> 
> > #### Methods
> 
> > ##### prepareBuilder()
> 
> > > ```ts
> > > protected prepareBuilder(builder): any;
> > > ```
> 
> 
> > Hook for subclasses to set up the native builder object (e.g., calling .select()).
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `builder` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.prepareBuilder
> ```

> ##### parameters()

> > ```ts
> > parameters(): any[];
> > ```


> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: []
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.parameters
> > ```

> ##### addParameter()

> > ```ts
> > protected addParameter(value): void;
> > ```


> Adds parameter(s) to the internal list. Handles single values and arrays of values.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.addParameter
> ```

> ##### build()

> > ```ts
> > build(): string;
> > ```


> Builds and returns the final SQL string.

> > ::: info Returns
> > - **Type**: `string`
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.build
> > ```

> ***

> ### DropViewBuilder

Builder for DROP VIEW statements.



> Builder for DROP VIEW statements.

> #### Extends

> - `AbstractSQLBuilder`

> ## Parameters

> | Parameter | Type |
> | ------ | ------ |
> | `view` | `string` |
> | `connection?` | [`Connection`](database.md#connection) |

> ###### Returns

> [`DropViewBuilder`](#dropviewbuilder)

> ###### Overrides

> > ```ts
> > AbstractSQLBuilder.constructor
> > ```

> #### Properties

> | Property | Modifier | Type | Default value | Inherited from | Defined in |
> | ------ | ------ | ------ | ------ | ------ | ------ |
> |  `params` | `readonly` | `any`[] | `[]` | `AbstractSQLBuilder.params` | src/db/sql.ts:58 |
> |  `connection?` | `readonly` | [`Connection`](database.md#connection) | `undefined` | `AbstractSQLBuilder.connection` | src/db/sql.ts:59 |
> |  `native` | `protected` | `any` | `undefined` | `AbstractSQLBuilder.native` | src/db/sql.ts:60 |

> #### Methods

> ##### prepareBuilder()

> > ```ts
> > protected prepareBuilder(builder): any;
> > ```


> Hook for subclasses to set up the native builder object (e.g., calling .select()).

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `builder` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.prepareBuilder
> ```

> ##### parameters()

> > ```ts
> > parameters(): any[];
> > ```


> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: []
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.parameters
> > ```

> ##### addParameter()

> > ```ts
> > protected addParameter(value): void;
> > ```


> Adds parameter(s) to the internal list. Handles single values and arrays of values.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.addParameter
> ```

> ##### build()

> > ```ts
> > build(): string;
> > ```


> Builds and returns the final SQL string.

> > ::: info Returns
> > - **Type**: `string`
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.build
> > ```

> ***

> ### DropSequenceBuilder

Builder for DROP SEQUENCE statements.



> Builder for DROP SEQUENCE statements.

> #### Extends

> - `AbstractSQLBuilder`

> ## Parameters

> | Parameter | Type |
> | ------ | ------ |
> | `sequence` | `string` |
> | `connection?` | [`Connection`](database.md#connection) |

> ###### Returns

> [`DropSequenceBuilder`](#dropsequencebuilder)

> ###### Overrides

> > ```ts
> > AbstractSQLBuilder.constructor
> > ```

> #### Properties

> | Property | Modifier | Type | Default value | Inherited from | Defined in |
> | ------ | ------ | ------ | ------ | ------ | ------ |
> |  `params` | `readonly` | `any`[] | `[]` | `AbstractSQLBuilder.params` | src/db/sql.ts:58 |
> |  `connection?` | `readonly` | [`Connection`](database.md#connection) | `undefined` | `AbstractSQLBuilder.connection` | src/db/sql.ts:59 |
> |  `native` | `protected` | `any` | `undefined` | `AbstractSQLBuilder.native` | src/db/sql.ts:60 |

> #### Methods

> ##### prepareBuilder()

> > ```ts
> > protected prepareBuilder(builder): any;
> > ```


> Hook for subclasses to set up the native builder object (e.g., calling .select()).

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `builder` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.prepareBuilder
> ```

> ##### parameters()

> > ```ts
> > parameters(): any[];
> > ```


> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: []
> > :::

> ###### Inherited from

> > ```ts
> > AbstractSQLBuilder.parameters
> > ```

> ##### addParameter()

> > ```ts
> > protected addParameter(value): void;
> > ```


> Adds parameter(s) to the internal list. Handles single values and arrays of values.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.addParameter
> ```

##### build()

> ```ts
> build(): string;
> ```


Builds and returns the final SQL string.

> ::: info Returns
> - **Type**: `string`
> :::

###### Inherited from

> ```ts
> AbstractSQLBuilder.build
> ```

## Type Aliases

### DataType

> ```ts
> type DataType = 
>   | "VARCHAR"
>   | "TEXT"
>   | "CHAR"
>   | "DATE"
>   | "SECONDDATE"
>   | "TIME"
>   | "DATETIME"
>   | "TIMESTAMP"
>   | "INTEGER"
>   | "INT"
>   | "TINYINT"
>   | "BIGINT"
>   | "SMALLINT"
>   | "REAL"
>   | "DOUBLE"
>   | "DOUBLE PRECISIO"
>   | "BOOLEAN"
>   | "BLOB"
>   | "DECIMAL"
>   | "BIT"
>   | "NVARCHAR"
>   | "FLOAT"
>   | "BYTE"
>   | "NCLOB"
>   | "ARRAY"
>   | "VARBINARY"
>   | "BINARY VARYIN"
>   | "SHORTTEXT"
>   | "ALPHANUM"
>   | "CLOB"
>   | "SMALLDECIMAL"
>   | "BINARY"
>   | "ST_POINT"
>   | "ST_GEOMETRY"
>   | "CHARACTER VARYIN"
>   | "BINARY LARG OBJECT"
>   | "CHARACTER LARG OBJECT"
>   | "CHARACTER"
>   | "NCHAR"
>   | "NUMERIC";
> ```


Union type representing all supported SQL data types.
