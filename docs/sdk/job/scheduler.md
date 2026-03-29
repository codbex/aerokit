# job/scheduler

## Overview



::: tip Module
- source: [job/scheduler.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/job/scheduler.ts)
- last updated: 
:::

## Classes

### Scheduler

#### getJobs()

Retrieves all job definitions currently configured in the system.

> ```ts
> static getJobs(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of Job objects.
> :::

#### getJob()

Retrieves a specific job definition by its unique name.

> ```ts
> static getJob(name: string): Job;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the job. |
>
> ::: info Returns
> - **Type**: `Job`
> - **Description**: A Job object corresponding to the provided name.
> :::

#### enable()

Enables a job, allowing it to be executed according to its schedule (cron expression).

> ```ts
> static enable(name: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the job to enable. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### disable()

Disables a job, preventing it from executing on its schedule.

> ```ts
> static disable(name: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the job to disable. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### trigger()

Triggers the immediate execution of a job.

> ```ts
> static trigger(name: string, parameters: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the job to trigger. |
> | `parameters` | `any` | Optional key-value object of parameters to pass to the job execution. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### log()

Logs a message at the standard log level for a specific job instance.
This is useful when the log context needs to be associated with a running job.

> ```ts
> static log(name: string, message: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the job to associate the log with. |
> | `message` | `string` | The log message content. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### error()

Logs an error message for a specific job instance.

> ```ts
> static error(name: string, message: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the job. |
> | `message` | `string` | The error message content. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### warn()

Logs a warning message for a specific job instance.

> ```ts
> static warn(name: string, message: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the job. |
> | `message` | `string` | The warning message content. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### info()

Logs an informational message for a specific job instance.

> ```ts
> static info(name: string, message: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the job. |
> | `message` | `string` | The information message content. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

