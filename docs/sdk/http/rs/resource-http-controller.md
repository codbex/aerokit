# http/rs/resource-http-controller

::: tip Documentation
- source: [http/rs/resource-http-controller.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/rs/resource-http-controller.ts)
:::

## Overview



## Classes

### HttpController

#### listen()

Alias for execute.

> ```ts
> listen(request: any, response: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `request` | `any` |  |
> | `response` | `any` |  |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### execute()

Executes the request handling logic, finding the best matching resource and handler.

> ```ts
> execute(request: any, response: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `request` | `any` |  |
> | `response` | `any` |  |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### mappings()

Returns the ResourceMappings instance of this controller.

> ```ts
> mappings(): ResourceMappings;
> ```
>
>
> ::: info Returns
> - **Type**: `ResourceMappings`
> - **Description**: 
> :::

#### sendError()

Sends an error response to the client, formatted based on the accepted media type.

> ```ts
> sendError(httpErrorCode: number, applicationErrorCode: any, errorName: string, errorDetails: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `httpErrorCode` | `number` |  |
> | `applicationErrorCode` | `any` |  |
> | `errorName` | `string` |  |
> | `errorDetails` | `string` |  |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### closeResponse()

Flushes and closes the HTTP response stream.

> ```ts
> closeResponse(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

