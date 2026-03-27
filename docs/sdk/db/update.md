# db/update

::: tip Documentation
- source: [db/update.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/update.ts)
:::


## Overview

The Update API provides...


## Classes

### Update


Facade class for executing SQL UPDATE, INSERT, and DELETE statements.
Parameters array supports primitives e.g. `[1, 'John', 34.56]` or objects in format either `{'type':'[DATA_TYPE]', 'value':[VALUE]}` or `{'name':'[string]', 'type':'[DATA_TYPE]', 'value':[VALUE]}` e.g. `[{'type':'CHAR', 'value':'ISBN19202323322'}]` or `[{'name': 'order_number', 'type':'CHAR', 'value':'ISBN19202323322'}]`

#### Constructors

##### Constructor

```ts
new Update(): Update;
```

#### Methods
##### execute()
**Parameters**
> ::: info Returns
> - **Type**: `number`
> - **Description**: The number of rows affected by the statement.
> :::
## Interfaces

### NamedUpdateParameter


Interface defining a parameter for a named update query (using placeholders like :paramName).

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
|  `name` | `readonly` | `string` | src/db/update.ts:15 |
|  `type` | `readonly` | `string` | src/db/update.ts:16 |
|  `value` | `readonly` | `any` | src/db/update.ts:17 |

## Type Aliases

### TypedUpdateParameter

```ts
type TypedUpdateParameter = object;
```


Interface used for complex parameter types if needed, otherwise primitive types are used directly.

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
|  `type` | `readonly` | `string` | src/db/update.ts:7 |
|  `value` | `readonly` | `unknown` | src/db/update.ts:8 |
