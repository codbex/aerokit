# http/decorators

::: tip Documentation
- source: [http/decorators.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/decorators.ts)
:::


## Overview

The Decorators API provides...


## Variables

### Get

```ts
const Get: (path) => (target, propertyKey, descriptor?) => void;
```


#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

(`target`, `propertyKey`, `descriptor?`) => `void`

***

### Post

```ts
const Post: (path) => (target, propertyKey, descriptor?) => void;
```


#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

(`target`, `propertyKey`, `descriptor?`) => `void`

***

### Put

```ts
const Put: (path) => (target, propertyKey, descriptor?) => void;
```


#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

(`target`, `propertyKey`, `descriptor?`) => `void`

***

### Patch

```ts
const Patch: (path) => (target, propertyKey, descriptor?) => void;
```


#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

(`target`, `propertyKey`, `descriptor?`) => `void`

***

### Delete

```ts
const Delete: (path) => (target, propertyKey, descriptor?) => void;
```


#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

(`target`, `propertyKey`, `descriptor?`) => `void`

***

### Head

```ts
const Head: (path) => (target, propertyKey, descriptor?) => void;
```


#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

(`target`, `propertyKey`, `descriptor?`) => `void`

***

### Options

```ts
const Options: (path) => (target, propertyKey, descriptor?) => void;
```


#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

(`target`, `propertyKey`, `descriptor?`) => `void`

## Functions

### Controller()

```ts
function Controller(ctr, _context?): void;
```


#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctr` | () => `any` |
| `_context?` | `ClassDecoratorContext` |

#### Returns

`void`

***

### Documentation()

```ts
function Documentation(documentation): (value, context) => void;
```


#### Parameters

| Parameter | Type |
| ------ | ------ |
| `documentation` | `string` |

#### Returns

(`value`, `context`) => `void`
