# rabbitmq/producer

::: tip Documentation
- source: [rabbitmq/producer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/rabbitmq/producer.ts)
:::

## Overview



## Classes

### Producer

#### send()

Sends a message to the specified RabbitMQ queue.

> ```ts
> static send(queue: string, message: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `queue` | `string` | The name of the RabbitMQ queue to send the message to. |
> | `message` | `string` | The content of the message to be sent (as a string). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

