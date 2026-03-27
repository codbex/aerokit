# io/image

> [!tip]
> Auto-generated from
> - source: [io/image.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/io/image.ts)
> - version: 1.0.0


## Overview

Provides a static façade for image manipulation operations,
primarily focusing on resizing image streams.
/
import { InputStream } from "@aerokit/sdk/io/streams";

## Table of Contents

- [Overview](#overview)
- [Classes](#classes)
  - [Image](#image)
- [Returns](#returns)

## Classes

### Image


The Image class provides static methods for common image processing tasks.
All methods operate on and return InputStream objects, making them
suitable for piping image data through the file system or network.

## Returns

[`Image`](#image)

#### Methods

##### resize()

> ```ts
> static resize( original, type, width, height): InputStream;
> ```


> Resizes an image contained within an InputStream to the specified dimensions.

> **Parameters**

> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `original` | `InputStream` | The InputStream containing the original image data. |
> | `type` | `string` | The target format of the resized image (e.g., "png", "jpeg", "gif"). |
> | `width` | `number` | The target width in pixels. |
> | `height` | `number` | The target height in pixels. |

> ::: info Returns
> - **Type**: `InputStream`
> - **Description**: A new InputStream containing the resized image data in the specified format.
> :::
