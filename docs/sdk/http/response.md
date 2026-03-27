# http/response

::: tip Documentation
- source: [http/response.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/response.ts)
:::


## Overview

Provides a static façade (`Response` class) for managing the HTTP response.
This class wraps a native Java HTTP response object, offering methods for setting
status codes, headers, cookies, and writing content (text, JSON, or binary).


## Classes

### Response


The static Response class providing standardized HTTP status codes and methods
for constructing the server's response.

#### Constructors

##### Constructor

```ts
new Response(): Response;
```

#### Properties
#### Methods
##### isValid()
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if valid, false otherwise.
> :::
##### json()

```ts
static json(obj): void;
```


Serializes a JavaScript object to JSON, sets the `Content-Type: application/json` header,
and writes the JSON string to the response output stream.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | `any` | The JavaScript object to be serialized and sent. |

> ::: info Returns
> - **Type**: `void`
> :::
##### print()

```ts
static print(text): void;
```


Writes a string of text to the response body using **UTF-8** encoding.
Note: This method automatically handles flushing the output stream.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The string content to write. |

> ::: info Returns
> - **Type**: `void`
> :::
##### println()

```ts
static println(text): void;
```


Writes a string of text followed by a newline character (`\n`) to the response body
using **UTF-8** encoding.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The string content to write. |

> ::: info Returns
> - **Type**: `void`
> :::
##### write()

```ts
static write(bytes): void;
```


Writes an array of bytes directly to the response output stream, typically used for binary data.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `bytes` | `any`[] | The array of bytes to write. |

> ::: info Returns
> - **Type**: `void`
> :::
##### isCommitted()

```ts
static isCommitted(): boolean;
```


Checks if the response headers and status have already been sent to the client.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the response is committed, false otherwise.
> :::
##### setContentType()

```ts
static setContentType(contentType): void;
```


Sets the value of the `Content-Type` header.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `contentType` | `string` | The MIME type string (e.g., 'text/html', 'application/pdf'). |

> ::: info Returns
> - **Type**: `void`
> :::
##### flush()

```ts
static flush(): void;
```


Forces any buffered output to be written to the client.

> ::: info Returns
> - **Type**: `void`
> :::
##### close()

```ts
static close(): void;
```


Closes the response output stream.

> ::: info Returns
> - **Type**: `void`
> :::
##### addCookie()

```ts
static addCookie(cookie): void;
```


Adds a cookie to the response. The cookie object is serialized to JSON before being passed
to the underlying Java facade.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cookie` | [`Cookie`](#cookie) | The cookie definition object. |

> ::: info Returns
> - **Type**: `void`
> :::
##### containsHeader()

```ts
static containsHeader(name): boolean;
```


Checks if a response header with the specified name has already been set.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the header. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the header exists, false otherwise.
> :::
##### encodeURL()

```ts
static encodeURL(url): string;
```


Encodes a URL for use in redirects or forms, including session information if necessary.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The URL to encode. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The encoded URL string.
> :::
##### getCharacterEncoding()

```ts
static getCharacterEncoding(): string;
```


Gets the character encoding used for the response body.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The character encoding string.
> :::
##### encodeRedirectURL()

```ts
static encodeRedirectURL(url): string;
```


Encodes a URL for use in the `Location` header of a redirect response.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The redirect URL to encode. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The encoded redirect URL string.
> :::
##### getContentType()

```ts
static getContentType(): string;
```


Gets the current `Content-Type` header value.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The content type string.
> :::
##### sendError()

```ts
static sendError(status, message?): void;
```


Sends an HTTP error response to the client with the specified status code and optional message.
This bypasses the normal response body writing process.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `status` | `number` | The HTTP status code (e.g., 404, 500). |
| `message?` | `string` | An optional message to include in the error response. |

> ::: info Returns
> - **Type**: `void`
> :::
##### setCharacterEncoding()

```ts
static setCharacterEncoding(charset): void;
```


Sets the character encoding to be used for the response body (e.g., 'UTF-8').

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `charset` | `string` | The character set string. |

> ::: info Returns
> - **Type**: `void`
> :::
##### sendRedirect()

```ts
static sendRedirect(location): void;
```


Sends a redirect response (status code 302 by default) to the client.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `location` | `string` | The new URL to redirect the client to. |

> ::: info Returns
> - **Type**: `void`
> :::
##### setContentLength()

```ts
static setContentLength(length): void;
```


Sets the `Content-Length` header for the response.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `length` | `number` | The size of the response body in bytes. |

> ::: info Returns
> - **Type**: `void`
> :::
##### setHeader()

```ts
static setHeader(name, value): void;
```


Sets a response header with the given name and value. If the header already exists, its value is overwritten.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the header. |
| `value` | `string` | The value of the header. |

> ::: info Returns
> - **Type**: `void`
> :::
##### addHeader()

```ts
static addHeader(name, value): void;
```


Adds a response header with the given name and value. If the header already exists, a second header with the same name is added.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the header. |
| `value` | `string` | The value of the header. |

> ::: info Returns
> - **Type**: `void`
> :::
##### setStatus()

```ts
static setStatus(status): void;
```


Sets the HTTP status code for the response.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `status` | `number` | The integer status code (e.g., 200, 404). |

> ::: info Returns
> - **Type**: `void`
> :::
##### reset()

```ts
static reset(): void;
```


Clears all buffers, status code, and headers from the response, allowing a new response to be generated.
This is only possible if the response has not yet been committed.

> ::: info Returns
> - **Type**: `void`
> :::
##### getHeader()

```ts
static getHeader(name): string;
```


Gets the value of a specific header. If multiple headers with the same name exist, it returns the first one.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the header. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The header value string.
> :::
##### setLocale()

```ts
static setLocale(
   language, 
   country?, 
   variant?): void;
```


Sets the locale for the response, which may affect language and date/time formatting.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `language` | `string` | The language code (e.g., 'en', 'fr'). |
| `country?` | `string` | The optional country code (e.g., 'US', 'GB'). |
| `variant?` | `string` | The optional variant code. |

> ::: info Returns
> - **Type**: `void`
> :::
##### getHeaders()

```ts
static getHeaders(name): string[];
```


Gets all header values for a specific header name as an array of strings.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the header. |

##### getHeaderNames()
##### getLocale()
> ::: info Returns
> - **Type**: `string`
> - **Description**: The locale string.
> :::
##### getOutputStream()

```ts
static getOutputStream(): OutputStream;
```


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
