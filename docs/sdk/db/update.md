# API: update

> Source: `db/update.ts`

Interface used for complex parameter types if needed, otherwise primitive types are used directly.

## Usage
```javascript
import { query, update } from "@aerokit/sdk/db";
import { response } from "@aerokit/sdk/http";

update.execute("CREATE TABLE MY_TABLE (COLUMN_A INT)", [], "DefaultDB");

update.execute("INSERT INTO MY_TABLE VALUES (1)", [], "DefaultDB");

let resultSetBefore = query.execute("SELECT COLUMN_A FROM MY_TABLE", [], "DefaultDB");
response.println("Value before update: " + JSON.stringify(resultSetBefore));

update.execute("UPDATE MY_TABLE SET COLUMN_A = 2", [], "DefaultDB");

let resultSetAfter = query.execute("SELECT COLUMN_A FROM MY_TABLE", [], "DefaultDB");
response.println("Value after update: " + JSON.stringify(resultSetAfter));

update.execute("DROP TABLE MY_TABLE", [], "DefaultDB");

```


## Classes

### Update

Facade class for executing SQL UPDATE, INSERT, and DELETE statements.<br/>Parameters array supports primitives e.g. `[1, 'John', 34.56]` or objects in format either `\{'type':'[DATA_TYPE]', 'value':[VALUE]\}` or `\{'name':'[string]', 'type':'[DATA_TYPE]', 'value':[VALUE]\}` e.g. `[\{'type':'CHAR', 'value':'ISBN19202323322'\}]` or `[\{'name': 'order_number', 'type':'CHAR', 'value':'ISBN19202323322'\}]`

#### Methods

<hr/>

#### execute

- `execute (sql:string, parameters?:(string|number|boolean|Date|TypedUpdateParameter|NamedUpdateParameter):number`

  Executes a parameterized SQL update statement (INSERT, UPDATE, or DELETE).<br/><br/>@param sql The SQL query to execute.<br/>@param parameters An optional array of values (primitives, TypedQueryParameter or NamedQueryParameter objects) to replace '?' or :paramName placeholders.<br/>@param datasourceName The name of the database connection to use (optional).<br/>@returns The number of rows affected by the statement.

