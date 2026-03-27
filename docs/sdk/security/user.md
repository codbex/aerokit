# security/user

> [!tip]
> Auto-generated from
> - source: [security/user.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/security/user.ts)
> - version: 1.0.0


## Overview

Provides static access to the currently authenticated user's security and session context.
This class acts as a facade for the underlying UserFacade component.

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [User](#user)
- [Returns](#returns)

## Classes

### User


Provides static access to the currently authenticated user's security and session context.
This class acts as a facade for the underlying UserFacade component.

## Returns

[`User`](#user)

#### Methods

##### getName()

> ```ts
> static getName(): string;
> ```


> Retrieves the principal name (username or ID) of the currently authenticated user.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The user's name or identifier as a string.
> > :::

> ##### isInRole()

> > ```ts
> > static isInRole(role): boolean;
> > ```


> Checks if the currently authenticated user is assigned to a specific security role.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `role` | `string` | The name of the role to check (e.g., 'Administrator', 'User'). |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the user is in the specified role, false otherwise.
> :::

##### getTimeout()

> ```ts
> static getTimeout(): number;
> ```


Retrieves the remaining session timeout for the current user session in seconds.

> ::: info Returns
> - **Type**: `number`
> - **Description**: The session timeout duration in seconds.
> :::

##### getAuthType()

> ```ts
> static getAuthType(): string;
> ```


Retrieves the authentication mechanism used for the current session (e.g., 'BASIC', 'FORM').

> ::: info Returns
> - **Type**: `string`
> - **Description**: The type of authentication used.
> :::

##### getSecurityToken()

> ```ts
> static getSecurityToken(): string;
> ```


Retrieves the security token associated with the current user session.
This might be a session ID or an access token.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The security token as a string.
> :::

##### getInvocationCount()

> ```ts
> static getInvocationCount(): number;
> ```


Retrieves the number of requests (invocations) made by the current user
during the lifecycle of the current session.

> ::: info Returns
> - **Type**: `number`
> - **Description**: The total invocation count.
> :::

##### getLanguage()

> ```ts
> static getLanguage(): string;
> ```


Retrieves the preferred language setting (e.g., 'en', 'de', 'es') for the current user.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The user's preferred language code.
> :::
