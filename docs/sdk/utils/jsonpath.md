# utils/jsonpath

> [!tip]
> Auto-generated from
> - source: [utils/jsonpath.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/jsonpath.ts)
> - version: 1.0.0


## Overview

The Jsonpath API provides...

## Table of Contents

- [Overview](#overview)
- [Functions](#functions)
  - [JSONPath()](#jsonpath())
- [References](#references)
  - [default](#default)

## Functions

### JSONPath()

> ```ts
> function JSONPath(
>    opts?, 
>    expr, 
>    obj, 
>    callback, 
>    otherTypeCallback): void;
> ```


#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts?` | `any` | If present, must be an object |
| `expr?` | `any` | JSON path to evaluate |
| `obj?` | `any` | JSON object to evaluate against |
| `callback?` | `any` | Passed 3 arguments: 1) desired payload per `resultType`, 2) `"value"|"property"`, 3) Full returned object with all payloads |
| `otherTypeCallback?` | `any` | If `@other()` is at the end of one's query, this will be invoked with the value of the item, its path, its parent, and its parent's property name, and it should return a boolean indicating whether the supplied value belongs to the "other" type or not (or it may handle transformations and return `false`). |

#### Returns

`void`

## References

### default

Renames and re-exports [JSONPath](#jsonpath)
