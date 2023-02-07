import express from 'express';
import { Products } from './Home.js';

const Product = express.Router();

Product.post('/product', (req, res, next) => {
    Products.push(req.body.product);
    res.redirect("/");
});

export default Product;