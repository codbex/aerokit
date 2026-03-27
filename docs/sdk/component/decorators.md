# component/decorators

::: tip Documentation
- source: [component/decorators.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/component/decorators.ts)
:::


## Overview

The Decorators API provides...


## Interfaces

### ComponentConstructor


Extends a standard constructor function to include properties used for internal metadata storage.

#### Extends

- `Function`

#### Constructors

##### Constructor

```ts
new ComponentConstructor(...args): any;
```


**Parameters**

| Parameter | Type |
| ------ | ------ |
| ...`args` | `any`[] |

> ::: info Returns
> - **Type**: `any`
> :::
###### Inherited from

```ts
Function.constructor
```

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
|  `__component_name?` | `string` | Internal storage for the component's registered name. | src/component/decorators.ts:32 |
|  `__injections_map?` | `Map`\ | Internal storage for the component's injection map. | src/component/decorators.ts:34 |

## Functions

### Component()

```ts
function Component(nameOrConstructor?): Function;
```


Class decorator that marks a class as a Dependency Injection component.
It registers the component's metadata and wraps the constructor to ensure
dependencies are injected upon instance creation.

Can be used as `@Component` (uses class name) or `@Component('customName')`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `nameOrConstructor?` | `string` \| `Function` | The optional custom component name (string) or the class constructor (Function) when used without parentheses. |

#### Returns

`Function`

A class decorator function or the decorated class itself.

***

### Injected()

```ts
function Injected(nameOrConstructor?): Function;
```


An alias for the [Component](#component) decorator, used for semantic clarity
in contexts where the class is explicitly intended to be injected elsewhere.
Its functionality is identical to [Component](#component).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `nameOrConstructor?` | `string` \| `Function` | The optional custom component name (string) or the class constructor (Function). |

#### Returns

`Function`

A class decorator function or the decorated class itself.

***

### Inject()

```ts
function Inject(name?): (...args) => void;
```


Property decorator used to mark an instance property as an injection point.
The runtime will look up a dependency based on the property name or the optional
name provided.

It supports both modern (`context.addInitializer`) and legacy decorator APIs.

Usage:
- `@Inject` propertyKey: Injects a component with the same name as `propertyKey`.
- `@Inject('myService')` propertyKey: Injects the component registered as 'myService'.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name?` | `string` | The optional name of the component to inject. |

#### Returns

A property decorator function.

(...`args`) => `void`
