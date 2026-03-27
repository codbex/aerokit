# utils/converter

::: tip Documentation
- source: [utils/converter.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/converter.ts)
:::


## Overview

Utility class for converting and normalizing common data types (Date, Boolean)
within an object structure, typically for persistence or API consumption.


## Classes

### Converter


Utility class for converting and normalizing common data types (Date, Boolean)
within an object structure, typically for persistence or API consumption.

#### Constructors

##### Constructor

```ts
new Converter(): Converter;
```

#### Methods
##### setDate()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
###### Example

```ts
// Before: { date: "2024-01-01T10:00:00Z" }
Converter.setDate(obj, 'date');
// After: { date: 1704096000000 }
```

##### setLocalDate()

```ts
static setLocalDate(obj, property): void;
```


Converts a date property value into an ISO 8601 string, adjusted to represent
the start of that day (local midnight) to handle timezone offsets consistently.
This is typically used for fields that should represent a date *only*, without time of day ambiguity.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | `any` | The object containing the property to be converted. |
| `property` | `string` | The string name of the date property (e.g., 'birthday'). |

> ::: info Returns
> - **Type**: `void`
> :::
###### Example

```ts
// If local timezone is EST (UTC-5):
// Before: { date: "2024-01-01" }
Converter.setLocalDate(obj, 'date');
// After: { date: "2024-01-01T05:00:00.000Z" } (start of day UTC)
```

##### setBoolean()

```ts
static setBoolean(obj, property): void;
```


Explicitly coerces a property value to a strict boolean type (`true` or `false`).
This handles truthy/falsy values like `1`, `0`, `null`, and empty strings.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | `any` | The object containing the property to be converted. |
| `property` | `string` | The string name of the boolean property (e.g., 'isActive'). |

> ::: info Returns
> - **Type**: `void`
> :::
###### Example

```ts
// Before: { flag: 1, other: null }
Converter.setBoolean(obj, 'flag');
Converter.setBoolean(obj, 'other');
// After: { flag: true, other: false }
```
