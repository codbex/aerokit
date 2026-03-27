# integrations/integrations

> [!tip]
> Auto-generated from
> - source: [integrations/integrations.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/integrations/integrations.ts)
> - version: 1.0.0


## Overview

Provides a static façade for interacting with Apache Camel routes
within the execution environment. This allows JavaScript code to synchronously
invoke integration routes and access the current message context.
/

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Integrations](#integrations)
- [Returns](#returns)
- [Interfaces](#interfaces)
  - [HeadersMap](#headersmap)
  - [ExchangeProperties](#exchangeproperties)
  - [IntegrationMessage](#integrationmessage)

## Classes

### Integrations


The Integrations class provides utility methods for triggering and interacting
with predefined Apache Camel integration routes.

## Returns

[`Integrations`](#integrations)

#### Methods

##### invokeRoute()

> ```ts
> static invokeRoute( routeId, payload, headers, exchangeProperties): any;
> ```


> Synchronously invokes a specified Camel route.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `routeId` | `string` | The unique identifier of the Camel route to be executed. |
> | `payload` | `any` | The initial message body/payload for the route. |
> | `headers` | [`HeadersMap`](#headersmap) | A map of headers to set on the initial Camel Message. |
> | `exchangeProperties` | [`ExchangeProperties`](#exchangeproperties) | A map of properties to set on the Camel Exchange context. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The final result (the body of the resulting Camel Message) after the route has completed execution.
> :::

##### getInvokingRouteMessage()

> ```ts
> static getInvokingRouteMessage(): IntegrationMessage;
> ```


> Retrieves the current message being processed by the underlying integration
> engine's context. This is typically used within a route endpoint (e.g., a script component)
> to access or modify the message.

> Note: '__context' is assumed to be a global or context-injected variable.

> ###### Returns

> [`IntegrationMessage`](#integrationmessage)

> The current IntegrationMessage wrapper.

> ## Interfaces

> ### HeadersMap


> Defines the structure for Camel Message Headers, typically used for
> standard communication metadata. Keys are strings, and values can be
> a single string or an array of strings.

> #### Indexable

> > ```ts
> > [key: string]: string | string[]
> > ```

> ***

> ### ExchangeProperties


> Defines the structure for Camel Exchange Properties, which are context-specific
> variables used for processing within a single route execution. Keys are strings,
> and values can be a single string or an array of strings.

> #### Indexable

> > ```ts
> > [key: string]: string | string[]
> > ```

> ***

> ### IntegrationMessage


> Represents the Camel message currently being processed. This interface mirrors
> key functionality of the underlying Apache Camel Message and Exchange objects.

> #### Methods

> ##### constructor()

> > ```ts
> > constructor(message): any;
> > ```


> Constructs an IntegrationMessage wrapper around a native message object.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `message` | `any` | The native message object (usually a Camel Message or Exchange). |

> ::: info Returns
> - **Type**: `any`
> - **Description**: ##### getBody() > ```ts getBody(): any; ``` Retrieves the body of the message.
> :::

> ::: info Returns
> - **Type**: `any`
> - **Description**: The message body (can be any type, e.g., string, object, stream).
> :::

##### getExchangeProperty()

> ```ts
> getExchangeProperty(propertyName): any;
> ```


> Retrieves a specific property from the current Exchange context.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `propertyName` | `string` | The name of the exchange property. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The value of the exchange property.
> :::

##### setExchangeProperty()

> ```ts
> setExchangeProperty(propertyName, propertyValue): void;
> ```


> Sets a specific property on the current Exchange context.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `propertyName` | `string` | The name of the exchange property. |
> | `propertyValue` | `any` | The value to set. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getExchangeProperties() > ```ts getExchangeProperties(): Record; ``` Retrieves all properties from the current Exchange context.
> :::

###### Returns

`Record`\

A map of all exchange properties.

##### getBodyAsString()

> ```ts
> getBodyAsString(): string;
> ```


> Retrieves the body of the message as a string.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: The message body converted to a string.
> > :::

> ##### setBody()

> > ```ts
> > setBody(body): void;
> > ```


> Sets the body of the message.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `body` | `any` | The new body content. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getHeaders() > ```ts getHeaders(): HeadersMap; ``` Retrieves all headers associated with the message.
> :::

###### Returns

[`HeadersMap`](#headersmap)

A map of headers.

##### getHeader()

> ```ts
> getHeader(key): string | string[];
> ```


> Retrieves a specific header value.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The header key. |
> 
> ###### Returns
> 
> `string` \| `string`[]
> 
> The header value(s).
> 
> ##### setHeaders()
> 
> > ```ts
> > setHeaders(headers): void;
> > ```
> 
> 
> > Sets multiple headers on the message.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `headers` | [`HeadersMap`](#headersmap) | The map of headers to set. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### setHeader() > ```ts setHeader(key, value): void; ``` Sets a single header on the message.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The header key. |
> | `value` | `string` \| `string`[] | The header value. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### getCamelMessage() > ```ts getCamelMessage(): any; ``` Retrieves the underlying native Camel Message object.
> :::

> ::: info Returns
> - **Type**: `any`
> - **Description**: The raw Camel Message instance.
> :::
