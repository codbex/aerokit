# mongodb/client

::: tip Documentation
- source: [mongodb/client.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/mongodb/client.ts)
:::


## Overview

The Client API provides...


## Classes

### DBObject


DBObject object represents a BSON document used for queries, insertions, and updates.
It wraps the underlying native Java object.

#### Constructors

##### Constructor

```ts
new DBObject(native): DBObject;
```


Constructs a new DBObject instance.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `native` | `any` | The native MongoDB object (e.g., com.mongodb.DBObject) |

#### Methods
##### append()
**Parameters**
##### toJson()
> ::: info Returns
> - **Type**: `object`
> - **Description**: A plain JavaScript object.
> :::
##### markAsPartialObject()

```ts
markAsPartialObject(): void;
```


Marks the object as a partial object (used internally by MongoDB driver).

> ::: info Returns
> - **Type**: `void`
> :::
##### isPartialObject()

```ts
isPartialObject(): boolean;
```


Checks if the object is a partial object.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if partial, false otherwise.
> :::
##### containsField()

```ts
containsField(key): boolean;
```


Checks if the DBObject contains a field with the specified key.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The field name. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the field exists, false otherwise.
> :::
##### get()

```ts
get(key): any;
```


Gets the value associated with the given key.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The field name. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The field value.
> :::
##### put()

```ts
put(key, value): any;
```


Puts a key-value pair into the DBObject.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The field name. |
| `value` | `any` | The value to put. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The previous value associated with the key, or null.
> :::
##### removeField()

```ts
removeField(key): any;
```


Removes a field from the DBObject.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The field name to remove. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The removed field value. ***
> :::
### Client


Client object wrapper for connecting to MongoDB.

#### Constructors

##### Constructor

```ts
new Client(
   uri, 
   user, 
   password): Client;
```


Constructs a new MongoDB Client instance.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `uri` | `string` | The MongoDB connection URI. |
| `user` | `string` | The username for authentication. |
| `password` | `string` | The password for authentication. |

#### Methods
##### getDB()
**Parameters**
### DB
#### Constructors
##### Constructor
**Parameters**
#### Methods
##### getCollection()
**Parameters**
### DBCollection
#### Constructors
##### Constructor
**Parameters**
#### Methods
##### insert()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### find()

```ts
find(query?, projection?): DBCursor;
```


Finds documents matching the query.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query?` | `DBInput` | The query specification (can be a plain JS object or DBObject). |
| `projection?` | `DBInput` | The fields to include or exclude (can be a plain JS object or DBObject). |

##### findOne()
**Parameters**
##### findOneById()
**Parameters**
##### count()
**Parameters**
> ::: info Returns
> - **Type**: `number`
> - **Description**: The number of documents.
> :::
##### getCount()

```ts
getCount(query): number;
```


Gets the count of documents (alias for count).

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `DBInput` | Optional query to filter the count. |

> ::: info Returns
> - **Type**: `number`
> - **Description**: The number of documents.
> :::
##### createIndex()

```ts
createIndex(keys, options): void;
```


Creates an index on the collection.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `keys` | `DBInput` | The index key specification. |
| `options` | `DBInput` | Optional index options. |

> ::: info Returns
> - **Type**: `void`
> :::
##### createIndexForField()

```ts
createIndexForField(name): void;
```


Creates an index on a single field by name.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the field to index. |

> ::: info Returns
> - **Type**: `void`
> :::
##### distinct()

```ts
distinct(
   name, 
   query, 
   keys): void;
```


Retrieves the distinct values for a specified field across a collection.
NOTE: The signature in the original code seems slightly off compared to typical MongoDB drivers.
This implementation follows the original structure using `keys.native` if `keys` is provided.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The field name. |
| `query` | `DBInput` | Optional query to filter results. |
| `keys` | `DBInput` | Optional keys to use for distinct (replaces 'name' if provided and query exists). |

> ::: info Returns
> - **Type**: `void`
> :::
##### dropIndex()

```ts
dropIndex(index): void;
```


Drops a specified index.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `index` | `string` \| `DBInput` | The name of the index or the DBObject representing the index keys. |

> ::: info Returns
> - **Type**: `void`
> :::
##### dropIndexByName()

```ts
dropIndexByName(name): void;
```


Drops a specified index by name.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the index. |

> ::: info Returns
> - **Type**: `void`
> :::
##### dropIndexes()

```ts
dropIndexes(): void;
```


Drops all indexes on the collection.

> ::: info Returns
> - **Type**: `void`
> :::
##### remove()

```ts
remove(query): void;
```


Removes documents from the collection matching the query.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `DBInput` | The deletion query specification. |

> ::: info Returns
> - **Type**: `void`
> :::
##### rename()

```ts
rename(newName): void;
```


Renames the collection.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `newName` | `string` | The new name for the collection. |

> ::: info Returns
> - **Type**: `void`
> :::
##### save()

```ts
save(dbObject): void;
```


Saves a document to the collection. If the document has an `_id`, it performs an update;
otherwise, it performs an insert.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dbObject` | `DBInput` | The document to save. |

> ::: info Returns
> - **Type**: `void`
> :::
##### update()

```ts
update(
   query, 
   update, 
   upsert?, 
   multi?): void;
```


Updates documents in the collection matching the query.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `DBInput` | The update query specification. |
| `update` | `DBInput` | The update operation specification (e.g., {$set: {...}}). |
| `upsert?` | `boolean` | If true, creates a new document if no documents match the query. |
| `multi?` | `boolean` | If true, updates all documents matching the query; otherwise, only one. |

> ::: info Returns
> - **Type**: `void`
> :::
##### updateMulti()

```ts
updateMulti(query, update): void;
```


Updates multiple documents in the collection matching the query.
(Equivalent to calling `update` with `multi=true` and `upsert=true` implicitly).

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `DBInput` | The update query specification. |
| `update` | `DBInput` | The update operation specification. |

> ::: info Returns
> - **Type**: `void`
> :::
##### getNextId()

```ts
getNextId(): number;
```


Calculates the next sequential ID based on the largest existing `_id` in the collection.
Assumes `_id` is a numeric field.

> ::: info Returns
> - **Type**: `number`
> - **Description**: The next available sequential ID (starting at 1 if collection is empty).
> :::
##### generateUUID()

```ts
generateUUID(): string;
```


Generates a new random UUID (Universally Unique Identifier).

> ::: info Returns
> - **Type**: `string`
> - **Description**: A string representing the UUID. ***
> :::
### DBCursor


DBCursor object wrapper for iterating over results of a MongoDB query.

#### Constructors

##### Constructor

```ts
new DBCursor(native): DBCursor;
```


Constructs a new DBCursor instance.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `native` | `any` | The native MongoDB DBCursor object. |

#### Methods
##### one()
##### batchSize()
**Parameters**
##### getBatchSize()
> ::: info Returns
> - **Type**: `number`
> - **Description**: The batch size.
> :::
##### getCollection()

```ts
getCollection(): DBCollection;
```


Gets the collection associated with this cursor.

##### getCursorId()
> ::: info Returns
> - **Type**: `string`
> - **Description**: The cursor ID string.
> :::
##### getKeysWanted()

```ts
getKeysWanted(): DBObject;
```


Gets the projection object (fields wanted) used in the query.

##### getLimit()
> ::: info Returns
> - **Type**: `number`
> - **Description**: The limit number.
> :::
##### close()

```ts
close(): void;
```


Closes the cursor.

> ::: info Returns
> - **Type**: `void`
> :::
##### hasNext()

```ts
hasNext(): boolean;
```


Checks if there is a next document in the cursor.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if there is a next document, false otherwise.
> :::
##### next()

```ts
next(): DBObject;
```


Retrieves the next document in the cursor.

##### getQuery()
##### length()
> ::: info Returns
> - **Type**: `number`
> - **Description**: The total number of documents.
> :::
##### sort()

```ts
sort(orderBy): DBCursor;
```


Specifies the order in which the query returns the results.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `orderBy` | `DBInput` | The sorting specification (e.g., {field: 1} for ascending). |

##### limit()
**Parameters**
##### min()
**Parameters**
##### max()
**Parameters**
##### maxTime()
**Parameters**
##### size()
> ::: info Returns
> - **Type**: `number`
> - **Description**: The size number.
> :::
##### skip()

```ts
skip(numberOfElements): DBCursor;
```


Skips the specified number of documents.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `numberOfElements` | `number` | The number of documents to skip. |

## Functions
### createBasicDBObject()
#### Returns