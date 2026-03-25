# API: query

> Source: `db/query.ts`

API Query

## Usage
```javascript
import { query } from "@aerokit/sdk/db";
import { response } from "@aerokit/sdk/http";

// Regular

const sql = "SELECT * FROM DIRIGIBLE_EXTENSIONS WHERE EXTENSION_EXTENSIONPOINT_NAME = ?";
let resultset = query.execute(sql, ["ide-editor"], "SystemDB");

response.println(JSON.stringify(resultset));

// Typed Parameters

const sql = "SELECT * FROM DIRIGIBLE_EXTENSIONS WHERE EXTENSION_EXTENSIONPOINT_NAME = ?";
let resultset = query.execute(sql, [{ "type": "VARCHAR", "value": "ide-editor" }], "SystemDB");

response.println(JSON.stringify(resultset));

// Named Parameters

const sql = "SELECT * FROM DIRIGIBLE_EXTENSIONS WHERE EXTENSION_EXTENSIONPOINT_NAME = :editor";
let resultset = query.executeNamed(sql, [{ "name": "editor", "type": "VARCHAR", "value": "ide-editor" }], "SystemDB");

response.println(JSON.stringify(resultset));

```


## Classes

### Query

Provides static methods for executing parameterized SQL SELECT statements.

#### Methods

<hr/>

#### execute

- `execute (sql:string, parameters?:(string|number|boolean|Date|TypedQueryParameter|NamedQueryParameter):any[]`

  Executes a standard SQL query with positional parameters. Parameters array supports primitives e.g. `[1, 'John', 34.56]` or objects in format either `\{'type':'[DATA_TYPE]', 'value':[VALUE]\}` or `\{'name':'[string]', 'type':'[DATA_TYPE]', 'value':[VALUE]\}` e.g. `[\{'type':'CHAR', 'value':'ISBN19202323322'\}]` or `[\{'name': 'order_number', 'type':'CHAR', 'value':'ISBN19202323322'\}]`<br/><br/>@param sql The SQL query to execute.<br/>@param parameters An optional array of values (primitives, TypedQueryParameter or NamedQueryParameter objects) to replace '?' or :paramName placeholders.<br/>@param datasourceName The name of the database connection to use (optional).<br/>@param formatting Optional formatting parameters for the result set (e.g., date format).<br/>@returns An array of records representing the query results.

<hr/>

#### executeNamed

- `executeNamed (sql:string, parameters?:NamedQueryParameter[], datasourceName?:string):any[]`

  Executes a SQL query with named parameters (e.g., ":name", ":id").<br/><br/>@param sql The SQL query to execute.<br/>@param parameters An optional array of NamedQueryParameter objects.<br/>@param datasourceName The name of the database connection to use (optional).<br/>@returns An array of records representing the query results.

