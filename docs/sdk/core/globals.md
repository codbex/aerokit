# core/globals

::: tip Documentation
- source: [core/globals.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/core/globals.ts)
:::


## Overview

API Globals
* Provides a static interface for accessing and manipulating global application variables, typically backed by a central configuration or registry.


## Classes

### Globals


#### Constructors

##### Constructor

```ts
new Globals(): Globals;
```

#### Methods
##### get()
**Parameters**
> ::: info Returns
> - **Type**: `string`
> - **Description**: The variable's value as a string, or `undefined` if the variable is not set or its value is null.
> :::
##### set()

```ts
static set(name, value): void;
```


Sets the value of a global variable.
If the variable already exists, its value is overwritten.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the global variable. |
| `value` | `string` | The value to set (must be a string). |

> ::: info Returns
> - **Type**: `void`
> :::
##### list()

```ts
static list(): GlobalsValues;
```


Retrieves a map of all global variables currently defined in the application.

## Interfaces
### GlobalsValues
#### Indexable