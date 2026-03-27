# utils/xml

> [!tip]
> Auto-generated from
> - source: [utils/xml.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/xml.ts)
> - version: 1.0.0


## Overview

Utility class for converting data between XML and JSON formats.
It automatically handles input serialization if an object is passed instead of a string.

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [XML](#xml)
- [Returns](#returns)

## Classes

### XML


Utility class for converting data between XML and JSON formats.
It automatically handles input serialization if an object is passed instead of a string.

## Returns

[`XML`](#xml)

#### Methods

##### fromJson()

> ```ts
> static fromJson(input): string;
> ```


> Converts a JSON input (either a JSON string or a raw JavaScript object) into an XML string.

> Note: If a JavaScript object is passed, it is first stringified using JSON.stringify().

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `any` | The JSON string or object to be converted to XML. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The resulting XML content as a string.
> :::

##### toJson()

> ```ts
> static toJson(input): string;
> ```


> Converts an XML input (expected as an XML string) into a JSON formatted string.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `any` | The XML string to be converted to JSON. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The resulting JSON content as a string.
> :::
