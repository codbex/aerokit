# messaging/producer

::: tip Documentation
- source: [messaging/producer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/messaging/producer.ts)
:::


## Overview

Provides an API for producing (sending) messages to JMS-style destinations,
supporting both Queues (point-to-point) and Topics (publish/subscribe).


## Classes

### Producer


The entry point for creating messaging producers.
Use this class to obtain instances of Queue or Topic producers for sending messages.

#### Constructors

##### Constructor

```ts
new Producer(): Producer;
```

#### Methods
##### queue()
**Parameters**
> ::: info Returns
> - **Type**: `Queue`
> - **Description**: A Queue instance.
> :::
##### topic()

```ts
static topic(destination): Topic;
```


Creates a Topic producer instance for publish/subscribe messaging.
Messages sent to this destination can be consumed by multiple subscribers simultaneously.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `destination` | `string` | The name of the topic destination (e.g., 'sensor.data.topic'). |

> ::: info Returns
> - **Type**: `Topic`
> - **Description**: A Topic instance.
> :::