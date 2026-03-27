# http/client

::: tip Documentation
- source: [http/client.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/client.ts)
:::

## Overview



## Classes

### HttpClient

#### get()

Executes a synchronous HTTP GET request.

> ```ts
> static get(url: string, options: HttpClientRequestOptions): HttpClientResponse;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `url` | `string` | The target URL. |
> | `options` | `HttpClientRequestOptions` | Configuration options for the request. |
>
> ::: info Returns
> - **Type**: `HttpClientResponse`
> - **Description**: The parsed response object containing status, headers, and body.
> :::

#### post()

Executes a synchronous HTTP POST request.

> ```ts
> static post(url: string, options: HttpClientRequestOptions): HttpClientResponse;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `url` | `string` | The target URL. |
> | `options` | `HttpClientRequestOptions` | Configuration options for the request, including request body in &#x60;text&#x60; or &#x60;data&#x60;. |
>
> ::: info Returns
> - **Type**: `HttpClientResponse`
> - **Description**: The parsed response object.
> :::

#### put()

Executes a synchronous HTTP PUT request.

> ```ts
> static put(url: string, options: HttpClientRequestOptions): HttpClientResponse;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `url` | `string` | The target URL. |
> | `options` | `HttpClientRequestOptions` | Configuration options for the request. |
>
> ::: info Returns
> - **Type**: `HttpClientResponse`
> - **Description**: The parsed response object.
> :::

#### patch()

Executes a synchronous HTTP PATCH request.

> ```ts
> static patch(url: string, options: HttpClientRequestOptions): HttpClientResponse;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `url` | `string` | The target URL. |
> | `options` | `HttpClientRequestOptions` | Configuration options for the request. |
>
> ::: info Returns
> - **Type**: `HttpClientResponse`
> - **Description**: The parsed response object.
> :::

#### delete()

Executes a synchronous HTTP DELETE request.

> ```ts
> static delete(url: string, options: HttpClientRequestOptions): HttpClientResponse;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `url` | `string` | The target URL. |
> | `options` | `HttpClientRequestOptions` | Configuration options for the request. |
>
> ::: info Returns
> - **Type**: `HttpClientResponse`
> - **Description**: The parsed response object.
> :::

#### del()

Alias for HttpClient.delete. Executes a synchronous HTTP DELETE request.

> ```ts
> static del(url: string, options: HttpClientRequestOptions): HttpClientResponse;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `url` | `string` | The target URL. |
> | `options` | `HttpClientRequestOptions` | Configuration options for the request. |
>
> ::: info Returns
> - **Type**: `HttpClientResponse`
> - **Description**: The parsed response object.
> :::

#### head()

Executes a synchronous HTTP HEAD request (fetches headers only).

> ```ts
> static head(url: string, options: HttpClientRequestOptions): HttpClientResponse;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `url` | `string` | The target URL. |
> | `options` | `HttpClientRequestOptions` | Configuration options for the request. |
>
> ::: info Returns
> - **Type**: `HttpClientResponse`
> - **Description**: The parsed response object. The body (&#x60;text&#x60; and &#x60;data&#x60;) will typically be empty.
> :::

#### trace()

Executes a synchronous HTTP TRACE request.

> ```ts
> static trace(url: string, options: HttpClientRequestOptions): HttpClientResponse;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `url` | `string` | The target URL. |
> | `options` | `HttpClientRequestOptions` | Configuration options for the request. |
>
> ::: info Returns
> - **Type**: `HttpClientResponse`
> - **Description**: The parsed response object.
> :::

