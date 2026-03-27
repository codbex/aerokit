# http/request

::: tip Documentation
- source: [http/request.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/request.ts)
:::


## Overview

The Request API under the HTTP module is responsible for
managing standard HTTP request parameters, headers, cookies,
and request metadata provided to server-side scripting services.


## Classes

### Request


Represents the HTTP Request object available within a service execution
context. It provides access to HTTP metadata, query parameters, request
body content, cookies, and security information.

All functions in this class are static: no instance of `Request`
needs to be created.

#### Constructors

##### Constructor

```ts
new Request(): Request;
```

#### Methods
##### isValid()
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: `true` if called in a valid HTTP request context, otherwise `false`.
> :::
##### getMethod()

```ts
static getMethod(): string;
```


Returns the HTTP method (GET, POST, PUT, DELETE, etc.).

> ::: info Returns
> - **Type**: `string`
> :::
##### getRemoteUser()

```ts
static getRemoteUser(): string;
```


Returns the authenticated remote user name if available.

> ::: info Returns
> - **Type**: `string`
> :::
##### getPathInfo()

```ts
static getPathInfo(): string;
```


Returns the portion of the request path following the servlet path.

> ::: info Returns
> - **Type**: `string`
> :::
##### getPathTranslated()

```ts
static getPathTranslated(): string;
```


Returns the translated file system path for the request.

> ::: info Returns
> - **Type**: `string`
> :::
##### getHeader()

```ts
static getHeader(name): string;
```


Returns the value of a specific HTTP header.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Header name to retrieve. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The header value or `undefined` if not found.
> :::
##### isUserInRole()

```ts
static isUserInRole(role): boolean;
```


Checks whether the remote user has the given role.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `role` | `string` | The role name to check. |

> ::: info Returns
> - **Type**: `boolean`
> :::
##### getAttribute()

```ts
static getAttribute(name): string;
```


Returns a request attribute value previously associated with the request.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The attribute name. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: A string value or `undefined`.
> :::
##### getAuthType()

```ts
static getAuthType(): string;
```


Returns the authentication type if known (BASIC, CLIENT_CERT, etc.).

> ::: info Returns
> - **Type**: `string`
> :::
##### getCookies()

```ts
static getCookies(): Cookie[];
```


Returns all cookies sent with the request.

##### getAttributeNames()
##### getCharacterEncoding()
> ::: info Returns
> - **Type**: `string`
> :::
##### getContentLength()

```ts
static getContentLength(): number;
```


Returns the size of the request body in bytes, if known.

> ::: info Returns
> - **Type**: `number`
> :::
##### getHeaders()

```ts
static getHeaders(name): string[];
```


Returns all values of a specific header.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Header name to retrieve. |

##### getContentType()
> ::: info Returns
> - **Type**: `string`
> :::
##### getBytes()

```ts
static getBytes(): any[];
```


Returns the raw request body as a byte array.

##### getText()
> ::: info Returns
> - **Type**: `string`
> :::
##### json()

```ts
static json(): object;
```


Returns the request body parsed as JSON if valid.

> ::: info Returns
> - **Type**: `object`
> - **Description**: A JSON object or `undefined` if parsing fails.
> :::
##### getJSON()

```ts
static getJSON(): object;
```


Same as json(); explicit form.

> ::: info Returns
> - **Type**: `object`
> :::
##### getParameter()

```ts
static getParameter(name): string;
```


Returns a request parameter value.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

> ::: info Returns
> - **Type**: `string`
> :::
##### getParameters()

```ts
static getParameters(): object;
```


Returns a map of request parameters to arrays of values.

> ::: info Returns
> - **Type**: `object`
> :::
##### getResourcePath()

```ts
static getResourcePath(): string;
```


Returns the allocated request resource path.

> ::: info Returns
> - **Type**: `string`
> :::
##### getHeaderNames()

```ts
static getHeaderNames(): string[];
```


Returns all header names.

##### getParameterNames()
##### getParameterValues()
**Parameters**
##### getProtocol()
> ::: info Returns
> - **Type**: `string`
> :::
##### getScheme()

```ts
static getScheme(): string;
```


Returns the transport scheme (e.g., http, https).

> ::: info Returns
> - **Type**: `string`
> :::
##### getContextPath()

```ts
static getContextPath(): string;
```


Returns the context path of the request.

> ::: info Returns
> - **Type**: `string`
> :::
##### getServerName()

```ts
static getServerName(): string;
```


Returns the server host name.

> ::: info Returns
> - **Type**: `string`
> :::
##### getServerPort()

```ts
static getServerPort(): number;
```


Returns the server port number.

> ::: info Returns
> - **Type**: `number`
> :::
##### getQueryString()

```ts
static getQueryString(): string;
```


Returns the full raw query string.

> ::: info Returns
> - **Type**: `string`
> :::
##### getQueryParametersMap()

```ts
static getQueryParametersMap(): object;
```


Parses the query string and returns a map of parameter keys to values.
If the same key appears multiple times, values are collected into arrays.

> ::: info Returns
> - **Type**: `object`
> :::
##### getRemoteAddress()

```ts
static getRemoteAddress(): string;
```


Returns the remote client IP address.

> ::: info Returns
> - **Type**: `string`
> :::
##### getRemoteHost()

```ts
static getRemoteHost(): string;
```


Returns the remote client host name.

> ::: info Returns
> - **Type**: `string`
> :::
##### setAttribute()

```ts
static setAttribute(name, value): void;
```


Assigns a new attribute to the request.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### removeAttribute()

```ts
static removeAttribute(name): void;
```


Removes an attribute from the request.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

> ::: info Returns
> - **Type**: `void`
> :::
##### getLocale()

```ts
static getLocale(): any;
```


Returns the client locale preferences.

> ::: info Returns
> - **Type**: `any`
> :::
##### getRequestURI()

```ts
static getRequestURI(): string;
```


Returns the full request URI.

> ::: info Returns
> - **Type**: `string`
> :::
##### isSecure()

```ts
static isSecure(): boolean;
```


Returns `true` if the request was made over HTTPS.

> ::: info Returns
> - **Type**: `boolean`
> :::
##### getRequestURL()

```ts
static getRequestURL(): string;
```


Returns the full request URL including protocol and host.

> ::: info Returns
> - **Type**: `string`
> :::
##### getServicePath()

```ts
static getServicePath(): string;
```


Returns the internal service path for routing.

> ::: info Returns
> - **Type**: `string`
> :::
##### getRemotePort()

```ts
static getRemotePort(): number;
```


Returns the remote client port number.

> ::: info Returns
> - **Type**: `number`
> :::
##### getLocalName()

```ts
static getLocalName(): string;
```


Returns the local network host name.

> ::: info Returns
> - **Type**: `string`
> :::
##### getLocalAddress()

```ts
static getLocalAddress(): string;
```


Returns the local IP address.

> ::: info Returns
> - **Type**: `string`
> :::
##### getLocalPort()

```ts
static getLocalPort(): number;
```


Returns the server local port number handling the request.

> ::: info Returns
> - **Type**: `number`
> :::
##### getInputStream()

```ts
static getInputStream(): InputStream;
```


Returns the request body as a binary input stream.

Useful for processing binary uploads.

> ::: info Returns
> - **Type**: `InputStream`
> :::