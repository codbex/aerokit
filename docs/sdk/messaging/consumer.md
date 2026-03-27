# messaging/consumer

::: tip Documentation
- source: [messaging/consumer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/messaging/consumer.ts)
:::


## Overview

Provides an API for consuming messages from JMS-style destinations,
supporting both Queues (point-to-point) and Topics (publish/subscribe).


## Classes

### Consumer


The entry point for creating messaging consumers.
Use this class to obtain instances of Queue or Topic consumers.

#### Constructors

##### Constructor

```ts
new Consumer(): Consumer;
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


Creates a Topic consumer instance for publish/subscribe messaging.
Messages sent to this destination can be consumed by multiple subscribers.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `destination` | `string` | The name of the topic destination (e.g., 'market.updates.topic'). |

> ::: info Returns
> - **Type**: `Topic`
> - **Description**: A Topic instance.
> :::