# extensions/extensions

::: tip Documentation
- source: [extensions/extensions.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/extensions/extensions.ts)
:::

## Overview



## Classes

### Extensions

#### getExtensions()

Retrieves the list of extension module paths registered for a specific extension point.

> ```ts
> static getExtensions(extensionPoint: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `extensionPoint` | `string` | The unique identifier of the extension point (e.g., &quot;my.extension.point&quot;). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of string paths (modules) registered for the given extension point.
> :::

#### getExtensionPoints()

Retrieves all available extension point identifiers.

> ```ts
> static getExtensionPoints(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of strings representing all registered extension point IDs.
> :::

#### loadExtensionModules()

Loads extension modules registered for a specific extension point.
It handles both synchronous (require) and asynchronous (import) loading.

> ```ts
> static loadExtensionModules(extensionPoint: string, requiredFunctions: any, throwError: boolean): Promise;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `extensionPoint` | `string` | The unique identifier of the extension point. |
> | `requiredFunctions` | `any` | An optional list of function names that the extension module must export to be included. |
> | `throwError` | `boolean` | If true, throws an error on failure; otherwise, logs the error and continues. |
>
> ::: info Returns
> - **Type**: `Promise`
> - **Description**: A Promise that resolves to an array of successfully loaded and validated extension modules (exports).
> :::

#### load()

Alias for loadExtensionModules

> ```ts
> static load(extensionPoint: string, requiredFunctions: any, throwError: boolean): Promise;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `extensionPoint` | `string` |  |
> | `requiredFunctions` | `any` |  |
> | `throwError` | `boolean` |  |
>
> ::: info Returns
> - **Type**: `Promise`
> - **Description**: 
> :::

