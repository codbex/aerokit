# db/sql

::: tip Documentation
- source: [db/sql.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/sql.ts)
:::


## Overview

The Sql API provides...


## Classes

### SQLBuilder


Main entry point for the SQL Builder. Acts as a factory for specific builders.

#### Extends

- `AbstractSQLBuilder`

#### Constructors

##### Constructor

```ts
new SQLBuilder(connection?): SQLBuilder;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `connection?` | [`Connection`](database.md#connection) |

###### Inherited from
#### Properties
#### Methods
##### prepareBuilder()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.prepareBuilder
```

##### parameters()

```ts
parameters(): any[];
```


###### Inherited from
##### addParameter()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.addParameter
```

##### build()

```ts
build(): string;
```


Builds and returns the final SQL string.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.build
```

##### getDialect()

```ts
static getDialect(connection?): SQLBuilder;
```


Factory method to get a dialect-specific SQLBuilder instance.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `connection?` | [`Connection`](database.md#connection) |

##### select()
##### insert()
##### update()
##### delete()
##### nextval()
**Parameters**
##### create()
##### drop()
### SelectBuilder
#### Extends
#### Constructors
##### Constructor
**Parameters**
###### Inherited from
#### Properties
#### Methods
##### parameters()
###### Inherited from
##### addParameter()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.addParameter
```

##### build()

```ts
build(): string;
```


Builds and returns the final SQL string.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.build
```

##### prepareBuilder()

```ts
protected prepareBuilder(builder): any;
```


Hook for subclasses to set up the native builder object (e.g., calling .select()).

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `builder` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::
###### Overrides

```ts
AbstractSQLBuilder.prepareBuilder
```

##### distinct()

```ts
distinct(): SelectBuilder;
```


##### forUpdate()
##### column()
**Parameters**
##### from()
**Parameters**
##### join()
**Parameters**
##### innerJoin()
**Parameters**
##### outerJoin()
**Parameters**
##### leftJoin()
**Parameters**
##### rightJoin()
**Parameters**
##### fullJoin()
**Parameters**
##### where()
**Parameters**
##### order()
**Parameters**
##### group()
**Parameters**
##### limit()
**Parameters**
##### offset()
**Parameters**
##### having()
**Parameters**
##### union()
**Parameters**
### InsertBuilder
#### Extends
#### Constructors
##### Constructor
**Parameters**
###### Inherited from
#### Properties
#### Methods
##### parameters()
###### Inherited from
##### addParameter()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.addParameter
```

##### build()

```ts
build(): string;
```


Builds and returns the final SQL string.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.build
```

##### prepareBuilder()

```ts
protected prepareBuilder(builder): any;
```


Hook for subclasses to set up the native builder object (e.g., calling .select()).

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `builder` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::
###### Overrides

```ts
AbstractSQLBuilder.prepareBuilder
```

##### into()

```ts
into(table): InsertBuilder;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `table` | `string` |

##### column()
**Parameters**
##### value()
**Parameters**
##### select()
**Parameters**
### UpdateBuilder
#### Extends
#### Constructors
##### Constructor
**Parameters**
###### Inherited from
#### Properties
#### Methods
##### parameters()
###### Inherited from
##### addParameter()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.addParameter
```

##### build()

```ts
build(): string;
```


Builds and returns the final SQL string.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.build
```

##### prepareBuilder()

```ts
protected prepareBuilder(builder): any;
```


Hook for subclasses to set up the native builder object (e.g., calling .select()).

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `builder` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::
###### Overrides

```ts
AbstractSQLBuilder.prepareBuilder
```

##### table()

```ts
table(table): UpdateBuilder;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `table` | `string` |

##### set()
**Parameters**
##### where()
**Parameters**
### DeleteBuilder
#### Extends
#### Constructors
##### Constructor
**Parameters**
###### Inherited from
#### Properties
#### Methods
##### parameters()
###### Inherited from
##### addParameter()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.addParameter
```

##### build()

```ts
build(): string;
```


Builds and returns the final SQL string.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.build
```

##### prepareBuilder()

```ts
protected prepareBuilder(builder): any;
```


Hook for subclasses to set up the native builder object (e.g., calling .select()).

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `builder` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::
###### Overrides

```ts
AbstractSQLBuilder.prepareBuilder
```

##### from()

```ts
from(table): DeleteBuilder;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `table` | `string` |

##### where()
**Parameters**
### NextvalBuilder
#### Extends
#### Constructors
##### Constructor
**Parameters**
###### Overrides
#### Properties
#### Methods
##### parameters()
###### Inherited from
##### addParameter()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.addParameter
```

##### build()

```ts
build(): string;
```


Builds and returns the final SQL string.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.build
```

##### prepareBuilder()

```ts
protected prepareBuilder(builder): any;
```


Hook for subclasses to set up the native builder object (e.g., calling .select()).

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `builder` | `any` |

> ::: info Returns
> - **Type**: `any`
> :::
###### Overrides

```ts
AbstractSQLBuilder.prepareBuilder
```

***

### CreateBuilder


Builder for CREATE statements (Table, View, Sequence).

#### Extends

- `AbstractSQLBuilder`

#### Constructors

##### Constructor

```ts
new CreateBuilder(connection?): CreateBuilder;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `connection?` | [`Connection`](database.md#connection) |

###### Inherited from
#### Properties
#### Methods
##### prepareBuilder()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.prepareBuilder
```

##### parameters()

```ts
parameters(): any[];
```


###### Inherited from
##### addParameter()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.addParameter
```

##### build()

```ts
build(): string;
```


Builds and returns the final SQL string.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.build
```

##### table()

```ts
table(table): CreateTableBuilder;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `table` | `string` |

##### view()
**Parameters**
##### sequence()
**Parameters**
### CreateTableBuilder
#### Extends
#### Constructors
##### Constructor
**Parameters**
###### Overrides
#### Properties
#### Methods
##### prepareBuilder()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.prepareBuilder
```

##### parameters()

```ts
parameters(): any[];
```


###### Inherited from
##### addParameter()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.addParameter
```

##### build()

```ts
build(): string;
```


Builds and returns the final SQL string.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.build
```

##### column()

```ts
column(
   name, 
   type, 
   isPrimaryKey?, 
   isNullable?, 
   isUnique?, 
   isIdentity?, 
   isFuzzyIndexEnabled?, ...
   args): CreateTableBuilder;
```


Adds a generic column definition.

**Parameters**

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `name` | `string` | `undefined` | - |
| `type` | [`DataType`](#datatype) | `undefined` | - |
| `isPrimaryKey` | `boolean` | `false` | - |
| `isNullable` | `boolean` | `true` | - |
| `isUnique` | `boolean` | `false` | - |
| `isIdentity` | `boolean` | `false` | - |
| `isFuzzyIndexEnabled` | `boolean` | `false` | - |
| ...`args` | `string`[] | `undefined` | Additional dialect-specific arguments passed as an array to native. |

##### columnVarchar()
**Parameters**
##### columnNvarchar()
**Parameters**
##### columnChar()
**Parameters**
##### columnDate()
**Parameters**
##### columnTime()
**Parameters**
##### columnTimestamp()
**Parameters**
##### columnInteger()
**Parameters**
##### columnTinyint()
**Parameters**
##### columnBigint()
**Parameters**
##### columnSmallint()
**Parameters**
##### columnReal()
**Parameters**
##### columnDouble()
**Parameters**
##### columnBoolean()
**Parameters**
##### columnBlob()
**Parameters**
##### columnDecimal()
**Parameters**
##### primaryKey()
**Parameters**
##### foreignKey()
**Parameters**
##### unique()
**Parameters**
##### check()
**Parameters**
### CreateViewBuilder
#### Extends
#### Constructors
##### Constructor
**Parameters**
###### Overrides
#### Properties
#### Methods
##### prepareBuilder()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.prepareBuilder
```

##### parameters()

```ts
parameters(): any[];
```


###### Inherited from
##### addParameter()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.addParameter
```

##### build()

```ts
build(): string;
```


Builds and returns the final SQL string.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.build
```

##### column()

```ts
column(column): CreateViewBuilder;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `column` | `string` |

##### asSelect()
**Parameters**
### CreateSequenceBuilder
#### Extends
#### Constructors
##### Constructor
**Parameters**
###### Overrides
#### Properties
#### Methods
##### prepareBuilder()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.prepareBuilder
```

##### parameters()

```ts
parameters(): any[];
```


###### Inherited from
##### addParameter()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.addParameter
```

##### build()

```ts
build(): string;
```


Builds and returns the final SQL string.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.build
```

***

### DropBuilder


Builder for DROP statements (Table, View, Sequence).

#### Extends

- `AbstractSQLBuilder`

#### Constructors

##### Constructor

```ts
new DropBuilder(connection?): DropBuilder;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `connection?` | [`Connection`](database.md#connection) |

###### Inherited from
#### Properties
#### Methods
##### prepareBuilder()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.prepareBuilder
```

##### parameters()

```ts
parameters(): any[];
```


###### Inherited from
##### addParameter()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.addParameter
```

##### build()

```ts
build(): string;
```


Builds and returns the final SQL string.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.build
```

##### table()

```ts
table(table): DropTableBuilder;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `table` | `string` |

##### view()
**Parameters**
##### sequence()
**Parameters**
### DropTableBuilder
#### Extends
#### Constructors
##### Constructor
**Parameters**
###### Overrides
#### Properties
#### Methods
##### prepareBuilder()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.prepareBuilder
```

##### parameters()

```ts
parameters(): any[];
```


###### Inherited from
##### addParameter()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.addParameter
```

##### build()

```ts
build(): string;
```


Builds and returns the final SQL string.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.build
```

***

### DropViewBuilder


Builder for DROP VIEW statements.

#### Extends

- `AbstractSQLBuilder`

#### Constructors

##### Constructor

```ts
new DropViewBuilder(view, connection?): DropViewBuilder;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `view` | `string` |
| `connection?` | [`Connection`](database.md#connection) |

###### Overrides
#### Properties
#### Methods
##### prepareBuilder()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.prepareBuilder
```

##### parameters()

```ts
parameters(): any[];
```


###### Inherited from
##### addParameter()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.addParameter
```

##### build()

```ts
build(): string;
```


Builds and returns the final SQL string.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.build
```

***

### DropSequenceBuilder


Builder for DROP SEQUENCE statements.

#### Extends

- `AbstractSQLBuilder`

#### Constructors

##### Constructor

```ts
new DropSequenceBuilder(sequence, connection?): DropSequenceBuilder;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `sequence` | `string` |
| `connection?` | [`Connection`](database.md#connection) |

###### Overrides
#### Properties
#### Methods
##### prepareBuilder()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.prepareBuilder
```

##### parameters()

```ts
parameters(): any[];
```


###### Inherited from
##### addParameter()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.addParameter
```

##### build()

```ts
build(): string;
```


Builds and returns the final SQL string.

> ::: info Returns
> - **Type**: `string`
> :::
###### Inherited from

```ts
AbstractSQLBuilder.build
```

## Type Aliases

### DataType

```ts
type DataType = 
  | "VARCHAR"
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
```


Union type representing all supported SQL data types.
