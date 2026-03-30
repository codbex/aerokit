# messaging/producer

## Overview

::: tip Module
- source: [messaging/producer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/messaging/producer.ts)
- last updated: 
:::



## Classes

### Producer

#### queue()

Creates a Queue producer instance for point-to-point messaging.
Messages sent to this destination are intended to be consumed by a single receiver.

> ```ts
> static queue(destination: string): Queue;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `destination` | `string` | The name of the queue destination (e.g., 'task.queue'). |
>
> ::: info Returns
> - **Type**: `Queue`
> - **Description**: A Queue instance.
> :::

#### topic()

Creates a Topic producer instance for publish/subscribe messaging.
Messages sent to this destination can be consumed by multiple subscribers simultaneously.

> ```ts
> static topic(destination: string): Topic;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `destination` | `string` | The name of the topic destination (e.g., 'sensor.data.topic'). |
>
> ::: info Returns
> - **Type**: `Topic`
> - **Description**: A Topic instance.
> :::

