// index.js
 import express from "express";
 import bodyParser from "body-parser";
import { Customer, Product, Order, OrderDetail } from "./gestionComande.js";

 const app = express();
const port = 3080;
 app.use(bodyParser.json());
// app.get("/", (req, res) => {
//   res.send("Bonjour les simploniens");
// });
// app.post("/customers", (req, res) => {
//   const customer = new Customer();
//   customer.createCustomer({ id: 1, name: "Fatima", email: "fatima@gmail.com" });
//   res.send(`Welcome ${customer.name}`);
//   const Product1 = new Product();
// });

// app.put("/customers/:id", (req, res) => {
//   // declaration du modele
//   const customer = new Customer();
//   customer.loadDataFromDb({ id: 5, name: "Mariame", email: "mari@gmail.com" });
//   console.log(`old id is ${customer.id}`);

//   customer.editCustomer({ id: 10, name: "Harouna", email: "hr@gmail.com" });
//   console.log(`current id is ${customer.id}`);
//   res.send(`Welcome ${customer.name}`);
// });
// app.listen(port, () => {
//   console.log(`L'application est en ecoute sur port ${port}`);
// });




app.post("/gestionnaire", (req, res) => {
  const customer = new Customer();
  customer.createCustomer({ name: "Fatima", email: "fatima@gmail.com" });

  const product1 = new Product();
  product1.createProduct({  name: "Produit1", price: 100, quantity: 10 });

  const product2 = new Product();
  product2.createProduct({ name: "Produit2", price: 150, quantity: 5 });

  const detail1 = new OrderDetail(2, 200, product1);
  const detail2 = new OrderDetail(3, 450, product2);

  const order = new Order();
  order.createOrder({
    date: new Date(),
    amount: 2000,
    customer: customer,
    details: [detail1, detail2],
  });

  res.json({
    message: "Client, produits et commande créés avec succès.",
    customer: customer,
    products: [product1, product2],
    order: order,
  });
});

app.listen(port, () => {
  console.log(`L'application est en écoute sur le port ${port}`);
});
