# platform/lifecycle

::: tip Documentation
- source: [platform/lifecycle.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/platform/lifecycle.ts)
:::


## Overview

Provides a wrapper for managing the application lifecycle (publish/unpublish)


## Classes

### Lifecycle


Lifecycle

#### Description

Static utility class to publish and unpublish projects on the platform.

#### Constructors

##### Constructor

```ts
new Lifecycle(): Lifecycle;
```

#### Methods
##### publish()
**Parameters**
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the publish operation was successful, false otherwise.
> :::
##### unpublish()

```ts
static unpublish(project?): boolean;
```


Unpublishes a currently deployed project.

**Parameters**

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `project?` | `string` | `"*"` | The specific project name to unpublish. Use "*" to unpublish all currently deployed projects. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the unpublish operation was successful, false otherwise.
> :::