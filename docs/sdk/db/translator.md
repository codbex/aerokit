# db/translator

## Overview



::: tip Module
- source: [db/translator.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/translator.ts)
- last updated: 
:::

## Classes

### Translator

#### translateList()

Translates properties for a list of entities by querying the corresponding language table.

> ```ts
> static translateList(list: any, language: string, basetTable: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `list` | `any` | The array of entities to be translated. |
> | `language` | `string` | The target language code (e.g., 'en', 'de'). If undefined, no translation occurs. |
> | `basetTable` | `string` | The name of the base entity table (used to derive the language table name). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: The translated array of entities.
> :::

#### translateEntity()

Translates properties for a single entity by querying the corresponding language table.

> ```ts
> static translateEntity(entity: any, id: any, language: string, basetTable: string): any;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `entity` | `any` | The entity object to be translated. |
> | `id` | `any` | The ID of the entity. |
> | `language` | `string` | The target language code (e.g., 'en', 'de'). If undefined, no translation occurs. |
> | `basetTable` | `string` | The name of the base entity table. |
>
> ::: info Returns
> - **Type**: `any`
> - **Description**: The translated entity object.
> :::

