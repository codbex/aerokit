# mail/client

## Overview



::: tip Module
- source: [mail/client.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/mail/client.ts)
- last updated: 
:::

## Classes

### MailClient

#### sendMultipart()

A static convenience method to send a multipart email without instantiating a client.
This is suitable for emails that require attachments, inline images, or mixed content.

> ```ts
> static sendMultipart(from: string, recipients: any, subject: string, parts: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `from` | `string` | The sender's email address. |
> | `recipients` | `any` | The recipient(s) structure (string for 'to', or MailRecipients object). |
> | `subject` | `string` | The subject line of the email. |
> | `parts` | `any` | An array of MailMultipart objects defining the email content. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### send()

A static convenience method to send a simple email with only a single text or HTML body.

> ```ts
> static send(from: string, recipients: any, subject: string, text: string, contentType: MailContentType): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `from` | `string` | The sender's email address. |
> | `recipients` | `any` | The recipient(s) structure (string for 'to', or MailRecipients object). |
> | `subject` | `string` | The subject line of the email. |
> | `text` | `string` | The body content of the email. |
> | `contentType` | `MailContentType` | Specifies the body format: 'html' or 'plain'. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### send()

Sends a simple email with a single body part (text or HTML).

> ```ts
> send(from: string, _recipients: any, subject: string, text: string, contentType: MailContentType): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `from` | `string` | The sender's email address. |
> | `_recipients` | `any` | The recipient(s) structure (string for 'to', or MailRecipients object). |
> | `subject` | `string` | The subject line of the email. |
> | `text` | `string` | The body content of the email. |
> | `contentType` | `MailContentType` | Specifies the body format: 'html' or 'plain'. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

#### sendMultipart()

Sends a complex email composed of multiple parts (text bodies, HTML, attachments, inline content).

> ```ts
> sendMultipart(from: string, _recipients: any, subject: string, parts: any): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `from` | `string` | The sender's email address. |
> | `_recipients` | `any` | The recipient(s) structure (string for 'to', or MailRecipients object). |
> | `subject` | `string` | The subject line of the email. |
> | `parts` | `any` | An array of MailMultipart objects defining the email content. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: 
> :::

