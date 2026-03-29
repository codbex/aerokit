# kafka/consumer

## Overview



::: tip Module
- source: [kafka/consumer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/kafka/consumer.ts)
- last updated: 
:::

## Classes

### Consumer

#### topic()

Creates a new topic configuration wrapper that can be used to start or
stop listening for messages on a Kafka topic.

> ```ts
> static topic(destination: string, configuration: any): Topic;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `destination` | `string` | The name of the Kafka topic to consume messages from. |
> | `configuration` | `any` | Optional key-value object containing Kafka consumer properties
(e.g., 'group.id', 'auto.offset.reset'). |
>
> ::: info Returns
> - **Type**: `Topic`
> - **Description**: A Topic instance configured for the specified destination and properties.
> :::

