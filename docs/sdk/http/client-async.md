# http/client-async

## Overview

::: tip Module
- package: `n/a`
- source: [http/client-async.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/client-async.ts)
- last updated: 
:::



## Classes

### HttpAsyncClient

#### getAsync()

Executes an asynchronous HTTP GET request.

> ```ts
> getAsync(url: string, config: HttpClientAsyncConfig, options: HttpClientRequestOptions): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `url` | `string` | The target URL. |
> | `config` | `HttpClientAsyncConfig` | The callback configuration object. |
> | `options` | `HttpClientRequestOptions` | Request configuration options (e.g., headers, body, params). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### postAsync()

Executes an asynchronous HTTP POST request.

> ```ts
> postAsync(url: string, config: HttpClientAsyncConfig, options: HttpClientRequestOptions): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `url` | `string` | The target URL. |
> | `config` | `HttpClientAsyncConfig` | The callback configuration object. |
> | `options` | `HttpClientRequestOptions` | Request configuration options. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### putAsync()

Executes an asynchronous HTTP PUT request.

> ```ts
> putAsync(url: string, config: HttpClientAsyncConfig, options: HttpClientRequestOptions): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `url` | `string` | The target URL. |
> | `config` | `HttpClientAsyncConfig` | The callback configuration object. |
> | `options` | `HttpClientRequestOptions` | Request configuration options. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### patchAsync()

Executes an asynchronous HTTP PATCH request.

> ```ts
> patchAsync(url: string, config: HttpClientAsyncConfig, options: HttpClientRequestOptions): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `url` | `string` | The target URL. |
> | `config` | `HttpClientAsyncConfig` | The callback configuration object. |
> | `options` | `HttpClientRequestOptions` | Request configuration options. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### deleteAsync()

Executes an asynchronous HTTP DELETE request.

> ```ts
> deleteAsync(url: string, config: HttpClientAsyncConfig, options: HttpClientRequestOptions): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `url` | `string` | The target URL. |
> | `config` | `HttpClientAsyncConfig` | The callback configuration object. |
> | `options` | `HttpClientRequestOptions` | Request configuration options. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### headAsync()

Executes an asynchronous HTTP HEAD request.

> ```ts
> headAsync(url: string, config: HttpClientAsyncConfig, options: HttpClientRequestOptions): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `url` | `string` | The target URL. |
> | `config` | `HttpClientAsyncConfig` | The callback configuration object. |
> | `options` | `HttpClientRequestOptions` | Request configuration options. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### traceAsync()

Executes an asynchronous HTTP TRACE request.

> ```ts
> traceAsync(url: string, config: HttpClientAsyncConfig, options: HttpClientRequestOptions): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `url` | `string` | The target URL. |
> | `config` | `HttpClientAsyncConfig` | The callback configuration object. |
> | `options` | `HttpClientRequestOptions` | Request configuration options. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### execute()

Initiates the execution of queued asynchronous requests (depending on the underlying Java client's threading model).

> ```ts
> execute(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

