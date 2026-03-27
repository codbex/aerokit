# http/errors/ValidationError

::: tip Documentation
- source: [http/errors/ValidationError.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/errors/ValidationError.ts)
:::


## Overview

Custom error class used for representing failures due to invalid input
or data that violates domain-specific validation rules.


## Classes

### ValidationError


Custom error class used for representing failures due to invalid input
or data that violates domain-specific validation rules.

#### Extends

- `Error`

#### Constructors

##### Constructor

```ts
new ValidationError(message): ValidationError;
```


Creates an instance of ValidationError.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | The detailed message describing the validation failure. |

###### Overrides
#### Properties