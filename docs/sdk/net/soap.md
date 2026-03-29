# net/soap

## Overview



::: tip Module
- source: [net/soap.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/net/soap.ts)
- last updated: 
:::

## Classes

### SOAP

#### call()

Call a given SOAP endpoint with a given request message

> ```ts
> static call(message: Message, url: string): Message;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `message` | `Message` | The SOAP Message wrapper object. |
> | `url` | `string` | The target SOAP endpoint URL. |
>
> ::: info Returns
> - **Type**: `Message`
> - **Description**: 
> :::

#### trustAll()



> ```ts
> static trustAll(): void;
> ```
>
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### createMessage()

Creates a new, empty SOAP message.

> ```ts
> static createMessage(): Message;
> ```
>
>
> ::: info Returns
> - **Type**: `Message`
> - **Description**: 
> :::

#### parseMessage()

Parses a SOAP message from an InputStream and MimeHeaders.

> ```ts
> static parseMessage(mimeHeaders: MimeHeaders, inputStream: InputStream): Message;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `mimeHeaders` | `MimeHeaders` | The MimeHeaders wrapper object. |
> | `inputStream` | `InputStream` | The InputStream wrapper object. |
>
> ::: info Returns
> - **Type**: `Message`
> - **Description**: 
> :::

#### parseRequest()

Parses a SOAP message from the current HTTP request input stream.

> ```ts
> static parseRequest(): Message;
> ```
>
>
> ::: info Returns
> - **Type**: `Message`
> - **Description**: 
> :::

#### createMimeHeaders()

Creates a new, empty MimeHeaders object.

> ```ts
> static createMimeHeaders(): MimeHeaders;
> ```
>
>
> ::: info Returns
> - **Type**: `MimeHeaders`
> - **Description**: 
> :::

