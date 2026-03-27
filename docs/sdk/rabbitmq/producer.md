# rabbitmq/producer

::: tip Documentation
- source: [rabbitmq/producer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/rabbitmq/producer.ts)
:::


## Overview

RabbitMQ Producer

This facade provides a static method to send messages to a RabbitMQ queue,
wrapping the underlying Java implementation provided by the `RabbitMQFacade`.


## Classes

### Producer


#### Constructors

##### Constructor

```ts
new Producer(): Producer;
```

#### Methods
##### send()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::