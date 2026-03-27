# db/translator

> [!tip]
> Auto-generated from
> - source: [db/translator.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/translator.ts)
> - version: 1.0.0


## Overview

Provides static methods for translating entity properties based on a dedicated language table.
Translation is achieved by querying a separate table (e.g., 'BASE_TABLE_LANG') and merging
the translated fields back into the original data.

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Translator](#translator)
- [Returns](#returns)

## Classes

### Translator


Provides static methods for translating entity properties based on a dedicated language table.
Translation is achieved by querying a separate table (e.g., 'BASE_TABLE_LANG') and merging
the translated fields back into the original data.

## Returns

[`Translator`](#translator)

#### Methods

##### translateList()

> ```ts
> static translateList( list, language, basetTable): any[];
> ```


> Translates properties for a list of entities by querying the corresponding language table.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `list` | `any`[] | The array of entities to be translated. |
> | `language` | `string` | The target language code (e.g., 'en', 'de'). If undefined, no translation occurs. |
> | `basetTable` | `string` | The name of the base entity table (used to derive the language table name). |

> ::: info Returns
> - **Type**: `any`
> - **Description**: [] The translated array of entities.
> :::

##### translateEntity()

> ```ts
> static translateEntity( entity, id, language, basetTable): any;
> ```


> Translates properties for a single entity by querying the corresponding language table.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `entity` | `any` | The entity object to be translated. |
> | `id` | `string` \| `number` | The ID of the entity. |
> | `language` | `string` | The target language code (e.g., 'en', 'de'). If undefined, no translation occurs. |
> | `basetTable` | `string` | The name of the base entity table. |

> ::: info Returns
> - **Type**: `any`
> - **Description**: The translated entity object.
> :::
