# security/oauth

::: tip Documentation
- source: [security/oauth.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/security/oauth.ts)
:::


## Overview

The Oauth API provides...


## Classes

### OAuthClient


A client class for fetching OAuth access tokens.

It uses the HTTP client to send a POST request with client credentials
to the specified token endpoint.

#### Constructors

##### Constructor

```ts
new OAuthClient(config): OAuthClient;
```


Initializes the OAuthClient with the required configuration.
Sets 'client_credentials' as the default grant type if none is provided.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`OAuthClientConfig`](#oauthclientconfig) | The configuration object containing URL, client ID, and secret. |

#### Methods
##### getToken()
> ::: info Returns
> - **Type**: `any`
> - **Description**: A parsed JSON object containing the OAuth token (e.g., { access_token: string, expires_in: number, ... }).
> :::
###### Throws

If the HTTP status code is not 200.

## Interfaces

### OAuthClientConfig


Configuration structure for the OAuth client.

#### Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
|  `url` | `readonly` | `string` | The URL endpoint for the OAuth token service (e.g., '/oauth/token'). | src/security/oauth.ts:9 |
|  `clientId` | `readonly` | `string` | The client ID for authentication. | src/security/oauth.ts:11 |
|  `clientSecret` | `readonly` | `string` | The client secret for authentication. | src/security/oauth.ts:13 |
|  `grantType?` | `readonly` | `string` | The grant type to be used. Defaults to 'client_credentials'. | src/security/oauth.ts:15 |
