# platform/command

::: tip Documentation
- source: [platform/command.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/platform/command.ts)
:::


## Overview

Provides a wrapper for executing system commands via the platform's CommandEngine.


## Classes

### Command


Command

#### Description

Static utility class for executing system commands.

#### Constructors

##### Constructor

```ts
new Command(): Command;
```

#### Methods
##### execute()
**Parameters**
> ::: info Returns
> - **Type**: `CommandOutput`
> - **Description**: A structured object containing the exit code and output streams.
> :::