# net/websockets

::: tip Documentation
- source: [net/websockets.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/net/websockets.ts)
:::

## Overview



## Classes

### Websockets

#### createWebsocket()

Creates a new WebSocket client connection to a specified URI, managed by a handler script.

> ```ts
> static createWebsocket(uri: string, handler: string): WebsocketClient;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `uri` | `string` | The target WebSocket URI (e.g., &#x27;ws://example.com/socket&#x27;). |
> | `handler` | `string` | The identifier or path of the script handling the WebSocket events. |
>
> ::: info Returns
> - **Type**: `WebsocketClient`
> - **Description**: A wrapper object for the new WebSocket session.
> :::

#### getClients()

Retrieves a list of all active WebSocket clients.

> ```ts
> static getClients(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of objects detailing the URI and handler of each client.
> :::

#### getClient()

Retrieves a specific WebSocket client wrapper by its session ID.

> ```ts
> static getClient(id: string): WebsocketClient;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `id` | `string` | The session ID of the client. |
>
> ::: info Returns
> - **Type**: `WebsocketClient`
> - **Description**: The client wrapper or undefined if not found.
> :::

#### getClientByHandler()

Retrieves a specific WebSocket client wrapper by its handler identifier.

> ```ts
> static getClientByHandler(handler: string): WebsocketClient;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `handler` | `string` | The handler identifier associated with the client. |
>
> ::: info Returns
> - **Type**: `WebsocketClient`
> - **Description**: The client wrapper or undefined if not found.
> :::

#### getMessage()

Retrieves the message payload from the current context, typically used inside an &#x27;onmessage&#x27; handler.

> ```ts
> static getMessage(): any;
> ```
>
>
> ::: info Returns
> - **Type**: `any`
> - **Description**: The message content.
> :::

#### getError()

Retrieves error details from the current context, typically used inside an &#x27;onerror&#x27; handler.

> ```ts
> static getError(): any;
> ```
>
>
> ::: info Returns
> - **Type**: `any`
> - **Description**: The error object or string.
> :::

#### getMethod()

Retrieves the event method name that triggered the current script execution (e.g., &quot;onopen&quot;, &quot;onmessage&quot;).

> ```ts
> static getMethod(): string;
> ```
>
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The name of the event method.
> :::

#### isOnOpen()

Checks if the current event context is &#x27;onopen&#x27;.

> ```ts
> static isOnOpen(): boolean;
> ```
>
>
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the method is &#x27;onopen&#x27;.
> :::

#### isOnMessage()

Checks if the current event context is &#x27;onmessage&#x27;.

> ```ts
> static isOnMessage(): boolean;
> ```
>
>
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the method is &#x27;onmessage&#x27;.
> :::

#### isOnError()

Checks if the current event context is &#x27;onerror&#x27;.

> ```ts
> static isOnError(): boolean;
> ```
>
>
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the method is &#x27;onerror&#x27;.
> :::

#### isOnClose()

Checks if the current event context is &#x27;onclose&#x27;.

> ```ts
> static isOnClose(): boolean;
> ```
>
>
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the method is &#x27;onclose&#x27;.
> :::

