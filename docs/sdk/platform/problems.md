# platform/problems

::: tip Documentation
- source: [platform/problems.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/platform/problems.ts)
:::


## Overview

Provides a wrapper for the platform's ProblemsFacade to manage system issues,
including saving new problems, fetching existing ones, and updating their status.


## Classes

### Problems


Problems

#### Description

Static utility class for managing system problems via the ProblemsFacade.

#### Constructors

##### Constructor

```ts
new Problems(): Problems;
```

#### Properties
#### Methods
##### save()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### findProblem()

```ts
static findProblem(id): Problem;
```


Finds a specific problem by its unique ID.
Note: The underlying facade returns a JSON string which is parsed here.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `number` | The unique problem ID. |

##### fetchAllProblems()
##### fetchProblemsBatch()
**Parameters**
##### deleteProblem()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### deleteAllByStatus()

```ts
static deleteAllByStatus(status): void;
```


Deletes all problem records that currently have the specified status.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `status` | `string` | The status (e.g., Problems.SOLVED or Problems.IGNORED). |

> ::: info Returns
> - **Type**: `void`
> :::
##### clearAllProblems()

```ts
static clearAllProblems(): void;
```


Clears (deletes) all problem records in the system, regardless of status.

> ::: info Returns
> - **Type**: `void`
> :::
##### updateStatus()

```ts
static updateStatus(id, status): void;
```


Updates the status of a single problem by its ID.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `number` | The unique problem ID. |
| `status` | `string` | The new status (e.g., Problems.SOLVED). |

> ::: info Returns
> - **Type**: `void`
> :::
##### updateStatusMultiple()

```ts
static updateStatusMultiple(ids, status): void;
```


Updates the status of multiple problems identified by an array of IDs.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ids` | `number`[] | An array of unique problem IDs. |
| `status` | `string` | The new status to apply to all problems. |

> ::: info Returns
> - **Type**: `void`
> :::
## Interfaces

### Problem


Problem

#### Description

Represents a single problem or issue recorded in the system.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
|  `id` | `number` | The unique identifier of the problem. | src/platform/problems.ts:13 |
|  `location` | `string` | The resource path or file location where the problem was detected. | src/platform/problems.ts:15 |
|  `type` | `string` | The severity or nature of the problem (e.g., "Error", "Warning"). | src/platform/problems.ts:17 |
|  `line` | `string` | The line number in the source where the problem occurred. | src/platform/problems.ts:19 |
|  `column` | `string` | The column number in the source where the problem occurred. | src/platform/problems.ts:21 |
|  `cause` | `string` | A brief description of the cause of the problem. | src/platform/problems.ts:23 |
|  `expected` | `string` | A description of the expected state or value. | src/platform/problems.ts:25 |
|  `createdAt` | `Date` | The timestamp when the problem was created. | src/platform/problems.ts:27 |
|  `createdBy` | `string` | The user who created or triggered the problem record. | src/platform/problems.ts:29 |
|  `category` | `string` | The category of the problem (e.g., "Syntax", "Deployment"). | src/platform/problems.ts:31 |
|  `module` | `string` | The module or component where the problem was found. | src/platform/problems.ts:33 |
|  `source` | `string` | The original source code or content related to the problem. | src/platform/problems.ts:35 |
|  `program` | `string` | The program or file name associated with the problem. | src/platform/problems.ts:37 |
|  `status` | `string` | The current status of the problem (e.g., ACTIVE, SOLVED, IGNORED). | src/platform/problems.ts:39 |
