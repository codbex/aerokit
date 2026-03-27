# http/client-async

::: tip Documentation
- source: [http/client-async.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/client-async.ts)
:::


## Overview

Defines a single HTTP header, used for both request and response.


## Classes

### HttpAsyncClient


The asynchronous HTTP client class. All request methods return immediately
and execute callbacks upon completion.

#### Constructors

##### Constructor

```ts
new HttpAsyncClient(): HttpAsyncClient;
```

#### Methods
##### getAsync()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### postAsync()

```ts
postAsync(
   url, 
   config, 
   options?): void;
```


Executes an asynchronous HTTP POST request.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The target URL. |
| `config` | [`HttpClientAsyncConfig`](#httpclientasyncconfig) | The callback configuration object. |
| `options?` | [`HttpClientRequestOptions`](#httpclientrequestoptions) | Request configuration options. |

> ::: info Returns
> - **Type**: `void`
> :::
##### putAsync()

```ts
putAsync(
   url, 
   config, 
   options?): void;
```


Executes an asynchronous HTTP PUT request.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The target URL. |
| `config` | [`HttpClientAsyncConfig`](#httpclientasyncconfig) | The callback configuration object. |
| `options?` | [`HttpClientRequestOptions`](#httpclientrequestoptions) | Request configuration options. |

> ::: info Returns
> - **Type**: `void`
> :::
##### patchAsync()

```ts
patchAsync(
   url, 
   config, 
   options?): void;
```


Executes an asynchronous HTTP PATCH request.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The target URL. |
| `config` | [`HttpClientAsyncConfig`](#httpclientasyncconfig) | The callback configuration object. |
| `options?` | [`HttpClientRequestOptions`](#httpclientrequestoptions) | Request configuration options. |

> ::: info Returns
> - **Type**: `void`
> :::
##### deleteAsync()

```ts
deleteAsync(
   url, 
   config, 
   options?): void;
```


Executes an asynchronous HTTP DELETE request.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The target URL. |
| `config` | [`HttpClientAsyncConfig`](#httpclientasyncconfig) | The callback configuration object. |
| `options?` | [`HttpClientRequestOptions`](#httpclientrequestoptions) | Request configuration options. |

> ::: info Returns
> - **Type**: `void`
> :::
##### headAsync()

```ts
headAsync(
   url, 
   config, 
   options?): void;
```


Executes an asynchronous HTTP HEAD request.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The target URL. |
| `config` | [`HttpClientAsyncConfig`](#httpclientasyncconfig) | The callback configuration object. |
| `options?` | [`HttpClientRequestOptions`](#httpclientrequestoptions) | Request configuration options. |

> ::: info Returns
> - **Type**: `void`
> :::
##### traceAsync()

```ts
traceAsync(
   url, 
   config, 
   options?): void;
```


Executes an asynchronous HTTP TRACE request.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The target URL. |
| `config` | [`HttpClientAsyncConfig`](#httpclientasyncconfig) | The callback configuration object. |
| `options?` | [`HttpClientRequestOptions`](#httpclientrequestoptions) | Request configuration options. |

> ::: info Returns
> - **Type**: `void`
> :::
##### execute()

```ts
execute(): void;
```


Initiates the execution of queued asynchronous requests (depending on the underlying Java client's threading model).

> ::: info Returns
> - **Type**: `void`
> :::
## Interfaces

### HttpClientHeader


Defines a single HTTP header, used for both request and response.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
|  `name` | `string` | The name of the header (e.g., 'Content-Type', 'Authorization'). | src/http/client-async.ts:11 |
|  `value` | `string` | The value of the header. | src/http/client-async.ts:13 |

***

### HttpClientParam


Defines a query parameter that will be appended to the URL.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
|  `name` | `string` | The name of the URL query parameter (e.g., 'id'). | src/http/client-async.ts:19 |
|  `value` | `string` | The value of the URL query parameter. | src/http/client-async.ts:21 |

***

### HttpClientFile


Defines a file to be included in a multi-part form data request.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
|  `name` | `string` | The form field name for the file. | src/http/client-async.ts:27 |
|  `value` | `string` | The file path or content. | src/http/client-async.ts:29 |

***

### HttpClientRequestOptions


Configuration options for an HTTP request, mirroring the capabilities of the underlying Java client.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `expectContinueEnabled?` | `boolean` | src/http/client-async.ts:34 |
|  `proxyHost?` | `string` | src/http/client-async.ts:35 |
|  `proxyPort?` | `number` | src/http/client-async.ts:36 |
|  `cookieSpec?` | `string` | src/http/client-async.ts:37 |
|  `redirectsEnabled?` | `boolean` | src/http/client-async.ts:38 |
|  `relativeRedirectsAllowed?` | `boolean` | src/http/client-async.ts:39 |
|  `circularRedirectsAllowed?` | `boolean` | src/http/client-async.ts:40 |
|  `maxRedirects?` | `number` | src/http/client-async.ts:41 |
|  `authenticationEnabled?` | `boolean` | src/http/client-async.ts:42 |
|  `targetPreferredAuthSchemes?` | `string`[] | src/http/client-async.ts:43 |
|  `proxyPreferredAuthSchemes?` | `string`[] | src/http/client-async.ts:44 |
|  `connectionRequestTimeout?` | `number` | src/http/client-async.ts:45 |
|  `connectTimeout?` | `number` | src/http/client-async.ts:46 |
|  `socketTimeout?` | `number` | src/http/client-async.ts:47 |
|  `contentCompressionEnabled?` | `boolean` | src/http/client-async.ts:48 |
|  `sslTrustAllEnabled?` | `boolean` | src/http/client-async.ts:49 |
|  `data?` | `any`[] | src/http/client-async.ts:50 |
|  `text?` | `string` | src/http/client-async.ts:51 |
|  `files?` | [`HttpClientFile`](#httpclientfile)[] | src/http/client-async.ts:52 |
|  `characterEncoding?` | `string` | src/http/client-async.ts:53 |
|  `characterEncodingEnabled?` | `boolean` | src/http/client-async.ts:54 |
|  `contentType?` | `string` | src/http/client-async.ts:55 |
|  `headers?` | [`HttpClientHeader`](#httpclientheader)[] | src/http/client-async.ts:56 |
|  `params?` | [`HttpClientParam`](#httpclientparam)[] | src/http/client-async.ts:57 |
|  `binary?` | `boolean` | src/http/client-async.ts:58 |
|  `context?` | `object` | src/http/client-async.ts:59 |

***

### HttpClientResponse


The structure of the response returned by the HttpClient methods.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
|  `statusCode` | `number` | The HTTP status code (e.g., 200, 404, 500). | src/http/client-async.ts:65 |
|  `statusMessage` | `string` | The status message returned by the server (e.g., 'OK', 'Not Found'). | src/http/client-async.ts:67 |
|  `data` | `any`[] | Response body content as an array of bytes (if requested as binary). | src/http/client-async.ts:69 |
|  `text` | `string` | Response body content as a decoded string. | src/http/client-async.ts:71 |
|  `protocol` | `string` | The protocol used (e.g., 'HTTP/1.1'). | src/http/client-async.ts:73 |
|  `binary` | `boolean` | Indicates if the response was processed as binary data. | src/http/client-async.ts:75 |
|  `headers` | [`HttpClientHeader`](#httpclientheader)[] | Array of all headers received in the response. | src/http/client-async.ts:77 |

***

### HttpClientAsyncConfig


Defines the callback structure for asynchronous requests.
Note: Callbacks are provided as strings containing executable JavaScript code.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
|  `success` | `string` | Mandatory success callback as a **string of JavaScript code**. It will be executed with signature: `(response: HttpClientResponse, context: { [key: string]: any }) => void` | src/http/client-async.ts:91 |
|  `error?` | `string` | Optional error callback as a **string of JavaScript code**. It will be executed with signature: `(exception: any) => void` | src/http/client-async.ts:96 |
|  `cancel?` | `string` | Optional cancel callback as a **string of JavaScript code**. It will be executed with signature: `() => void` | src/http/client-async.ts:101 |

## Functions

### getInstance()

```ts
function getInstance(): HttpAsyncClient;
```


Factory function to retrieve a new instance of the asynchronous client.

#### Returns

[`HttpAsyncClient`](#httpasyncclient)

A new instance of HttpAsyncClient.
