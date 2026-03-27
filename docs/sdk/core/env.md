# core/env

::: tip Documentation
- source: [core/env.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/core/env.ts)
:::


## Overview

API Env
* Provides a static interface for accessing and listing environment variables exposed to the runtime.


## Classes

### Env


#### Constructors

##### Constructor

```ts
new Env(): Env;
```

#### Methods
##### get()
**Parameters**
> ::: info Returns
> - **Type**: `string`
> - **Description**: The variable's value as a string, or `undefined` if the variable is not set.
> :::
##### list()

```ts
static list(): EnvValues;
```


Retrieves a map of all environment variables currently exposed to the application.

## Interfaces
### EnvValues
#### Indexable