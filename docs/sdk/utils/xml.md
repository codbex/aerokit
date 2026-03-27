# utils/xml

::: tip Documentation
- source: [utils/xml.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/xml.ts)
:::


## Overview

The Xml API provides...


## Classes

### XML


Utility class for converting data between XML and JSON formats.
It automatically handles input serialization if an object is passed instead of a string.

#### Constructors

##### Constructor

```ts
new XML(): XML;
```

#### Methods
##### fromJson()
**Parameters**
> ::: info Returns
> - **Type**: `string`
> - **Description**: The resulting XML content as a string.
> :::
##### toJson()

```ts
static toJson(input): string;
```


Converts an XML input (expected as an XML string) into a JSON formatted string.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `any` | The XML string to be converted to JSON. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The resulting JSON content as a string.
> :::