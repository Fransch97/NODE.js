import express from 'express';

const Product = express.Router();

Product.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

export default Product;