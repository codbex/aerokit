# http/rs/resource

::: tip Documentation
- source: [http/rs/resource.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/rs/resource.ts)
:::


## Overview

The Resource API provides...


## Classes

### Resource


Constructs a new Resource instance, initialized with the supplied path parameter and optionally with the second, configuration object parameter.

#### Constructors

##### Constructor

```ts
new Resource(
   sPath, 
   oConfiguration?, 
   controller?, 
   mappings?): Resource;
```


**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sPath` | `string` | The base URL path for the resource. |
| `oConfiguration?` | `any` | Optional configuration object (map of method handlers). |
| `controller?` | `any` | Optional controller instance containing an execute method. |
| `mappings?` | `any` | Optional object for resource mappings. |

#### Properties
#### Methods
##### path()
**Parameters**
##### method()
**Parameters**
##### get()
###### Call Signature
**Parameters**
###### Call Signature
**Parameters**
###### Call Signature
##### post()
###### Call Signature
**Parameters**
###### Call Signature
**Parameters**
###### Call Signature
##### put()
###### Call Signature
**Parameters**
###### Call Signature
**Parameters**
###### Call Signature
##### delete()
###### Call Signature
**Parameters**
###### Call Signature
**Parameters**
###### Call Signature
##### remove()
###### Call Signature
**Parameters**
###### Call Signature
**Parameters**
###### Call Signature
##### find()
**Parameters**
##### configuration()
> ::: info Returns
> - **Type**: `any`
> - **Description**: The resource configuration object.
> :::
##### redirect()

```ts
redirect(fRedirector): Resource;
```


Instructs redirection of the request base don the parameter. If it is a stirng representing URI, the request will be
redirected to this URI for any method. If it's a function it will be invoked and epxected to return a URI string to redirect to.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fRedirector` | `string` \| `Function` | The function or string URI to redirect to. * |

##### disable()
**Parameters**
##### readonly()