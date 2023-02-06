import express from 'express';

const AddProduct = express.Router();

AddProduct.get("/new-product", (req, res) => {
    res.send('<form action="/product" method="post"> <input name="product"></Input> <br> <button type="submit">Add product</button> </form>')
});

export default AddProduct;