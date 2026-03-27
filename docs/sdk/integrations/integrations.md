# integrations/integrations

::: tip Documentation
- source: [integrations/integrations.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/integrations/integrations.ts)
:::


## Overview

Provides a static façade for interacting with Apache Camel routes
within the execution environment. This allows JavaScript code to synchronously
invoke integration routes and access the current message context.


## Classes

### Integrations


The Integrations class provides utility methods for triggering and interacting
with predefined Apache Camel integration routes.

#### Constructors

##### Constructor

```ts
new Integrations(): Integrations;
```

#### Methods
##### invokeRoute()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> - **Description**: The final result (the body of the resulting Camel Message) after the route has completed execution.
> :::
##### getInvokingRouteMessage()

```ts
static getInvokingRouteMessage(): IntegrationMessage;
```


Retrieves the current message being processed by the underlying integration
engine's context. This is typically used within a route endpoint (e.g., a script component)
to access or modify the message.

Note: '__context' is assumed to be a global or context-injected variable.

## Interfaces
### HeadersMap
#### Indexable
### ExchangeProperties
#### Indexable
### IntegrationMessage
#### Methods
##### constructor()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> :::
##### getBody()

```ts
getBody(): any;
```


Retrieves the body of the message.

> ::: info Returns
> - **Type**: `any`
> - **Description**: The message body (can be any type, e.g., string, object, stream).
> :::
##### getExchangeProperty()

```ts
getExchangeProperty(propertyName): any;
```


Retrieves a specific property from the current Exchange context.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `propertyName` | `string` | The name of the exchange property. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The value of the exchange property.
> :::
##### setExchangeProperty()

```ts
setExchangeProperty(propertyName, propertyValue): void;
```


Sets a specific property on the current Exchange context.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `propertyName` | `string` | The name of the exchange property. |
| `propertyValue` | `any` | The value to set. |

> ::: info Returns
> - **Type**: `void`
> :::
##### getExchangeProperties()

```ts
getExchangeProperties(): Record;
```


Retrieves all properties from the current Exchange context.

##### getBodyAsString()
> ::: info Returns
> - **Type**: `string`
> - **Description**: The message body converted to a string.
> :::
##### setBody()

```ts
setBody(body): void;
```


Sets the body of the message.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `body` | `any` | The new body content. |

> ::: info Returns
> - **Type**: `void`
> :::
##### getHeaders()

```ts
getHeaders(): HeadersMap;
```


Retrieves all headers associated with the message.

##### getHeader()
**Parameters**
##### setHeaders()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### setHeader()

```ts
setHeader(key, value): void;
```


Sets a single header on the message.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The header key. |
| `value` | `string` \| `string`[] | The header value. |

> ::: info Returns
> - **Type**: `void`
> :::
##### getCamelMessage()

```ts
getCamelMessage(): any;
```


Retrieves the underlying native Camel Message object.

> ::: info Returns
> - **Type**: `any`
> - **Description**: The raw Camel Message instance.
> :::