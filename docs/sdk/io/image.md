# io/image

## Overview

::: tip Module
- source: [io/image.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/io/image.ts)
- last updated: 
:::



## Classes

### Image

#### resize()

Resizes an image contained within an InputStream to the specified dimensions.

> ```ts
> static resize(original: InputStream, type: string, width: number, height: number): InputStream;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `original` | `InputStream` | The InputStream containing the original image data. |
> | `type` | `string` | The target format of the resized image (e.g., "png", "jpeg", "gif"). |
> | `width` | `number` | The target width in pixels. |
> | `height` | `number` | The target height in pixels. |
>
> ::: info Returns
> - **Type**: `InputStream`
> - **Description**: A new InputStream containing the resized image data in the specified format.
> :::

