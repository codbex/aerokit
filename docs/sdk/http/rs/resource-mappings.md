# http/rs/resource-mappings

::: tip Documentation
- source: [http/rs/resource-mappings.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/rs/resource-mappings.ts)
:::

## Overview



## Classes

### ResourceMappings

#### path()

Creates or retrieves a Resource object corresponding to the given path.
The second, optional argument can be used to initialize the resource.

> ```ts
> path(sPath: string, oConfiguration: any): Resource;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sPath` | `string` | The URL path template for the resource (e.g., &quot;users/{id}&quot;). |
> | `oConfiguration` | `any` | Optional configuration object for initial resource setup. |
>
> ::: info Returns
> - **Type**: `Resource`
> - **Description**: The created or existing Resource instance.
> :::

#### resourcePath()

Alias for path().

> ```ts
> resourcePath(sPath: string, oConfiguration: any): Resource;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sPath` | `string` |  |
> | `oConfiguration` | `any` |  |
>
> ::: info Returns
> - **Type**: `Resource`
> - **Description**: 
> :::

#### resource()

Alias for path().

> ```ts
> resource(sPath: string, oConfiguration: any): Resource;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sPath` | `string` |  |
> | `oConfiguration` | `any` |  |
>
> ::: info Returns
> - **Type**: `Resource`
> - **Description**: 
> :::

#### configuration()

Returns the compiled configuration object for all resources managed by this ResourceMappings.
The configuration is structured to be consumed by the HttpController&#x27;s routing logic.

> ```ts
> configuration(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### readonly()

Removes all but GET resource handlers from all managed resources, making them read-only.

> ```ts
> readonly(): this;
> ```
>
>
> ::: info Returns
> - **Type**: `this`
> - **Description**: The ResourceMappings instance for method chaining.
> :::

#### disable()

Disables resource handling specifications matching the arguments, effectively removing them from this API.

> ```ts
> disable(sPath: string, sVerb: string, arrConsumes: any, arrProduces: any): this;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sPath` | `string` | The path of the resource. |
> | `sVerb` | `string` | The HTTP verb (e.g., &#x27;get&#x27;, &#x27;post&#x27;). |
> | `arrConsumes` | `any` | Array of consumed media types. |
> | `arrProduces` | `any` | Array of produced media types. |
>
> ::: info Returns
> - **Type**: `this`
> - **Description**: The ResourceMappings instance for method chaining.
> :::

#### find()

Provides a reference to a handler specification matching the supplied arguments.

> ```ts
> find(sPath: string, sVerb: string, arrConsumes: any, arrProduces: any): any;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `sPath` | `string` | The path of the resource. |
> | `sVerb` | `string` | The HTTP verb (e.g., &#x27;get&#x27;, &#x27;post&#x27;). |
> | `arrConsumes` | `any` | Array of consumed media types. |
> | `arrProduces` | `any` | Array of produced media types. |
>
> ::: info Returns
> - **Type**: `any`
> - **Description**: The matching Resource handler specification or undefined.
> :::

