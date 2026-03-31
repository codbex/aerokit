# rabbitmq/consumer

## Overview

::: tip Module
- package: `n/a`
- source: [rabbitmq/consumer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/rabbitmq/consumer.ts)
- last updated: 
:::



## Classes

### Consumer

#### startListening()

Starts listening for messages on a specified RabbitMQ queue.
The handler is typically a service or script URI that will be executed
when a message arrives.

> ```ts
> static startListening(queue: string, handler: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `queue` | `string` | The name of the RabbitMQ queue to listen to. |
> | `handler` | `string` | The URI/name of the component/script that will handle the message. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### stopListening()

Stops the message listener previously started on a specified RabbitMQ queue
for a given handler.

> ```ts
> static stopListening(queue: string, handler: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `queue` | `string` | The name of the RabbitMQ queue. |
> | `handler` | `string` | The URI/name of the component/script whose listener should be stopped. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

