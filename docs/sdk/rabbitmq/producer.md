# rabbitmq/producer

> [!tip]
> Auto-generated from
> - source: [rabbitmq/producer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/rabbitmq/producer.ts)
> - version: 1.0.0


## Overview

The Producer API provides...

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Producer](#producer)
- [Returns](#returns)

## Classes

### Producer


## Returns

[`Producer`](#producer)

#### Methods

##### send()

> ```ts
> static send(queue, message): void;
> ```


> Sends a message to the specified RabbitMQ queue.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `queue` | `string` | The name of the RabbitMQ queue to send the message to. |
> | `message` | `string` | The content of the message to be sent (as a string). |

> ::: info Returns
> - **Type**: `void`
> :::
