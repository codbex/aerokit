# http/request

> [!tip]
> Auto-generated from
> - source: [http/request.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/request.ts)
> - version: 1.0.0


## Overview

The Request API under the HTTP module is responsible for
managing standard HTTP request parameters, headers, cookies,
and request metadata provided to server-side scripting services.

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Request](#request)
- [Returns](#returns)

## Classes

### Request


Represents the HTTP Request object available within a service execution
context. It provides access to HTTP metadata, query parameters, request
body content, cookies, and security information.

All functions in this class are static: no instance of `Request`
needs to be created.

## Returns

[`Request`](#request)

#### Methods

##### isValid()

> ```ts
> static isValid(): boolean;
> ```


> Determines whether the current thread is handling a valid HTTP request.

> > ::: info Returns
> > - **Type**: `boolean`
> > - **Description**: `true` if called in a valid HTTP request context, otherwise `false`.
> > :::

> ##### getMethod()

> > ```ts
> > static getMethod(): string;
> > ```


> Returns the HTTP method (GET, POST, PUT, DELETE, etc.).

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getRemoteUser() > ```ts static getRemoteUser(): string; ``` Returns the authenticated remote user name if available.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getPathInfo() > ```ts static getPathInfo(): string; ``` Returns the portion of the request path following the servlet path.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getPathTranslated() > ```ts static getPathTranslated(): string; ``` Returns the translated file system path for the request.
> > :::

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getHeader() > ```ts static getHeader(name): string; ``` Returns the value of a specific HTTP header.
> > :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | Header name to retrieve. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The header value or `undefined` if not found.
> :::

##### isUserInRole()

> ```ts
> static isUserInRole(role): boolean;
> ```


> Checks whether the remote user has the given role.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `role` | `string` | The role name to check. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: ##### getAttribute() > ```ts static getAttribute(name): string; ``` Returns a request attribute value previously associated with the request.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The attribute name. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: A string value or `undefined`.
> :::

##### getAuthType()

> ```ts
> static getAuthType(): string;
> ```


> Returns the authentication type if known (BASIC, CLIENT_CERT, etc.).

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getCookies() > ```ts static getCookies(): Cookie[]; ``` Returns all cookies sent with the request.
> > :::

> ###### Returns

> [`Cookie`](response.md#cookie)[]

> An array of Cookie objects.

> ##### getAttributeNames()

> > ```ts
> > static getAttributeNames(): string[];
> > ```


> Returns all available request attribute names.

> ###### Returns

> `string`[]

> ##### getCharacterEncoding()

> > ```ts
> > static getCharacterEncoding(): string;
> > ```


> Returns the character encoding used in the request body.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: ##### getContentLength() > ```ts static getContentLength(): number; ``` Returns the size of the request body in bytes, if known.
> > :::

> > ::: info Returns
> > - **Type**: `number`
> > - **Description**: ##### getHeaders() > ```ts static getHeaders(name): string[]; ``` Returns all values of a specific header.
> > :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | Header name to retrieve. |
> 
> ###### Returns
> 
> `string`[]
> 
> ##### getContentType()
> 
> > ```ts
> > static getContentType(): string;
> > ```
> 
> 
> > Returns the MIME content type of the request body.
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### getBytes() > ```ts static getBytes(): any[]; ``` Returns the raw request body as a byte array.
> > > :::
> 
> > ###### Returns
> 
> > `any`[]
> 
> > ##### getText()
> 
> > > ```ts
> > > static getText(): string;
> > > ```
> 
> 
> > Returns the request body as text. This is computed once and cached.
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### json() > ```ts static json(): object; ``` Returns the request body parsed as JSON if valid.
> > > :::
> 
> > > ::: info Returns
> > > - **Type**: `object`
> > > - **Description**: A JSON object or `undefined` if parsing fails.
> > > :::
> 
> > ##### getJSON()
> 
> > > ```ts
> > > static getJSON(): object;
> > > ```
> 
> 
> > Same as json(); explicit form.
> 
> > > ::: info Returns
> > > - **Type**: `object`
> > > - **Description**: ##### getParameter() > ```ts static getParameter(name): string; ``` Returns a request parameter value.
> > > :::
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### getParameters() > ```ts static getParameters(): object; ``` Returns a map of request parameters to arrays of values.
> :::

> ::: info Returns
> - **Type**: `object`
> - **Description**: ##### getResourcePath() > ```ts static getResourcePath(): string; ``` Returns the allocated request resource path.
> :::

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### getHeaderNames() > ```ts static getHeaderNames(): string[]; ``` Returns all header names.
> :::

###### Returns

`string`[]

##### getParameterNames()

> ```ts
> static getParameterNames(): string[];
> ```


> Returns all parameter names.

> ###### Returns

> `string`[]

> ##### getParameterValues()

> > ```ts
> > static getParameterValues(name): string[];
> > ```


> Returns all values for a given parameter name.

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |
> 
> ###### Returns
> 
> `string`[]
> 
> ##### getProtocol()
> 
> > ```ts
> > static getProtocol(): string;
> > ```
> 
> 
> > Returns the HTTP protocol version.
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### getScheme() > ```ts static getScheme(): string; ``` Returns the transport scheme (e.g., http, https).
> > > :::
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### getContextPath() > ```ts static getContextPath(): string; ``` Returns the context path of the request.
> > > :::
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### getServerName() > ```ts static getServerName(): string; ``` Returns the server host name.
> > > :::
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### getServerPort() > ```ts static getServerPort(): number; ``` Returns the server port number.
> > > :::
> 
> > > ::: info Returns
> > > - **Type**: `number`
> > > - **Description**: ##### getQueryString() > ```ts static getQueryString(): string; ``` Returns the full raw query string.
> > > :::
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### getQueryParametersMap() > ```ts static getQueryParametersMap(): object; ``` Parses the query string and returns a map of parameter keys to values. If the same key appears multiple times, values are collected into arrays.
> > > :::
> 
> > > ::: info Returns
> > > - **Type**: `object`
> > > - **Description**: ##### getRemoteAddress() > ```ts static getRemoteAddress(): string; ``` Returns the remote client IP address.
> > > :::
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### getRemoteHost() > ```ts static getRemoteHost(): string; ``` Returns the remote client host name.
> > > :::
> 
> > > ::: info Returns
> > > - **Type**: `string`
> > > - **Description**: ##### setAttribute() > ```ts static setAttribute(name, value): void; ``` Assigns a new attribute to the request.
> > > :::
> 
> > **Parameters**
> 
> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |
> | `value` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### removeAttribute() > ```ts static removeAttribute(name): void; ``` Removes an attribute from the request.
> :::

> **Parameters**

> | Parameter | Type |
> | ------ | ------ |
> | `name` | `string` |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getLocale() > ```ts static getLocale(): any; ``` Returns the client locale preferences.
> :::

> ::: info Returns
> - **Type**: `any`
> - **Description**: ##### getRequestURI() > ```ts static getRequestURI(): string; ``` Returns the full request URI.
> :::

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### isSecure() > ```ts static isSecure(): boolean; ``` Returns `true` if the request was made over HTTPS.
> :::

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: ##### getRequestURL() > ```ts static getRequestURL(): string; ``` Returns the full request URL including protocol and host.
> :::

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### getServicePath() > ```ts static getServicePath(): string; ``` Returns the internal service path for routing.
> :::

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### getRemotePort() > ```ts static getRemotePort(): number; ``` Returns the remote client port number.
> :::

> ::: info Returns
> - **Type**: `number`
> - **Description**: ##### getLocalName() > ```ts static getLocalName(): string; ``` Returns the local network host name.
> :::

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### getLocalAddress() > ```ts static getLocalAddress(): string; ``` Returns the local IP address.
> :::

> ::: info Returns
> - **Type**: `string`
> - **Description**: ##### getLocalPort() > ```ts static getLocalPort(): number; ``` Returns the server local port number handling the request.
> :::

> ::: info Returns
> - **Type**: `number`
> - **Description**: ##### getInputStream() > ```ts static getInputStream(): InputStream; ``` Returns the request body as a binary input stream. Useful for processing binary uploads.
> :::

> ::: info Returns
> - **Type**: `InputStream`
> :::
