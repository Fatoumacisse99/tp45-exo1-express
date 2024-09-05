// gestionComande.js
export class Customer {
  constructor() {}

  createCustomer(customer) {
    this.name = customer.name;
    this.email = customer.email;
    console.log(`Customer: ${this.name}, ${this.email} has been created`);
  }

  destroyCustomer() {
    console.log(`Customer: ${this.name}, ${this.email} has been deleted`);
  }

  editCustomer(newCustomer) {
    this.name = newCustomer.name;
    this.email = newCustomer.email;
    console.log(`Customer: ${this.name}, ${this.email} has been updated`);
  }
  getCustomer() {
    console.log(`Customer: ${this.name}, ${this.email}`);
    return { name: this.name };
  }
}

export class Product {
  constructor() {}

  createProduct(product) {
    this.name = product.name;
    this.quantity = product.quantity;
    this.price = product.price;
    console.log(`Product: ${this.name} has been created`);
  }

  destroyProduct() {
    console.log(`Product: ${this.name} has been deleted`);
  }

  editProduct(newProduct) {
    this.name = newProduct.name;
    this.quantity = newProduct.quantity;
    this.price = newProduct.price;
    console.log(`Product: ${this.name} has been updated`);
  }
  getProduct() {
    console.log(`Product: ${this.name}`);
    return { name: this.name, quantity: this.quantity, price: this.price };
  }
}

export class OrderDetail {
  constructor(quantity, price, product) {
    this.quantity = quantity;
    this.price = price;
    this.product = product;
  }
}

export class Order {
  constructor() {}

  createOrder(order) {
    this.date = order.date;
    this.amount = order.amount;
    this.details = order.details;
    this.customer = order.customer;
    console.log(`Order has been created`);
  }

  destroyOrder() {
    this.date = null;
    console.log(`Order has been deleted`);
  }

  editOrder(newOrder) {
    this.date = newOrder.date;
    this.amount = newOrder.amount;
    this.details = newOrder.details;
    this.customer = newOrder.customer;
    console.log(`Order has been updated`);
  }

  getOrder() {
    return {
      date: this.date,
      amount: this.amount,
      details: this.details.length,
      customer: this.customer.name,
    };
  }
}
// Classe Product
export class Product {
  createProduct(product) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.quantity = product.quantity;
    console.log(`Product: ${this.id}, ${this.name} has been created`);
  }

  destroyProduct() {
    console.log(`Product: ${this.id}, ${this.name} has been deleted`);
  }

  editProduct(newProduct) {
    this.id = newProduct.id;
    this.name = newProduct.name;
    this.price = newProduct.price;
    this.quantity = newProduct.quantity;
    console.log(`Product: ${this.id}, ${this.name} has been updated`);
  }

  getProduct() {
    console.log(`Product: ${this.id}, ${this.name}, Price: ${this.price}`);
  }
}

// Classe Order
export class Order {
  createOrder(order) {
    this.id = order.id;
    this.date = order.date;
    this.amount = order.amount;
    this.customer = order.customer;
    this.details = order.details; // liste des OrderDetails
    console.log(`Order: ${this.id} for ${this.amount} has been created`);
  }

  destroyOrder() {
    console.log(`Order: ${this.id} has been deleted`);
  }

  editOrder(newOrder) {
    this.id = newOrder.id;
    this.date = newOrder.date;
    this.amount = newOrder.amount;
    this.customer = newOrder.customer;
    this.details = newOrder.details;
    console.log(`Order: ${this.id} has been updated`);
  }

  getOrder() {
    console.log(`Order: ${this.id}, Amount: ${this.amount}`);
  }
}

// Classe OrderDetail
export class OrderDetail {
  constructor(id, quantity, price, product) {
    this.id = id;
    this.quantity = quantity;
    this.price = price;
    this.product = product;
    console.log(`OrderDetail: ${this.id} for product ${product.name} created`);
  }
}
