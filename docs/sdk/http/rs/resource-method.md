# http/rs/resource-method

> [!tip]
> Auto-generated from
> - source: [http/rs/resource-method.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/rs/resource-method.ts)
> - version: 1.0.0


## Overview

Interface for the internal configuration object of a ResourceMethod.
/
interface ResourceMethodConfig {
    consumes?: string[];
    produces?: string[];
    before?: Function;
    serve?: Function; // Could also be named 'handler'
    catch?: Function;
    finally?: Function;
    // Add other relevant configuration properties as they become known
    [key: string]: any;
}

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [ResourceMethod](#resourcemethod)
- [Parameters](#parameters)

## Classes

### ResourceMethod


Constructor function for ResourceMethod instances.
This class handles the fluent configuration for a single HTTP method handler (e.g., GET)
attached to a Resource.

/**
Constructor function for ResourceMethod instances.
All parameters of the function are optional.

Providing oConfiguration will initialize this instance with some initial configuration instead of starting
entirely from scratch. Note that the configuration object schema must be compliant with the one produced by
the ResourceMethod itself. If this parameter is omited, setup will start from scratch.

Provisioning controller, will inject a reference to the execute method of the controller so that it can be
fluently invoked in the scope of this ResourceMehtod instance as part of the method chaining flow. The execute
function scope is bound to the controller instance for this ResourceMethod.

#### Examples

```js
rs.service()
 .resource('')
		.get()
	.execute();
```

Provisioning resource, will inject a reference ot the HTTP method functions of the Resource class (get, post,
put, delete, remove, method) so that they can be fluently invoked in the scope of this ResourceMethod instance
as part of the method chaining flow. The functions are bound to the resource instance for this ResourceMethod.

```js
rs.service()
 .resource('')
		.get(function(){})
		.post(function(){})
		.put(function(){})
		.remove(function(){})
.execute();
```

Provisioning mappings, will inject a reference ot the resource method of the ResourceMappings class so that
it can be fluently invoked in the scope of this ResourceMethod instance as part of the method chaining flow.
The function is bound to the mappings instance for this ResourceMethod.

```js
rs.service()
 .resource('')
		.get(function(){})
	.resource('{id}')
		.get(function(){})
.execute();
``

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `oConfiguration` | `any` | Initial configuration object. |
| `controller` | `any` | The HttpController instance. |
| `resource` | `any` | The parent Resource instance. |
| `mappings` | `any` | The parent ResourceMappings instance. |

###### Returns

[`ResourceMethod`](#resourcemethod)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `cfg` | `ResourceMethodConfig` | src/http/rs/resource-method.ts:73 |
|  `_resource` | `any` | src/http/rs/resource-method.ts:74 |
|  `controller` | `any` | src/http/rs/resource-method.ts:75 |
|  `resource` | `Function` | src/http/rs/resource-method.ts:78 |
|  `resourcePath` | `Function` | src/http/rs/resource-method.ts:79 |
|  `path` | `Function` | src/http/rs/resource-method.ts:80 |

#### Methods

##### execute()

> ```ts
> execute(): void;
> ```


> Delegates to the HttpController's execute function to process the request.

> > ::: info Returns
> > - **Type**: `void`
> > :::

> ##### get()

> > ```ts
> > get(): any;
> > ```


> Delegates to the parent Resource's 'get' method.

> > ::: info Returns
> > - **Type**: `any`
> > :::

> ##### post()

> > ```ts
> > post(): any;
> > ```


> Delegates to the parent Resource's 'post' method.

> > ::: info Returns
> > - **Type**: `any`
> > :::

> ##### put()

> > ```ts
> > put(): any;
> > ```


> Delegates to the parent Resource's 'put' method.

> > ::: info Returns
> > - **Type**: `any`
> > :::

> ##### delete()

> > ```ts
> > delete(): any;
> > ```


> Delegates to the parent Resource's 'delete' method.

> > ::: info Returns
> > - **Type**: `any`
> > :::

> ##### remove()

> > ```ts
> > remove(): any;
> > ```


> Delegates to the parent Resource's 'remove' method.

> > ::: info Returns
> > - **Type**: `any`
> > :::

> ##### method()

> > ```ts
> > method(): any;
> > ```


> Delegates to the parent Resource's 'method' method.

> > ::: info Returns
> > - **Type**: `any`
> > :::

> ##### configuration()

> > ```ts
> > configuration(): ResourceMethodConfig;
> > ```


> Returns the configuration object for this ResourceMethod instance.

> > ::: info Returns
> > - **Type**: `ResourceMethodConfig`
> > - **Description**: The configuration object.
> > :::

> ##### before()

> > ```ts
> > before(fHandler): ResourceMethod;
> > ```


> Applies a callback function for the **before** phase of processing a matched resource request.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fHandler` | `Function` | Callback function for the before phase. |

###### Returns

[`ResourceMethod`](#resourcemethod)

The ResourceMethod instance for method chaining.

##### serve()

> ```ts
> serve(fHandler): ResourceMethod;
> ```


> Applies a callback function for processing a matched resource request (**serve** phase).

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fHandler` | `Function` | Callback function for the serve phase. |

###### Returns

[`ResourceMethod`](#resourcemethod)

The ResourceMethod instance for method chaining.

##### catch()

> ```ts
> catch(fHandler): ResourceMethod;
> ```


> Applies a callback function for the **catch** errors phase of processing a matched resource request.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fHandler` | `Function` | Callback function for the catch phase. |

###### Returns

[`ResourceMethod`](#resourcemethod)

The ResourceMethod instance for method chaining.

##### finally()

> ```ts
> finally(fHandler): ResourceMethod;
> ```


> Applies a callback function for the **finally** phase of processing a matched resource request.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fHandler` | `Function` | Callback function for the finally phase. |

###### Returns

[`ResourceMethod`](#resourcemethod)

The ResourceMethod instance for method chaining.

##### consumes()

> ```ts
> consumes(mimeTypes): ResourceMethod;
> ```


> Defines the content MIME type(s), which this ResourceMethod expects as input (**consumes**).

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mimeTypes` | `string` \| `string`[] | Sets the mime types that this ResourceMethod is capable to consume. |

###### Returns

[`ResourceMethod`](#resourcemethod)

The ResourceMethod instance for method chaining.

##### produces()

> ```ts
> produces(mimeTypes): ResourceMethod;
> ```


> Defines the HTTP response payload MIME type(s), which this ResourceMethod request processing function outputs, i.e.
> those that it 'produces'. At runtime, the Accept request header will be matched for compatibility with this setting
> to elicit request processing functions.
> Note that the matching is performed by compatibility, not strict equality, i.e. the MIME type format wildcards are
> considered too. For example, a request Accept header "*/json" will match a produces setting "application/json".

>    *

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mimeTypes` | `string` \| `string`[] | Sets the mime type(s) that this ResourceMethod may produce. * |

###### Returns

[`ResourceMethod`](#resourcemethod)

The ResourceMethod instance for method chaining.

###### Example

* ```js
   * rs.service()
   *	.resource("")
   * 		.get(function(){})
   * 			.produces(["application/json"])
   * .execute();
   * 	.
   * ```
   *
   * Take care to make sure that the produces constraint correctly describes the response contenty MIME types that the request
   * processing function can produce so that only client request that can accept them land there.
   *
   * A note about method argument multiplicity (string vs array of strings).
   * One of the arguments of the produce method will translate to the response Content-Type property, which is known to be a
   * single value header by [specification](https://tools.ietf.org/html/rfc7231#section-3.1.1.5). There are two reasons why
   * the method accepts array and not a single value only:
   *
   * 1. Normally, when matched, content types are evaluated for semantic compatibility and not strict equality on both sides
   *  - client and server. Providing a range of compatible MIME types instead of single value, increases the range of acceptable
   * requests for procesing, while reducing the stricness of the requirements on the client making the request. For example,
   * declaring ["text/json,"application/json"] as produced types makes requests with any of these accept headers (or a combination
   * of them) acceptable for processing: "*/json", "text/json", "application/json", "*/*".
   *
   * 2. Although in most cases a handler function will produce payload in single format (media type), it is quite possible to
   * desgin it also as a controller that produces alternative payload in different formats. In these cases you need produces
   * that declares all supported media types so that the request with a relaxed Accept header matching any of them can land
   * in this function. That makes the routing a bit less transparent and dependent on the client, but may prove valuable for
   * certian cases.
   *
   * In any case it is responsibility of the request processing function to set the correct Content-Type header.
   *
   *
