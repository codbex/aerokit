# junit/junit

> [!tip]
> Auto-generated from
> - source: [junit/junit.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/junit/junit.ts)
> - version: 1.0.0


## Overview

The Junit API provides...

## Table of Contents

- [Overview](#overview)
- [Functions](#functions)
  - [test()](#test())
  - [assertEquals()](#assertequals())
  - [assertNotEquals()](#assertnotequals())
  - [assertTrue()](#asserttrue())
  - [assertFalse()](#assertfalse())
  - [fail()](#fail())

## Functions

### test()

> ```ts
> function test(name, testFn): void;
> ```


Defines a test case.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the test case. |
| `testFn` | () => `void` | The function containing the test logic and assertions. |

#### Returns

`void`

***

### assertEquals()

#### Call Signature

> ```ts
> function assertEquals(expected, actual): void;
> ```


Asserts that two objects or primitive values are equal.

##### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the values being compared. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `expected` | `T` | The expected value. |
| `actual` | `T` | The actual value. |

##### Returns

`void`

#### Call Signature

> ```ts
> function assertEquals(
>    message, 
>    expected, 
>    actual): void;
> ```


Asserts that two objects or primitive values are equal.

##### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the values being compared. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | Optional message to display if the assertion fails. |
| `expected` | `T` | The expected value. |
| `actual` | `T` | The actual value. |

##### Returns

`void`

***

### assertNotEquals()

#### Call Signature

> ```ts
> function assertNotEquals(unexpected, actual): void;
> ```


Asserts that two objects or primitive values are not equal.

##### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the values being compared. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `unexpected` | `T` | The unexpected value. |
| `actual` | `T` | The actual value. |

##### Returns

`void`

#### Call Signature

> ```ts
> function assertNotEquals(
>    message, 
>    unexpected, 
>    actual): void;
> ```


Asserts that two objects or primitive values are not equal.

##### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the values being compared. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | Optional message to display if the assertion fails. |
| `unexpected` | `T` | The unexpected value. |
| `actual` | `T` | The actual value. |

##### Returns

`void`

***

### assertTrue()

#### Call Signature

> ```ts
> function assertTrue(condition): void;
> ```


Asserts that a condition is true.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `condition` | `boolean` | The condition to test. |

##### Returns

`void`

#### Call Signature

> ```ts
> function assertTrue(message, condition): void;
> ```


Asserts that a condition is true.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | Optional message to display if the assertion fails. |
| `condition` | `boolean` | The condition to test. |

##### Returns

`void`

***

### assertFalse()

#### Call Signature

> ```ts
> function assertFalse(condition): void;
> ```


Asserts that a condition is false.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `condition` | `boolean` | The condition to test. |

##### Returns

`void`

#### Call Signature

> ```ts
> function assertFalse(message, condition): void;
> ```


Asserts that a condition is false.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | Optional message to display if the assertion fails. |
| `condition` | `boolean` | The condition to test. |

##### Returns

`void`

***

### fail()

#### Call Signature

> ```ts
> function fail(): void;
> ```


Fails a test immediately.

##### Returns

`void`

#### Call Signature

> ```ts
> function fail(message): void;
> ```


Fails a test immediately.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | Optional message to display indicating the reason for the failure. |

##### Returns

`void`
