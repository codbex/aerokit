# http/rs/resource-http-controller

::: tip Documentation
- source: [http/rs/resource-http-controller.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/rs/resource-http-controller.ts)
:::


## Overview

The Resource-http-controller API provides...


## Classes

### HttpController


The main class for handling HTTP requests and routing them to the correct resource handlers.

#### Indexable

```ts
[key: string]: any
```

#### Constructors

##### Constructor

```ts
new HttpController(oMappings?): HttpController;
```


Constructor function for HttpController instances.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `oMappings?` | `any` | The mappings configuration for this controller. |

#### Properties
#### Methods
##### listen()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### execute()

```ts
execute(request?, response?): void;
```


Executes the request handling logic, finding the best matching resource and handler.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `request?` | `any` |
| `response?` | `any` |

> ::: info Returns
> - **Type**: `void`
> :::
##### mappings()

```ts
mappings(): ResourceMappings;
```


Returns the ResourceMappings instance of this controller.

##### sendError()
**Parameters**
> ::: info Returns
> - **Type**: `void`
> :::
##### closeResponse()

```ts
closeResponse(): void;
```


Flushes and closes the HTTP response stream.

> ::: info Returns
> - **Type**: `void`
> :::
## Functions

### service()

```ts
function service(oConfig?): HttpController;
```


Creates a service (HttpController) instance, optionally initialized with oMappings.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `oConfig?` | `any` | Configuration object or configuration builder with configuration() getter function. |

#### Returns

[`HttpController`](#httpcontroller)

A new HttpController instance.
