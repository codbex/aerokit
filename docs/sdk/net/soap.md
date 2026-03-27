# net/soap

::: tip Documentation
- source: [net/soap.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/net/soap.ts)
:::


## Overview

The Soap API provides...


## Classes

### SOAP


Utility class for creating, parsing, and calling SOAP messages.
It wraps the underlying Java javax.xml.soap API.

#### Constructors

##### Constructor

```ts
new SOAP(): SOAP;
```

#### Methods
##### call()
**Parameters**
> ::: info Returns
> - **Type**: `Message`
> :::
##### trustAll()

```ts
static trustAll(): void;
```


> ::: info Returns
> - **Type**: `void`
> :::
##### createMessage()

```ts
static createMessage(): Message;
```


Creates a new, empty SOAP message.

> ::: info Returns
> - **Type**: `Message`
> :::
##### parseMessage()

```ts
static parseMessage(mimeHeaders, inputStream): Message;
```


Parses a SOAP message from an InputStream and MimeHeaders.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mimeHeaders` | `MimeHeaders` | The MimeHeaders wrapper object. |
| `inputStream` | `InputStream` | The InputStream wrapper object. |

> ::: info Returns
> - **Type**: `Message`
> :::
##### parseRequest()

```ts
static parseRequest(): Message;
```


Parses a SOAP message from the current HTTP request input stream.

> ::: info Returns
> - **Type**: `Message`
> :::
##### createMimeHeaders()

```ts
static createMimeHeaders(): MimeHeaders;
```


Creates a new, empty MimeHeaders object.

> ::: info Returns
> - **Type**: `MimeHeaders`
> :::