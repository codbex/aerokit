# messaging/consumer

> [!tip]
> Auto-generated from
> - source: [messaging/consumer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/messaging/consumer.ts)
> - version: 1.0.0


## Overview

Provides an API for consuming messages from JMS-style destinations,
supporting both Queues (point-to-point) and Topics (publish/subscribe).
/

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Consumer](#consumer)
- [Returns](#returns)

## Classes

### Consumer


The entry point for creating messaging consumers.
Use this class to obtain instances of Queue or Topic consumers.

## Returns

[`Consumer`](#consumer)

#### Methods

##### queue()

> ```ts
> static queue(destination): Queue;
> ```


> Creates a Queue consumer instance for point-to-point messaging.
> Messages sent to this destination are consumed by only one receiver.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `destination` | `string` | The name of the queue destination (e.g., 'orders.queue'). |

> ::: info Returns
> - **Type**: `Queue`
> - **Description**: A Queue instance.
> :::

##### topic()

> ```ts
> static topic(destination): Topic;
> ```


> Creates a Topic consumer instance for publish/subscribe messaging.
> Messages sent to this destination can be consumed by multiple subscribers.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `destination` | `string` | The name of the topic destination (e.g., 'market.updates.topic'). |

> ::: info Returns
> - **Type**: `Topic`
> - **Description**: A Topic instance.
> :::
