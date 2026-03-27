# utils/escape

::: tip Documentation
- source: [utils/escape.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/escape.ts)
:::

## Overview



## Classes

### Escape

#### escapeCsv()

Escapes special characters in a string to make it safe for use as a value within a CSV file.
Typically handles double quotes, commas, and newlines.

> ```ts
> static escapeCsv(input: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The string to be escaped. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The CSV-safe escaped string.
> :::

#### escapeJavascript()

Escapes characters in a string to create a valid JavaScript string literal.
This makes it safe for embedding string values within JavaScript code blocks.

> ```ts
> static escapeJavascript(input: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The string to be escaped. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The JavaScript-safe escaped string.
> :::

#### escapeHtml3()

Escapes characters in a string using HTML 3.2 entity references.

> ```ts
> static escapeHtml3(input: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The string to be escaped. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The HTML 3.2 escaped string.
> :::

#### escapeHtml4()

Escapes characters in a string using HTML 4.0 entity references.
This is the common standard for escaping characters like &lt;, &gt;, &amp;, and &quot;.

> ```ts
> static escapeHtml4(input: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The string to be escaped. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The HTML 4.0 escaped string.
> :::

#### escapeJava()

Escapes characters in a string to create a valid Java string literal.

> ```ts
> static escapeJava(input: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The string to be escaped. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The Java-safe escaped string.
> :::

#### escapeJson()

Escapes characters (like quotes, backslashes, and control characters) in a string
to make it safe for embedding as a value within a JSON document.

> ```ts
> static escapeJson(input: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The string to be escaped. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The JSON-safe escaped string.
> :::

#### escapeXml()

Escapes characters in a string to make it valid for use within an XML document.
Typically handles characters like &lt;, &gt;, &amp;, &quot;, and &#x27;.

> ```ts
> static escapeXml(input: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The string to be escaped. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The XML-safe escaped string.
> :::

#### unescapeCsv()

The inverse of &#x60;escapeCsv&#x60;: unescapes CSV-specific escape sequences back to their original form.

> ```ts
> static unescapeCsv(input: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The CSV-escaped string. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The unescaped string.
> :::

#### unescapeJavascript()

The inverse of &#x60;escapeJavascript&#x60;: unescapes JavaScript string literals.

> ```ts
> static unescapeJavascript(input: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The JavaScript-escaped string. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The unescaped string.
> :::

#### unescapeHtml3()

The inverse of &#x60;escapeHtml3&#x60;: unescapes HTML 3.2 entity references.

> ```ts
> static unescapeHtml3(input: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The HTML 3.2 escaped string. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The unescaped string.
> :::

#### unescapeHtml4()

The inverse of &#x60;escapeHtml4&#x60;: unescapes HTML 4.0 entity references.

> ```ts
> static unescapeHtml4(input: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The HTML 4.0 escaped string. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The unescaped string.
> :::

#### unescapeJava()

The inverse of &#x60;escapeJava&#x60;: unescapes Java string literals.

> ```ts
> static unescapeJava(input: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The Java-escaped string. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The unescaped string.
> :::

#### unescapeJson()

The inverse of &#x60;escapeJson&#x60;: unescapes JSON string escape sequences.

> ```ts
> static unescapeJson(input: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The JSON-escaped string. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The unescaped string.
> :::

#### unescapeXml()

The inverse of &#x60;escapeXml&#x60;: unescapes XML entity references.

> ```ts
> static unescapeXml(input: string): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `string` | The XML-escaped string. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The unescaped string.
> :::

