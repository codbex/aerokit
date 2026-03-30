# security/oauth

## Overview

::: tip Module
- source: [security/oauth.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/security/oauth.ts)
- last updated: 
:::



## Classes

### OAuthClient

#### getToken()

Executes the OAuth token request and returns the parsed response.

The request uses the client credentials grant type (default) and
sends credentials as URL-encoded parameters in the body.

> ```ts
> getToken(): any;
> ```
>
>
> ::: info Returns
> - **Type**: `any`
> - **Description**: A parsed JSON object containing the OAuth token (e.g., { access_token: string, expires_in: number, ... }).
> :::

