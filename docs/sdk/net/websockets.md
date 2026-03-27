# net/websockets

::: tip Documentation
- source: [net/websockets.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/net/websockets.ts)
:::


## Overview

Provides a high-level API for managing WebSocket clients and handling
lifecycle events within the application context. It wraps the internal Java
WebsocketsFacade.


## Classes

### Websockets


Websockets

#### Description

Static utility class for accessing and managing WebSocket functionality.

#### Constructors

##### Constructor

```ts
new Websockets(): Websockets;
```

#### Methods
##### createWebsocket()
**Parameters**
> ::: info Returns
> - **Type**: `WebsocketClient`
> - **Description**: A wrapper object for the new WebSocket session.
> :::
##### getClients()

```ts
static getClients(): object[];
```


Retrieves a list of all active WebSocket clients.

##### getClient()
**Parameters**
> ::: info Returns
> - **Type**: `WebsocketClient`
> - **Description**: The client wrapper or undefined if not found.
> :::
##### getClientByHandler()

```ts
static getClientByHandler(handler): WebsocketClient;
```


Retrieves a specific WebSocket client wrapper by its handler identifier.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `handler` | `string` | The handler identifier associated with the client. |

> ::: info Returns
> - **Type**: `WebsocketClient`
> - **Description**: The client wrapper or undefined if not found.
> :::
##### getMessage()

```ts
static getMessage(): any;
```


Retrieves the message payload from the current context, typically used inside an 'onmessage' handler.

> ::: info Returns
> - **Type**: `any`
> - **Description**: The message content.
> :::
##### getError()

```ts
static getError(): any;
```


Retrieves error details from the current context, typically used inside an 'onerror' handler.

> ::: info Returns
> - **Type**: `any`
> - **Description**: The error object or string.
> :::
##### getMethod()

```ts
static getMethod(): string;
```


Retrieves the event method name that triggered the current script execution (e.g., "onopen", "onmessage").

> ::: info Returns
> - **Type**: `string`
> - **Description**: The name of the event method.
> :::
##### isOnOpen()

```ts
static isOnOpen(): boolean;
```


Checks if the current event context is 'onopen'.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the method is 'onopen'.
> :::
##### isOnMessage()

```ts
static isOnMessage(): boolean;
```


Checks if the current event context is 'onmessage'.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the method is 'onmessage'.
> :::
##### isOnError()

```ts
static isOnError(): boolean;
```


Checks if the current event context is 'onerror'.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the method is 'onerror'.
> :::
##### isOnClose()

```ts
static isOnClose(): boolean;
```


Checks if the current event context is 'onclose'.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the method is 'onclose'.
> :::