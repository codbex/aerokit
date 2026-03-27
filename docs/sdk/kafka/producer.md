# kafka/producer

::: tip Documentation
- source: [kafka/producer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/kafka/producer.ts)
:::

## Overview



## Classes

### Producer

#### topic()

Creates a new topic configuration wrapper that can be used to send messages
to a specific Kafka topic.

> ```ts
> static topic(destination: string, configuration: any): Topic;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `destination` | `string` | The name of the Kafka topic to send messages to. |
> | `configuration` | `any` | Optional key-value object containing Kafka producer properties
(e.g., &#x27;bootstrap.servers&#x27;, &#x27;acks&#x27;). |
>
> ::: info Returns
> - **Type**: `Topic`
> - **Description**: A Topic instance configured for the specified destination and properties.
> :::

#### close()

Closes the Kafka producer connection pool, releasing associated resources.
This should be called when message sending is complete to ensure proper cleanup.

> ```ts
> static close(configuration: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `configuration` | `any` | Optional key-value object containing the configuration
used to initialize the producer to be closed. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

