# core/configurations

::: tip Documentation
- source: [core/configurations.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/core/configurations.ts)
:::


## Overview

The Configurations API provides a centralized, type-safe interface for managing application configuration properties and detecting the runtime operating system. It serves as the foundation for environment-specific settings and system-aware behavior in Aerokit applications.

### Key Features

- **Static Interface**: Thread-safe, singleton-like access to configuration data
- **Type Safety**: Full TypeScript support with proper type definitions
- **File Loading**: Support for loading configurations from external files
- **OS Detection**: Comprehensive operating system identification
- **Memory Efficient**: In-memory storage with optional persistence

### Use Cases

- Environment variable management
- Feature flag configuration
- Database connection settings
- API endpoint configuration
- Platform-specific behavior adaptation

```ts
import { Configurations } from 'aerokit/core/configurations';

// Set a configuration property
Configurations.set('apiEndpoint', 'https://api.example.com');

// Get a configuration property
const apiEndpoint = Configurations.get('apiEndpoint');
console.log(apiEndpoint); // Output: https://api.example.com

// Check the operating system
if (Configurations.isOSWindows()) {
  console.log('Running on Windows');
} else if (Configurations.isOSMac()) {
  console.log('Running on Mac');
} else if (Configurations.isOSUNIX()) {
  console.log('Running on UNIX');
} else if (Configurations.isOSSolaris()) {
  console.log('Running on Solaris');
}
```


## Classes

### Configurations


#### Constructors

##### Constructor

```ts
new Configurations(): Configurations;
```

#### Methods
##### get()
**Parameters**
> ::: info Returns
> - **Type**: `string`
> - **Description**: The configuration value as a string, or `undefined` if the key is not found and no default is provided.
> :::
##### set()

```ts
static set(key, value): void;
```


Sets the configuration value for the given key.
If the key already exists, its value is overwritten.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The configuration key. |
| `value` | `string` | The configuration value to set. |

> ::: info Returns
> - **Type**: `void`
> :::
##### remove()

```ts
static remove(key): void;
```


Removes the configuration property associated with the given key.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The configuration key to remove. |

> ::: info Returns
> - **Type**: `void`
> :::
##### getKeys()

```ts
static getKeys(): string[];
```


Retrieves a list of all current configuration keys.

##### load()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### update()

```ts
static update(): void;
```


Reloads or updates the current configuration settings from their source (e.g., persistence layer).

> ::: info Returns
> - **Type**: `void`
> :::
##### getOS()

```ts
static getOS(): string;
```


Retrieves the name of the current Operating System.

> ::: info Returns
> - **Type**: `string`
> - **Description**: The OS name as a string (e.g., "Windows", "Linux", "Mac OS X").
> :::
##### isOSWindows()

```ts
static isOSWindows(): boolean;
```


Checks if the current Operating System is Windows.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the OS is Windows, false otherwise.
> :::
##### isOSMac()

```ts
static isOSMac(): boolean;
```


Checks if the current Operating System is Mac OS (or Mac OS X).

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the OS is Mac, false otherwise.
> :::
##### isOSUNIX()

```ts
static isOSUNIX(): boolean;
```


Checks if the current Operating System is a UNIX-like system (e.g., Linux, macOS, or others).

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the OS is a UNIX variant, false otherwise.
> :::
##### isOSSolaris()

```ts
static isOSSolaris(): boolean;
```


Checks if the current Operating System is Solaris.

> ::: info Returns
> - **Type**: `boolean`
> - **Description**: True if the OS is Solaris, false otherwise.
> :::