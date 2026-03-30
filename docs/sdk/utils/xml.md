# utils/xml

## Overview

::: tip Module
- source: [utils/xml.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/xml.ts)
- last updated: 
:::



## Classes

### XML

#### fromJson()

Converts a JSON input (either a JSON string or a raw JavaScript object) into an XML string.

Note: If a JavaScript object is passed, it is first stringified using JSON.stringify().

> ```ts
> static fromJson(input: any): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `any` | The JSON string or object to be converted to XML. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The resulting XML content as a string.
> :::

#### toJson()

Converts an XML input (expected as an XML string) into a JSON formatted string.

> ```ts
> static toJson(input: any): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `input` | `any` | The XML string to be converted to JSON. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The resulting JSON content as a string.
> :::

