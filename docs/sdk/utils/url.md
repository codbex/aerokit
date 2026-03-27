# utils/url

::: tip Documentation
- source: [utils/url.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/url.ts)
:::

## Overview



## Classes

### URL

#### encode()

URL-encodes the input string, typically used for encoding query parameter values.

> ```ts
> static encode(input: string, charset: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The string to be encoded. |
> | `charset` | `string` | The character set (e.g., &#x27;UTF-8&#x27;, &#x27;ISO-8859-1&#x27;) to use for encoding. Defaults to the system&#x27;s preferred encoding if omitted. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The URL-encoded string.
> :::

#### decode()

URL-decodes the input string, typically used for decoding query parameter values.

> ```ts
> static decode(input: string, charset: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The string to be decoded. |
> | `charset` | `string` | The character set (e.g., &#x27;UTF-8&#x27;, &#x27;ISO-8859-1&#x27;) that was used for encoding. Defaults to the system&#x27;s preferred encoding if omitted. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The URL-decoded string.
> :::

#### escape()

Escapes the input string using general URL escaping rules.
This is typically equivalent to &#x60;encodeURIComponent&#x60; and is suitable for
encoding query parameter *values*.

> ```ts
> static escape(input: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The string to escape. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The escaped string.
> :::

#### escapePath()

Escapes the input string specifically for use as a **URL path segment**.
It typically preserves path delimiters like &#x60;/&#x60; that might otherwise be escaped
in standard URL encoding.

> ```ts
> static escapePath(input: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The path string to escape. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The escaped path string.
> :::

#### escapeForm()

Escapes the input string according to the rules for **HTML Form Data**
(application/x-www-form-urlencoded). This typically replaces spaces with &#x60;+&#x60;
instead of &#x60;%20&#x60;.

> ```ts
> static escapeForm(input: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The form data string to escape. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The escaped form data string.
> :::

