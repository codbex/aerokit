# http/rs/resource-mappings

> [!tip]
> Auto-generated from
> - source: [http/rs/resource-mappings.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/rs/resource-mappings.ts)
> - version: 1.0.0


## Overview

The ResourceMappings class abstracts the mappings between resource URL path templates
and their corresponding resource handler specifications. It acts as the configuration
store for the HttpController.

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [ResourceMappings](#resourcemappings)
- [Parameters](#parameters)

## Classes

### ResourceMappings


The ResourceMappings class abstracts the mappings between resource URL path templates
and their corresponding resource handler specifications. It acts as the configuration
store for the HttpController.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `oConfiguration` | `any` | Configuration object defining initial resource paths and their handlers. |
| `controller` | `any` | The HttpController instance, for which this ResourceMappings handles configuration. |

###### Returns

[`ResourceMappings`](#resourcemappings)

#### Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
|  `resources` | `object` | `{}` | src/http/rs/resource-mappings.ts:10 |
|  `controller` | `any` | `undefined` | src/http/rs/resource-mappings.ts:11 |
|  `execute` | `any` | `undefined` | src/http/rs/resource-mappings.ts:12 |

#### Methods

##### path()

> ```ts
> path(sPath, oConfiguration?): Resource;
> ```


> Creates or retrieves a Resource object corresponding to the given path.
> The second, optional argument can be used to initialize the resource.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sPath` | `string` | The URL path template for the resource (e.g., "users/{id}"). |
> | `oConfiguration?` | `any` | Optional configuration object for initial resource setup. |
> 
> ###### Returns
> 
> [`Resource`](resource.md#resource)
> 
> The created or existing Resource instance.
> 
> ##### resourcePath()
> 
> > ```ts
> > resourcePath(sPath, oConfiguration?): Resource;
> > ```
> 
> 
> > Alias for path().
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `sPath` | `string` |
> | `oConfiguration?` | `any` |
> 
> ###### Returns
> 
> [`Resource`](resource.md#resource)
> 
> ##### resource()
> 
> > ```ts
> > resource(sPath, oConfiguration?): Resource;
> > ```
> 
> 
> > Alias for path().
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `sPath` | `string` |
> | `oConfiguration?` | `any` |
> 
> ###### Returns
> 
> [`Resource`](resource.md#resource)
> 
> ##### configuration()
> 
> > ```ts
> > configuration(): object;
> > ```
> 
> 
> > Returns the compiled configuration object for all resources managed by this ResourceMappings.
> > The configuration is structured to be consumed by the HttpController's routing logic.
> 
> > > ::: info Returns
> > > - **Type**: `object`
> > > :::
> 
> > ##### readonly()
> 
> > > ```ts
> > > readonly(): this;
> > > ```
> 
> 
> > Removes all but GET resource handlers from all managed resources, making them read-only.
> 
> > > ::: info Returns
> > > - **Type**: `this`
> > > - **Description**: The ResourceMappings instance for method chaining.
> > > :::
> 
> > ##### disable()
> 
> > > ```ts
> > > disable(
> > >    sPath, 
> > >    sVerb, 
> > >    arrConsumes, 
> > >    arrProduces): this;
> > > ```
> 
> 
> > Disables resource handling specifications matching the arguments, effectively removing them from this API.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sPath` | `string` | The path of the resource. |
> | `sVerb` | `string` | The HTTP verb (e.g., 'get', 'post'). |
> | `arrConsumes` | `string`[] | Array of consumed media types. |
> | `arrProduces` | `string`[] | Array of produced media types. |

> ::: info Returns
> - **Type**: `this`
> - **Description**: The ResourceMappings instance for method chaining.
> :::

##### find()

> ```ts
> find(
>    sPath, 
>    sVerb, 
>    arrConsumes, 
>    arrProduces): any;
> ```


> Provides a reference to a handler specification matching the supplied arguments.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sPath` | `string` | The path of the resource. |
> | `sVerb` | `string` | The HTTP verb (e.g., 'get', 'post'). |
> | `arrConsumes` | `string`[] | Array of consumed media types. |
> | `arrProduces` | `string`[] | Array of produced media types. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The matching Resource handler specification or undefined.
> :::
