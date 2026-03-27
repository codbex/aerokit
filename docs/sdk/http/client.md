# http/client

::: tip Documentation
- source: [http/client.ts](https://github.com/eclipse-dirigible/dirigible/tree/master/components/api/api-modules-javascript/src/main/resources/META-INF/dirigible/modules/src/http/client.ts)
:::


## Overview

Provides a JavaScript/TypeScript wrapper (Facade) for making synchronous HTTP requests.


## Classes

### HttpClient


A static class providing methods for making synchronous HTTP requests.
All methods call the underlying Java Facade and parse the JSON response.

#### Constructors

##### Constructor

```ts
new HttpClient(): HttpClient;
```

#### Methods
##### get()
**Parameters**
##### post()
**Parameters**
##### put()
**Parameters**
##### patch()
**Parameters**
##### delete()
**Parameters**
##### del()
**Parameters**
##### head()
**Parameters**
##### trace()
**Parameters**
## Interfaces
### HttpClientHeader
#### Properties
### HttpClientParam
#### Properties
### HttpClientFile
#### Properties
### HttpClientRequestOptions
#### Properties
### HttpClientResponse
#### Properties