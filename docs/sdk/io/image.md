# io/image

::: tip Documentation
- source: [io/image.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/io/image.ts)
:::


## Overview

Provides a static façade for image manipulation operations,
primarily focusing on resizing image streams.


## Classes

### Image


The Image class provides static methods for common image processing tasks.
All methods operate on and return InputStream objects, making them
suitable for piping image data through the file system or network.

#### Constructors

##### Constructor

```ts
new Image(): Image;
```

#### Methods
##### resize()
**Parameters**
> ::: info Returns
> - **Type**: `InputStream`
> - **Description**: A new InputStream containing the resized image data in the specified format.
> :::