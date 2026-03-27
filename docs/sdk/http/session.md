# http/session

> [!tip]
> Auto-generated from
> - source: [http/session.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/session.ts)
> - version: 1.0.0


## Overview

Provides a static façade (`Session` class) for accessing and manipulating
the HTTP session associated with the current request. This module is often used
to store user-specific data during their interaction with the application.
/

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Session](#session)
- [Returns](#returns)

## Classes

### Session


The static Session class provides methods to interact with the current user session
(e.g., storing attributes, checking status, managing lifetime).

## Returns

[`Session`](#session)

#### Methods

##### isValid()

> ```ts
> static isValid(): boolean;
> ```


> Checks if a session is currently valid and active for the request context.

> > ::: info Returns
> > - **Type**: `boolean`
> > - **Description**: True if the session is valid, false otherwise (e.g., if it has been invalidated or timed out).
> > :::

> ##### getAttribute()

> > ```ts
> > static getAttribute(name): string;
> > ```


> Retrieves the value of a named attribute stored in the session.
> Note: The underlying Java facade typically stores strings, but the value may represent
>    * serialized data that should be parsed if complex.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the attribute. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The attribute value as a string, or null/undefined if not found.
> :::

##### getAttributeNames()

> ```ts
> static getAttributeNames(): string[];
> ```


> Retrieves an array of all attribute names currently stored in the session.
> The names are retrieved as a JSON string from the facade and then parsed.

> ###### Returns

> `string`[]

> An array of attribute names (strings), or an empty array if no attributes are present.

> ##### getCreationTime()

> > ```ts
> > static getCreationTime(): Date;
> > ```


> Returns the time at which this session was created, converted to a JavaScript Date object.

> > ::: info Returns
> > - **Type**: `Date`
> > - **Description**: A Date object representing the session's creation time.
> > :::

> ##### getId()

> > ```ts
> > static getId(): string;
> > ```


> Returns the unique identifier assigned to this session.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The session ID string.
> > :::

> ##### getLastAccessedTime()

> > ```ts
> > static getLastAccessedTime(): Date;
> > ```


> Returns the last time the client accessed this session, converted to a JavaScript Date object.
> Access includes requests that retrieve or set session attributes.

> > ::: info Returns
> > - **Type**: `Date`
> > - **Description**: A Date object representing the last access time.
> > :::

> ##### getMaxInactiveInterval()

> > ```ts
> > static getMaxInactiveInterval(): number;
> > ```


> Returns the maximum time interval, in seconds, that the server should keep this session open
> between client requests. After this interval, the session will be invalidated.

> > ::: info Returns
> > - **Type**: `number`
> > - **Description**: The maximum inactive interval in seconds.
> > :::

> ##### invalidate()

> > ```ts
> > static invalidate(): void;
> > ```


> Invalidates this session, unbinding any objects bound to it.
> After this call, the session is no longer valid.

> > ::: info Returns
> > - **Type**: `void`
> > - **Description**: ##### isNew() > ```ts static isNew(): boolean; ``` Checks if the client does not yet know about the session, typically meaning the server has not yet returned the session ID via a cookie or encoded URL.
> > :::

> > ::: info Returns
> > - **Type**: `boolean`
> > - **Description**: True if the session is new (not yet used in a response), false otherwise.
> > :::

> ##### setAttribute()

> > ```ts
> > static setAttribute(name, value): void;
> > ```


> Binds an object to this session, using the specified name.
> This is the primary way to store data in the user's session.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name to bind the object under. |
> | `value` | `any` | The value/object to store in the session. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### removeAttribute() > ```ts static removeAttribute(name): void; ``` Removes the attribute with the given name from the session.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the attribute to remove. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setMaxInactiveInterval() > ```ts static setMaxInactiveInterval(interval): void; ``` Specifies the maximum time interval, in seconds, that the server should keep this session open between client requests before automatically invalidating it.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `interval` | `number` | The new interval in seconds. |

> ::: info Returns
> - **Type**: `void`
> :::
