# http/errors/ValidationError

> [!tip]
> Auto-generated from
> - source: [http/errors/ValidationError.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/errors/ValidationError.ts)
> - version: 1.0.0


## Overview

Custom error class used for representing failures due to invalid input
or data that violates domain-specific validation rules.

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [ValidationError](#validationerror)
- [Parameters](#parameters)

## Classes

### ValidationError


Custom error class used for representing failures due to invalid input
or data that violates domain-specific validation rules.

#### Extends

- `Error`

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | The detailed message describing the validation failure. |

###### Returns

[`ValidationError`](#validationerror)

###### Overrides

> ```ts
> Error.constructor
> ```

#### Properties

| Property | Modifier | Type | Default value | Description | Overrides | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
|  `name` | `readonly` | `"ValidationError"` | `"ValidationError"` | The name of the error, set to "ValidationError". | `Error.name` | src/http/errors/ValidationError.ts:9 |
|  `stack` | `readonly` | `string` | `undefined` | Captures the stack trace when the error is instantiated. | `Error.stack` | src/http/errors/ValidationError.ts:13 |
