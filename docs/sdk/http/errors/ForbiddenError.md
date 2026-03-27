# http/errors/ForbiddenError

> [!tip]
> Auto-generated from
> - source: [http/errors/ForbiddenError.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/errors/ForbiddenError.ts)
> - version: 1.0.0


## Overview

Custom error class representing a 403 Forbidden status, indicating
that the user does not have permission to access the requested resource.

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [ForbiddenError](#forbiddenerror)
- [Parameters](#parameters)

## Classes

### ForbiddenError


Custom error class representing a 403 Forbidden status, indicating
that the user does not have permission to access the requested resource.

#### Extends

- `Error`

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `message` | `string` | `"You don't have permission to access this resource"` | The error message. Defaults to "You don't have permission to access this resource". |

###### Returns

[`ForbiddenError`](#forbiddenerror)

###### Overrides

> ```ts
> Error.constructor
> ```

#### Properties

| Property | Modifier | Type | Default value | Description | Overrides | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
|  `name` | `readonly` | `"ForbiddenError"` | `"ForbiddenError"` | The name of the error, set to "ForbiddenError". | `Error.name` | src/http/errors/ForbiddenError.ts:9 |
|  `stack` | `readonly` | `string` | `undefined` | Captures the stack trace when the error is instantiated. | `Error.stack` | src/http/errors/ForbiddenError.ts:13 |
