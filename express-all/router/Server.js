import express from "express";

import Home from "./Routes/Home.js";
import Product from "./Routes/Product.js";
import AddProduct from "./Routes/AddProduct.js";

const app = express();
app.use(express.urlencoded({extended: true}));

app.use(Home)
app.use(Product)
app.use(AddProduct)

app.listen(3000)