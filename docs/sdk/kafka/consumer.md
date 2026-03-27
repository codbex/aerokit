# kafka/consumer

> [!tip]
> Auto-generated from
> - source: [kafka/consumer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/kafka/consumer.ts)
> - version: 1.0.0


## Overview

Provides an API for configuring and managing Kafka consumers,
allowing scripts to start and stop listening to specific topics.
/
const KafkaFacade = Java.type("org.eclipse.dirigible.components.api.kafka.KafkaFacade");

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Consumer](#consumer)
- [Returns](#returns)

## Classes

### Consumer


The Consumer class acts as the main entry point for creating and configuring
Kafka topic consumers.

## Returns

[`Consumer`](#consumer)

#### Methods

##### topic()

> ```ts
> static topic(destination, configuration?): Topic;
> ```


> Creates a new topic configuration wrapper that can be used to start or
> stop listening for messages on a Kafka topic.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `destination` | `string` | The name of the Kafka topic to consume messages from. |
> | `configuration` | \{ \[`key`: `string`\]: `string`; \} | Optional key-value object containing Kafka consumer properties (e.g., 'group.id', 'auto.offset.reset'). |

> ::: info Returns
> - **Type**: `Topic`
> - **Description**: A Topic instance configured for the specified destination and properties.
> :::
