# core/configurations

> [!tip]
> Auto-generated from
> - source: [core/configurations.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/core/configurations.ts)
> - version: 1.0.0


## Overview

The Configurations API provides...

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Configurations](#configurations)
- [Returns](#returns)

## Classes

### Configurations


## Returns

[`Configurations`](#configurations)

#### Methods

##### get()

> ```ts
> static get(key, defaultValue?): string;
> ```


> Retrieves the configuration value associated with the given key.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The configuration key. |
> | `defaultValue?` | `string` | The optional default value to return if the key is not found. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The configuration value as a string, or `undefined` if the key is not found and no default is provided.
> :::

##### set()

> ```ts
> static set(key, value): void;
> ```


> Sets the configuration value for the given key.
> If the key already exists, its value is overwritten.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The configuration key. |
> | `value` | `string` | The configuration value to set. |

> ::: info Returns
> - **Type**: `void`
> :::

##### remove()

> ```ts
> static remove(key): void;
> ```


> Removes the configuration property associated with the given key.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `key` | `string` | The configuration key to remove. |

> ::: info Returns
> - **Type**: `void`
> :::

##### getKeys()

> ```ts
> static getKeys(): string[];
> ```


> Retrieves a list of all current configuration keys.

> > ::: info Returns
> > - **Type**: `string`
> > - **Description**: [] An array of configuration keys (strings).
> > :::

> ##### load()

> > ```ts
> > static load(path): void;
> > ```


> Loads configuration properties from a file at the specified path, overriding existing ones.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `path` | `string` | The file path to load configurations from. |

> ::: info Returns
> - **Type**: `void`
> :::

##### update()

> ```ts
> static update(): void;
> ```


Reloads or updates the current configuration settings from their source (e.g., persistence layer).

> ::: info Returns
> - **Type**: `void`
> :::

##### getOS()

> ```ts
> static getOS(): string;
> ```


Retrieves the name of the current Operating System.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The OS name as a string (e.g., "Windows", "Linux", "Mac OS X").
> :::

##### isOSWindows()

> ```ts
> static isOSWindows(): boolean;
> ```


Checks if the current Operating System is Windows.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the OS is Windows, false otherwise.
> :::

##### isOSMac()

> ```ts
> static isOSMac(): boolean;
> ```


Checks if the current Operating System is Mac OS (or Mac OS X).

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the OS is Mac, false otherwise.
> :::

##### isOSUNIX()

> ```ts
> static isOSUNIX(): boolean;
> ```


Checks if the current Operating System is a UNIX-like system (e.g., Linux, macOS, or others).

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the OS is a UNIX variant, false otherwise.
> :::

##### isOSSolaris()

> ```ts
> static isOSSolaris(): boolean;
> ```


Checks if the current Operating System is Solaris.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the OS is Solaris, false otherwise.
> :::
