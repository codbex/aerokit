# http/utils

> [!tip]
> Auto-generated from
> - source: [http/utils.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/utils.ts)
> - version: 1.0.0


## Overview

A utility class providing static methods to standardize and send
common HTTP responses (success and error) with application/json content type.
/
import { response } from "@aerokit/sdk/http";

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [HttpUtils](#httputils)
- [Returns](#returns)

## Classes

### HttpUtils


Provides convenient static methods for sending standard HTTP responses.
All responses are automatically formatted as 'application/json'.

## Returns

[`HttpUtils`](#httputils)

#### Methods

##### sendResponseOk()

> ```ts
> static sendResponseOk(entity): void;
> ```


> Sends a successful response with HTTP status 200 (OK).
> The provided entity is serialized as the JSON response body.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `entity` | `any` | The data entity to return in the response body. |

> ::: info Returns
> - **Type**: `void`
> :::

##### sendResponseCreated()

> ```ts
> static sendResponseCreated(entity): void;
> ```


> Sends a successful response with HTTP status 201 (Created).
> Typically used after a resource has been successfully created.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `entity` | `any` | The data entity of the newly created resource. |

> ::: info Returns
> - **Type**: `void`
> :::

##### sendResponseNoContent()

> ```ts
> static sendResponseNoContent(): void;
> ```


> Sends a successful response with HTTP status 204 (No Content).
> Typically used for successful DELETE requests or updates that do not return a body.

> > ::: info Returns
> > - **Type**: `void`
> > :::

> ##### sendResponseBadRequest()

> > ```ts
> > static sendResponseBadRequest(message): void;
> > ```


> Sends an error response with HTTP status 400 (Bad Request).
> Used when the request could not be understood or processed due to client-side errors (e.g., validation failure).

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `message` | `string` | A descriptive error message explaining why the request was invalid. |

> ::: info Returns
> - **Type**: `void`
> :::

##### sendForbiddenRequest()

> ```ts
> static sendForbiddenRequest(message): void;
> ```


> Sends an error response with HTTP status 403 (Forbidden).
> Used when the client is authenticated but does not have the necessary permissions to access the resource.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `message` | `string` | A descriptive error message. |

> ::: info Returns
> - **Type**: `void`
> :::

##### sendResponseNotFound()

> ```ts
> static sendResponseNotFound(message): void;
> ```


> Sends an error response with HTTP status 404 (Not Found).
> Used when the requested resource could not be found.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `message` | `string` | A descriptive error message. |

> ::: info Returns
> - **Type**: `void`
> :::

##### sendInternalServerError()

> ```ts
> static sendInternalServerError(message): void;
> ```


> Sends an error response with HTTP status 500 (Internal Server Error).
> Used for unexpected server-side conditions encountered during processing.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `message` | `string` | A descriptive error message (should mask internal details in production). |

> ::: info Returns
> - **Type**: `void`
> :::
