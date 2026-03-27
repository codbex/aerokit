# platform/lifecycle

> [!tip]
> Auto-generated from
> - source: [platform/lifecycle.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/platform/lifecycle.ts)
> - version: 1.0.0


## Overview

Provides a wrapper for managing the application lifecycle (publish/unpublish)
/
const LifecycleFacade = Java.type("org.eclipse.dirigible.components.api.platform.LifecycleFacade");

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Lifecycle](#lifecycle)
- [Returns](#returns)

## Classes

### Lifecycle


Lifecycle

#### Description

Static utility class to publish and unpublish projects on the platform.

## Returns

[`Lifecycle`](#lifecycle)

#### Methods

##### publish()

> ```ts
> static publish( user, workspace, project?): boolean;
> ```


> Publishes a project for a specific user and workspace.

> **Parameters**

> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `user` | `string` | `undefined` | The username of the owner of the workspace. |
> | `workspace` | `string` | `undefined` | The name of the workspace to publish from. |
> | `project?` | `string` | `"*"` | The specific project name to publish. Use "*" to publish all projects in the workspace. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the publish operation was successful, false otherwise.
> :::

##### unpublish()

> ```ts
> static unpublish(project?): boolean;
> ```


> Unpublishes a currently deployed project.

> **Parameters**

> | Parameter | Type | Default value | Description |
> | ------ | ------ | ------ | ------ |
> | `project?` | `string` | `"*"` | The specific project name to unpublish. Use "*" to unpublish all currently deployed projects. |

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the unpublish operation was successful, false otherwise.
> :::
