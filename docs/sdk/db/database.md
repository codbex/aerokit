# db/database

> [!tip]
> Auto-generated from
> - source: [db/database.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/database.ts)
> - version: 1.0.0


## Overview

API Database

## Table of Contents

- [Overview](#overview)
- [Enumerations](#enumerations)
  - [DatabaseSystem](#databasesystem)
- [Classes](#classes)
  - [PreparedStatement](#preparedstatement)
- [Parameters](#parameters)
  - [CallableStatement](#callablestatement)
- [Parameters](#parameters)
  - [ResultSet](#resultset)
- [Parameters](#parameters)
  - [Connection](#connection)
- [Parameters](#parameters)
  - [Database](#database)
- [Returns](#returns)
- [Interfaces](#interfaces)
  - [TableMetadata](#tablemetadata)
  - [ColumnMetadata](#columnmetadata)
  - [IndexMetadata](#indexmetadata)
  - [ForeignKeyMetadata](#foreignkeymetadata)
  - [SchemaMetadata](#schemametadata)
  - [ProcedureMetadata](#proceduremetadata)
  - [FunctionMetadata](#functionmetadata)
  - [ParameterColumnMetadata](#parametercolumnmetadata)
  - [SequenceMetadata](#sequencemetadata)
  - [DatabaseMetadata](#databasemetadata)
- [Variables](#variables)
  - [SQLTypes](#sqltypes)

## Enumerations

### DatabaseSystem


#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
|  `UNKNOWN` | `0` | src/db/database.ts:44 |
|  `DERBY` | `1` | src/db/database.ts:44 |
|  `POSTGRESQL` | `2` | src/db/database.ts:44 |
|  `H2` | `3` | src/db/database.ts:44 |
|  `MARIADB` | `4` | src/db/database.ts:44 |
|  `HANA` | `5` | src/db/database.ts:44 |
|  `SNOWFLAKE` | `6` | src/db/database.ts:44 |
|  `MYSQL` | `7` | src/db/database.ts:44 |
|  `MONGODB` | `8` | src/db/database.ts:44 |
|  `SYBASE` | `9` | src/db/database.ts:44 |
|  `MSSQL` | `10` | src/db/database.ts:44 |

## Classes

### PreparedStatement


Statement object

## Parameters

| Parameter | Type |
| ------ | ------ |
| `native` | `any` |

###### Returns

[`PreparedStatement`](#preparedstatement)

#### Methods

##### close()

> ```ts
> close(): void;
> ```


> > ::: info Returns
> > - **Type**: `void`
> > :::

> ##### getResultSet()

> > ```ts
> > getResultSet(): ResultSet;
> > ```


> ###### Returns

> [`ResultSet`](#resultset)

> ##### execute()

> > ```ts
> > execute(): boolean;
> > ```


> > ::: info Returns
> > - **Type**: `boolean`
> > :::

> ##### executeQuery()

> > ```ts
> > executeQuery(): ResultSet;
> > ```


> ###### Returns

> [`ResultSet`](#resultset)

> ##### executeUpdate()

> > ```ts
> > executeUpdate(): number;
> > ```


> > ::: info Returns
> > - **Type**: `number`
> > :::

> ##### setNull()

> > ```ts
> > setNull(index, sqlType): void;
> > ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `index` | `number` |
> | `sqlType` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setBinaryStream()

> ```ts
> setBinaryStream(
>    parameterIndex, 
>    inputStream, 
>    length?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `inputStream` | `InputStream` |
> | `length?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setBoolean()

> ```ts
> setBoolean(index, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `index` | `number` |
> | `value?` | `boolean` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setByte()

> ```ts
> setByte(index, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `index` | `number` |
> | `value?` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setBlob()

> ```ts
> setBlob(index, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `index` | `number` |
> | `value?` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setClob()

> ```ts
> setClob(index, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `index` | `number` |
> | `value?` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setNClob()

> ```ts
> setNClob(index, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `index` | `number` |
> | `value?` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setBytesNative()

> ```ts
> setBytesNative(index, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `index` | `number` |
> | `value?` | `any`[] |

> ::: info Returns
> - **Type**: `void`
> :::

##### setBytes()

> ```ts
> setBytes(index, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `index` | `number` |
> | `value?` | `any`[] |

> ::: info Returns
> - **Type**: `void`
> :::

##### setDate()

> ```ts
> setDate(index, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `index` | `number` |
> | `value?` | `string` \| `Date` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setDouble()

> ```ts
> setDouble(index, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `index` | `number` |
> | `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setFloat()

> ```ts
> setFloat(index, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `index` | `number` |
> | `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setInt()

> ```ts
> setInt(index, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `index` | `number` |
> | `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setLong()

> ```ts
> setLong(index, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `index` | `number` |
> | `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setShort()

> ```ts
> setShort(index, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `index` | `number` |
> | `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setString()

> ```ts
> setString(index, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `index` | `number` |
> | `value?` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setTime()

> ```ts
> setTime(index, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `index` | `number` |
> | `value?` | `string` \| `Date` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setTimestamp()

> ```ts
> setTimestamp(index, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `index` | `number` |
> | `value?` | `string` \| `Date` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setBigDecimal()

> ```ts
> setBigDecimal(index, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `index` | `number` |
> | `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setNString()

> ```ts
> setNString(index, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `index` | `number` |
> | `value?` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::

##### addBatch()

> ```ts
> addBatch(): void;
> ```


> > ::: info Returns
> > - **Type**: `void`
> > :::

> ##### executeBatch()

> > ```ts
> > executeBatch(): number[];
> > ```


> > ::: info Returns
> > - **Type**: `number`
> > - **Description**: []
> > :::

> ##### getMetaData()

> > ```ts
> > getMetaData(): any;
> > ```


> > ::: info Returns
> > - **Type**: `any`
> > :::

> ##### getMoreResults()

> > ```ts
> > getMoreResults(): boolean;
> > ```


> > ::: info Returns
> > - **Type**: `boolean`
> > :::

> ##### getParameterMetaData()

> > ```ts
> > getParameterMetaData(): any;
> > ```


> > ::: info Returns
> > - **Type**: `any`
> > :::

> ##### getSQLWarning()

> > ```ts
> > getSQLWarning(): any;
> > ```


> > ::: info Returns
> > - **Type**: `any`
> > :::

> ##### isClosed()

> > ```ts
> > isClosed(): boolean;
> > ```


> > ::: info Returns
> > - **Type**: `boolean`
> > - **Description**: ***
> > :::

> ### CallableStatement


> ## Parameters

> | Parameter | Type |
> | ------ | ------ |
> | `native` | `any` |

> ###### Returns

> [`CallableStatement`](#callablestatement)

> #### Methods

> ##### getResultSet()

> > ```ts
> > getResultSet(): ResultSet;
> > ```


> ###### Returns

> [`ResultSet`](#resultset)

> ##### executeQuery()

> > ```ts
> > executeQuery(): ResultSet;
> > ```


> ###### Returns

> [`ResultSet`](#resultset)

> ##### executeUpdate()

> > ```ts
> > executeUpdate(): number;
> > ```


> > ::: info Returns
> > - **Type**: `number`
> > :::

> ##### registerOutParameter()

> > ```ts
> > registerOutParameter(parameterIndex, sqlType): void;
> > ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `sqlType` | \| `number` \| `"BOOLEAN"` \| `"DATE"` \| `"TIME"` \| `"TIMESTAMP"` \| `"DOUBLE"` \| `"FLOAT"` \| `"REAL"` \| `"TINYINT"` \| `"SMALLINT"` \| `"INTEGER"` \| `"BIGINT"` \| `"VARCHAR"` \| `"CHAR"` \| `"CLOB"` \| `"BLOB"` \| `"VARBINARY"` \| `"DECIMAL"` \| `"ARRAY"` \| `"NVARCHAR"` \| `"NCLOB"` \| `"BIT"` |

> ::: info Returns
> - **Type**: `void`
> :::

##### registerOutParameterByScale()

> ```ts
> registerOutParameterByScale(
>    parameterIndex, 
>    sqlType, 
>    scale): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `sqlType` | \| `number` \| `"BOOLEAN"` \| `"DATE"` \| `"TIME"` \| `"TIMESTAMP"` \| `"DOUBLE"` \| `"FLOAT"` \| `"REAL"` \| `"TINYINT"` \| `"SMALLINT"` \| `"INTEGER"` \| `"BIGINT"` \| `"VARCHAR"` \| `"CHAR"` \| `"CLOB"` \| `"BLOB"` \| `"VARBINARY"` \| `"DECIMAL"` \| `"ARRAY"` \| `"NVARCHAR"` \| `"NCLOB"` \| `"BIT"` |
> | `scale` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### registerOutParameterByTypeName()

> ```ts
> registerOutParameterByTypeName(
>    parameterIndex, 
>    sqlType, 
>    typeName): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `sqlType` | \| `number` \| `"BOOLEAN"` \| `"DATE"` \| `"TIME"` \| `"TIMESTAMP"` \| `"DOUBLE"` \| `"FLOAT"` \| `"REAL"` \| `"TINYINT"` \| `"SMALLINT"` \| `"INTEGER"` \| `"BIGINT"` \| `"VARCHAR"` \| `"CHAR"` \| `"CLOB"` \| `"BLOB"` \| `"VARBINARY"` \| `"DECIMAL"` \| `"ARRAY"` \| `"NVARCHAR"` \| `"NCLOB"` \| `"BIT"` |
> | `typeName` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::

##### wasNull()

> ```ts
> wasNull(): boolean;
> ```


> > ::: info Returns
> > - **Type**: `boolean`
> > :::

> ##### getString()

> > ```ts
> > getString(parameterIndex): string;
> > ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `string`
> :::

##### getBoolean()

> ```ts
> getBoolean(parameterIndex): boolean;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `boolean`
> :::

##### getByte()

> ```ts
> getByte(parameterIndex): any;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `any`
> :::

##### getShort()

> ```ts
> getShort(parameterIndex): number;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `number`
> :::

##### getInt()

> ```ts
> getInt(parameterIndex): number;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `number`
> :::

##### getLong()

> ```ts
> getLong(parameterIndex): number;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `number`
> :::

##### getFloat()

> ```ts
> getFloat(parameterIndex): number;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `number`
> :::

##### getDouble()

> ```ts
> getDouble(parameterIndex): number;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `number`
> :::

##### getDate()

> ```ts
> getDate(parameterIndex): Date;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `Date`
> :::

##### getTime()

> ```ts
> getTime(parameterIndex): Date;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `Date`
> :::

##### getTimestamp()

> ```ts
> getTimestamp(parameterIndex): Date;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `Date`
> :::

##### getObject()

> ```ts
> getObject(parameterIndex): any;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `any`
> :::

##### getBigDecimal()

> ```ts
> getBigDecimal(parameterIndex): number;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `number`
> :::

##### getRef()

> ```ts
> getRef(parameterIndex): any;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `any`
> :::

##### getBytes()

> ```ts
> getBytes(parameterIndex): any[];
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `any`
> - **Description**: []
> :::

##### getBytesNative()

> ```ts
> getBytesNative(parameterIndex): any[];
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `any`
> - **Description**: []
> :::

##### getBlob()

> ```ts
> getBlob(parameterIndex): any;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `any`
> :::

##### getBlobNative()

> ```ts
> getBlobNative(parameterIndex): any;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `any`
> :::

##### getClob()

> ```ts
> getClob(parameterIndex): any;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `any`
> :::

##### getNClob()

> ```ts
> getNClob(parameterIndex): any;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> :::

##### getNString()

> ```ts
> getNString(parameterIndex): string;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `string` \| `number` |

> ::: info Returns
> - **Type**: `string`
> :::

##### getArray()

> ```ts
> getArray(parameterIndex): any[];
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> - **Description**: []
> :::

##### getURL()

> ```ts
> getURL(parameterIndex): any;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> :::

##### getRowId()

> ```ts
> getRowId(parameterIndex): any;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> :::

##### getSQLXML()

> ```ts
> getSQLXML(parameterIndex): any;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> :::

##### setURL()

> ```ts
> setURL(parameterIndex, value): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setNull()

> ```ts
> setNull(
>    parameterIndex, 
>    sqlTypeStr, 
>    typeName?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `sqlTypeStr` | \| `number` \| `"BOOLEAN"` \| `"DATE"` \| `"TIME"` \| `"TIMESTAMP"` \| `"DOUBLE"` \| `"FLOAT"` \| `"REAL"` \| `"TINYINT"` \| `"SMALLINT"` \| `"INTEGER"` \| `"BIGINT"` \| `"VARCHAR"` \| `"CHAR"` \| `"CLOB"` \| `"BLOB"` \| `"VARBINARY"` \| `"DECIMAL"` \| `"ARRAY"` \| `"NVARCHAR"` \| `"NCLOB"` \| `"BIT"` |
> | `typeName?` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setBoolean()

> ```ts
> setBoolean(parameterIndex, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value?` | `boolean` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setByte()

> ```ts
> setByte(parameterIndex, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value?` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setShort()

> ```ts
> setShort(parameterIndex, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setInt()

> ```ts
> setInt(parameterIndex, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setLong()

> ```ts
> setLong(parameterIndex, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setFloat()

> ```ts
> setFloat(parameterIndex, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setDouble()

> ```ts
> setDouble(parameterIndex, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setBigDecimal()

> ```ts
> setBigDecimal(parameterIndex, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setString()

> ```ts
> setString(parameterIndex, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value?` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setBytes()

> ```ts
> setBytes(parameterIndex, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value?` | `any`[] |

> ::: info Returns
> - **Type**: `void`
> :::

##### setDate()

> ```ts
> setDate(parameterIndex, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value?` | `string` \| `Date` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setTime()

> ```ts
> setTime(parameterIndex, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value?` | `string` \| `Date` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setTimestamp()

> ```ts
> setTimestamp(parameterIndex, value?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value?` | `string` \| `Date` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setAsciiStream()

> ```ts
> setAsciiStream(
>    parameterIndex, 
>    inputStream, 
>    length?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `inputStream` | `InputStream` |
> | `length?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setBinaryStream()

> ```ts
> setBinaryStream(
>    parameterIndex, 
>    inputStream, 
>    length?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `inputStream` | `InputStream` |
> | `length?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setObject()

> ```ts
> setObject(
>    parameterIndex, 
>    value, 
>    targetSqlType?, 
>    scale?): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value` | `any` |
> | `targetSqlType?` | `number` |
> | `scale?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setRowId()

> ```ts
> setRowId(parameterIndex, value): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setNString()

> ```ts
> setNString(parameterIndex, value): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setSQLXML()

> ```ts
> setSQLXML(parameterIndex, value): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setBlob()

> ```ts
> setBlob(parameterIndex, value): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setClob()

> ```ts
> setClob(parameterIndex, value): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setNClob()

> ```ts
> setNClob(parameterIndex, value): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `parameterIndex` | `number` |
> | `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

##### execute()

> ```ts
> execute(): boolean;
> ```


> > ::: info Returns
> > - **Type**: `boolean`
> > :::

> ##### getMoreResults()

> > ```ts
> > getMoreResults(): boolean;
> > ```


> > ::: info Returns
> > - **Type**: `boolean`
> > :::

> ##### getParameterMetaData()

> > ```ts
> > getParameterMetaData(): any;
> > ```


> > ::: info Returns
> > - **Type**: `any`
> > :::

> ##### isClosed()

> > ```ts
> > isClosed(): boolean;
> > ```


> > ::: info Returns
> > - **Type**: `boolean`
> > :::

> ##### close()

> > ```ts
> > close(): void;
> > ```


> > ::: info Returns
> > - **Type**: `void`
> > - **Description**: ***
> > :::

> ### ResultSet

ResultSet object



> ResultSet object

> ## Parameters

> | Parameter | Type |
> | ------ | ------ |
> | `native` | `any` |

> ###### Returns

> [`ResultSet`](#resultset)

> #### Methods

> ##### toJson()

> > ```ts
> > toJson(limited?, stringify?): any[];
> > ```


> Converts the ResultSet into a JSON array of objects.

> **Parameters**

> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `limited` | `boolean` | `false` | Whether to use limited JSON conversion (optimized). |
> | `stringify` | `boolean` | `false` | Whether to return the JSON as a string or a parsed array. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: [] A JavaScript array of objects representing the result set, or a string if stringify is true.
> :::

##### close()

> ```ts
> close(): void;
> ```


> > ::: info Returns
> > - **Type**: `void`
> > :::

> ##### getBigDecimal()

> > ```ts
> > getBigDecimal(identifier): any;
> > ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> :::

##### getBoolean()

> ```ts
> getBoolean(identifier): boolean;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `boolean`
> :::

##### getByte()

> ```ts
> getByte(identifier): any;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> :::

##### getBytes()

> ```ts
> getBytes(identifier): any[];
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> - **Description**: []
> :::

##### getBytesNative()

> ```ts
> getBytesNative(identifier): any[];
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> - **Description**: []
> :::

##### getBlob()

> ```ts
> getBlob(identifier): any;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> :::

##### getBlobNative()

> ```ts
> getBlobNative(identifier): any;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> :::

##### getClob()

> ```ts
> getClob(identifier): any;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> :::

##### getNClob()

> ```ts
> getNClob(identifier): any;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> :::

##### getDate()

> ```ts
> getDate(identifier): Date;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `Date`
> :::

##### getDouble()

> ```ts
> getDouble(identifier): number;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `number`
> :::

##### getFloat()

> ```ts
> getFloat(identifier): number;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `number`
> :::

##### getInt()

> ```ts
> getInt(identifier): number;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `number`
> :::

##### getLong()

> ```ts
> getLong(identifier): number;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `number`
> :::

##### getShort()

> ```ts
> getShort(identifier): number;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `number`
> :::

##### getString()

> ```ts
> getString(identifier): string;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `string`
> :::

##### getTime()

> ```ts
> getTime(identifier): Date;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `Date`
> :::

##### getTimestamp()

> ```ts
> getTimestamp(identifier): Date;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `Date`
> :::

##### isAfterLast()

> ```ts
> isAfterLast(): boolean;
> ```


> > ::: info Returns
> > - **Type**: `boolean`
> > :::

> ##### isBeforeFirst()

> > ```ts
> > isBeforeFirst(): boolean;
> > ```


> > ::: info Returns
> > - **Type**: `boolean`
> > :::

> ##### isClosed()

> > ```ts
> > isClosed(): boolean;
> > ```


> > ::: info Returns
> > - **Type**: `boolean`
> > :::

> ##### isFirst()

> > ```ts
> > isFirst(): boolean;
> > ```


> > ::: info Returns
> > - **Type**: `boolean`
> > :::

> ##### isLast()

> > ```ts
> > isLast(): boolean;
> > ```


> > ::: info Returns
> > - **Type**: `boolean`
> > :::

> ##### next()

> > ```ts
> > next(): boolean;
> > ```


> > ::: info Returns
> > - **Type**: `boolean`
> > :::

> ##### getMetaData()

> > ```ts
> > getMetaData(): any;
> > ```


> > ::: info Returns
> > - **Type**: `any`
> > :::

> ##### getNString()

> > ```ts
> > getNString(columnIndex): string;
> > ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `columnIndex` | `number` |

> ::: info Returns
> - **Type**: `string`
> - **Description**: ***
> :::

### Connection

Converts the ResultSet into a JSON array of objects.
@param limited Whether to use limited JSON conversion (optimized).
@param stringify Whether to return the JSON as a string or a parsed array.
@returns A JavaScript array of objects representing the result set, or a string if stringify is true.
/
	public toJson(limited = false, stringify = false): any[] {
		const sw = new StringWriter();
		const output = WriterOutputStream
			.builder()
			.setWriter(sw)
			.setCharset(StandardCharsets.UTF_8)
			.get();
		DatabaseFacade.toJson(this.native, limited, stringify, output);
		const jsonString = sw.toString();
		return stringify ? jsonString : JSON.parse(jsonString);
	}



Connection object wrapper around a native Java `Connection`.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `datasourceName?` | `string` |

###### Returns

[`Connection`](#connection)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
|  `native` | `readonly` | `any` | src/db/database.ts:1173 |

#### Methods

##### isOfType()

> ```ts
> isOfType(databaseSystem): boolean;
> ```


> Checks if the connection is for a specific database system.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `databaseSystem` | [`DatabaseSystem`](#databasesystem) |

> ::: info Returns
> - **Type**: `boolean`
> :::

##### getDatabaseSystem()

> ```ts
> getDatabaseSystem(): DatabaseSystem;
> ```


> Returns the type of the underlying database system as a [DatabaseSystem](#databasesystem) enum.

> ###### Returns

> [`DatabaseSystem`](#databasesystem)

> ##### prepareStatement()

> > ```ts
> > prepareStatement(sql): PreparedStatement;
> > ```


> Creates a new [PreparedStatement](#preparedstatement) object for sending parameterized SQL statements to the database.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `sql` | `string` |
> 
> ###### Returns
> 
> [`PreparedStatement`](#preparedstatement)
> 
> ##### prepareCall()
> 
> > ```ts
> > prepareCall(sql): CallableStatement;
> > ```
> 
> 
> > Creates a [CallableStatement](#callablestatement) object for calling database stored procedures or functions.
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `sql` | `string` |
> 
> ###### Returns
> 
> [`CallableStatement`](#callablestatement)
> 
> ##### close()
> 
> > ```ts
> > close(): void;
> > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `void`
> > > :::
> 
> > ##### commit()
> 
> > > ```ts
> > > commit(): void;
> > > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `void`
> > > :::
> 
> > ##### getAutoCommit()
> 
> > > ```ts
> > > getAutoCommit(): boolean;
> > > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `boolean`
> > > :::
> 
> > ##### getCatalog()
> 
> > > ```ts
> > > getCatalog(): string;
> > > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > :::
> 
> > ##### getSchema()
> 
> > > ```ts
> > > getSchema(): string;
> > > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > :::
> 
> > ##### getTransactionIsolation()
> 
> > > ```ts
> > > getTransactionIsolation(): number;
> > > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `number`
> > > :::
> 
> > ##### isClosed()
> 
> > > ```ts
> > > isClosed(): boolean;
> > > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `boolean`
> > > :::
> 
> > ##### isReadOnly()
> 
> > > ```ts
> > > isReadOnly(): boolean;
> > > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `boolean`
> > > :::
> 
> > ##### isValid()
> 
> > > ```ts
> > > isValid(): boolean;
> > > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `boolean`
> > > :::
> 
> > ##### rollback()
> 
> > > ```ts
> > > rollback(): void;
> > > ```
> 
> 
> > > ::: info Returns
> > > - **Type**: `void`
> > > :::
> 
> > ##### setAutoCommit()
> 
> > > ```ts
> > > setAutoCommit(autoCommit): void;
> > > ```
> 
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `autoCommit` | `boolean` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setCatalog()

> ```ts
> setCatalog(catalog): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `catalog` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setReadOnly()

> ```ts
> setReadOnly(readOnly): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `readOnly` | `boolean` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setSchema()

> ```ts
> setSchema(schema): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `schema` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::

##### setTransactionIsolation()

> ```ts
> setTransactionIsolation(transactionIsolation): void;
> ```


> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `transactionIsolation` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::

##### getMetaData()

> ```ts
> getMetaData(): any;
> ```


> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: ***
> > :::

> ### Database


> ## Returns

> [`Database`](#database)

> #### Methods

> ##### getDataSources()

> > ```ts
> > static getDataSources(): string[];
> > ```


> Returns a list of available data source names.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: []
> > :::

> ##### getMetadata()

> > ```ts
> > static getMetadata(datasourceName?): DatabaseMetadata;
> > ```


> Returns database metadata for the specified data source.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `datasourceName?` | `string` |
> 
> ###### Returns
> 
> [`DatabaseMetadata`](#databasemetadata)
> 
> ##### getProductName()
> 
> > ```ts
> > static getProductName(datasourceName?): string;
> > ```
> 
> 
> > Returns the product name of the underlying database system.
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `datasourceName?` | `string` |

> ::: info Returns
> - **Type**: `string`
> :::

##### getConnection()

> ```ts
> static getConnection(datasourceName?): Connection;
> ```


> Gets a new database connection object.

> **Parameters**

| Parameter | Type |
| ------ | ------ |
| `datasourceName?` | `string` |

###### Returns

[`Connection`](#connection)

## Interfaces

### TableMetadata


#### Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
|  `name` | `readonly` | `string` | The name. | src/db/database.ts:51 |
|  `type` | `readonly` | `string` | The type. | src/db/database.ts:53 |
|  `remarks` | `readonly` | `string` | The remarks. | src/db/database.ts:55 |
|  `columns` | `readonly` | [`ColumnMetadata`](#columnmetadata)[] | The columns. | src/db/database.ts:57 |
|  `indices` | `readonly` | [`IndexMetadata`](#indexmetadata)[] | The indices. | src/db/database.ts:59 |
|  `foreignKeys` | `readonly` | [`ForeignKeyMetadata`](#foreignkeymetadata)[] | The indices. | src/db/database.ts:61 |
|  `kind` | `readonly` | `string` | The kind. | src/db/database.ts:63 |

***

### ColumnMetadata


#### Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
|  `name` | `readonly` | `string` | The name. | src/db/database.ts:68 |
|  `type` | `readonly` | `string` | The type. | src/db/database.ts:70 |
|  `size` | `readonly` | `number` | The size. | src/db/database.ts:72 |
|  `nullable` | `readonly` | `boolean` | The nullable. | src/db/database.ts:74 |
|  `key` | `readonly` | `boolean` | The key. | src/db/database.ts:76 |
|  `kind` | `readonly` | `string` | The kind. | src/db/database.ts:78 |
|  `scale` | `readonly` | `number` | The scale. | src/db/database.ts:80 |

***

### IndexMetadata


#### Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
|  `name` | `readonly` | `string` | The name. | src/db/database.ts:85 |
|  `type` | `readonly` | `string` | The type. | src/db/database.ts:87 |
|  `column` | `readonly` | `string` | The column. | src/db/database.ts:89 |
|  `nonUnique` | `readonly` | `boolean` | The non unique. | src/db/database.ts:91 |
|  `qualifier` | `readonly` | `string` | The qualifier. | src/db/database.ts:93 |
|  `ordinalPosition` | `readonly` | `string` | The ordinal position. | src/db/database.ts:95 |
|  `sortOrder` | `readonly` | `string` | The sort order. | src/db/database.ts:97 |
|  `cardinality` | `readonly` | `number` | The cardinality. | src/db/database.ts:99 |
|  `pages` | `readonly` | `number` | The pages. | src/db/database.ts:101 |
|  `filterCondition` | `readonly` | `string` | The filter condition. | src/db/database.ts:103 |
|  `kind` | `readonly` | `string` | The kind. | src/db/database.ts:105 |

***

### ForeignKeyMetadata


#### Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
|  `name` | `readonly` | `string` | The name. | src/db/database.ts:110 |
|  `kind` | `readonly` | `string` | The kind. | src/db/database.ts:112 |

***

### SchemaMetadata


#### Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
|  `name` | `readonly` | `string` | The name. | src/db/database.ts:117 |
|  `kind` | `readonly` | `string` | The kind. | src/db/database.ts:119 |
|  `tables` | `readonly` | [`TableMetadata`](#tablemetadata)[] | The tables. | src/db/database.ts:121 |
|  `views` | `readonly` | [`TableMetadata`](#tablemetadata)[] | The views. | src/db/database.ts:123 |
|  `procedures` | `readonly` | [`ProcedureMetadata`](#proceduremetadata)[] | The procedures. | src/db/database.ts:125 |
|  `functions` | `readonly` | [`FunctionMetadata`](#functionmetadata)[] | The functions. | src/db/database.ts:127 |
|  `sequences` | `readonly` | [`SequenceMetadata`](#sequencemetadata)[] | The functions. | src/db/database.ts:129 |

***

### ProcedureMetadata


#### Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
|  `name` | `readonly` | `string` | The name. | src/db/database.ts:134 |
|  `type` | `readonly` | `string` | The type. | src/db/database.ts:136 |
|  `remarks` | `readonly` | `string` | The remarks. | src/db/database.ts:138 |
|  `columns` | `readonly` | [`ParameterColumnMetadata`](#parametercolumnmetadata)[] | The columns. | src/db/database.ts:140 |
|  `kind` | `readonly` | `string` | The kind. | src/db/database.ts:142 |

***

### FunctionMetadata


#### Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
|  `name` | `readonly` | `string` | The name. | src/db/database.ts:147 |
|  `type` | `readonly` | `string` | The type. | src/db/database.ts:149 |
|  `remarks` | `readonly` | `string` | The remarks. | src/db/database.ts:151 |
|  `columns` | `readonly` | [`ParameterColumnMetadata`](#parametercolumnmetadata)[] | The columns. | src/db/database.ts:153 |
|  `kind` | `readonly` | `string` | The kind. | src/db/database.ts:155 |

***

### ParameterColumnMetadata


#### Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
|  `name` | `readonly` | `string` | The name. | src/db/database.ts:160 |
|  `kind` | `readonly` | `number` | The kind. | src/db/database.ts:162 |
|  `type` | `readonly` | `string` | The type. | src/db/database.ts:164 |
|  `precision` | `readonly` | `number` | The precision. | src/db/database.ts:166 |
|  `length` | `readonly` | `number` | The length. | src/db/database.ts:168 |
|  `scale` | `readonly` | `number` | The scale. | src/db/database.ts:170 |
|  `radix` | `readonly` | `number` | The radix. | src/db/database.ts:172 |
|  `nullable` | `readonly` | `boolean` | The nullable. | src/db/database.ts:174 |
|  `remarks` | `readonly` | `string` | The remarks. | src/db/database.ts:176 |

***

### SequenceMetadata


#### Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
|  `name` | `readonly` | `string` | The name. | src/db/database.ts:181 |
|  `kind` | `readonly` | `string` | The kind. | src/db/database.ts:183 |

***

### DatabaseMetadata


#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
|  `allProceduresAreCallable` | `readonly` | `boolean` | src/db/database.ts:187 |
|  `allTablesAreSelectable` | `readonly` | `boolean` | src/db/database.ts:188 |
|  `url` | `readonly` | `string` | src/db/database.ts:189 |
|  `userName` | `readonly` | `string` | src/db/database.ts:190 |
|  `isReadOnly` | `readonly` | `boolean` | src/db/database.ts:191 |
|  `nullsAreSortedHigh` | `readonly` | `boolean` | src/db/database.ts:192 |
|  `nullsAreSortedLow` | `readonly` | `boolean` | src/db/database.ts:193 |
|  `nullsAreSortedAtStart` | `readonly` | `boolean` | src/db/database.ts:194 |
|  `nullsAreSortedAtEnd` | `readonly` | `boolean` | src/db/database.ts:195 |
|  `databaseProductName` | `readonly` | `string` | src/db/database.ts:196 |
|  `databaseProductVersion` | `readonly` | `string` | src/db/database.ts:197 |
|  `driverName` | `readonly` | `string` | src/db/database.ts:198 |
|  `driverVersion` | `readonly` | `string` | src/db/database.ts:199 |
|  `driverMajorVersion` | `readonly` | `number` | src/db/database.ts:200 |
|  `driverMinorVersion` | `readonly` | `number` | src/db/database.ts:201 |
|  `usesLocalFiles` | `readonly` | `boolean` | src/db/database.ts:202 |
|  `usesLocalFilePerTable` | `readonly` | `boolean` | src/db/database.ts:203 |
|  `supportsMixedCaseIdentifiers` | `readonly` | `boolean` | src/db/database.ts:204 |
|  `storesUpperCaseIdentifiers` | `readonly` | `boolean` | src/db/database.ts:205 |
|  `storesLowerCaseIdentifiers` | `readonly` | `boolean` | src/db/database.ts:206 |
|  `storesMixedCaseIdentifiers` | `readonly` | `boolean` | src/db/database.ts:207 |
|  `supportsMixedCaseQuotedIdentifiers` | `readonly` | `boolean` | src/db/database.ts:208 |
|  `storesUpperCaseQuotedIdentifiers` | `readonly` | `boolean` | src/db/database.ts:209 |
|  `storesLowerCaseQuotedIdentifiers` | `readonly` | `boolean` | src/db/database.ts:210 |
|  `storesMixedCaseQuotedIdentifiers` | `readonly` | `boolean` | src/db/database.ts:211 |
|  `identifierQuoteString` | `readonly` | `string` | src/db/database.ts:212 |
|  `sqlKeywords` | `readonly` | `string` | src/db/database.ts:213 |
|  `numericFunctions` | `readonly` | `string` | src/db/database.ts:214 |
|  `stringFunctions` | `readonly` | `string` | src/db/database.ts:215 |
|  `systemFunctions` | `readonly` | `string` | src/db/database.ts:216 |
|  `timeDateFunctions` | `readonly` | `string` | src/db/database.ts:217 |
|  `searchStringEscape` | `readonly` | `string` | src/db/database.ts:218 |
|  `extraNameCharacters` | `readonly` | `string` | src/db/database.ts:219 |
|  `supportsAlterTableWithAddColumn` | `readonly` | `boolean` | src/db/database.ts:220 |
|  `supportsAlterTableWithDropColumn` | `readonly` | `boolean` | src/db/database.ts:221 |
|  `supportsColumnAliasing` | `readonly` | `boolean` | src/db/database.ts:222 |
|  `nullPlusNonNullIsNull` | `readonly` | `boolean` | src/db/database.ts:223 |
|  `supportsConvert` | `readonly` | `boolean` | src/db/database.ts:224 |
|  `supportsTableCorrelationNames` | `readonly` | `boolean` | src/db/database.ts:225 |
|  `supportsDifferentTableCorrelationNames` | `readonly` | `boolean` | src/db/database.ts:226 |
|  `supportsExpressionsInOrderBy` | `readonly` | `boolean` | src/db/database.ts:227 |
|  `supportsOrderByUnrelated` | `readonly` | `boolean` | src/db/database.ts:228 |
|  `supportsGroupBy` | `readonly` | `boolean` | src/db/database.ts:229 |
|  `supportsGroupByUnrelated` | `readonly` | `boolean` | src/db/database.ts:230 |
|  `supportsGroupByBeyondSelect` | `readonly` | `boolean` | src/db/database.ts:231 |
|  `supportsLikeEscapeClause` | `readonly` | `boolean` | src/db/database.ts:232 |
|  `supportsMultipleResultSets` | `readonly` | `boolean` | src/db/database.ts:233 |
|  `supportsMultipleTransactions` | `readonly` | `boolean` | src/db/database.ts:234 |
|  `supportsNonNullableColumns` | `readonly` | `boolean` | src/db/database.ts:235 |
|  `supportsMinimumSQLGrammar` | `readonly` | `boolean` | src/db/database.ts:236 |
|  `supportsCoreSQLGrammar` | `readonly` | `boolean` | src/db/database.ts:237 |
|  `supportsExtendedSQLGrammar` | `readonly` | `boolean` | src/db/database.ts:238 |
|  `supportsANSI92EntryLevelSQL` | `readonly` | `boolean` | src/db/database.ts:239 |
|  `supportsANSI92IntermediateSQL` | `readonly` | `boolean` | src/db/database.ts:240 |
|  `supportsANSI92FullSQL` | `readonly` | `boolean` | src/db/database.ts:241 |
|  `supportsIntegrityEnhancementFacility` | `readonly` | `boolean` | src/db/database.ts:242 |
|  `supportsOuterJoins` | `readonly` | `boolean` | src/db/database.ts:243 |
|  `supportsFullOuterJoins` | `readonly` | `boolean` | src/db/database.ts:244 |
|  `supportsLimitedOuterJoins` | `readonly` | `boolean` | src/db/database.ts:245 |
|  `schemaTerm` | `readonly` | `string` | src/db/database.ts:246 |
|  `procedureTerm` | `readonly` | `string` | src/db/database.ts:247 |
|  `catalogTerm` | `readonly` | `string` | src/db/database.ts:248 |
|  `isCatalogAtStart` | `readonly` | `boolean` | src/db/database.ts:249 |
|  `catalogSeparator` | `readonly` | `string` | src/db/database.ts:250 |
|  `supportsSchemasInDataManipulation` | `readonly` | `boolean` | src/db/database.ts:251 |
|  `supportsSchemasInProcedureCalls` | `readonly` | `boolean` | src/db/database.ts:252 |
|  `supportsSchemasInTableDefinitions` | `readonly` | `boolean` | src/db/database.ts:253 |
|  `supportsSchemasInIndexDefinitions` | `readonly` | `boolean` | src/db/database.ts:254 |
|  `supportsSchemasInPrivilegeDefinitions` | `readonly` | `boolean` | src/db/database.ts:255 |
|  `supportsCatalogsInDataManipulation` | `readonly` | `boolean` | src/db/database.ts:256 |
|  `supportsCatalogsInProcedureCalls` | `readonly` | `boolean` | src/db/database.ts:257 |
|  `supportsCatalogsInTableDefinitions` | `readonly` | `boolean` | src/db/database.ts:258 |
|  `supportsCatalogsInIndexDefinitions` | `readonly` | `boolean` | src/db/database.ts:259 |
|  `supportsCatalogsInPrivilegeDefinitions` | `readonly` | `boolean` | src/db/database.ts:260 |
|  `supportsPositionedDelete` | `readonly` | `boolean` | src/db/database.ts:261 |
|  `supportsPositionedUpdate` | `readonly` | `boolean` | src/db/database.ts:262 |
|  `supportsSelectForUpdate` | `readonly` | `boolean` | src/db/database.ts:263 |
|  `supportsStoredProcedures` | `readonly` | `boolean` | src/db/database.ts:264 |
|  `supportsSubqueriesInComparisons` | `readonly` | `boolean` | src/db/database.ts:265 |
|  `supportsSubqueriesInExists` | `readonly` | `boolean` | src/db/database.ts:266 |
|  `supportsSubqueriesInIns` | `readonly` | `boolean` | src/db/database.ts:267 |
|  `supportsSubqueriesInQuantifieds` | `readonly` | `boolean` | src/db/database.ts:268 |
|  `supportsCorrelatedSubqueries` | `readonly` | `boolean` | src/db/database.ts:269 |
|  `supportsUnion` | `readonly` | `boolean` | src/db/database.ts:270 |
|  `supportsUnionAll` | `readonly` | `boolean` | src/db/database.ts:271 |
|  `supportsOpenCursorsAcrossCommit` | `readonly` | `boolean` | src/db/database.ts:272 |
|  `supportsOpenCursorsAcrossRollback` | `readonly` | `boolean` | src/db/database.ts:273 |
|  `supportsOpenStatementsAcrossCommit` | `readonly` | `boolean` | src/db/database.ts:274 |
|  `supportsOpenStatementsAcrossRollback` | `readonly` | `boolean` | src/db/database.ts:275 |
|  `maxBinaryLiteralLength` | `readonly` | `number` | src/db/database.ts:276 |
|  `maxCharLiteralLength` | `readonly` | `number` | src/db/database.ts:277 |
|  `maxColumnNameLength` | `readonly` | `number` | src/db/database.ts:278 |
|  `maxColumnsInGroupBy` | `readonly` | `number` | src/db/database.ts:279 |
|  `maxColumnsInIndex` | `readonly` | `number` | src/db/database.ts:280 |
|  `maxColumnsInOrderBy` | `readonly` | `number` | src/db/database.ts:281 |
|  `maxColumnsInSelect` | `readonly` | `number` | src/db/database.ts:282 |
|  `maxColumnsInTable` | `readonly` | `number` | src/db/database.ts:283 |
|  `maxConnections` | `readonly` | `number` | src/db/database.ts:284 |
|  `maxCursorNameLength` | `readonly` | `number` | src/db/database.ts:285 |
|  `maxIndexLength` | `readonly` | `number` | src/db/database.ts:286 |
|  `maxSchemaNameLength` | `readonly` | `number` | src/db/database.ts:287 |
|  `maxProcedureNameLength` | `readonly` | `number` | src/db/database.ts:288 |
|  `maxCatalogNameLength` | `readonly` | `number` | src/db/database.ts:289 |
|  `maxRowSize` | `readonly` | `number` | src/db/database.ts:290 |
|  `maxRowSizeIncludeBlobs` | `readonly` | `boolean` | src/db/database.ts:291 |
|  `maxStatementLength` | `readonly` | `number` | src/db/database.ts:292 |
|  `maxStatements` | `readonly` | `number` | src/db/database.ts:293 |
|  `maxTableNameLength` | `readonly` | `number` | src/db/database.ts:294 |
|  `maxTablesInSelect` | `readonly` | `number` | src/db/database.ts:295 |
|  `maxUserNameLength` | `readonly` | `number` | src/db/database.ts:296 |
|  `defaultTransactionIsolation` | `readonly` | `number` | src/db/database.ts:297 |
|  `supportsTransactions` | `readonly` | `boolean` | src/db/database.ts:298 |
|  `supportsDataDefinitionAndDataManipulationTransactions` | `readonly` | `boolean` | src/db/database.ts:299 |
|  `supportsDataManipulationTransactionsOnly` | `readonly` | `boolean` | src/db/database.ts:300 |
|  `dataDefinitionCausesTransactionCommit` | `readonly` | `boolean` | src/db/database.ts:301 |
|  `dataDefinitionIgnoredInTransactions` | `readonly` | `boolean` | src/db/database.ts:302 |
|  `supportsBatchUpdates` | `readonly` | `boolean` | src/db/database.ts:303 |
|  `supportsSavepoints` | `readonly` | `boolean` | src/db/database.ts:304 |
|  `supportsNamedParameters` | `readonly` | `boolean` | src/db/database.ts:305 |
|  `supportsMultipleOpenResults` | `readonly` | `boolean` | src/db/database.ts:306 |
|  `supportsGetGeneratedKeys` | `readonly` | `boolean` | src/db/database.ts:307 |
|  `resultSetHoldability` | `readonly` | `number` | src/db/database.ts:308 |
|  `databaseMajorVersion` | `readonly` | `number` | src/db/database.ts:309 |
|  `databaseMinorVersion` | `readonly` | `number` | src/db/database.ts:310 |
|  `jdbcMajorVersion` | `readonly` | `number` | src/db/database.ts:311 |
|  `jdbcMinorVersion` | `readonly` | `number` | src/db/database.ts:312 |
|  `sqlStateType` | `readonly` | `number` | src/db/database.ts:313 |
|  `locatorsUpdateCopy` | `readonly` | `boolean` | src/db/database.ts:314 |
|  `supportsStatementPooling` | `readonly` | `boolean` | src/db/database.ts:315 |
|  `supportsStoredFunctionsUsingCallSyntax` | `readonly` | `boolean` | src/db/database.ts:316 |
|  `autoCommitFailureClosesAllResultSets` | `readonly` | `boolean` | src/db/database.ts:317 |
|  `generatedKeyAlwaysReturned` | `readonly` | `boolean` | src/db/database.ts:318 |
|  `maxLogicalLobSize` | `readonly` | `number` | src/db/database.ts:319 |
|  `supportsRefCursors` | `readonly` | `boolean` | src/db/database.ts:320 |
|  `schemas` | `readonly` | [`SchemaMetadata`](#schemametadata)[] | src/db/database.ts:321 |
|  `kind` | `readonly` | `string` | src/db/database.ts:322 |

## Variables

### SQLTypes

> ```ts
> const SQLTypes: Readonly;
> ```


Mapping of SQL type names to their java.sql.Types integer constants.
