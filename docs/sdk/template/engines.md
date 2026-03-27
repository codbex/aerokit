# template/engines

::: tip Documentation
- source: [template/engines.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/template/engines.ts)
:::


## Overview

The Engines API provides...


## Classes

### TemplateEngines


Provides access to various server-side template engines (Velocity, Mustache, JavaScript).
It offers utility methods for generating content from templates directly or from files
stored in the registry.

#### Constructors

##### Constructor

```ts
new TemplateEngines(): TemplateEngines;
```

#### Methods
##### getDefaultEngine()
> ::: info Returns
> - **Type**: `TemplateEngine`
> - **Description**: The default template engine instance.
> :::
##### getMustacheEngine()

```ts
static getMustacheEngine(): TemplateEngine;
```


Retrieves the Mustache template engine instance.
Mustache is often used for logic-less templating and uses '{{' and '}}' as default markers.

> ::: info Returns
> - **Type**: `TemplateEngine`
> - **Description**: The Mustache template engine instance.
> :::
##### getVelocityEngine()

```ts
static getVelocityEngine(): TemplateEngine;
```


Retrieves the Velocity template engine instance.
Velocity is often used for complex templating with directives (e.g., #set, #foreach).

> ::: info Returns
> - **Type**: `TemplateEngine`
> - **Description**: The Velocity template engine instance.
> :::
##### getJavascriptEngine()

```ts
static getJavascriptEngine(): TemplateEngine;
```


Retrieves the JavaScript template engine instance (usually used for server-side evaluation).

> ::: info Returns
> - **Type**: `TemplateEngine`
> - **Description**: The JavaScript template engine instance.
> :::
##### generate()

```ts
static generate(
   location, 
   template, 
   parameters): string;
```


Generates output by processing a raw template string using the **default template engine (Velocity)**.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `location` | `string` | A string identifying the template (used for error reporting/caching, often a file path). |
| `template` | `string` | The raw template string content to process. |
| `parameters` | \{ \[`key`: `string`\]: `any`; \} | An object containing key-value pairs to be used as context variables in the template. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The processed output string.
> :::
##### generateFromFile()

```ts
static generateFromFile(location, parameters): string;
```


Loads a template from the public registry, selects an appropriate engine, and generates output.
It uses the **Mustache engine** if the file extension is `.mustache`, otherwise it uses the **default (Velocity)**.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `location` | `string` | The path to the template file within the `/registry/public/` directory (e.g., 'templates/email.mustache'). |
| `parameters` | \{ \[`key`: `string`\]: `any`; \} | An object containing key-value pairs to be used as context variables in the template. |

> ::: info Returns
> - **Type**: `string`
> - **Description**: The processed output string, or `undefined` if the resource does not exist.
> :::