# platform/os

::: tip Documentation
- source: [platform/os.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/platform/os.ts)
:::


## Overview

Utility class for retrieving operating system information and checking OS types.
It leverages the platform's access to Java's SystemUtils for system properties.


## Classes

### OS


OS

#### Description

Provides static methods and constants related to the operating system
the underlying Java platform is running on.

#### Constructors

##### Constructor

```ts
new OS(): OS;
```

#### Properties
#### Methods
##### isWindows()
> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the OS is Windows, false otherwise.
> :::
##### isUnix()

```ts
static isUnix(): boolean;
```


Checks if the operating system is a variant of Unix (including Linux, macOS, and BSD).

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the OS is Unix-like, false otherwise.
> :::