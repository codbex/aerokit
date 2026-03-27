# kafka/consumer

::: tip Documentation
- source: [kafka/consumer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/kafka/consumer.ts)
:::


## Overview

Provides an API for configuring and managing Kafka consumers,
allowing scripts to start and stop listening to specific topics.


## Classes

### Consumer


The Consumer class acts as the main entry point for creating and configuring
Kafka topic consumers.

#### Constructors

##### Constructor

```ts
new Consumer(): Consumer;
```

#### Methods
##### topic()
**Parameters**
> ::: info Returns
> - **Type**: `Topic`
> - **Description**: A Topic instance configured for the specified destination and properties.
> :::