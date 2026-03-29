# indexing/searcher

## Overview



::: tip Module
- source: [indexing/searcher.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/indexing/searcher.ts)
- last updated: 
:::

## Classes

### Searcher

#### search()

Executes a keyword search against a specified index.

> ```ts
> static search(index: string, term: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `index` | `string` | The name or identifier of the index to search (e.g., 'documents', 'products'). |
> | `term` | `string` | The keyword or search phrase to look for. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of result objects, parsed from the native JSON string output.
> :::

#### before()

Finds all entries in the index that were indexed before the specified date.

> ```ts
> static before(index: string, date: Date): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `index` | `string` | The name or identifier of the index. |
> | `date` | `Date` | The Date object representing the upper bound (exclusive) of the time range. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of result objects, parsed from the native JSON string output.
> :::

#### after()

Finds all entries in the index that were indexed after the specified date.

> ```ts
> static after(index: string, date: Date): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `index` | `string` | The name or identifier of the index. |
> | `date` | `Date` | The Date object representing the lower bound (exclusive) of the time range. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of result objects, parsed from the native JSON string output.
> :::

#### between()

Finds all entries in the index that were indexed within the specified date range.

> ```ts
> static between(index: string, lower: Date, upper: Date): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `index` | `string` | The name or identifier of the index. |
> | `lower` | `Date` | The Date object for the lower bound (exclusive). |
> | `upper` | `Date` | The Date object for the upper bound (exclusive). |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: An array of result objects, parsed from the native JSON string output.
> :::

