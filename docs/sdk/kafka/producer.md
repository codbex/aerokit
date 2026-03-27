# kafka/producer

::: tip Documentation
- source: [kafka/producer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/kafka/producer.ts)
:::


## Overview

Provides an API for configuring and managing Kafka producers,
allowing scripts to create topics, send messages, and close the producer connection.


## Classes

### Producer


The Producer class serves as the main entry point for creating and configuring
Kafka topic producers.

#### Constructors

##### Constructor

```ts
new Producer(): Producer;
```

#### Methods
##### topic()
**Parameters**
> ::: info Returns
> - **Type**: `Topic`
> - **Description**: A Topic instance configured for the specified destination and properties.
> :::
##### close()

```ts
static close(configuration?): void;
```


Closes the Kafka producer connection pool, releasing associated resources.
This should be called when message sending is complete to ensure proper cleanup.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `configuration` | \{ \[`key`: `string`\]: `string`; \} | Optional key-value object containing the configuration used to initialize the producer to be closed. |

> ::: info Returns
> - **Type**: `void`
> :::