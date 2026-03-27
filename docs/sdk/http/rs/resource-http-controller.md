# http/rs/resource-http-controller

> [!tip]
> Auto-generated from
> - source: [http/rs/resource-http-controller.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/rs/resource-http-controller.ts)
> - version: 1.0.0


## Overview

Interface for the context object passed to handler functions (before, serve, catch).
/
interface RequestContext {
    pathParameters: { [key: string]: any };
    queryParameters: { [key: string]: any };
    response: any;
    res: any;
    request: any;
    req: any;
    // Context properties for error handling might also be attached here
    suppressStack?: boolean;
    httpErrorCode?: number;
    errorMessage?: string;
    errorName?: string;
    errorCode?: any;
}

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [HttpController](#httpcontroller)
- [Parameters](#parameters)
- [Functions](#functions)
  - [service()](#service())

## Classes

### HttpController


The main class for handling HTTP requests and routing them to the correct resource handlers.

#### Indexable

> ```ts
> [key: string]: any
> ```

> ## Parameters

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `oMappings?` | `any` | The mappings configuration for this controller. |

> ###### Returns

> [`HttpController`](#httpcontroller)

> #### Properties

> | Property | Type | Defined in |
> | ------ | ------ | ------ |
> |  `resource` | `Function` | src/http/rs/resource-http-controller.ts:58 |
> |  `resourcePath` | `Function` | src/http/rs/resource-http-controller.ts:59 |
> |  `resourceMappings` | [`ResourceMappings`](resource-mappings.md#resourcemappings) | src/http/rs/resource-http-controller.ts:60 |

> #### Methods

> ##### listen()

> > ```ts
> > listen(request, response): void;
> > ```


> Alias for execute.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `request` | `any` |
> | `response` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

##### execute()

> ```ts
> execute(request?, response?): void;
> ```


> Executes the request handling logic, finding the best matching resource and handler.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `request?` | `any` |
> | `response?` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::

##### mappings()

> ```ts
> mappings(): ResourceMappings;
> ```


> Returns the ResourceMappings instance of this controller.

> ###### Returns

> [`ResourceMappings`](resource-mappings.md#resourcemappings)

> ##### sendError()

> > ```ts
> > sendError(
> >    httpErrorCode, 
> >    applicationErrorCode, 
> >    errorName, 
> >    errorDetails): void;
> > ```


> Sends an error response to the client, formatted based on the accepted media type.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `httpErrorCode` | `number` |
> | `applicationErrorCode` | `any` |
> | `errorName` | `string` |
> | `errorDetails` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::

##### closeResponse()

> ```ts
> closeResponse(): void;
> ```


Flushes and closes the HTTP response stream.

> ::: info Returns
> - **Type**: `void`
> :::

## Functions

### service()

> ```ts
> function service(oConfig?): HttpController;
> ```


Creates a service (HttpController) instance, optionally initialized with oMappings.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `oConfig?` | `any` | Configuration object or configuration builder with configuration() getter function. |

#### Returns

[`HttpController`](#httpcontroller)

A new HttpController instance.
