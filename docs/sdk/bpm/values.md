# bpm/values

::: tip Documentation
- source: [bpm/values.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/bpm/values.ts)
:::


## Overview

Values
* Utility class for serializing (stringify) and deserializing (parse) complex variable values (like objects and arrays)
to and from JSON strings for storage or transfer across the API boundary.


## Classes

### Values


Values
* Utility class for serializing (stringify) and deserializing (parse) complex variable values (like objects and arrays)
to and from JSON strings for storage or transfer across the API boundary.

#### Constructors

##### Constructor

```ts
new Values(): Values;
```

#### Methods
##### parseValue()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> - **Description**: The parsed object, or the original value if parsing fails.
> :::
##### parseValuesMap()

```ts
static parseValuesMap(variables): Map;
```


Iterates over the values of a Map and applies #parseValue(any) to each value.
This is typically used to deserialize all variables returned from an API call.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `variables` | `Map`\ | The Map of variable names to their values (which may be JSON strings). |

##### stringifyValue()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> - **Description**: The JSON string representation, a Java List (for arrays), or the original primitive value.
> :::
##### stringifyValuesMap()

```ts
static stringifyValuesMap(variables): Map;
```


Iterates over the values of a Map and applies #stringifyValue(any) to each value.
This is typically used to serialize a map of variables before sending them to an API call.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `variables` | `Map`\ | The Map of variable names to their values. |
