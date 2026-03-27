# messaging/producer

> [!tip]
> Auto-generated from
> - source: [messaging/producer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/messaging/producer.ts)
> - version: 1.0.0


## Overview

Provides an API for producing (sending) messages to JMS-style destinations,
supporting both Queues (point-to-point) and Topics (publish/subscribe).
/

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Producer](#producer)
- [Returns](#returns)

## Classes

### Producer


The entry point for creating messaging producers.
Use this class to obtain instances of Queue or Topic producers for sending messages.

## Returns

[`Producer`](#producer)

#### Methods

##### queue()

> ```ts
> static queue(destination): Queue;
> ```


> Creates a Queue producer instance for point-to-point messaging.
> Messages sent to this destination are intended to be consumed by a single receiver.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `destination` | `string` | The name of the queue destination (e.g., 'task.queue'). |

> ::: info Returns
> - **Type**: `Queue`
> - **Description**: A Queue instance.
> :::

##### topic()

> ```ts
> static topic(destination): Topic;
> ```


> Creates a Topic producer instance for publish/subscribe messaging.
> Messages sent to this destination can be consumed by multiple subscribers simultaneously.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `destination` | `string` | The name of the topic destination (e.g., 'sensor.data.topic'). |

> ::: info Returns
> - **Type**: `Topic`
> - **Description**: A Topic instance.
> :::
