# utils/escape

::: tip Documentation
- source: [utils/escape.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/escape.ts)
:::


## Overview

The Escape API provides...


## Classes

### Escape


Utility class for performing context-aware string escaping and unescaping operations,
delegating to a native Java EscapeFacade. These methods are essential for security
(preventing injection attacks) and ensuring correct data serialization across different formats.

#### Constructors

##### Constructor

```ts
new Escape(): Escape;
```

#### Methods
##### escapeCsv()
**Parameters**
> ::: info Returns
> - **Type**: `string`
> - **Description**: The CSV-safe escaped string.
> :::
##### escapeJavascript()

```ts
static escapeJavascript(input): string;
```


Escapes characters in a string to create a valid JavaScript string literal.
This makes it safe for embedding string values within JavaScript code blocks.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The string to be escaped. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The JavaScript-safe escaped string.
> :::
##### escapeHtml3()

```ts
static escapeHtml3(input): string;
```


Escapes characters in a string using HTML 3.2 entity references.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The string to be escaped. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The HTML 3.2 escaped string.
> :::
##### escapeHtml4()

```ts
static escapeHtml4(input): string;
```


Escapes characters in a string using HTML 4.0 entity references.
This is the common standard for escaping characters like , &, and ".

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The string to be escaped. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The HTML 4.0 escaped string.
> :::
##### escapeJava()

```ts
static escapeJava(input): string;
```


Escapes characters in a string to create a valid Java string literal.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The string to be escaped. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The Java-safe escaped string.
> :::
##### escapeJson()

```ts
static escapeJson(input): string;
```


Escapes characters (like quotes, backslashes, and control characters) in a string
to make it safe for embedding as a value within a JSON document.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The string to be escaped. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The JSON-safe escaped string.
> :::
##### escapeXml()

```ts
static escapeXml(input): string;
```


Escapes characters in a string to make it valid for use within an XML document.
Typically handles characters like , &, ", and '.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The string to be escaped. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The XML-safe escaped string.
> :::
##### unescapeCsv()

```ts
static unescapeCsv(input): string;
```


The inverse of `escapeCsv`: unescapes CSV-specific escape sequences back to their original form.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The CSV-escaped string. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The unescaped string.
> :::
##### unescapeJavascript()

```ts
static unescapeJavascript(input): string;
```


The inverse of `escapeJavascript`: unescapes JavaScript string literals.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The JavaScript-escaped string. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The unescaped string.
> :::
##### unescapeHtml3()

```ts
static unescapeHtml3(input): string;
```


The inverse of `escapeHtml3`: unescapes HTML 3.2 entity references.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The HTML 3.2 escaped string. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The unescaped string.
> :::
##### unescapeHtml4()

```ts
static unescapeHtml4(input): string;
```


The inverse of `escapeHtml4`: unescapes HTML 4.0 entity references.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The HTML 4.0 escaped string. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The unescaped string.
> :::
##### unescapeJava()

```ts
static unescapeJava(input): string;
```


The inverse of `escapeJava`: unescapes Java string literals.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The Java-escaped string. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The unescaped string.
> :::
##### unescapeJson()

```ts
static unescapeJson(input): string;
```


The inverse of `escapeJson`: unescapes JSON string escape sequences.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The JSON-escaped string. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The unescaped string.
> :::
##### unescapeXml()

```ts
static unescapeXml(input): string;
```


The inverse of `escapeXml`: unescapes XML entity references.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The XML-escaped string. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The unescaped string.
> :::