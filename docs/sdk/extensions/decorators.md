# extensions/decorators

> [!tip]
> Auto-generated from
> - source: [extensions/decorators.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/extensions/decorators.ts)
> - version: 1.0.0


## Overview

The Decorators API provides...

## Table of Contents

- [Overview](#overview)
- [Interfaces](#interfaces)
  - [ExtensionOptions](#extensionoptions)
- [Functions](#functions)
  - [Extension()](#extension())

## Interfaces

### ExtensionOptions


#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `name` | `string` | src/extensions/decorators.ts:4 |
|  `to` | `string` | src/extensions/decorators.ts:5 |

## Functions

### Extension()

> ```ts
> function Extension(options): (target, context) => void;
> ```


#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ExtensionOptions`](#extensionoptions) |

#### Returns

\(`target`, `context`) => `void`

#### Extension

decorator
Marks an entire class as a extension

introduced in TypeScript 5.0, which expects a ClassDecoratorContext object.
