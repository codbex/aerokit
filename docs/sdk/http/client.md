# http/client

> [!tip]
> Auto-generated from
> - source: [http/client.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/client.ts)
> - version: 1.0.0


## Overview

Provides a JavaScript/TypeScript wrapper (Facade) for making synchronous HTTP requests.

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [HttpClient](#httpclient)
- [Returns](#returns)
- [Interfaces](#interfaces)
  - [HttpClientHeader](#httpclientheader)
  - [HttpClientParam](#httpclientparam)
  - [HttpClientFile](#httpclientfile)
  - [HttpClientRequestOptions](#httpclientrequestoptions)
  - [HttpClientResponse](#httpclientresponse)

## Classes

### HttpClient


A static class providing methods for making synchronous HTTP requests.
All methods call the underlying Java Facade and parse the JSON response.

## Returns

[`HttpClient`](#httpclient)

#### Methods

##### get()

> ```ts
> static get(url, options?): HttpClientResponse;
> ```


> Executes a synchronous HTTP GET request.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The target URL. |
| `options` | [`HttpClientRequestOptions`](#httpclientrequestoptions) | Configuration options for the request. |

###### Returns

[`HttpClientResponse`](#httpclientresponse)

The parsed response object containing status, headers, and body.

##### post()

> ```ts
> static post(url, options?): HttpClientResponse;
> ```


> Executes a synchronous HTTP POST request.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The target URL. |
| `options` | [`HttpClientRequestOptions`](#httpclientrequestoptions) | Configuration options for the request, including request body in `text` or `data`. |

###### Returns

[`HttpClientResponse`](#httpclientresponse)

The parsed response object.

##### put()

> ```ts
> static put(url, options?): HttpClientResponse;
> ```


> Executes a synchronous HTTP PUT request.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The target URL. |
| `options` | [`HttpClientRequestOptions`](#httpclientrequestoptions) | Configuration options for the request. |

###### Returns

[`HttpClientResponse`](#httpclientresponse)

The parsed response object.

##### patch()

> ```ts
> static patch(url, options?): HttpClientResponse;
> ```


> Executes a synchronous HTTP PATCH request.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The target URL. |
| `options` | [`HttpClientRequestOptions`](#httpclientrequestoptions) | Configuration options for the request. |

###### Returns

[`HttpClientResponse`](#httpclientresponse)

The parsed response object.

##### delete()

> ```ts
> static delete(url, options?): HttpClientResponse;
> ```


> Executes a synchronous HTTP DELETE request.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The target URL. |
| `options` | [`HttpClientRequestOptions`](#httpclientrequestoptions) | Configuration options for the request. |

###### Returns

[`HttpClientResponse`](#httpclientresponse)

The parsed response object.

##### del()

> ```ts
> static del(url, options?): HttpClientResponse;
> ```


> Alias for [HttpClient.delete](#delete). Executes a synchronous HTTP DELETE request.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The target URL. |
| `options` | [`HttpClientRequestOptions`](#httpclientrequestoptions) | Configuration options for the request. |

###### Returns

[`HttpClientResponse`](#httpclientresponse)

The parsed response object.

##### head()

> ```ts
> static head(url, options?): HttpClientResponse;
> ```


> Executes a synchronous HTTP HEAD request (fetches headers only).

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The target URL. |
| `options` | [`HttpClientRequestOptions`](#httpclientrequestoptions) | Configuration options for the request. |

###### Returns

[`HttpClientResponse`](#httpclientresponse)

The parsed response object. The body (`text` and `data`) will typically be empty.

##### trace()

> ```ts
> static trace(url, options?): HttpClientResponse;
> ```


> Executes a synchronous HTTP TRACE request.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The target URL. |
| `options` | [`HttpClientRequestOptions`](#httpclientrequestoptions) | Configuration options for the request. |

###### Returns

[`HttpClientResponse`](#httpclientresponse)

The parsed response object.

## Interfaces

### HttpClientHeader


Defines a single HTTP header, used for both request and response.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
|  `name` | `string` | The name of the header (e.g., 'Content-Type', 'Authorization'). | src/http/client.ts:13 |
|  `value` | `string` | The value of the header. | src/http/client.ts:15 |

***

### HttpClientParam


Defines a query parameter that will be appended to the URL.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
|  `name` | `string` | The name of the URL query parameter (e.g., 'id'). | src/http/client.ts:23 |
|  `value` | `string` | The value of the URL query parameter. | src/http/client.ts:25 |

***

### HttpClientFile


Defines a file to be included in a multi-part form data request.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
|  `name` | `string` | The form field name for the file. | src/http/client.ts:33 |
|  `value` | `string` | The file path or content (behavior depends on the underlying Java implementation). | src/http/client.ts:35 |

***

### HttpClientRequestOptions


Configuration options for an HTTP request, mirroring the capabilities of the underlying Java client.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
|  `expectContinueEnabled?` | `boolean` | Whether 'Expect: 100-Continue' handshake is enabled. Defaults to false. | src/http/client.ts:43 |
|  `proxyHost?` | `string` | The proxy hostname to use for the request. | src/http/client.ts:45 |
|  `proxyPort?` | `number` | The proxy port number. | src/http/client.ts:47 |
|  `cookieSpec?` | `string` | The cookie specification to use (e.g., 'default', 'netscape'). | src/http/client.ts:49 |
|  `redirectsEnabled?` | `boolean` | Whether automatic redirects are enabled. Defaults to true. | src/http/client.ts:51 |
|  `relativeRedirectsAllowed?` | `boolean` | Whether relative redirects should be allowed. Defaults to true. | src/http/client.ts:53 |
|  `circularRedirectsAllowed?` | `boolean` | Whether circular redirects (infinite loops) should be allowed. Defaults to false. | src/http/client.ts:55 |
|  `maxRedirects?` | `number` | The maximum number of redirects to follow. | src/http/client.ts:57 |
|  `authenticationEnabled?` | `boolean` | Whether authentication handling is enabled. | src/http/client.ts:59 |
|  `targetPreferredAuthSchemes?` | `string`[] | Array of preferred authentication schemes for the target host. | src/http/client.ts:61 |
|  `proxyPreferredAuthSchemes?` | `string`[] | Array of preferred authentication schemes for the proxy. | src/http/client.ts:63 |
|  `connectionRequestTimeout?` | `number` | Timeout in milliseconds for requesting a connection from the connection manager. | src/http/client.ts:65 |
|  `connectTimeout?` | `number` | Timeout in milliseconds for establishing the connection. | src/http/client.ts:67 |
|  `socketTimeout?` | `number` | Socket timeout (timeout for waiting for data) in milliseconds. | src/http/client.ts:69 |
|  `contentCompressionEnabled?` | `boolean` | Whether automatic content compression (e.g., gzip) is enabled. | src/http/client.ts:71 |
|  `sslTrustAllEnabled?` | `boolean` | Whether to trust all SSL certificates (use only for testing non-production systems). | src/http/client.ts:73 |
|  `data?` | `any`[] | Data to be sent as the request body, typically as an array of bytes/integers. | src/http/client.ts:75 |
|  `text?` | `string` | Text content to be sent as the request body. Takes precedence over `data`. | src/http/client.ts:77 |
|  `files?` | [`HttpClientFile`](#httpclientfile)[] | Array of files for multi-part form data submissions. | src/http/client.ts:79 |
|  `characterEncoding?` | `string` | The character encoding (charset) to use for the request body (e.g., 'UTF-8'). | src/http/client.ts:81 |
|  `characterEncodingEnabled?` | `boolean` | Whether to enforce the character encoding. | src/http/client.ts:83 |
|  `contentType?` | `string` | The Content-Type header value for the request body. | src/http/client.ts:85 |
|  `headers?` | [`HttpClientHeader`](#httpclientheader)[] | Array of custom headers to include in the request. | src/http/client.ts:87 |
|  `params?` | [`HttpClientParam`](#httpclientparam)[] | Array of query parameters to be appended to the URL. | src/http/client.ts:89 |
|  `binary?` | `boolean` | If true, treats the response body as binary data. | src/http/client.ts:91 |
|  `context?` | `object` | Optional context map for advanced configuration of the underlying Java client. | src/http/client.ts:93 |

***

### HttpClientResponse


The structure of the response returned by the HttpClient methods.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
|  `statusCode` | `number` | The HTTP status code (e.g., 200, 404, 500). | src/http/client.ts:101 |
|  `statusMessage` | `string` | The status message returned by the server (e.g., 'OK', 'Not Found'). | src/http/client.ts:103 |
|  `data` | `any`[] | Response body content as an array of bytes (if requested as binary). | src/http/client.ts:105 |
|  `text` | `string` | Response body content as a decoded string. | src/http/client.ts:107 |
|  `protocol` | `string` | The protocol used (e.g., 'HTTP/1.1'). | src/http/client.ts:109 |
|  `binary` | `boolean` | Indicates if the response was processed as binary data. | src/http/client.ts:111 |
|  `headers` | [`HttpClientHeader`](#httpclientheader)[] | Array of all headers received in the response. | src/http/client.ts:113 |
