# bpm/tracer

::: tip Documentation
- source: [bpm/tracer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/bpm/tracer.ts)
:::


## Overview

The Tracer API provides...


## Classes

### Tracer


#### Constructors

##### Constructor

```ts
new Tracer(): Tracer;
```


#### Methods
##### log()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### warn()

```ts
warn(message): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### error()

```ts
error(message): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### complete()

```ts
complete(message?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### fail()

```ts
fail(message?): void;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::