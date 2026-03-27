# http/errors/ForbiddenError

::: tip Documentation
- source: [http/errors/ForbiddenError.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/errors/ForbiddenError.ts)
:::


## Overview

Custom error class representing a 403 Forbidden status, indicating
that the user does not have permission to access the requested resource.


## Classes

### ForbiddenError


Custom error class representing a 403 Forbidden status, indicating
that the user does not have permission to access the requested resource.

#### Extends

- `Error`

#### Constructors

##### Constructor

```ts
new ForbiddenError(message?): ForbiddenError;
```


Creates an instance of ForbiddenError.

**Parameters**

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `message` | `string` | `"You don't have permission to access this resource"` | The error message. Defaults to "You don't have permission to access this resource". |

###### Overrides
#### Properties