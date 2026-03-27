# http/rs/resource-mappings

::: tip Documentation
- source: [http/rs/resource-mappings.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/rs/resource-mappings.ts)
:::


## Overview

The Resource-mappings API provides...


## Classes

### ResourceMappings


The ResourceMappings class abstracts the mappings between resource URL path templates
and their corresponding resource handler specifications. It acts as the configuration
store for the HttpController.

#### Constructors

##### Constructor

```ts
new ResourceMappings(oConfiguration, controller): ResourceMappings;
```


Constructor function for ResourceMappings instances.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `oConfiguration` | `any` | Configuration object defining initial resource paths and their handlers. |
| `controller` | `any` | The HttpController instance, for which this ResourceMappings handles configuration. |

#### Properties
#### Methods
##### path()
**Parameters**
##### resourcePath()
**Parameters**
##### resource()
**Parameters**
##### configuration()
> ::: info Returns
> - **Type**: `object`
> :::
##### readonly()

```ts
readonly(): this;
```


Removes all but GET resource handlers from all managed resources, making them read-only.

> ::: info Returns
> - **Type**: `this`
> - **Description**: The ResourceMappings instance for method chaining.
> :::
##### disable()

```ts
disable(
   sPath, 
   sVerb, 
   arrConsumes, 
   arrProduces): this;
```


Disables resource handling specifications matching the arguments, effectively removing them from this API.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sPath` | `string` | The path of the resource. |
| `sVerb` | `string` | The HTTP verb (e.g., 'get', 'post'). |
| `arrConsumes` | `string`[] | Array of consumed media types. |
| `arrProduces` | `string`[] | Array of produced media types. |

> ::: info Returns
> - **Type**: `this`
> - **Description**: The ResourceMappings instance for method chaining.
> :::
##### find()

```ts
find(
   sPath, 
   sVerb, 
   arrConsumes, 
   arrProduces): any;
```


Provides a reference to a handler specification matching the supplied arguments.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sPath` | `string` | The path of the resource. |
| `sVerb` | `string` | The HTTP verb (e.g., 'get', 'post'). |
| `arrConsumes` | `string`[] | Array of consumed media types. |
| `arrProduces` | `string`[] | Array of produced media types. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The matching Resource handler specification or undefined.
> :::