# core/context

::: tip Documentation
- source: [core/context.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/core/context.ts)
:::


## Overview

API Context
* Provides a static interface for accessing and manipulating key-value pairs in a global, application-wide context.


## Classes

### Context


#### Constructors

##### Constructor

```ts
new Context(): Context;
```

#### Methods
##### get()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> - **Description**: The context value, or `undefined` if the name is not found or the value is null.
> :::
##### set()

```ts
static set(name, value): void;
```


Stores a value in the global context under the specified name.
If the name already exists, its value is overwritten.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the context variable. |
| `value` | `any` | The value to store. |

> ::: info Returns
> - **Type**: `void`
> :::