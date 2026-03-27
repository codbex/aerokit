# http/response

> [!tip]
> Auto-generated from
> - source: [http/response.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/response.ts)
> - version: 1.0.0


## Overview

Provides a static façade (`Response` class) for managing the HTTP response.
This class wraps a native Java HTTP response object, offering methods for setting
status codes, headers, cookies, and writing content (text, JSON, or binary).
/

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Response](#response)
- [Returns](#returns)
- [Interfaces](#interfaces)
  - [Cookie](#cookie)

## Classes

### Response


The static Response class providing standardized HTTP status codes and methods
for constructing the server's response.

## Returns

[`Response`](#response)

#### Properties

| Property | Modifier | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
|  `ACCEPTED` | `readonly` | `202` | `202` | - | src/http/response.ts:33 |
|  `BAD_GATEWAY` | `readonly` | `502` | `502` | - | src/http/response.ts:34 |
|  `BAD_REQUEST` | `readonly` | `400` | `400` | - | src/http/response.ts:35 |
|  `CONFLICT` | `readonly` | `409` | `409` | - | src/http/response.ts:36 |
|  `CONTINUE` | `readonly` | `100` | `100` | - | src/http/response.ts:37 |
|  `CREATED` | `readonly` | `201` | `201` | - | src/http/response.ts:38 |
|  `EXPECTATION_FAILED` | `readonly` | `417` | `417` | - | src/http/response.ts:39 |
|  `FORBIDDEN` | `readonly` | `403` | `403` | - | src/http/response.ts:40 |
|  `FOUND` | `readonly` | `302` | `302` | - | src/http/response.ts:41 |
|  `GATEWAY_TIMEOUT` | `readonly` | `504` | `504` | - | src/http/response.ts:42 |
|  `GONE` | `readonly` | `410` | `410` | - | src/http/response.ts:43 |
|  `HTTP_VERSION_NOT_SUPPORTED` | `readonly` | `505` | `505` | - | src/http/response.ts:44 |
|  `INTERNAL_SERVER_ERROR` | `readonly` | `500` | `500` | - | src/http/response.ts:45 |
|  `LENGTH_REQUIRED` | `readonly` | `411` | `411` | - | src/http/response.ts:46 |
|  `METHOD_NOT_ALLOWED` | `readonly` | `405` | `405` | - | src/http/response.ts:47 |
|  `MOVED_PERMANENTLY` | `readonly` | `301` | `301` | - | src/http/response.ts:48 |
|  `MOVED_TEMPORARILY` | `readonly` | `302` | `302` | - | src/http/response.ts:49 |
|  `MULTIPLE_CHOICES` | `readonly` | `300` | `300` | - | src/http/response.ts:50 |
|  `NO_CONTENT` | `readonly` | `204` | `204` | - | src/http/response.ts:51 |
|  `NON_AUTHORITATIVE_INFORMATION` | `readonly` | `203` | `203` | - | src/http/response.ts:52 |
|  `NOT_ACCEPTABLE` | `readonly` | `406` | `406` | - | src/http/response.ts:53 |
|  `NOT_FOUND` | `readonly` | `404` | `404` | - | src/http/response.ts:54 |
|  `NOT_IMPLEMENTED` | `readonly` | `501` | `501` | - | src/http/response.ts:55 |
|  `NOT_MODIFIED` | `readonly` | `304` | `304` | - | src/http/response.ts:56 |
|  `OK` | `readonly` | `200` | `200` | - | src/http/response.ts:57 |
|  `PARTIAL_CONTENT` | `readonly` | `206` | `206` | - | src/http/response.ts:58 |
|  `PAYMENT_REQUIRED` | `readonly` | `402` | `402` | - | src/http/response.ts:59 |
|  `PRECONDITION_FAILED` | `readonly` | `412` | `412` | - | src/http/response.ts:60 |
|  `PROXY_AUTHENTICATION_REQUIRED` | `readonly` | `407` | `407` | - | src/http/response.ts:61 |
|  `REQUEST_ENTITY_TOO_LARGE` | `readonly` | `413` | `413` | - | src/http/response.ts:62 |
|  `REQUEST_TIMEOUT` | `readonly` | `408` | `408` | - | src/http/response.ts:63 |
|  `REQUEST_URI_TOO_LONG` | `readonly` | `414` | `414` | - | src/http/response.ts:64 |
|  `REQUESTED_RANGE_NOT_SATISFIABLE` | `readonly` | `416` | `416` | - | src/http/response.ts:65 |
|  `RESET_CONTENT` | `readonly` | `205` | `205` | - | src/http/response.ts:66 |
|  `SEE_OTHER` | `readonly` | `303` | `303` | - | src/http/response.ts:67 |
|  `SERVICE_UNAVAILABLE` | `readonly` | `503` | `503` | - | src/http/response.ts:68 |
|  `SWITCHING_PROTOCOLS` | `readonly` | `101` | `101` | - | src/http/response.ts:69 |
|  `TEMPORARY_REDIRECT` | `readonly` | `307` | `307` | - | src/http/response.ts:70 |
|  `UNAUTHORIZED` | `readonly` | `401` | `401` | - | src/http/response.ts:71 |
|  `UNSUPPORTED_MEDIA_TYPE` | `readonly` | `415` | `415` | - | src/http/response.ts:72 |
|  `USE_PROXY` | `readonly` | `305` | `305` | - | src/http/response.ts:73 |
|  `UNPROCESSABLE_CONTENT` | `readonly` | `422` | `422` | - | src/http/response.ts:74 |
|  `HttpCodesReasons` | `readonly` | `object` | `undefined` | Mapping between HTTP response codes (string) and their corresponding reason-phrases as defined in RFC 7231, section 6.1. | src/http/response.ts:80 |
| `HttpCodesReasons.100` | `public` | `string` | `"Continue"` | - | src/http/response.ts:81 |
| `HttpCodesReasons.101` | `public` | `string` | `"Switching Protocols"` | - | src/http/response.ts:81 |
| `HttpCodesReasons.200` | `public` | `string` | `"OK"` | - | src/http/response.ts:81 |
| `HttpCodesReasons.201` | `public` | `string` | `"Created"` | - | src/http/response.ts:81 |
| `HttpCodesReasons.202` | `public` | `string` | `"Accepted"` | - | src/http/response.ts:82 |
| `HttpCodesReasons.203` | `public` | `string` | `"Non-Authoritative Information"` | - | src/http/response.ts:82 |
| `HttpCodesReasons.204` | `public` | `string` | `"No Content"` | - | src/http/response.ts:82 |
| `HttpCodesReasons.205` | `public` | `string` | `"Reset Content"` | - | src/http/response.ts:83 |
| `HttpCodesReasons.206` | `public` | `string` | `"Partial Content"` | - | src/http/response.ts:83 |
| `HttpCodesReasons.300` | `public` | `string` | `"Multiple Choices"` | - | src/http/response.ts:83 |
| `HttpCodesReasons.301` | `public` | `string` | `"Moved Permanently"` | - | src/http/response.ts:84 |
| `HttpCodesReasons.302` | `public` | `string` | `"Found"` | - | src/http/response.ts:84 |
| `HttpCodesReasons.303` | `public` | `string` | `"See Other"` | - | src/http/response.ts:84 |
| `HttpCodesReasons.304` | `public` | `string` | `"Not Modified"` | - | src/http/response.ts:84 |
| `HttpCodesReasons.305` | `public` | `string` | `"Use Proxy"` | - | src/http/response.ts:85 |
| `HttpCodesReasons.307` | `public` | `string` | `"Temporary Redirect"` | - | src/http/response.ts:85 |
| `HttpCodesReasons.400` | `public` | `string` | `"Bad Request"` | - | src/http/response.ts:85 |
| `HttpCodesReasons.401` | `public` | `string` | `"Unauthorized"` | - | src/http/response.ts:86 |
| `HttpCodesReasons.402` | `public` | `string` | `"Payment Required"` | - | src/http/response.ts:86 |
| `HttpCodesReasons.403` | `public` | `string` | `"Forbidden"` | - | src/http/response.ts:86 |
| `HttpCodesReasons.404` | `public` | `string` | `"Not Found"` | - | src/http/response.ts:87 |
| `HttpCodesReasons.405` | `public` | `string` | `"Method Not Allowed"` | - | src/http/response.ts:87 |
| `HttpCodesReasons.406` | `public` | `string` | `"Not Acceptable"` | - | src/http/response.ts:87 |
| `HttpCodesReasons.407` | `public` | `string` | `"Proxy Authentication Required"` | - | src/http/response.ts:88 |
| `HttpCodesReasons.408` | `public` | `string` | `"Request Timeout"` | - | src/http/response.ts:88 |
| `HttpCodesReasons.409` | `public` | `string` | `"Conflict"` | - | src/http/response.ts:88 |
| `HttpCodesReasons.410` | `public` | `string` | `"Gone"` | - | src/http/response.ts:89 |
| `HttpCodesReasons.411` | `public` | `string` | `"Length Required"` | - | src/http/response.ts:89 |
| `HttpCodesReasons.412` | `public` | `string` | `"Precondition Failed"` | - | src/http/response.ts:89 |
| `HttpCodesReasons.413` | `public` | `string` | `"Payload Too Large"` | - | src/http/response.ts:90 |
| `HttpCodesReasons.414` | `public` | `string` | `"URI Too Large"` | - | src/http/response.ts:90 |
| `HttpCodesReasons.415` | `public` | `string` | `"Unsupported Media Type"` | - | src/http/response.ts:90 |
| `HttpCodesReasons.416` | `public` | `string` | `"Range Not Satisfiable"` | - | src/http/response.ts:91 |
| `HttpCodesReasons.417` | `public` | `string` | `"Expectation Failed"` | - | src/http/response.ts:91 |
| `HttpCodesReasons.422` | `public` | `string` | `"Unprocessable Content"` | - | src/http/response.ts:91 |
| `HttpCodesReasons.426` | `public` | `string` | `"Upgrade Required"` | - | src/http/response.ts:92 |
| `HttpCodesReasons.500` | `public` | `string` | `"Internal Server Error"` | - | src/http/response.ts:92 |
| `HttpCodesReasons.501` | `public` | `string` | `"Not Implemented"` | - | src/http/response.ts:92 |
| `HttpCodesReasons.502` | `public` | `string` | `"Bad Gateway"` | - | src/http/response.ts:93 |
| `HttpCodesReasons.503` | `public` | `string` | `"Service Unavailable"` | - | src/http/response.ts:93 |
| `HttpCodesReasons.504` | `public` | `string` | `"Gateway Timmeout"` | - | src/http/response.ts:93 |
| `HttpCodesReasons.505` | `public` | `string` | `"HTTP Version Not Supported"` | - | src/http/response.ts:94 |
| `HttpCodesReasons.getReason` | `public` | (`code`) => `string` | `undefined` | Utility method that accepts an HTTP code and returns its corresponding reason-phrase. **Throws** Error if the code is not a valid integer in the range [100-505]. | src/http/response.ts:102 |

#### Methods

##### isValid()

> ```ts
> static isValid(): boolean;
> ```


> Checks if the response façade is currently valid or connected to an active request context.

> > ::: info Returns
> > - **Type**: `boolean`
> > - **Description**: True if valid, false otherwise.
> > :::

> ##### json()

> > ```ts
> > static json(obj): void;
> > ```


> Serializes a JavaScript object to JSON, sets the `Content-Type: application/json` header,
> and writes the JSON string to the response output stream.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `obj` | `any` | The JavaScript object to be serialized and sent. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### print() > ```ts static print(text): void; ``` Writes a string of text to the response body using **UTF-8** encoding. Note: This method automatically handles flushing the output stream.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `text` | `string` | The string content to write. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### println() > ```ts static println(text): void; ``` Writes a string of text followed by a newline character (`\n`) to the response body using **UTF-8** encoding.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `text` | `string` | The string content to write. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### write() > ```ts static write(bytes): void; ``` Writes an array of bytes directly to the response output stream, typically used for binary data.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `bytes` | `any`[] | The array of bytes to write. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### isCommitted() > ```ts static isCommitted(): boolean; ``` Checks if the response headers and status have already been sent to the client.
> :::

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the response is committed, false otherwise.
> :::

##### setContentType()

> ```ts
> static setContentType(contentType): void;
> ```


> Sets the value of the `Content-Type` header.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `contentType` | `string` | The MIME type string (e.g., 'text/html', 'application/pdf'). |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### flush() > ```ts static flush(): void; ``` Forces any buffered output to be written to the client.
> :::

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### close() > ```ts static close(): void; ``` Closes the response output stream.
> :::

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### addCookie() > ```ts static addCookie(cookie): void; ``` Adds a cookie to the response. The cookie object is serialized to JSON before being passed to the underlying Java facade.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `cookie` | [`Cookie`](#cookie) | The cookie definition object. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### containsHeader() > ```ts static containsHeader(name): boolean; ``` Checks if a response header with the specified name has already been set.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the header. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the header exists, false otherwise.
> :::

##### encodeURL()

> ```ts
> static encodeURL(url): string;
> ```


> Encodes a URL for use in redirects or forms, including session information if necessary.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `url` | `string` | The URL to encode. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The encoded URL string.
> :::

##### getCharacterEncoding()

> ```ts
> static getCharacterEncoding(): string;
> ```


> Gets the character encoding used for the response body.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The character encoding string.
> > :::

> ##### encodeRedirectURL()

> > ```ts
> > static encodeRedirectURL(url): string;
> > ```


> Encodes a URL for use in the `Location` header of a redirect response.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `url` | `string` | The redirect URL to encode. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The encoded redirect URL string.
> :::

##### getContentType()

> ```ts
> static getContentType(): string;
> ```


> Gets the current `Content-Type` header value.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The content type string.
> > :::

> ##### sendError()

> > ```ts
> > static sendError(status, message?): void;
> > ```


> Sends an HTTP error response to the client with the specified status code and optional message.
> This bypasses the normal response body writing process.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `status` | `number` | The HTTP status code (e.g., 404, 500). |
> | `message?` | `string` | An optional message to include in the error response. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setCharacterEncoding() > ```ts static setCharacterEncoding(charset): void; ``` Sets the character encoding to be used for the response body (e.g., 'UTF-8').
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `charset` | `string` | The character set string. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### sendRedirect() > ```ts static sendRedirect(location): void; ``` Sends a redirect response (status code 302 by default) to the client.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `location` | `string` | The new URL to redirect the client to. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setContentLength() > ```ts static setContentLength(length): void; ``` Sets the `Content-Length` header for the response.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `length` | `number` | The size of the response body in bytes. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setHeader() > ```ts static setHeader(name, value): void; ``` Sets a response header with the given name and value. If the header already exists, its value is overwritten.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the header. |
> | `value` | `string` | The value of the header. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### addHeader() > ```ts static addHeader(name, value): void; ``` Adds a response header with the given name and value. If the header already exists, a second header with the same name is added.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the header. |
> | `value` | `string` | The value of the header. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setStatus() > ```ts static setStatus(status): void; ``` Sets the HTTP status code for the response.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `status` | `number` | The integer status code (e.g., 200, 404). |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### reset() > ```ts static reset(): void; ``` Clears all buffers, status code, and headers from the response, allowing a new response to be generated. This is only possible if the response has not yet been committed.
> :::

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getHeader() > ```ts static getHeader(name): string; ``` Gets the value of a specific header. If multiple headers with the same name exist, it returns the first one.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the header. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The header value string.
> :::

##### setLocale()

> ```ts
> static setLocale( language, country?, variant?): void;
> ```


> Sets the locale for the response, which may affect language and date/time formatting.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `language` | `string` | The language code (e.g., 'en', 'fr'). |
> | `country?` | `string` | The optional country code (e.g., 'US', 'GB'). |
> | `variant?` | `string` | The optional variant code. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getHeaders() > ```ts static getHeaders(name): string[]; ``` Gets all header values for a specific header name as an array of strings.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the header. |
> 
> ###### Returns
> 
> `string`[]
> 
> An array of header values.
> 
> ##### getHeaderNames()
> 
> > ```ts
> > static getHeaderNames(): string[];
> > ```
> 
> 
> Gets the names of all headers that have been set on the response.
> 
> ###### Returns
> 
> `string`[]
> 
> An array of header names.
> 
> ##### getLocale()
> 
> > ```ts
> > static getLocale(): string;
> > ```
> 
> 
> Gets the currently set locale string for the response.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The locale string.
> :::

##### getOutputStream()

> ```ts
> static getOutputStream(): OutputStream;
> ```


Gets the underlying output stream object, wrapped in the SDK's `OutputStream` class.
This is useful for writing raw or large amounts of data.

> ::: info Returns
> - **Type**: `OutputStream`
> - **Description**: The output stream object.
> :::

## Interfaces

### Cookie


Defines the structure for an HTTP cookie, including its name, value, and optional attributes.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
|  `name` | `string` | The name of the cookie. | src/http/response.ts:18 |
|  `value` | `string` | The value of the cookie. | src/http/response.ts:20 |
|  `attributes` | `object` | Key-value map of cookie attributes (e.g., 'maxAge', 'path', 'domain', 'secure', 'httpOnly'). | src/http/response.ts:22 |
