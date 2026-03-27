# messaging/decorators

::: tip Documentation
- source: [messaging/decorators.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/messaging/decorators.ts)
:::


## Overview

The Decorators API provides...


## Interfaces

### ListenerOptions


#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `name` | `string` | src/messaging/decorators.ts:4 |
|  `kind` | `string` | src/messaging/decorators.ts:5 |

## Functions

### Listener()

```ts
function Listener(options): (target, context) => void;
```


#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ListenerOptions`](#listeneroptions) |

#### Returns

\(`target`, `context`) => `void`

#### Listener

decorator
Marks an entire class as a listener

introduced in TypeScript 5.0, which expects a ClassDecoratorContext object.
