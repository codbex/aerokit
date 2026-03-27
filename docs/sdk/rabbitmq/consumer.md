# rabbitmq/consumer

::: tip Documentation
- source: [rabbitmq/consumer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/rabbitmq/consumer.ts)
:::


## Overview

RabbitMQ Consumer

This facade provides static methods to start and stop listening on RabbitMQ queues,
wrapping the underlying Java implementation provided by the `RabbitMQFacade`.


## Classes

### Consumer


#### Constructors

##### Constructor

```ts
new Consumer(): Consumer;
```

#### Methods
##### startListening()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### stopListening()

```ts
static stopListening(queue, handler): void;
```


Stops the message listener previously started on a specified RabbitMQ queue
for a given handler.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `queue` | `string` | The name of the RabbitMQ queue. |
| `handler` | `string` | The URI/name of the component/script whose listener should be stopped. |

> ::: info Returns
> - **Type**: `void`
> :::