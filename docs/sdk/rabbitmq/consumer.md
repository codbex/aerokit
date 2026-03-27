# rabbitmq/consumer

> [!tip]
> Auto-generated from
> - source: [rabbitmq/consumer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/rabbitmq/consumer.ts)
> - version: 1.0.0


## Overview

The Consumer API provides...

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Consumer](#consumer)
- [Returns](#returns)

## Classes

### Consumer


## Returns

[`Consumer`](#consumer)

#### Methods

##### startListening()

> ```ts
> static startListening(queue, handler): void;
> ```


> Starts listening for messages on a specified RabbitMQ queue.
> The handler is typically a service or script URI that will be executed
> when a message arrives.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `queue` | `string` | The name of the RabbitMQ queue to listen to. |
> | `handler` | `string` | The URI/name of the component/script that will handle the message. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### stopListening() > ```ts static stopListening(queue, handler): void; ``` Stops the message listener previously started on a specified RabbitMQ queue for a given handler.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `queue` | `string` | The name of the RabbitMQ queue. |
> | `handler` | `string` | The URI/name of the component/script whose listener should be stopped. |

> ::: info Returns
> - **Type**: `void`
> :::
