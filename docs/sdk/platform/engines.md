# platform/engines

::: tip Documentation
- source: [platform/engines.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/platform/engines.ts)
:::


## Overview

The Engines API provides...


## Classes

### Engine


Engine

#### Description

Represents a specific execution engine type (e.g., JavaScript, Groovy)
and provides methods to interact with the platform's execution facade.

#### Constructors

##### Constructor

```ts
new Engine(type): Engine;
```


Creates an instance of Engine.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The type of the execution engine (e.g., "javascript"). |

#### Methods
##### getTypes()
##### execute()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> - **Description**: The result returned by the executed script.
> :::
## Interfaces

### ExecutionParameters


Interface defining the execution parameters expected by the Engine class.

#### Indexable

```ts
[key: string]: any
```
