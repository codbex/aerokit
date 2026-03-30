# pdf/pdf

## Overview



::: tip Module
- source: [pdf/pdf.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/pdf/pdf.ts)
- last updated: 
:::

## Classes

### PDF

#### generateTable()

Generates a PDF document containing a styled table based on the standard table template.

> ```ts
> static generateTable(data: PDFTableData, config: PDFTableConfig): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `data` | `PDFTableData` | The structured data to populate the table. |
> | `config` | `PDFTableConfig` | Optional configuration for page size and alignment. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: The generated PDF content as a byte array (number[]).
> :::

#### generate()

Generates a PDF document using a custom template path and data payload.

> ```ts
> static generate(templatePath: string, data: PDFTableData): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `templatePath` | `string` | The path to the custom template file (e.g., in the Registry). |
> | `data` | `PDFTableData` | The data to be injected into the template. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: The generated PDF content as a byte array (number[]).
> :::

