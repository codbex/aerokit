# template/engines

::: tip Documentation
- source: [template/engines.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/template/engines.ts)
:::

## Overview



## Classes

### TemplateEngines

#### getDefaultEngine()

Retrieves the default template engine, which is currently the Velocity engine.

> ```ts
> static getDefaultEngine(): TemplateEngine;
> ```
>
>
> ::: info Returns
> - **Type**: `TemplateEngine`
> - **Description**: The default template engine instance.
> :::

#### getMustacheEngine()

Retrieves the Mustache template engine instance.
Mustache is often used for logic-less templating and uses &#x27;{{&#x27; and &#x27;}}&#x27; as default markers.

> ```ts
> static getMustacheEngine(): TemplateEngine;
> ```
>
>
> ::: info Returns
> - **Type**: `TemplateEngine`
> - **Description**: The Mustache template engine instance.
> :::

#### getVelocityEngine()

Retrieves the Velocity template engine instance.
Velocity is often used for complex templating with directives (e.g., #set, #foreach).

> ```ts
> static getVelocityEngine(): TemplateEngine;
> ```
>
>
> ::: info Returns
> - **Type**: `TemplateEngine`
> - **Description**: The Velocity template engine instance.
> :::

#### getJavascriptEngine()

Retrieves the JavaScript template engine instance (usually used for server-side evaluation).

> ```ts
> static getJavascriptEngine(): TemplateEngine;
> ```
>
>
> ::: info Returns
> - **Type**: `TemplateEngine`
> - **Description**: The JavaScript template engine instance.
> :::

#### generate()

Generates output by processing a raw template string using the **default template engine (Velocity)**.

> ```ts
> static generate(location: string, template: string, parameters: any): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `location` | `string` | A string identifying the template (used for error reporting/caching, often a file path). |
> | `template` | `string` | The raw template string content to process. |
> | `parameters` | `any` | An object containing key-value pairs to be used as context variables in the template. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The processed output string.
> :::

#### generateFromFile()

Loads a template from the public registry, selects an appropriate engine, and generates output.
It uses the **Mustache engine** if the file extension is &#x60;.mustache&#x60;, otherwise it uses the **default (Velocity)**.

> ```ts
> static generateFromFile(location: string, parameters: any): string;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `location` | `string` | The path to the template file within the &#x60;/registry/public/&#x60; directory (e.g., &#x27;templates/email.mustache&#x27;). |
> | `parameters` | `any` | An object containing key-value pairs to be used as context variables in the template. |
>
> ::: info Returns
> - **Type**: `string`
> - **Description**: The processed output string, or &#x60;undefined&#x60; if the resource does not exist.
> :::

