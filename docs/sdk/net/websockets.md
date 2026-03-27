# net/websockets

> [!tip]
> Auto-generated from
> - source: [net/websockets.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/net/websockets.ts)
> - version: 1.0.0


## Overview

Provides a high-level API for managing WebSocket clients and handling
lifecycle events within the application context. It wraps the internal Java
WebsocketsFacade.
/
const WebsocketsFacade = Java.type("org.eclipse.dirigible.components.api.websockets.WebsocketsFacade");

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Websockets](#websockets)
- [Returns](#returns)

## Classes

### Websockets


Websockets

#### Description

Static utility class for accessing and managing WebSocket functionality.

## Returns

[`Websockets`](#websockets)

#### Methods

##### createWebsocket()

> ```ts
> static createWebsocket(uri, handler): WebsocketClient;
> ```


> Creates a new WebSocket client connection to a specified URI, managed by a handler script.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `uri` | `string` | The target WebSocket URI (e.g., 'ws://example.com/socket'). |
> | `handler` | `string` | The identifier or path of the script handling the WebSocket events. |

> ::: info Returns
> - **Type**: `WebsocketClient`
> - **Description**: A wrapper object for the new WebSocket session.
> :::

##### getClients()

> ```ts
> static getClients(): object[];
> ```


> Retrieves a list of all active WebSocket clients.

> > ::: info Returns
> > - **Type**: `object`
> > - **Description**: [] An array of objects detailing the URI and handler of each client.
> > :::

> ##### getClient()

> > ```ts
> > static getClient(id): WebsocketClient;
> > ```


> Retrieves a specific WebSocket client wrapper by its session ID.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `id` | `string` | The session ID of the client. |

> ::: info Returns
> - **Type**: `WebsocketClient`
> - **Description**: The client wrapper or undefined if not found.
> :::

##### getClientByHandler()

> ```ts
> static getClientByHandler(handler): WebsocketClient;
> ```


> Retrieves a specific WebSocket client wrapper by its handler identifier.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `handler` | `string` | The handler identifier associated with the client. |

> ::: info Returns
> - **Type**: `WebsocketClient`
> - **Description**: The client wrapper or undefined if not found.
> :::

##### getMessage()

> ```ts
> static getMessage(): any;
> ```


Retrieves the message payload from the current context, typically used inside an 'onmessage' handler.

> ::: info Returns
> - **Type**: `any`
> - **Description**: The message content.
> :::

##### getError()

> ```ts
> static getError(): any;
> ```


Retrieves error details from the current context, typically used inside an 'onerror' handler.

> ::: info Returns
> - **Type**: `any`
> - **Description**: The error object or string.
> :::

##### getMethod()

> ```ts
> static getMethod(): string;
> ```


Retrieves the event method name that triggered the current script execution (e.g., "onopen", "onmessage").

> ::: info Returns
> - **Type**: `string`
> - **Description**: The name of the event method.
> :::

##### isOnOpen()

> ```ts
> static isOnOpen(): boolean;
> ```


Checks if the current event context is 'onopen'.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the method is 'onopen'.
> :::

##### isOnMessage()

> ```ts
> static isOnMessage(): boolean;
> ```


Checks if the current event context is 'onmessage'.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the method is 'onmessage'.
> :::

##### isOnError()

> ```ts
> static isOnError(): boolean;
> ```


Checks if the current event context is 'onerror'.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the method is 'onerror'.
> :::

##### isOnClose()

> ```ts
> static isOnClose(): boolean;
> ```


Checks if the current event context is 'onclose'.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the method is 'onclose'.
> :::
