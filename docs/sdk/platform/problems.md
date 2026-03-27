# platform/problems

> [!tip]
> Auto-generated from
> - source: [platform/problems.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/platform/problems.ts)
> - version: 1.0.0


## Overview

Provides a wrapper for the platform's ProblemsFacade to manage system issues,
including saving new problems, fetching existing ones, and updating their status.
/
const ProblemsFacade = Java.type("org.eclipse.dirigible.components.api.platform.ProblemsFacade");

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Problems](#problems)
- [Returns](#returns)
- [Interfaces](#interfaces)
  - [Problem](#problem)

## Classes

### Problems


Problems

#### Description

Static utility class for managing system problems via the ProblemsFacade.

## Returns

[`Problems`](#problems)

#### Properties

| Property | Modifier | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
|  `ACTIVE` | `readonly` | `"ACTIVE"` | `"ACTIVE"` | Status indicating a newly reported or unresolved problem. | src/platform/problems.ts:49 |
|  `SOLVED` | `readonly` | `"SOLVED"` | `"SOLVED"` | Status indicating a problem that has been fixed or is no longer relevant. | src/platform/problems.ts:51 |
|  `IGNORED` | `readonly` | `"IGNORED"` | `"IGNORED"` | Status indicating a problem that is known but deliberately being disregarded. | src/platform/problems.ts:53 |

#### Methods

##### save()

> ```ts
> static save( location, type, line, column, cause, expected, category, module, source, program): void;
> ```


> Saves a new problem entry to the system's problem log.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `location` | `string` | The resource path or file location. |
> | `type` | `string` | The severity or nature of the problem. |
> | `line` | `string` | The line number. |
> | `column` | `string` | The column number. |
> | `cause` | `string` | The cause description. |
> | `expected` | `string` | The expected state/value description. |
> | `category` | `string` | The problem category. |
> | `module` | `string` | The module/component name. |
> | `source` | `string` | The original source content. |
> | `program` | `string` | The program or file name. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### findProblem() > ```ts static findProblem(id): Problem; ``` Finds a specific problem by its unique ID. Note: The underlying facade returns a JSON string which is parsed here.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `id` | `number` | The unique problem ID. |
> 
> ###### Returns
> 
> [`Problem`](#problem)
> 
> The found Problem object.
> 
> ##### fetchAllProblems()
> 
> > ```ts
> > static fetchAllProblems(): Problem[];
> > ```
> 
> 
> > Fetches all recorded problems in the system.
> > Note: The underlying facade returns a JSON string which is parsed here.
> 
> > ###### Returns
> 
> > [`Problem`](#problem)[]
> 
> > An array of all Problem objects.
> 
> > ##### fetchProblemsBatch()
> 
> > > ```ts
> > > static fetchProblemsBatch(condition, limit): Problem[];
> > > ```
> 
> 
> > Fetches a batch of problems based on a custom condition and limit.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `condition` | `string` | A SQL-like condition string (e.g., "CATEGORY='Syntax'"). |
> | `limit` | `number` | The maximum number of problems to retrieve. |
> 
> ###### Returns
> 
> [`Problem`](#problem)[]
> 
> An array of Problem objects matching the condition.
> 
> ##### deleteProblem()
> 
> > ```ts
> > static deleteProblem(id): void;
> > ```
> 
> 
> > Deletes a problem record by its unique ID.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `id` | `number` | The unique problem ID to delete. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### deleteAllByStatus() > ```ts static deleteAllByStatus(status): void; ``` Deletes all problem records that currently have the specified status.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `status` | `string` | The status (e.g., Problems.SOLVED or Problems.IGNORED). |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### clearAllProblems() > ```ts static clearAllProblems(): void; ``` Clears (deletes) all problem records in the system, regardless of status.
> :::

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### updateStatus() > ```ts static updateStatus(id, status): void; ``` Updates the status of a single problem by its ID.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `id` | `number` | The unique problem ID. |
> | `status` | `string` | The new status (e.g., Problems.SOLVED). |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### updateStatusMultiple() > ```ts static updateStatusMultiple(ids, status): void; ``` Updates the status of multiple problems identified by an array of IDs.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `ids` | `number`[] | An array of unique problem IDs. |
> | `status` | `string` | The new status to apply to all problems. |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ## Interfaces
> :::

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
