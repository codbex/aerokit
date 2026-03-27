---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Aerokit'
  text: 'TypeScript SDK for the Low-Code Platform'
  image:
    src: '/logo/aerokit.png'
    alt: 'Aerokit Logo'
  actions:
    - theme: brand
      text: Get Started
      link: /sdk/
    - theme: alt
      text: API Reference
      link: /sdk/

features:
  - title: Comprehensive Enterprise Features
    details: Built-in support for databases, messaging, caching, security, and more for modern applications.
  - title: Modular Architecture
    details: Use only what you need. Pick and choose from 30+ specialized modules designed for flexibility.
  - title: TypeScript First
    details: Full TypeScript support with type safety, excellent IDE support, and compile-time error detection.
  - title: Production Ready
    details: Built on proven patterns from Eclipse Dirigible, trusted by enterprise applications worldwide.
---

## How to Get Started

### Sample REST Service with Decorators

REST API around an Order entity, uses decorators for routing, and includes dependency injection and validation.

#### Define a service component for business logic

- Create a file `OrderService.ts` with the following content:

```ts
import { Component } from "@aerokit/sdk/component";

@Component("orderService")
export class OrderService {

  private orders: Map<string, any> = new Map();

  create(data: { productId: string; quantity: number; }): any {
    const id = Math.random().toString(36).substr(2, 9);
    const order = { id, ...data, status: "pending" };
    this.orders.set(id, order);
    return order;
  }

  find(id: string): any | null {
    return this.orders.get(id) ?? null;
  }

  update(id: string, data: { quantity?: number; status?: string; }): any | null {
    const order = this.orders.get(id);
    if (!order) return null;
    const updated = { ...order, ...data };
    this.orders.set(id, updated);
    return updated;
  }

  delete(id: string): boolean {
    return this.orders.delete(id);
  }

  list(): any[] {
    return Array.from(this.orders.values());
  }
}
```

#### Define a REST controller using decorators

- Create a file `OrderController.ts` with the following content:

```ts
import { Controller, Get, Post, Put, Delete } from "@aerokit/sdk/http";
import { Injected, Inject } from "@aerokit/sdk/component";
import { response } from "@aerokit/sdk/http";
import { OrderService } from "./OrderService";

@Controller
@Injected()
export class OrderController {

  @Inject("orderService")
  private service!: OrderService;

  @Get("/")
  listOrders() {
    return this.service.list();
  }

  @Get("/:id")
  getOrder(id: string) {
    const order = this.service.find(id);
    if (!order) {
      response.setStatus(404);
      return { error: "Order not found" };
    }
    return order;
  }

  @Post("/")
  createOrder(payload: { productId: string; quantity: number; }) {
    // Basic validation
    if (payload.quantity <= 0) {
      response.setStatus(400);
      return { error: "Quantity must be positive" };
    }
    const order = this.service.create(payload);
    response.setStatus(201);
    return order;
  }

}
```

#### Testing Your API with cURL

Once your controller is running, you can immediately interact with it through the runtime - no build, no deployment pipeline, no external server. Just call the endpoint.

##### Create a new order:

```bash
curl -X POST -u admin:admin \
  http://localhost/services/ts/my-api-app/OrderController.ts \
  -H "Content-Type: application/json" \
  -d '{"productId": 79, "quantity": 3}'
```

This command sends a POST request to your freshly created OrderController, passing a JSON object with the new order details.

##### Retrieve all orders:

```bash
curl -u admin:admin \
  http://localhost/services/ts/my-api-app/OrderController.ts
```

This triggers the GET / route of your controller, returning the full list of created orders from your in-memory service.

### What Happens Under the Hood:

* The `@Controller` decorator registers the class as an HTTP controller.
* Methods decorated with `@Get`, `@Post`, etc., map HTTP routes to class methods.
* `@Component` creates a singleton service (OrderService) that’s injected into the controller using `@Inject`.
The runtime automatically generates and exposes OpenAPI / Swagger documentation for these endpoints (since it scans the decorators).

### What Do You Get:

* Speed & Productivity: You don’t spend time wiring up routing or scaffolding APIs - the decorator metadata does that.
* Clarity & Maintainability: Your service logic (business rules) lives in a clean class. Controller classes are just thin HTTP facades.
* Flexibility: You can mix low-code modeling (entities, metadata) with handwritten TypeScript for complex logic, validation, and dependency injection.
* Standardized API: With decorator metadata, you easily get API docs, validation, and client stubs if needed.
