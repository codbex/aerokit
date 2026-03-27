# db/procedure

::: tip Documentation
- source: [db/procedure.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/procedure.ts)
:::


## Overview

API Procedure


## Classes

### Procedure


#### Constructors

##### Constructor

```ts
new Procedure(): Procedure;
```

#### Methods
##### create()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### execute()

```ts
static execute(
   sql, 
   parameters?, 
   datasourceName?): any[];
```


Executes a stored procedure call and returns the result set(s).
*

**Parameters**

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `sql` | `string` | `undefined` | The callable statement (e.g., {CALL my_procedure(?, ?)}). |
| `parameters?` | (`string` \| `number` \| [`ProcedureParameter`](#procedureparameter))[] | `[]` | An array of parameters. Primitives (string/number) are automatically typed. Use ProcedureParameter for explicit types. |
| `datasourceName?` | `string` | `undefined` | Optional name of the data source to use. |

## Interfaces
### ProcedureParameter
#### Description
#### Properties