# utils/qrcode

## Overview

::: tip Module
- source: [utils/qrcode.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/qrcode.ts)
- last updated: 
:::



## Classes

### QRCode

#### generateQRCode()

Generates a QR code image byte array from the given text.
The returned byte array represents the image data (e.g., PNG or JPEG format,
depending on the native implementation's default output).

> ```ts
> static generateQRCode(text: string): void;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `text` | `string` | The string content to be encoded in the QR code. |
>
> ::: info Returns
> - **Type**: `void`
> - **Description**: A **JavaScript byte array (any[])** containing the raw QR code image data.
> :::

