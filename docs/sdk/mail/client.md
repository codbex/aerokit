# mail/client

> [!tip]
> Auto-generated from
> - source: [mail/client.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/mail/client.ts)
> - version: 1.0.0


## Overview

Provides a client for sending emails, supporting both simple text/HTML
messages and complex multipart messages with attachments or inline content.
/
const Properties = Java.type("java.util.Properties");
const MailFacade = Java.type("org.eclipse.dirigible.components.api.mail.MailFacade");

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [MailClient](#mailclient)
- [Parameters](#parameters)
- [Interfaces](#interfaces)
  - [MailRecipients](#mailrecipients)
  - [MailMultipart](#mailmultipart)

## Classes

### MailClient


The MailClient provides methods for sending emails, handling recipient processing
and interfacing with the underlying MailFacade.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | `object` | Optional key-value object containing configuration properties for the mail client (e.g., SMTP settings). |

###### Returns

[`MailClient`](#mailclient)

#### Methods

##### sendMultipart()

> ```ts
> static sendMultipart( from, recipients, subject, parts): void;
> ```


> A static convenience method to send a multipart email without instantiating a client.
> This is suitable for emails that require attachments, inline images, or mixed content.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `from` | `string` | The sender's email address. |
> | `recipients` | `string` \| [`MailRecipients`](#mailrecipients) | The recipient(s) structure (string for 'to', or [MailRecipients](#mailrecipients) object). |
> | `subject` | `string` | The subject line of the email. |
> | `parts` | [`MailMultipart`](#mailmultipart)[] | An array of [MailMultipart](#mailmultipart) objects defining the email content. |

> ::: info Returns
> - **Type**: `void`
> :::

##### send()

> ```ts
> static send( from, recipients, subject, text, contentType): void;
> ```


> A static convenience method to send a simple email with only a single text or HTML body.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `from` | `string` | The sender's email address. |
> | `recipients` | `string` \| [`MailRecipients`](#mailrecipients) | The recipient(s) structure (string for 'to', or [MailRecipients](#mailrecipients) object). |
> | `subject` | `string` | The subject line of the email. |
> | `text` | `string` | The body content of the email. |
> | `contentType` | `MailContentType` | Specifies the body format: 'html' or 'plain'. |

> ::: info Returns
> - **Type**: `void`
> :::

##### send()

> ```ts
> send(
>    from, 
>    _recipients, 
>    subject, 
>    text, 
>    contentType): void;
> ```


> Sends a simple email with a single body part (text or HTML).

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `from` | `string` | The sender's email address. |
> | `_recipients` | `string` \| [`MailRecipients`](#mailrecipients) | The recipient(s) structure (string for 'to', or [MailRecipients](#mailrecipients) object). |
> | `subject` | `string` | The subject line of the email. |
> | `text` | `string` | The body content of the email. |
> | `contentType` | `MailContentType` | Specifies the body format: 'html' or 'plain'. |

> ::: info Returns
> - **Type**: `void`
> :::

###### Throws

Throws an error if the recipient format is invalid or the native call fails.

##### sendMultipart()

> ```ts
> sendMultipart(
>    from, 
>    _recipients, 
>    subject, 
>    parts): void;
> ```


> Sends a complex email composed of multiple parts (text bodies, HTML, attachments, inline content).

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `from` | `string` | The sender's email address. |
> | `_recipients` | `string` \| [`MailRecipients`](#mailrecipients) | The recipient(s) structure (string for 'to', or [MailRecipients](#mailrecipients) object). |
> | `subject` | `string` | The subject line of the email. |
> | `parts` | [`MailMultipart`](#mailmultipart)[] | An array of [MailMultipart](#mailmultipart) objects defining the email content. |

> ::: info Returns
> - **Type**: `void`
> :::

###### Throws

Throws an error if the recipient format is invalid or the native call fails.

## Interfaces

### MailRecipients


Defines the structure for specifying email recipients.
Recipients can be provided as a single email string or an array of strings.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
|  `to?` | `string` \| `string`[] | The primary recipients of the email. | src/mail/client.ts:14 |
|  `cc?` | `string` \| `string`[] | Carbon Copy recipients. | src/mail/client.ts:16 |
|  `bcc?` | `string` \| `string`[] | Blind Carbon Copy recipients. | src/mail/client.ts:18 |

***

### MailMultipart


Defines a single part of a multipart email message.
This is used for bodies, attachments, and inline images.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
|  `type` | `"text"` \| `"inline"` \| `"attachment"` | The nature of the part: 'text' (body), 'inline' (e.g., image displayed in HTML), or 'attachment'. | src/mail/client.ts:27 |
|  `contentType` | `string` | The MIME content type of the part (e.g., 'text/plain', 'text/html', 'image/png'). | src/mail/client.ts:29 |
|  `text?` | `string` | The text content for 'text' parts. | src/mail/client.ts:31 |
|  `contentId?` | `string` | Required for 'inline' parts; used in the HTML body to reference the content (e.g., ``). | src/mail/client.ts:33 |
|  `fileName?` | `string` | The name of the file for 'attachment' and 'inline' parts. | src/mail/client.ts:35 |
|  `data?` | `string` | The base64-encoded data content for 'attachment' and 'inline' parts. | src/mail/client.ts:37 |
