# db/database

::: tip Documentation
- source: [db/database.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/database.ts)
:::


## Overview

API Database


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

#### Constructors

##### Constructor

```ts
new PreparedStatement(native): PreparedStatement;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `native` | `any` |

#### Methods
##### close()
> ::: info Returns
> - **Type**: `void`
> :::
##### getResultSet()

```ts
getResultSet(): ResultSet;
```


##### execute()
> ::: info Returns
> - **Type**: `boolean`
> :::
##### executeQuery()

```ts
executeQuery(): ResultSet;
```


##### executeUpdate()
> ::: info Returns
> - **Type**: `number`
> :::
##### setNull()

```ts
setNull(index, sqlType): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `sqlType` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setBinaryStream()

```ts
setBinaryStream(
   parameterIndex, 
   inputStream, 
   length?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `inputStream` | `InputStream` |
| `length?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setBoolean()

```ts
setBoolean(index, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value?` | `boolean` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setByte()

```ts
setByte(index, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value?` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setBlob()

```ts
setBlob(index, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value?` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setClob()

```ts
setClob(index, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value?` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setNClob()

```ts
setNClob(index, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value?` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setBytesNative()

```ts
setBytesNative(index, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value?` | `any`[] |

> ::: info Returns
> - **Type**: `void`
> :::
##### setBytes()

```ts
setBytes(index, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value?` | `any`[] |

> ::: info Returns
> - **Type**: `void`
> :::
##### setDate()

```ts
setDate(index, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value?` | `string` \| `Date` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setDouble()

```ts
setDouble(index, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setFloat()

```ts
setFloat(index, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setInt()

```ts
setInt(index, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setLong()

```ts
setLong(index, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setShort()

```ts
setShort(index, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setString()

```ts
setString(index, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value?` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setTime()

```ts
setTime(index, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value?` | `string` \| `Date` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setTimestamp()

```ts
setTimestamp(index, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value?` | `string` \| `Date` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setBigDecimal()

```ts
setBigDecimal(index, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setNString()

```ts
setNString(index, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value?` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### addBatch()

```ts
addBatch(): void;
```


> ::: info Returns
> - **Type**: `void`
> :::
##### executeBatch()

```ts
executeBatch(): number[];
```


##### getMetaData()
> ::: info Returns
> - **Type**: `any`
> :::
##### getMoreResults()

```ts
getMoreResults(): boolean;
```


> ::: info Returns
> - **Type**: `boolean`
> :::
##### getParameterMetaData()

```ts
getParameterMetaData(): any;
```


> ::: info Returns
> - **Type**: `any`
> :::
##### getSQLWarning()

```ts
getSQLWarning(): any;
```


> ::: info Returns
> - **Type**: `any`
> :::
##### isClosed()

```ts
isClosed(): boolean;
```


> ::: info Returns
> - **Type**: `boolean`
> - **Description**: ***
> :::
### CallableStatement


#### Constructors

##### Constructor

```ts
new CallableStatement(native): CallableStatement;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `native` | `any` |

#### Methods
##### getResultSet()
##### executeQuery()
##### executeUpdate()
> ::: info Returns
> - **Type**: `number`
> :::
##### registerOutParameter()

```ts
registerOutParameter(parameterIndex, sqlType): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `sqlType` | \| `number` \| `"BOOLEAN"` \| `"DATE"` \| `"TIME"` \| `"TIMESTAMP"` \| `"DOUBLE"` \| `"FLOAT"` \| `"REAL"` \| `"TINYINT"` \| `"SMALLINT"` \| `"INTEGER"` \| `"BIGINT"` \| `"VARCHAR"` \| `"CHAR"` \| `"CLOB"` \| `"BLOB"` \| `"VARBINARY"` \| `"DECIMAL"` \| `"ARRAY"` \| `"NVARCHAR"` \| `"NCLOB"` \| `"BIT"` |

> ::: info Returns
> - **Type**: `void`
> :::
##### registerOutParameterByScale()

```ts
registerOutParameterByScale(
   parameterIndex, 
   sqlType, 
   scale): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `sqlType` | \| `number` \| `"BOOLEAN"` \| `"DATE"` \| `"TIME"` \| `"TIMESTAMP"` \| `"DOUBLE"` \| `"FLOAT"` \| `"REAL"` \| `"TINYINT"` \| `"SMALLINT"` \| `"INTEGER"` \| `"BIGINT"` \| `"VARCHAR"` \| `"CHAR"` \| `"CLOB"` \| `"BLOB"` \| `"VARBINARY"` \| `"DECIMAL"` \| `"ARRAY"` \| `"NVARCHAR"` \| `"NCLOB"` \| `"BIT"` |
| `scale` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### registerOutParameterByTypeName()

```ts
registerOutParameterByTypeName(
   parameterIndex, 
   sqlType, 
   typeName): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `sqlType` | \| `number` \| `"BOOLEAN"` \| `"DATE"` \| `"TIME"` \| `"TIMESTAMP"` \| `"DOUBLE"` \| `"FLOAT"` \| `"REAL"` \| `"TINYINT"` \| `"SMALLINT"` \| `"INTEGER"` \| `"BIGINT"` \| `"VARCHAR"` \| `"CHAR"` \| `"CLOB"` \| `"BLOB"` \| `"VARBINARY"` \| `"DECIMAL"` \| `"ARRAY"` \| `"NVARCHAR"` \| `"NCLOB"` \| `"BIT"` |
| `typeName` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### wasNull()

```ts
wasNull(): boolean;
```


> ::: info Returns
> - **Type**: `boolean`
> :::
##### getString()

```ts
getString(parameterIndex): string;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `string`
> :::
##### getBoolean()

```ts
getBoolean(parameterIndex): boolean;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `boolean`
> :::
##### getByte()

```ts
getByte(parameterIndex): any;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `any`
> :::
##### getShort()

```ts
getShort(parameterIndex): number;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `number`
> :::
##### getInt()

```ts
getInt(parameterIndex): number;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `number`
> :::
##### getLong()

```ts
getLong(parameterIndex): number;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `number`
> :::
##### getFloat()

```ts
getFloat(parameterIndex): number;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `number`
> :::
##### getDouble()

```ts
getDouble(parameterIndex): number;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `number`
> :::
##### getDate()

```ts
getDate(parameterIndex): Date;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `Date`
> :::
##### getTime()

```ts
getTime(parameterIndex): Date;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `Date`
> :::
##### getTimestamp()

```ts
getTimestamp(parameterIndex): Date;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `Date`
> :::
##### getObject()

```ts
getObject(parameterIndex): any;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `any`
> :::
##### getBigDecimal()

```ts
getBigDecimal(parameterIndex): number;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `number`
> :::
##### getRef()

```ts
getRef(parameterIndex): any;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `any`
> :::
##### getBytes()

```ts
getBytes(parameterIndex): any[];
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |

##### getBytesNative()
**Parameters**
##### getBlob()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> :::
##### getBlobNative()

```ts
getBlobNative(parameterIndex): any;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `any`
> :::
##### getClob()

```ts
getClob(parameterIndex): any;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |

> ::: info Returns
> - **Type**: `any`
> :::
##### getNClob()

```ts
getNClob(parameterIndex): any;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> :::
##### getNString()

```ts
getNString(parameterIndex): string;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `string` \| `number` |

> ::: info Returns
> - **Type**: `string`
> :::
##### getArray()

```ts
getArray(parameterIndex): any[];
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `string` \| `number` |

##### getURL()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> :::
##### getRowId()

```ts
getRowId(parameterIndex): any;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> :::
##### getSQLXML()

```ts
getSQLXML(parameterIndex): any;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> :::
##### setURL()

```ts
setURL(parameterIndex, value): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setNull()

```ts
setNull(
   parameterIndex, 
   sqlTypeStr, 
   typeName?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `sqlTypeStr` | \| `number` \| `"BOOLEAN"` \| `"DATE"` \| `"TIME"` \| `"TIMESTAMP"` \| `"DOUBLE"` \| `"FLOAT"` \| `"REAL"` \| `"TINYINT"` \| `"SMALLINT"` \| `"INTEGER"` \| `"BIGINT"` \| `"VARCHAR"` \| `"CHAR"` \| `"CLOB"` \| `"BLOB"` \| `"VARBINARY"` \| `"DECIMAL"` \| `"ARRAY"` \| `"NVARCHAR"` \| `"NCLOB"` \| `"BIT"` |
| `typeName?` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setBoolean()

```ts
setBoolean(parameterIndex, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value?` | `boolean` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setByte()

```ts
setByte(parameterIndex, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value?` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setShort()

```ts
setShort(parameterIndex, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setInt()

```ts
setInt(parameterIndex, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setLong()

```ts
setLong(parameterIndex, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setFloat()

```ts
setFloat(parameterIndex, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setDouble()

```ts
setDouble(parameterIndex, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setBigDecimal()

```ts
setBigDecimal(parameterIndex, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setString()

```ts
setString(parameterIndex, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value?` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setBytes()

```ts
setBytes(parameterIndex, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value?` | `any`[] |

> ::: info Returns
> - **Type**: `void`
> :::
##### setDate()

```ts
setDate(parameterIndex, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value?` | `string` \| `Date` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setTime()

```ts
setTime(parameterIndex, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value?` | `string` \| `Date` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setTimestamp()

```ts
setTimestamp(parameterIndex, value?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value?` | `string` \| `Date` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setAsciiStream()

```ts
setAsciiStream(
   parameterIndex, 
   inputStream, 
   length?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `inputStream` | `InputStream` |
| `length?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setBinaryStream()

```ts
setBinaryStream(
   parameterIndex, 
   inputStream, 
   length?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `inputStream` | `InputStream` |
| `length?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setObject()

```ts
setObject(
   parameterIndex, 
   value, 
   targetSqlType?, 
   scale?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value` | `any` |
| `targetSqlType?` | `number` |
| `scale?` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setRowId()

```ts
setRowId(parameterIndex, value): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setNString()

```ts
setNString(parameterIndex, value): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setSQLXML()

```ts
setSQLXML(parameterIndex, value): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setBlob()

```ts
setBlob(parameterIndex, value): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setClob()

```ts
setClob(parameterIndex, value): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setNClob()

```ts
setNClob(parameterIndex, value): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `parameterIndex` | `number` |
| `value` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::
##### execute()

```ts
execute(): boolean;
```


> ::: info Returns
> - **Type**: `boolean`
> :::
##### getMoreResults()

```ts
getMoreResults(): boolean;
```


> ::: info Returns
> - **Type**: `boolean`
> :::
##### getParameterMetaData()

```ts
getParameterMetaData(): any;
```


> ::: info Returns
> - **Type**: `any`
> :::
##### isClosed()

```ts
isClosed(): boolean;
```


> ::: info Returns
> - **Type**: `boolean`
> :::
##### close()

```ts
close(): void;
```


> ::: info Returns
> - **Type**: `void`
> - **Description**: ***
> :::
### ResultSet


ResultSet object

#### Constructors

##### Constructor

```ts
new ResultSet(native): ResultSet;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `native` | `any` |

#### Methods
##### toJson()
**Parameters**
##### close()
> ::: info Returns
> - **Type**: `void`
> :::
##### getBigDecimal()

```ts
getBigDecimal(identifier): any;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> :::
##### getBoolean()

```ts
getBoolean(identifier): boolean;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `boolean`
> :::
##### getByte()

```ts
getByte(identifier): any;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> :::
##### getBytes()

```ts
getBytes(identifier): any[];
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `identifier` | `string` \| `number` |

##### getBytesNative()
**Parameters**
##### getBlob()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> :::
##### getBlobNative()

```ts
getBlobNative(identifier): any;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> :::
##### getClob()

```ts
getClob(identifier): any;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> :::
##### getNClob()

```ts
getNClob(identifier): any;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `any`
> :::
##### getDate()

```ts
getDate(identifier): Date;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `Date`
> :::
##### getDouble()

```ts
getDouble(identifier): number;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `number`
> :::
##### getFloat()

```ts
getFloat(identifier): number;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `number`
> :::
##### getInt()

```ts
getInt(identifier): number;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `number`
> :::
##### getLong()

```ts
getLong(identifier): number;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `number`
> :::
##### getShort()

```ts
getShort(identifier): number;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `number`
> :::
##### getString()

```ts
getString(identifier): string;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `string`
> :::
##### getTime()

```ts
getTime(identifier): Date;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `Date`
> :::
##### getTimestamp()

```ts
getTimestamp(identifier): Date;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `identifier` | `string` \| `number` |

> ::: info Returns
> - **Type**: `Date`
> :::
##### isAfterLast()

```ts
isAfterLast(): boolean;
```


> ::: info Returns
> - **Type**: `boolean`
> :::
##### isBeforeFirst()

```ts
isBeforeFirst(): boolean;
```


> ::: info Returns
> - **Type**: `boolean`
> :::
##### isClosed()

```ts
isClosed(): boolean;
```


> ::: info Returns
> - **Type**: `boolean`
> :::
##### isFirst()

```ts
isFirst(): boolean;
```


> ::: info Returns
> - **Type**: `boolean`
> :::
##### isLast()

```ts
isLast(): boolean;
```


> ::: info Returns
> - **Type**: `boolean`
> :::
##### next()

```ts
next(): boolean;
```


> ::: info Returns
> - **Type**: `boolean`
> :::
##### getMetaData()

```ts
getMetaData(): any;
```


> ::: info Returns
> - **Type**: `any`
> :::
##### getNString()

```ts
getNString(columnIndex): string;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `columnIndex` | `number` |

> ::: info Returns
> - **Type**: `string`
> - **Description**: ***
> :::
### Connection


Connection object wrapper around a native Java `Connection`.

#### Constructors

##### Constructor

```ts
new Connection(datasourceName?): Connection;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `datasourceName?` | `string` |

#### Properties
#### Methods
##### isOfType()
**Parameters**
> ::: info Returns
> - **Type**: `boolean`
> :::
##### getDatabaseSystem()

```ts
getDatabaseSystem(): DatabaseSystem;
```


Returns the type of the underlying database system as a [DatabaseSystem](#databasesystem) enum.

##### prepareStatement()
**Parameters**
##### prepareCall()
**Parameters**
##### close()
> ::: info Returns
> - **Type**: `void`
> :::
##### commit()

```ts
commit(): void;
```


> ::: info Returns
> - **Type**: `void`
> :::
##### getAutoCommit()

```ts
getAutoCommit(): boolean;
```


> ::: info Returns
> - **Type**: `boolean`
> :::
##### getCatalog()

```ts
getCatalog(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### getSchema()

```ts
getSchema(): string;
```


> ::: info Returns
> - **Type**: `string`
> :::
##### getTransactionIsolation()

```ts
getTransactionIsolation(): number;
```


> ::: info Returns
> - **Type**: `number`
> :::
##### isClosed()

```ts
isClosed(): boolean;
```


> ::: info Returns
> - **Type**: `boolean`
> :::
##### isReadOnly()

```ts
isReadOnly(): boolean;
```


> ::: info Returns
> - **Type**: `boolean`
> :::
##### isValid()

```ts
isValid(): boolean;
```


> ::: info Returns
> - **Type**: `boolean`
> :::
##### rollback()

```ts
rollback(): void;
```


> ::: info Returns
> - **Type**: `void`
> :::
##### setAutoCommit()

```ts
setAutoCommit(autoCommit): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `autoCommit` | `boolean` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setCatalog()

```ts
setCatalog(catalog): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `catalog` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setReadOnly()

```ts
setReadOnly(readOnly): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `readOnly` | `boolean` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setSchema()

```ts
setSchema(schema): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `schema` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### setTransactionIsolation()

```ts
setTransactionIsolation(transactionIsolation): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `transactionIsolation` | `number` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getMetaData()

```ts
getMetaData(): any;
```


> ::: info Returns
> - **Type**: `any`
> - **Description**: ***
> :::
### Database


#### Constructors

##### Constructor

```ts
new Database(): Database;
```

#### Methods
##### getDataSources()
##### getMetadata()
**Parameters**
##### getProductName()
**Parameters**
> ::: info Returns
> - **Type**: `string`
> :::
##### getConnection()

```ts
static getConnection(datasourceName?): Connection;
```


Gets a new database connection object.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `datasourceName?` | `string` |

## Interfaces
### TableMetadata
#### Properties
### ColumnMetadata
#### Properties
### IndexMetadata
#### Properties
### ForeignKeyMetadata
#### Properties
### SchemaMetadata
#### Properties
### ProcedureMetadata
#### Properties
### FunctionMetadata
#### Properties
### ParameterColumnMetadata
#### Properties
### SequenceMetadata
#### Properties
### DatabaseMetadata
#### Properties
## Variables
### SQLTypes