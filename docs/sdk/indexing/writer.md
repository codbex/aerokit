# indexing/writer

::: tip Documentation
- source: [indexing/writer.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/indexing/writer.ts)
:::


## Overview

Provides a static façade (`Writer` class) for adding new documents
or content to the native indexing service.


## Classes

### Writer


The Writer class provides a static method for indexing documents, allowing
for full-text content, a last modification timestamp, and optional metadata.

#### Constructors

##### Constructor

```ts
new Writer(): Writer;
```

#### Methods
##### add()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::