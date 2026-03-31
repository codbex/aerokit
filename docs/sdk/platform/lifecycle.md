# platform/lifecycle

## Overview

::: tip Module
- package: `n/a`
- source: [platform/lifecycle.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/platform/lifecycle.ts)
- last updated: 
:::



## Classes

### Lifecycle

#### publish()

Publishes a project for a specific user and workspace.

> ```ts
> static publish(user: string, workspace: string, project: string): boolean;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `user` | `string` | The username of the owner of the workspace. |
> | `workspace` | `string` | The name of the workspace to publish from. |
> | `project` | `string` | The specific project name to publish. Use "*" to publish all projects in the workspace. |
>
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the publish operation was successful, false otherwise.
> :::

#### unpublish()

Unpublishes a currently deployed project.

> ```ts
> static unpublish(project: string): boolean;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `project` | `string` | The specific project name to unpublish. Use "*" to unpublish all currently deployed projects. |
>
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the unpublish operation was successful, false otherwise.
> :::

