# net/decorators

> [!tip]
> Auto-generated from
> - source: [net/decorators.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/net/decorators.ts)
> - version: 1.0.0


## Overview

The Decorators API provides...

## Table of Contents

- [Overview](#overview)
- [Interfaces](#interfaces)
  - [WebsocketOptions](#websocketoptions)
- [Functions](#functions)
  - [Websocket()](#websocket())

## Interfaces

### WebsocketOptions


#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `name` | `string` | src/net/decorators.ts:4 |
|  `endpoint` | `string` | src/net/decorators.ts:5 |

## Functions

### Websocket()

> ```ts
> function Websocket(options): (target, context) => void;
> ```


#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`WebsocketOptions`](#websocketoptions) |

#### Returns

\(`target`, `context`) => `void`

#### Websocket

decorator
Marks an entire class as a websocket

introduced in TypeScript 5.0, which expects a ClassDecoratorContext object.
