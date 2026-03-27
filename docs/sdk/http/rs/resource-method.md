# http/rs/resource-method

::: tip Documentation
- source: [http/rs/resource-method.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/rs/resource-method.ts)
:::


## Overview

The Resource-method API provides...


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

#### Constructors

##### Constructor

```ts
new ResourceMethod(
   oConfiguration, 
   controller, 
   resource, 
   mappings): ResourceMethod;
```


**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `oConfiguration` | `any` | Initial configuration object. |
| `controller` | `any` | The HttpController instance. |
| `resource` | `any` | The parent Resource instance. |
| `mappings` | `any` | The parent ResourceMappings instance. |

#### Properties
#### Methods
##### execute()
> ::: info Returns
> - **Type**: `void`
> :::
##### get()

```ts
get(): any;
```


Delegates to the parent Resource's 'get' method.

> ::: info Returns
> - **Type**: `any`
> :::
##### post()

```ts
post(): any;
```


Delegates to the parent Resource's 'post' method.

> ::: info Returns
> - **Type**: `any`
> :::
##### put()

```ts
put(): any;
```


Delegates to the parent Resource's 'put' method.

> ::: info Returns
> - **Type**: `any`
> :::
##### delete()

```ts
delete(): any;
```


Delegates to the parent Resource's 'delete' method.

> ::: info Returns
> - **Type**: `any`
> :::
##### remove()

```ts
remove(): any;
```


Delegates to the parent Resource's 'remove' method.

> ::: info Returns
> - **Type**: `any`
> :::
##### method()

```ts
method(): any;
```


Delegates to the parent Resource's 'method' method.

> ::: info Returns
> - **Type**: `any`
> :::
##### configuration()

```ts
configuration(): ResourceMethodConfig;
```


Returns the configuration object for this ResourceMethod instance.

> ::: info Returns
> - **Type**: `ResourceMethodConfig`
> - **Description**: The configuration object.
> :::
##### before()

```ts
before(fHandler): ResourceMethod;
```


Applies a callback function for the **before** phase of processing a matched resource request.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fHandler` | `Function` | Callback function for the before phase. |

##### serve()
**Parameters**
##### catch()
**Parameters**
##### finally()
**Parameters**
##### consumes()
**Parameters**
##### produces()
**Parameters**
###### Example