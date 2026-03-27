# db/translator

::: tip Documentation
- source: [db/translator.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/db/translator.ts)
:::


## Overview

The Translator API provides...


## Classes

### Translator


Provides static methods for translating entity properties based on a dedicated language table.
Translation is achieved by querying a separate table (e.g., 'BASE_TABLE_LANG') and merging
the translated fields back into the original data.

#### Constructors

##### Constructor

```ts
new Translator(): Translator;
```

#### Methods
##### translateList()
**Parameters**
##### translateEntity()
**Parameters**
> ::: info Returns
> - **Type**: `any`
> - **Description**: The translated entity object.
> :::