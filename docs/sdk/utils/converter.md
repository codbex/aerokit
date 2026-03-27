# utils/converter

::: tip Documentation
- source: [utils/converter.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/converter.ts)
:::

## Overview



## Classes

### Converter

#### setDate()

Converts a date property value within an object into a Unix timestamp (milliseconds since epoch).

> ```ts
> static setDate(obj: any, property: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `obj` | `any` | The object containing the property to be converted. |
> | `property` | `string` | The string name of the date property (e.g., &#x27;dateCreated&#x27;). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### setLocalDate()

Converts a date property value into an ISO 8601 string, adjusted to represent
the start of that day (local midnight) to handle timezone offsets consistently.
This is typically used for fields that should represent a date *only*, without time of day ambiguity.

> ```ts
> static setLocalDate(obj: any, property: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `obj` | `any` | The object containing the property to be converted. |
> | `property` | `string` | The string name of the date property (e.g., &#x27;birthday&#x27;). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### setBoolean()

Explicitly coerces a property value to a strict boolean type (&#x60;true&#x60; or &#x60;false&#x60;).
This handles truthy/falsy values like &#x60;1&#x60;, &#x60;0&#x60;, &#x60;null&#x60;, and empty strings.

> ```ts
> static setBoolean(obj: any, property: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `obj` | `any` | The object containing the property to be converted. |
> | `property` | `string` | The string name of the boolean property (e.g., &#x27;isActive&#x27;). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

