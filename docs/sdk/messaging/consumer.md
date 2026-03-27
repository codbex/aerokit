# messaging/consumer

::: tip Documentation
- source: [messaging/consumer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/messaging/consumer.ts)
:::

## Overview



## Classes

### Consumer

#### queue()

Creates a Queue consumer instance for point-to-point messaging.
Messages sent to this destination are consumed by only one receiver.

> ```ts
> static queue(destination: string): Queue;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `destination` | `string` | The name of the queue destination (e.g., &#x27;orders.queue&#x27;). |
>
> ::: info Returns
> - **Type**: `Queue`
> - **Description**: A Queue instance.
> :::

#### topic()

Creates a Topic consumer instance for publish/subscribe messaging.
Messages sent to this destination can be consumed by multiple subscribers.

> ```ts
> static topic(destination: string): Topic;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `destination` | `string` | The name of the topic destination (e.g., &#x27;market.updates.topic&#x27;). |
>
> ::: info Returns
> - **Type**: `Topic`
> - **Description**: A Topic instance.
> :::

