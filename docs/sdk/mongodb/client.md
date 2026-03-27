# mongodb/client

> [!tip]
> Auto-generated from
> - source: [mongodb/client.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/mongodb/client.ts)
> - version: 1.0.0


## Overview

Define a common type for input to functions that accept either a plain JavaScript object
(which will be implicitly converted to DBObject) or an existing DBObject wrapper instance.
/
type DBInput = { [key: string]: any } | DBObject | undefined | null;

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [DBObject](#dbobject)
- [Parameters](#parameters)
  - [Client](#client)
- [Parameters](#parameters)
  - [DB](#db)
- [Parameters](#parameters)
  - [DBCollection](#dbcollection)
- [Parameters](#parameters)
  - [DBCursor](#dbcursor)
- [Parameters](#parameters)
- [Functions](#functions)
  - [createBasicDBObject()](#createbasicdbobject())

## Classes

### DBObject

The underlying native MongoDB client object.
@private
/
    private readonly native: any;



DBObject object represents a BSON document used for queries, insertions, and updates.
It wraps the underlying native Java object.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `native` | `any` | The native MongoDB object (e.g., com.mongodb.DBObject) |

###### Returns

[`DBObject`](#dbobject)

#### Methods

##### append()

> ```ts
> append(key, value): DBObject;
> ```


> Appends a key-value pair to the DBObject.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The field name. |
> | `value` | `any` | The value to append. |
> 
> ###### Returns
> 
> [`DBObject`](#dbobject)
> 
> The current DBObject instance for chaining.
> 
> ##### toJson()
> 
> > ```ts
> > toJson(): object;
> > ```
> 
> 
> > Converts the DBObject to a standard JavaScript object representation (JSON).
> 
> > > ::: info Returns
> > > - **Type**: `object`
> > > - **Description**: A plain JavaScript object.
> > > :::
> 
> > ##### markAsPartialObject()
> 
> > > ```ts
> > > markAsPartialObject(): void;
> > > ```
> 
> 
> > Marks the object as a partial object (used internally by MongoDB driver).
> 
> > > ::: info Returns
> > > - **Type**: `void`
> > > - **Description**: ##### isPartialObject() > ```ts isPartialObject(): boolean; ``` Checks if the object is a partial object.
> > > :::
> 
> > > ::: info Returns
> > > - **Type**: `boolean`
> > > - **Description**: True if partial, false otherwise.
> > > :::
> 
> > ##### containsField()
> 
> > > ```ts
> > > containsField(key): boolean;
> > > ```
> 
> 
> > Checks if the DBObject contains a field with the specified key.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The field name. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the field exists, false otherwise.
> :::

##### get()

> ```ts
> get(key): any;
> ```


> Gets the value associated with the given key.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The field name. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The field value.
> :::

##### put()

> ```ts
> put(key, value): any;
> ```


> Puts a key-value pair into the DBObject.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The field name. |
> | `value` | `any` | The value to put. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The previous value associated with the key, or null.
> :::

##### removeField()

> ```ts
> removeField(key): any;
> ```


> Removes a field from the DBObject.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The field name to remove. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The removed field value. ***
> :::

### Client

The underlying native Java object representing the BSON document.
@private
/
    public native: any;



Client object wrapper for connecting to MongoDB.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `uri` | `string` | The MongoDB connection URI. |
| `user` | `string` | The username for authentication. |
| `password` | `string` | The password for authentication. |

###### Returns

[`Client`](#client)

#### Methods

##### getDB()

> ```ts
> getDB(name?): DB;
> ```


> Retrieves a database instance.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name?` | `string` | Optional name of the database. If not provided, the default database name is used. |
> 
> ###### Returns
> 
> [`DB`](#db)
> 
> A DB instance.
> 
> ***
> 
> ### DB
> 
> 
> DB object wrapper for a MongoDB database.
> 
> ## Parameters
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `native` | `any` | The native MongoDB DB object. |
> 
> ###### Returns
> 
> [`DB`](#db)
> 
> #### Methods
> 
> ##### getCollection()
> 
> > ```ts
> > getCollection(name): DBCollection;
> > ```
> 
> 
> > Retrieves a collection instance from the database.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the collection. |
> 
> ###### Returns
> 
> [`DBCollection`](#dbcollection)
> 
> A DBCollection instance.
> 
> ***
> 
> ### DBCollection

The underlying native MongoDB DB object.
@private
/
    private readonly native: any;

> 
> 
> DBCollection object wrapper for a MongoDB collection.
> 
> ## Parameters
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `native` | `any` | The native MongoDB DBCollection object. |
> 
> ###### Returns
> 
> [`DBCollection`](#dbcollection)
> 
> #### Methods
> 
> ##### insert()
> 
> > ```ts
> > insert(dbObject): void;
> > ```
> 
> 
> > Inserts a document into the collection.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `dbObject` | `DBInput` | The document to insert (can be a plain JS object or DBObject). |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### find() > ```ts find(query?, projection?): DBCursor; ``` Finds documents matching the query.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `query?` | `DBInput` | The query specification (can be a plain JS object or DBObject). |
> | `projection?` | `DBInput` | The fields to include or exclude (can be a plain JS object or DBObject). |
> 
> ###### Returns
> 
> [`DBCursor`](#dbcursor)
> 
> A DBCursor for iterating over results.
> 
> ##### findOne()
> 
> > ```ts
> > findOne(
> >    query, 
> >    projection, 
> >    sort): DBObject;
> > ```
> 
> 
> > Finds a single document matching the query.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `query` | `DBInput` | The query specification. |
> | `projection` | `DBInput` | The fields to include or exclude. |
> | `sort` | `DBInput` | The sorting specification. |
> 
> ###### Returns
> 
> [`DBObject`](#dbobject)
> 
> The found document as a DBObject.
> 
> ##### findOneById()
> 
> > ```ts
> > findOneById(id, projection?): DBObject;
> > ```
> 
> 
> > Finds a single document by its string ID.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `id` | `string` | The string ID of the document. |
> | `projection?` | `DBInput` | The fields to include or exclude. |
> 
> ###### Returns
> 
> [`DBObject`](#dbobject)
> 
> The found document as a DBObject.
> 
> ##### count()
> 
> > ```ts
> > count(query?): number;
> > ```
> 
> 
> > Counts the number of documents in the collection, optionally filtered by a query.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `query?` | `DBInput` | Optional query to filter the count. |

> ::: info Returns
> - **Type**: `number`
> - **Description**: The number of documents.
> :::

##### getCount()

> ```ts
> getCount(query): number;
> ```


> Gets the count of documents (alias for count).

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `query` | `DBInput` | Optional query to filter the count. |

> ::: info Returns
> - **Type**: `number`
> - **Description**: The number of documents.
> :::

##### createIndex()

> ```ts
> createIndex(keys, options): void;
> ```


> Creates an index on the collection.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `keys` | `DBInput` | The index key specification. |
> | `options` | `DBInput` | Optional index options. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### createIndexForField() > ```ts createIndexForField(name): void; ``` Creates an index on a single field by name.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the field to index. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### distinct() > ```ts distinct(    name,     query,     keys): void; ``` Retrieves the distinct values for a specified field across a collection. NOTE: The signature in the original code seems slightly off compared to typical MongoDB drivers. This implementation follows the original structure using `keys.native` if `keys` is provided.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The field name. |
> | `query` | `DBInput` | Optional query to filter results. |
> | `keys` | `DBInput` | Optional keys to use for distinct (replaces 'name' if provided and query exists). |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### dropIndex() > ```ts dropIndex(index): void; ``` Drops a specified index.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `index` | `string` \| `DBInput` | The name of the index or the DBObject representing the index keys. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### dropIndexByName() > ```ts dropIndexByName(name): void; ``` Drops a specified index by name.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the index. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### dropIndexes() > ```ts dropIndexes(): void; ``` Drops all indexes on the collection.
> :::

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### remove() > ```ts remove(query): void; ``` Removes documents from the collection matching the query.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `query` | `DBInput` | The deletion query specification. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### rename() > ```ts rename(newName): void; ``` Renames the collection.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `newName` | `string` | The new name for the collection. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### save() > ```ts save(dbObject): void; ``` Saves a document to the collection. If the document has an `_id`, it performs an update; otherwise, it performs an insert.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `dbObject` | `DBInput` | The document to save. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### update() > ```ts update(    query,     update,     upsert?,     multi?): void; ``` Updates documents in the collection matching the query.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `query` | `DBInput` | The update query specification. |
> | `update` | `DBInput` | The update operation specification (e.g., {$set: {...}}). |
> | `upsert?` | `boolean` | If true, creates a new document if no documents match the query. |
> | `multi?` | `boolean` | If true, updates all documents matching the query; otherwise, only one. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### updateMulti() > ```ts updateMulti(query, update): void; ``` Updates multiple documents in the collection matching the query. (Equivalent to calling `update` with `multi=true` and `upsert=true` implicitly).
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `query` | `DBInput` | The update query specification. |
> | `update` | `DBInput` | The update operation specification. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getNextId() > ```ts getNextId(): number; ``` Calculates the next sequential ID based on the largest existing `_id` in the collection. Assumes `_id` is a numeric field.
> :::

> ::: info Returns
> - **Type**: `number`
> - **Description**: The next available sequential ID (starting at 1 if collection is empty).
> :::

##### generateUUID()

> ```ts
> generateUUID(): string;
> ```


> Generates a new random UUID (Universally Unique Identifier).

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: A string representing the UUID. ***
> > :::

> ### DBCursor

The underlying native MongoDB DBCollection object.
@private
/
    private readonly native: any;



> DBCursor object wrapper for iterating over results of a MongoDB query.

> ## Parameters

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `native` | `any` | The native MongoDB DBCursor object. |

> ###### Returns

> [`DBCursor`](#dbcursor)

> #### Methods

> ##### one()

> > ```ts
> > one(): DBObject;
> > ```


> Returns the single result from the cursor.

> ###### Returns

> [`DBObject`](#dbobject)

> A DBObject representing the document.

> ##### batchSize()

> > ```ts
> > batchSize(numberOfElements): DBCursor;
> > ```


> Sets the batch size for the cursor.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `numberOfElements` | `number` | The batch size. |

###### Returns

[`DBCursor`](#dbcursor)

The DBCursor instance for chaining.

##### getBatchSize()

> ```ts
> getBatchSize(): number;
> ```


> Gets the current batch size.

> > ::: info Returns
> > - **Type**: `number`
> > - **Description**: The batch size.
> > :::

> ##### getCollection()

> > ```ts
> > getCollection(): DBCollection;
> > ```


> Gets the collection associated with this cursor.

> ###### Returns

> [`DBCollection`](#dbcollection)

> The DBCollection instance.

> ##### getCursorId()

> > ```ts
> > getCursorId(): string;
> > ```


> Gets the cursor ID.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The cursor ID string.
> > :::

> ##### getKeysWanted()

> > ```ts
> > getKeysWanted(): DBObject;
> > ```


> Gets the projection object (fields wanted) used in the query.

> ###### Returns

> [`DBObject`](#dbobject)

> The projection DBObject.

> ##### getLimit()

> > ```ts
> > getLimit(): number;
> > ```


> Gets the limit set on the cursor.

> > ::: info Returns
> > - **Type**: `number`
> > - **Description**: The limit number.
> > :::

> ##### close()

> > ```ts
> > close(): void;
> > ```


> Closes the cursor.

> > ::: info Returns
> > - **Type**: `void`
> > - **Description**: ##### hasNext() > ```ts hasNext(): boolean; ``` Checks if there is a next document in the cursor.
> > :::

> > ::: info Returns
> > - **Type**: `boolean`
> > - **Description**: True if there is a next document, false otherwise.
> > :::

> ##### next()

> > ```ts
> > next(): DBObject;
> > ```


> Retrieves the next document in the cursor.

> ###### Returns

> [`DBObject`](#dbobject)

> The next document as a DBObject.

> ##### getQuery()

> > ```ts
> > getQuery(): DBObject;
> > ```


> Gets the query object used to create this cursor.

> ###### Returns

> [`DBObject`](#dbobject)

> The query DBObject.

> ##### length()

> > ```ts
> > length(): number;
> > ```


> Gets the number of documents matched by the query.

> > ::: info Returns
> > - **Type**: `number`
> > - **Description**: The total number of documents.
> > :::

> ##### sort()

> > ```ts
> > sort(orderBy): DBCursor;
> > ```


> Specifies the order in which the query returns the results.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `orderBy` | `DBInput` | The sorting specification (e.g., {field: 1} for ascending). |

###### Returns

[`DBCursor`](#dbcursor)

The DBCursor instance for chaining.

##### limit()

> ```ts
> limit(limit): DBCursor;
> ```


> Limits the number of results to be returned.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `limit` | `number` | The maximum number of documents to return. |

###### Returns

[`DBCursor`](#dbcursor)

The DBCursor instance for chaining.

##### min()

> ```ts
> min(min): DBCursor;
> ```


> Specifies the exclusive upper bound for a specific index.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | The minimum value. |

###### Returns

[`DBCursor`](#dbcursor)

The DBCursor instance for chaining.

##### max()

> ```ts
> max(max): DBCursor;
> ```


> Specifies the exclusive upper bound for a specific index.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `max` | `number` | The maximum value. |

###### Returns

[`DBCursor`](#dbcursor)

The DBCursor instance for chaining.

##### maxTime()

> ```ts
> maxTime(maxTime): DBCursor;
> ```


> Sets a timeout for the server to execute the query.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `maxTime` | `number` | The maximum time in milliseconds. |

###### Returns

[`DBCursor`](#dbcursor)

The DBCursor instance for chaining.

##### size()

> ```ts
> size(): number;
> ```


> Gets the size of the result set.

> > ::: info Returns
> > - **Type**: `number`
> > - **Description**: The size number.
> > :::

> ##### skip()

> > ```ts
> > skip(numberOfElements): DBCursor;
> > ```


> Skips the specified number of documents.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `numberOfElements` | `number` | The number of documents to skip. |

###### Returns

[`DBCursor`](#dbcursor)

The DBCursor instance for chaining.

## Functions

### createBasicDBObject()

> ```ts
> function createBasicDBObject(): DBObject;
> ```


Creates a new, empty DBObject instance.

#### Returns

[`DBObject`](#dbobject)

A new DBObject.
