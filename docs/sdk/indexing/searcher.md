# indexing/searcher

> [!tip]
> Auto-generated from
> - source: [indexing/searcher.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/indexing/searcher.ts)
> - version: 1.0.0


## Overview

Provides a static façade (`Searcher` class) for performing
term-based and time-based queries against a native indexing service.
/

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Searcher](#searcher)
- [Returns](#returns)

## Classes

### Searcher


The Searcher class provides methods for querying a specific index
using keywords or date ranges.

## Returns

[`Searcher`](#searcher)

#### Methods

##### search()

> ```ts
> static search(index, term): object[];
> ```


> Executes a keyword search against a specified index.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `index` | `string` | The name or identifier of the index to search (e.g., 'documents', 'products'). |
> | `term` | `string` | The keyword or search phrase to look for. |

> ::: info Returns
> - **Type**: `object`
> - **Description**: [] An array of result objects, parsed from the native JSON string output.
> :::

##### before()

> ```ts
> static before(index, date): object[];
> ```


> Finds all entries in the index that were indexed before the specified date.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `index` | `string` | The name or identifier of the index. |
> | `date` | `Date` | The Date object representing the upper bound (exclusive) of the time range. |

> ::: info Returns
> - **Type**: `object`
> - **Description**: [] An array of result objects, parsed from the native JSON string output.
> :::

##### after()

> ```ts
> static after(index, date): object[];
> ```


> Finds all entries in the index that were indexed after the specified date.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `index` | `string` | The name or identifier of the index. |
> | `date` | `Date` | The Date object representing the lower bound (exclusive) of the time range. |

> ::: info Returns
> - **Type**: `object`
> - **Description**: [] An array of result objects, parsed from the native JSON string output.
> :::

##### between()

> ```ts
> static between( index, lower, upper): object[];
> ```


> Finds all entries in the index that were indexed within the specified date range.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `index` | `string` | The name or identifier of the index. |
> | `lower` | `Date` | The Date object for the lower bound (exclusive). |
> | `upper` | `Date` | The Date object for the upper bound (exclusive). |

> ::: info Returns
> - **Type**: `object`
> - **Description**: [] An array of result objects, parsed from the native JSON string output.
> :::
