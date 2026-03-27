# utils/qrcode

> [!tip]
> Auto-generated from
> - source: [utils/qrcode.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/utils/qrcode.ts)
> - version: 1.0.0


## Overview

Utility class for generating QR codes.
It uses the underlying native Java QRCodeFacade to convert text into
a QR code image represented as a raw byte array.

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [QRCode](#qrcode)
- [Returns](#returns)

## Classes

### QRCode


Utility class for generating QR codes.
It uses the underlying native Java QRCodeFacade to convert text into
a QR code image represented as a raw byte array.

## Returns

[`QRCode`](#qrcode)

#### Methods

##### generateQRCode()

> ```ts
> static generateQRCode(text): any[];
> ```


> Generates a QR code image byte array from the given text.
> The returned byte array represents the image data (e.g., PNG or JPEG format,
> depending on the native implementation's default output).

> **Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The string content to be encoded in the QR code. |

###### Returns

`any`[]

A **JavaScript byte array (any[])** containing the raw QR code image data.
