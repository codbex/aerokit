# bpm/values

> [!tip]
> Auto-generated from
> - source: [bpm/values.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/bpm/values.ts)
> - version: 1.0.0


## Overview

Values
* Utility class for serializing (stringify) and deserializing (parse) complex variable values (like objects and arrays)
to and from JSON strings for storage or transfer across the API boundary.

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Values](#values)
- [Returns](#returns)

## Classes

### Values


Values
* Utility class for serializing (stringify) and deserializing (parse) complex variable values (like objects and arrays)
to and from JSON strings for storage or transfer across the API boundary.

## Returns

[`Values`](#values)

#### Methods

##### parseValue()

> ```ts
> static parseValue(value): any;
> ```


> Attempts to parse a value as a JSON string.
> If the value is a valid JSON string (representing an object or array), it is parsed and returned as an object.
> If parsing fails (e.g., the value is a primitive or an invalid JSON string), the original value is returned.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `value` | `any` | The value to parse, typically a string read from the API. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The parsed object, or the original value if parsing fails.
> :::

##### parseValuesMap()

> ```ts
> static parseValuesMap(variables): Map;
> ```


> Iterates over the values of a Map and applies #parseValue(any) to each value.
> This is typically used to deserialize all variables returned from an API call.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `variables` | `Map`\ | The Map of variable names to their values (which may be JSON strings). |
> 
> ###### Returns
> 
> `Map`\
> 
> The Map with all values deserialized where possible.
> 
> ##### stringifyValue()
> 
> > ```ts
> > static stringifyValue(value): any;
> > ```
> 
> 
> > Serializes a value for persistence or API transfer.
> > Arrays and objects are converted into their respective JSON string representations.
> > Note: Arrays are additionally converted into a `java.util.List` of stringified elements for Java API compatibility.
> > Primitive types are returned as is.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `value` | `any` | The value to serialize. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The JSON string representation, a Java List (for arrays), or the original primitive value.
> :::

##### stringifyValuesMap()

> ```ts
> static stringifyValuesMap(variables): Map;
> ```


> Iterates over the values of a Map and applies #stringifyValue(any) to each value.
> This is typically used to serialize a map of variables before sending them to an API call.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `variables` | `Map`\ | The Map of variable names to their values. |

###### Returns

`Map`\

The Map with all values serialized.
