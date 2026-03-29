# http/utils

## Overview



::: tip Module
- source: [http/utils.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/utils.ts)
- last updated: 
:::

## Classes

### HttpUtils

#### sendResponseOk()

Sends a successful response with HTTP status 200 (OK).
The provided entity is serialized as the JSON response body.

> ```ts
> static sendResponseOk(entity: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `entity` | `any` | The data entity to return in the response body. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### sendResponseCreated()

Sends a successful response with HTTP status 201 (Created).
Typically used after a resource has been successfully created.

> ```ts
> static sendResponseCreated(entity: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `entity` | `any` | The data entity of the newly created resource. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### sendResponseNoContent()

Sends a successful response with HTTP status 204 (No Content).
Typically used for successful DELETE requests or updates that do not return a body.

> ```ts
> static sendResponseNoContent(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### sendResponseBadRequest()

Sends an error response with HTTP status 400 (Bad Request).
Used when the request could not be understood or processed due to client-side errors (e.g., validation failure).

> ```ts
> static sendResponseBadRequest(message: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `message` | `string` | A descriptive error message explaining why the request was invalid. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### sendForbiddenRequest()

Sends an error response with HTTP status 403 (Forbidden).
Used when the client is authenticated but does not have the necessary permissions to access the resource.

> ```ts
> static sendForbiddenRequest(message: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `message` | `string` | A descriptive error message. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### sendResponseNotFound()

Sends an error response with HTTP status 404 (Not Found).
Used when the requested resource could not be found.

> ```ts
> static sendResponseNotFound(message: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `message` | `string` | A descriptive error message. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### sendInternalServerError()

Sends an error response with HTTP status 500 (Internal Server Error).
Used for unexpected server-side conditions encountered during processing.

> ```ts
> static sendInternalServerError(message: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `message` | `string` | A descriptive error message (should mask internal details in production). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

