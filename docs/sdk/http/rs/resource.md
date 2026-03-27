# http/rs/resource

> [!tip]
> Auto-generated from
> - source: [http/rs/resource.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/rs/resource.ts)
> - version: 1.0.0


## Overview

Compares two arrays for equality by inspecting if they are arrays, refer to the same instance,
have same length and contain equal components in the same order.

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Resource](#resource)
- [Parameters](#parameters)

## Classes

### Resource


Constructs a new Resource instance, initialized with the supplied path parameter and optionally with the second, configuration object parameter.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sPath` | `string` | The base URL path for the resource. |
| `oConfiguration?` | `any` | Optional configuration object (map of method handlers). |
| `controller?` | `any` | Optional controller instance containing an execute method. |
| `mappings?` | `any` | Optional object for resource mappings. |

###### Returns

[`Resource`](#resource)

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
|  `sPath` | `string` | The URL path for this resource. | src/http/rs/resource.ts:33 |
|  `cfg` | `any` | The resource configuration mapping methods to handler specifications. | src/http/rs/resource.ts:35 |
|  `controller` | `any` | The optional controller instance. | src/http/rs/resource.ts:37 |
|  `execute` | `Function` | Bound execute function from the controller. | src/http/rs/resource.ts:39 |
|  `mappings` | `any` | Additional mappings object. | src/http/rs/resource.ts:41 |

#### Methods

##### path()

> ```ts
> path(sPath?): string | Resource;
> ```


> Sets the URL path for this resource, overriding the one specified upon its construction,
> if a path string is provided as argument ot the method (i.e. acts as setter),
> or returns the path set for this resource, if the method is invoked without arguments (i.e. acts as getter).

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sPath?` | `string` | The path property to be set for this resource. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: \| [`Resource`](#resource) The resource instance for method chaining (setter mode), or the path set for this resource (getter mode).
> :::

##### method()

> ```ts
> method(sHttpMethod, oConfiguration?): 
>   | ResourceMethod
>   | ResourceMethod[];
> ```


> Creates a new HTTP method handling specification.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sHttpMethod` | `string` | The HTTP method (method) (e.g., "GET"). |
| `oConfiguration?` | `any` | The handler specification(s) for this HTTP method. Can be a single object or array. |

###### Returns

  \| [`ResourceMethod`](resource-method.md#resourcemethod)
  \| [`ResourceMethod`](resource-method.md#resourcemethod)[]

The ResourceMethod instance, or an array of ResourceMethod instances.

##### get()

###### Call Signature

> ```ts
> get(fServeCb): ResourceMethod;
> ```


> Creates a handling specification for the HTTP method "GET".

> **Parameters**

| Parameter | Type |
| ------ | ------ |
| `fServeCb` | `Function` |

###### Returns

[`ResourceMethod`](resource-method.md#resourcemethod)

The ResourceMethod instance or array.

###### Call Signature

> ```ts
> get(oConfiguration): 
>   | ResourceMethod
>   | ResourceMethod[];
> ```


> Creates a handling specification for the HTTP method "GET".

> **Parameters**

| Parameter | Type |
| ------ | ------ |
| `oConfiguration` | `any` |

###### Returns

  \| [`ResourceMethod`](resource-method.md#resourcemethod)
  \| [`ResourceMethod`](resource-method.md#resourcemethod)[]

The ResourceMethod instance or array.

###### Call Signature

> ```ts
> get(): ResourceMethod;
> ```


> Creates a handling specification for the HTTP method "GET".

> ###### Returns

> [`ResourceMethod`](resource-method.md#resourcemethod)

> The ResourceMethod instance or array.

> ##### post()

> ###### Call Signature

> > ```ts
> > post(fServeCb): ResourceMethod;
> > ```


> Creates a handling specification for the HTTP method "POST".

> **Parameters**

| Parameter | Type |
| ------ | ------ |
| `fServeCb` | `Function` |

###### Returns

[`ResourceMethod`](resource-method.md#resourcemethod)

The ResourceMethod instance or array.

###### Call Signature

> ```ts
> post(oConfiguration): 
>   | ResourceMethod
>   | ResourceMethod[];
> ```


> Creates a handling specification for the HTTP method "POST".

> **Parameters**

| Parameter | Type |
| ------ | ------ |
| `oConfiguration` | `any` |

###### Returns

  \| [`ResourceMethod`](resource-method.md#resourcemethod)
  \| [`ResourceMethod`](resource-method.md#resourcemethod)[]

The ResourceMethod instance or array.

###### Call Signature

> ```ts
> post(): ResourceMethod;
> ```


> Creates a handling specification for the HTTP method "POST".

> ###### Returns

> [`ResourceMethod`](resource-method.md#resourcemethod)

> The ResourceMethod instance or array.

> ##### put()

> ###### Call Signature

> > ```ts
> > put(fServeCb): ResourceMethod;
> > ```


> Creates a handling specification for the HTTP method "PUT".

> **Parameters**

| Parameter | Type |
| ------ | ------ |
| `fServeCb` | `Function` |

###### Returns

[`ResourceMethod`](resource-method.md#resourcemethod)

The ResourceMethod instance or array.

###### Call Signature

> ```ts
> put(oConfiguration): 
>   | ResourceMethod
>   | ResourceMethod[];
> ```


> Creates a handling specification for the HTTP method "PUT".

> **Parameters**

| Parameter | Type |
| ------ | ------ |
| `oConfiguration` | `any` |

###### Returns

  \| [`ResourceMethod`](resource-method.md#resourcemethod)
  \| [`ResourceMethod`](resource-method.md#resourcemethod)[]

The ResourceMethod instance or array.

###### Call Signature

> ```ts
> put(): ResourceMethod;
> ```


> Creates a handling specification for the HTTP method "PUT".

> ###### Returns

> [`ResourceMethod`](resource-method.md#resourcemethod)

> The ResourceMethod instance or array.

> ##### delete()

> ###### Call Signature

> > ```ts
> > delete(fServeCb): ResourceMethod;
> > ```


> Creates a handling specification for the HTTP method "DELETE".

> **Parameters**

| Parameter | Type |
| ------ | ------ |
| `fServeCb` | `Function` |

###### Returns

[`ResourceMethod`](resource-method.md#resourcemethod)

The ResourceMethod instance or array.

###### Call Signature

> ```ts
> delete(oConfiguration): 
>   | ResourceMethod
>   | ResourceMethod[];
> ```


> Creates a handling specification for the HTTP method "DELETE".

> **Parameters**

| Parameter | Type |
| ------ | ------ |
| `oConfiguration` | `any` |

###### Returns

  \| [`ResourceMethod`](resource-method.md#resourcemethod)
  \| [`ResourceMethod`](resource-method.md#resourcemethod)[]

The ResourceMethod instance or array.

###### Call Signature

> ```ts
> delete(): ResourceMethod;
> ```


> Creates a handling specification for the HTTP method "DELETE".

> ###### Returns

> [`ResourceMethod`](resource-method.md#resourcemethod)

> The ResourceMethod instance or array.

> ##### remove()

> ###### Call Signature

> > ```ts
> > remove(fServeCb): ResourceMethod;
> > ```


> Creates a handling specification for the HTTP method "DELETE" (alias for delete()).

> **Parameters**

| Parameter | Type |
| ------ | ------ |
| `fServeCb` | `Function` |

###### Returns

[`ResourceMethod`](resource-method.md#resourcemethod)

The ResourceMethod instance or array.

###### Call Signature

> ```ts
> remove(oConfiguration): 
>   | ResourceMethod
>   | ResourceMethod[];
> ```


> Creates a handling specification for the HTTP method "DELETE" (alias for delete()).

> **Parameters**

| Parameter | Type |
| ------ | ------ |
| `oConfiguration` | `any` |

###### Returns

  \| [`ResourceMethod`](resource-method.md#resourcemethod)
  \| [`ResourceMethod`](resource-method.md#resourcemethod)[]

The ResourceMethod instance or array.

###### Call Signature

> ```ts
> remove(): ResourceMethod;
> ```


> Creates a handling specification for the HTTP method "DELETE" (alias for delete()).

> ###### Returns

> [`ResourceMethod`](resource-method.md#resourcemethod)

> The ResourceMethod instance or array.

> ##### find()

> > ```ts
> > find(
> >    sVerb, 
> >    arrConsumesMimeTypeStrings?, 
> >    arrProducesMimeTypeStrings?): ResourceMethod;
> > ```


> Finds a ResourceMethod with the given constraints.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sVerb` | `string` | The name of the method property of the ResourceMethod in search (e.g., "GET"). |
| `arrConsumesMimeTypeStrings?` | `string`[] | The consumes constraint property of the ResourceMethod in search. |
| `arrProducesMimeTypeStrings?` | `string`[] | The produces constraint property of the ResourceMethod in search. |

###### Returns

[`ResourceMethod`](resource-method.md#resourcemethod)

The found ResourceMethod instance, or undefined if not found.

##### configuration()

> ```ts
> configuration(): any;
> ```


> Returns the configuration of this resource.

> > ::: info Returns
> > - **Type**: `any`
> > - **Description**: The resource configuration object.
> > :::

> ##### redirect()

> > ```ts
> > redirect(fRedirector): Resource;
> > ```


> Instructs redirection of the request base don the parameter. If it is a stirng representing URI, the request will be
> redirected to this URI for any method. If it's a function it will be invoked and epxected to return a URI string to redirect to.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fRedirector` | `string` \| `Function` | The function or string URI to redirect to. * |

###### Returns

[`Resource`](#resource)

The resource instance for method chaining.

##### disable()

> ```ts
> disable(
>    sVerb?, 
>    arrConsumesTypeStrings?, 
>    arrProducesTypeStrings?): Resource;
> ```


> Disables the ResourceMethods that match the given constraints
>    *
>    *

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sVerb?` | `string` | The HTTP verb (e.g., "GET"). |
| `arrConsumesTypeStrings?` | `string`[] | The consumes constraint property of the ResourceMethod in search. |
| `arrProducesTypeStrings?` | `string`[] | The produces constraint property of the ResourceMethod in search. * |

###### Returns

[`Resource`](#resource)

The resource instance for method chaining.

##### readonly()

> ```ts
> readonly(): Resource;
> ```


Disables all but 'read' HTTP methods in this resource (GET, HEAD, TRACE).
   *
   *

###### Returns

[`Resource`](#resource)

The resource instance for method chaining.
