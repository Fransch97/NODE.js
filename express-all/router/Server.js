import express from "express";
import path from 'path'

import {Home} from "./Routes/Home.js";
import Product from "./Routes/Product.js";
import AddProduct from "./Routes/AddProduct.js";
import NotFound from "./Routes/404.js";

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.resolve('public')));

app.use(Home);
app.use(Product);
app.use(AddProduct);
app.use(NotFound);

app.listen(3000);