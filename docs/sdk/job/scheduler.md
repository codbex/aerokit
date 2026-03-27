# job/scheduler

> [!tip]
> Auto-generated from
> - source: [job/scheduler.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/job/scheduler.ts)
> - version: 1.0.0


## Overview

Provides the API for managing scheduled jobs and tasks within the platform,
allowing users to retrieve, enable, disable, and trigger jobs, as well as log output.
/

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Scheduler](#scheduler)
- [Returns](#returns)

## Classes

### Scheduler


The Scheduler class provides static methods for interacting with the job scheduler,
offering global control over the system's defined jobs.

## Returns

[`Scheduler`](#scheduler)

#### Methods

##### getJobs()

> ```ts
> static getJobs(): Job[];
> ```


> Retrieves all job definitions currently configured in the system.

> > ::: info Returns
> > - **Type**: `Job`
> > - **Description**: [] An array of Job objects.
> > :::

> ##### getJob()

> > ```ts
> > static getJob(name): Job;
> > ```


> Retrieves a specific job definition by its unique name.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the job. |

> ::: info Returns
> - **Type**: `Job`
> - **Description**: A Job object corresponding to the provided name.
> :::

##### enable()

> ```ts
> static enable(name): void;
> ```


> Enables a job, allowing it to be executed according to its schedule (cron expression).

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the job to enable. |

> ::: info Returns
> - **Type**: `void`
> :::

##### disable()

> ```ts
> static disable(name): void;
> ```


> Disables a job, preventing it from executing on its schedule.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the job to disable. |

> ::: info Returns
> - **Type**: `void`
> :::

##### trigger()

> ```ts
> static trigger(name, parameters?): void;
> ```


> Triggers the immediate execution of a job.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the job to trigger. |
> | `parameters` | \{ \[`key`: `string`\]: `string`; \} | Optional key-value object of parameters to pass to the job execution. |

> ::: info Returns
> - **Type**: `void`
> :::

##### log()

> ```ts
> static log(name, message): void;
> ```


> Logs a message at the standard log level for a specific job instance.
> This is useful when the log context needs to be associated with a running job.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the job to associate the log with. |
> | `message` | `string` | The log message content. |

> ::: info Returns
> - **Type**: `void`
> :::

##### error()

> ```ts
> static error(name, message): void;
> ```


> Logs an error message for a specific job instance.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the job. |
> | `message` | `string` | The error message content. |

> ::: info Returns
> - **Type**: `void`
> :::

##### warn()

> ```ts
> static warn(name, message): void;
> ```


> Logs a warning message for a specific job instance.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the job. |
> | `message` | `string` | The warning message content. |

> ::: info Returns
> - **Type**: `void`
> :::

##### info()

> ```ts
> static info(name, message): void;
> ```


> Logs an informational message for a specific job instance.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `name` | `string` | The name of the job. |
> | `message` | `string` | The information message content. |

> ::: info Returns
> - **Type**: `void`
> :::
