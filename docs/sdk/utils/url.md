# utils/url

::: tip Documentation
- source: [utils/url.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/url.ts)
:::


## Overview

The Url API provides...


## Classes

### URL


Utility class for performing various forms of URL encoding and decoding.
It wraps native Java URL utility methods for handling query parameters,
path segments, and form data.

#### Constructors

##### Constructor

```ts
new URL(): URL;
```

#### Methods
##### encode()
**Parameters**
> ::: info Returns
> - **Type**: `string`
> - **Description**: The URL-encoded string.
> :::
##### decode()

```ts
static decode(input, charset?): string;
```


URL-decodes the input string, typically used for decoding query parameter values.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The string to be decoded. |
| `charset?` | `string` | The character set (e.g., 'UTF-8', 'ISO-8859-1') that was used for encoding. Defaults to the system's preferred encoding if omitted. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The URL-decoded string.
> :::
##### escape()

```ts
static escape(input): string;
```


Escapes the input string using general URL escaping rules.
This is typically equivalent to `encodeURIComponent` and is suitable for
encoding query parameter *values*.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The string to escape. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The escaped string.
> :::
##### escapePath()

```ts
static escapePath(input): string;
```


Escapes the input string specifically for use as a **URL path segment**.
It typically preserves path delimiters like `/` that might otherwise be escaped
in standard URL encoding.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The path string to escape. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The escaped path string.
> :::
##### escapeForm()

```ts
static escapeForm(input): string;
```


Escapes the input string according to the rules for **HTML Form Data**
(application/x-www-form-urlencoded). This typically replaces spaces with `+`
instead of `%20`.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The form data string to escape. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The escaped form data string.
> :::