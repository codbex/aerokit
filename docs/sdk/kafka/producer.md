# kafka/producer

> [!tip]
> Auto-generated from
> - source: [kafka/producer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/kafka/producer.ts)
> - version: 1.0.0


## Overview

Provides an API for configuring and managing Kafka producers,
allowing scripts to create topics, send messages, and close the producer connection.
/
const KafkaFacade = Java.type("org.eclipse.dirigible.components.api.kafka.KafkaFacade");

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Producer](#producer)
- [Returns](#returns)

## Classes

### Producer


The Producer class serves as the main entry point for creating and configuring
Kafka topic producers.

## Returns

[`Producer`](#producer)

#### Methods

##### topic()

> ```ts
> static topic(destination, configuration?): Topic;
> ```


> Creates a new topic configuration wrapper that can be used to send messages
> to a specific Kafka topic.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `destination` | `string` | The name of the Kafka topic to send messages to. |
> | `configuration` | \{ \[`key`: `string`\]: `string`; \} | Optional key-value object containing Kafka producer properties (e.g., 'bootstrap.servers', 'acks'). |

> ::: info Returns
> - **Type**: `Topic`
> - **Description**: A Topic instance configured for the specified destination and properties.
> :::

##### close()

> ```ts
> static close(configuration?): void;
> ```


> Closes the Kafka producer connection pool, releasing associated resources.
> This should be called when message sending is complete to ensure proper cleanup.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `configuration` | \{ \[`key`: `string`\]: `string`; \} | Optional key-value object containing the configuration used to initialize the producer to be closed. |

> ::: info Returns
> - **Type**: `void`
> :::
