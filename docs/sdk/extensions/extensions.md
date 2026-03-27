# extensions/extensions

> [!tip]
> Auto-generated from
> - source: [extensions/extensions.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/extensions/extensions.ts)
> - version: 1.0.0


## Overview

API Extensions

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Extensions](#extensions)
- [Returns](#returns)

## Classes

### Extensions


Provides functionality for discovering and loading extensions defined
against the Dirigible extension model.

## Returns

[`Extensions`](#extensions)

#### Methods

##### getExtensions()

> ```ts
> static getExtensions(extensionPoint): string[];
> ```


> Retrieves the list of extension module paths registered for a specific extension point.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `extensionPoint` | `string` | The unique identifier of the extension point (e.g., "my.extension.point"). |

> ::: info Returns
> - **Type**: `string`
> - **Description**: [] An array of string paths (modules) registered for the given extension point.
> :::

##### getExtensionPoints()

> ```ts
> static getExtensionPoints(): string[];
> ```


> Retrieves all available extension point identifiers.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: [] An array of strings representing all registered extension point IDs.
> > :::

> ##### loadExtensionModules()

> > ```ts
> > static loadExtensionModules( extensionPoint, requiredFunctions?, throwError?): Promise;
> > ```


> Loads extension modules registered for a specific extension point.
> It handles both synchronous (require) and asynchronous (import) loading.

> **Parameters**

> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `extensionPoint` | `string` | `undefined` | The unique identifier of the extension point. |
> | `requiredFunctions` | `string`[] | `[]` | An optional list of function names that the extension module must export to be included. |
> | `throwError` | `boolean` | `false` | If true, throws an error on failure; otherwise, logs the error and continues. |

> ::: info Returns
> - **Type**: `Promise`
> - **Description**: \ A Promise that resolves to an array of successfully loaded and validated extension modules (exports).
> :::

##### load()

> ```ts
> static load( extensionPoint, requiredFunctions?, throwError?): Promise;
> ```


> Alias for loadExtensionModules

> **Parameters**

> | Parameter | Type | Default value |
> | ------ | ------ | ------ |
> | `extensionPoint` | `string` | `undefined` |
> | `requiredFunctions` | `string`[] | `[]` |
> | `throwError` | `boolean` | `false` |

> ::: info Returns
> - **Type**: `Promise`
> - **Description**: \
> :::
