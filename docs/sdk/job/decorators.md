# job/decorators

::: tip Documentation
- source: [job/decorators.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/job/decorators.ts)
:::


## Overview

The Decorators API provides...


## Interfaces

### ScheduledOptions


#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `expression` | `string` | src/job/decorators.ts:4 |
|  `group?` | `string` | src/job/decorators.ts:5 |

## Functions

### Scheduled()

```ts
function Scheduled(options): (target, context) => void;
```


#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ScheduledOptions`](#scheduledoptions) |

#### Returns

\(`target`, `context`) => `void`

#### Scheduled

decorator
Marks an entire class as a scheduled job with a cron expression.

introduced in TypeScript 5.0, which expects a ClassDecoratorContext object.
