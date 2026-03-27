# integrations/integrations

::: tip Documentation
- source: [integrations/integrations.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/integrations/integrations.ts)
:::

## Overview



## Classes

### Integrations

#### invokeRoute()

Synchronously invokes a specified Camel route.

> ```ts
> static invokeRoute(routeId: string, payload: any, headers: HeadersMap, exchangeProperties: ExchangeProperties): any;
> ```
>
> | Parameter | Type | Description |
> | ------ | ------ | ------ |
> | `routeId` | `string` | The unique identifier of the Camel route to be executed. |
> | `payload` | `any` | The initial message body/payload for the route. |
> | `headers` | `HeadersMap` | A map of headers to set on the initial Camel Message. |
> | `exchangeProperties` | `ExchangeProperties` | A map of properties to set on the Camel Exchange context. |
>
> ::: info Returns
> - **Type**: `any`
> - **Description**: The final result (the body of the resulting Camel Message) after the route has completed execution.
> :::

#### getInvokingRouteMessage()

Retrieves the current message being processed by the underlying integration
engine&#x27;s context. This is typically used within a route endpoint (e.g., a script component)
to access or modify the message.

Note: &#x27;__context&#x27; is assumed to be a global or context-injected variable.

> ```ts
> static getInvokingRouteMessage(): IntegrationMessage;
> ```
>
>
> ::: info Returns
> - **Type**: `IntegrationMessage`
> - **Description**: The current IntegrationMessage wrapper.
> :::

