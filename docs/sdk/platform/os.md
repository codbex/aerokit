# platform/os

> [!tip]
> Auto-generated from
> - source: [platform/os.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/platform/os.ts)
> - version: 1.0.0


## Overview

Utility class for retrieving operating system information and checking OS types.
It leverages the platform's access to Java's SystemUtils for system properties.
/
const SystemUtils = Java.type("org.apache.commons.lang3.SystemUtils")

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [OS](#os)
- [Returns](#returns)

## Classes

### OS


OS

#### Description

Provides static methods and constants related to the operating system
the underlying Java platform is running on.

## Returns

[`OS`](#os)

#### Properties

| Property | Modifier | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
|  `OS_NAME` | `readonly` | `string` | `SystemUtils.OS_NAME` | The full name of the operating system (e.g., "Windows 10", "Linux"). This value is read directly from the Java system property 'os.name'. | src/platform/os.ts:19 |

#### Methods

##### isWindows()

> ```ts
> static isWindows(): boolean;
> ```


Checks if the operating system is a variant of Windows.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the OS is Windows, false otherwise.
> :::

##### isUnix()

> ```ts
> static isUnix(): boolean;
> ```


Checks if the operating system is a variant of Unix (including Linux, macOS, and BSD).

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the OS is Unix-like, false otherwise.
> :::
