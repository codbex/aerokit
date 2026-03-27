# log/logging

> [!tip]
> Auto-generated from
> - source: [log/logging.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/log/logging.ts)
> - version: 1.0.0


## Overview

Provides a wrapper for the underlying logging facility, allowing
for categorized and leveled logging messages with support for variable arguments,
including error objects.
/
const LogFacade = Java.type("org.eclipse.dirigible.components.api.log.LogFacade");

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Logging](#logging)
- [Returns](#returns)
  - [Logger](#logger)
- [Parameters](#parameters)

## Classes

### Logging


The main entry point for the logging API. Use this class to obtain a named
logger instance.

## Returns

[`Logging`](#logging)

#### Methods

##### getLogger()

> ```ts
> static getLogger(loggerName): Logger;
> ```


> Retrieves or creates a Logger instance associated with a specific name.
> The logger name is typically used to categorize log messages (e.g., 'com.app.service').

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `loggerName` | `string` | The name of the logger. |
> 
> ###### Returns
> 
> [`Logger`](#logger)
> 
> A [Logger](#logger) instance.
> 
> ***
> 
> ### Logger

Retrieves or creates a Logger instance associated with a specific name.
The logger name is typically used to categorize log messages (e.g., 'com.app.service').

> 
> 
> Represents a named logger instance used for emitting log messages at various levels.
> 
> ## Parameters
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `loggerName` | `string` | The name of the logger. |
> 
> ###### Returns
> 
> [`Logger`](#logger)
> 
> #### Methods
> 
> ##### setLevel()
> 
> > ```ts
> > setLevel(level): Logger;
> > ```
> 
> 
> > Sets the logging level for this specific logger instance.
> > Messages below this threshold will be ignored.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `level` | `string` | The desired logging level (e.g., 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR'). |
> 
> ###### Returns
> 
> [`Logger`](#logger)
> 
> The Logger instance for method chaining.
> 
> ##### isDebugEnabled()
> 
> > ```ts
> > isDebugEnabled(): boolean;
> > ```
> 
> 
> > Checks if the DEBUG level is currently enabled for this logger.
> 
> > > ::: info Returns
> > > - **Type**: `boolean`
> > > - **Description**: True if DEBUG logging is enabled, false otherwise.
> > > :::
> 
> > ##### isErrorEnabled()
> 
> > > ```ts
> > > isErrorEnabled(): boolean;
> > > ```
> 
> 
> > Checks if the ERROR level is currently enabled for this logger.
> 
> > > ::: info Returns
> > > - **Type**: `boolean`
> > > - **Description**: True if ERROR logging is enabled, false otherwise.
> > > :::
> 
> > ##### isWarnEnabled()
> 
> > > ```ts
> > > isWarnEnabled(): boolean;
> > > ```
> 
> 
> > Checks if the WARN level is currently enabled for this logger.
> 
> > > ::: info Returns
> > > - **Type**: `boolean`
> > > - **Description**: True if WARN logging is enabled, false otherwise.
> > > :::
> 
> > ##### isInfoEnabled()
> 
> > > ```ts
> > > isInfoEnabled(): boolean;
> > > ```
> 
> 
> > Checks if the INFO level is currently enabled for this logger.
> 
> > > ::: info Returns
> > > - **Type**: `boolean`
> > > - **Description**: True if INFO logging is enabled, false otherwise.
> > > :::
> 
> > ##### isTraceEnabled()
> 
> > > ```ts
> > > isTraceEnabled(): boolean;
> > > ```
> 
> 
> > Checks if the TRACE level is currently enabled for this logger.
> 
> > > ::: info Returns
> > > - **Type**: `boolean`
> > > - **Description**: True if TRACE logging is enabled, false otherwise.
> > > :::
> 
> > ##### log()
> 
> > > ```ts
> > > log(msg, level): void;
> > > ```
> 
> 
> > The core logging method. Logs a message at the specified level, optionally
> > supporting parameters for message formatting and a final Error object for stack trace logging.
> 
> > **Parameters**
> 
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `msg` | `string` | The log message template (e.g., "User {0} failed to connect: {1}"). |
> | `level` | `string` | The logging level (e.g., 'DEBUG', 'ERROR'). |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### debug() > ```ts debug(msg, ..._): void; ``` Logs a message at the DEBUG level.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `msg` | `string` | The log message template. |
> | ...`_` | `any`[] | - |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### info() > ```ts info(msg, ..._): void; ``` Logs a message at the INFO level.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `msg` | `string` | The log message template. |
> | ...`_` | `any`[] | - |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### trace() > ```ts trace(msg, ..._): void; ``` Logs a message at the TRACE level.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `msg` | `string` | The log message template. |
> | ...`_` | `any`[] | - |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### warn() > ```ts warn(msg, ..._): void; ``` Logs a message at the WARN level.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `msg` | `string` | The log message template. |
> | ...`_` | `any`[] | - |

> ::: info Returns
> - **Type**: `void`
> - **Description**: ##### error() > ```ts error(msg, ..._): void; ``` Logs a message at the ERROR level.
> :::

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `msg` | `string` | The log message template. |
> | ...`_` | `any`[] | - |

> ::: info Returns
> - **Type**: `void`
> :::
