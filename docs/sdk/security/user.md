# security/user

## Overview



::: tip Module
- source: [security/user.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/security/user.ts)
- last updated: 
:::

## Classes

### User

#### getName()

Retrieves the principal name (username or ID) of the currently authenticated user.

> ```ts
> static getName(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The user's name or identifier as a string.
> :::

#### isInRole()

Checks if the currently authenticated user is assigned to a specific security role.

> ```ts
> static isInRole(role: string): boolean;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `role` | `string` | The name of the role to check (e.g., 'Administrator', 'User'). |
>
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the user is in the specified role, false otherwise.
> :::

#### getTimeout()

Retrieves the remaining session timeout for the current user session in seconds.

> ```ts
> static getTimeout(): number;
> ```
>
>
> ::: info Returns
> - **Type**: `number`
> - **Description**: The session timeout duration in seconds.
> :::

#### getAuthType()

Retrieves the authentication mechanism used for the current session (e.g., 'BASIC', 'FORM').

> ```ts
> static getAuthType(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The type of authentication used.
> :::

#### getSecurityToken()

Retrieves the security token associated with the current user session.
This might be a session ID or an access token.

> ```ts
> static getSecurityToken(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The security token as a string.
> :::

#### getInvocationCount()

Retrieves the number of requests (invocations) made by the current user
during the lifecycle of the current session.

> ```ts
> static getInvocationCount(): number;
> ```
>
>
> ::: info Returns
> - **Type**: `number`
> - **Description**: The total invocation count.
> :::

#### getLanguage()

Retrieves the preferred language setting (e.g., 'en', 'de', 'es') for the current user.

> ```ts
> static getLanguage(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The user's preferred language code.
> :::

