# pdf/pdf

> [!tip]
> Auto-generated from
> - source: [pdf/pdf.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/pdf/pdf.ts)
> - version: 1.0.0


## Overview

Interface defining the structured data required to generate a table in a PDF.
/
export interface PDFTableData {
    title: string;
    description: string;
    columns: {
        name: string // Display name of the column
        key: string  // Data key to look up in the rows
    }[],
    rows: { [key: string]: any }[] // Array of data objects for each row
}

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [PDF](#pdf)
- [Returns](#returns)
- [Interfaces](#interfaces)
  - [PDFTableData](#pdftabledata)
  - [PDFTableConfig](#pdftableconfig)

## Classes

### PDF


PDF

#### Description

Utility class for generating PDF documents using a template engine and the PDFFacade.

## Returns

[`PDF`](#pdf)

#### Methods

##### generateTable()

> ```ts
> static generateTable(data, config?): any[];
> ```


> Generates a PDF document containing a styled table based on the standard table template.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | [`PDFTableData`](#pdftabledata) | The structured data to populate the table. |
| `config?` | [`PDFTableConfig`](#pdftableconfig) | Optional configuration for page size and alignment. |

###### Returns

`any`[]

The generated PDF content as a byte array (Array).

##### generate()

> ```ts
> static generate(templatePath, data): any[];
> ```


> Generates a PDF document using a custom template path and data payload.

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `templatePath` | `string` | The path to the custom template file (e.g., in the Registry). |
| `data` | [`PDFTableData`](#pdftabledata) | The data to be injected into the template. |

###### Returns

`any`[]

The generated PDF content as a byte array (Array).

## Interfaces

### PDFTableData


Interface defining the structured data required to generate a table in a PDF.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
|  `title` | `string` | src/pdf/pdf.ts:13 |
|  `description` | `string` | src/pdf/pdf.ts:14 |
|  `columns` | `object`[] | src/pdf/pdf.ts:15 |
|  `rows` | `object`[] | src/pdf/pdf.ts:19 |

***

### PDFTableConfig


Interface defining optional configuration for PDF document layout.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
|  `pageWidth?` | `number` | Document width in mm. Overrides size if present. | src/pdf/pdf.ts:27 |
|  `pageHeight?` | `number` | Document height in mm. Overrides size if present. | src/pdf/pdf.ts:29 |
|  `alignColumns?` | `boolean` | Whether to apply column alignment (based on template default). | src/pdf/pdf.ts:31 |
|  `alignRows?` | `boolean` | Whether to apply row alignment (based on template default). | src/pdf/pdf.ts:33 |
|  `size?` | `"a0"` \| `"a1"` \| `"a2"` \| `"a3"` \| `"a4"` \| `"a5"` \| `"a6"` \| `"a7"` \| `"a8"` \| `"a9"` \| `"a10"` | Standard ISO 216 paper size (A0-A10). Sets standard dimensions if custom width/height are not provided. | src/pdf/pdf.ts:35 |
