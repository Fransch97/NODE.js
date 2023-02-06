import express from 'express';
import path, {dirname} from 'path';

const AddProduct = express.Router();

AddProduct.get("/new-product", (req, res) => {
    res.sendFile(path.resolve('views', 'AddProduct.html'))
})

export default AddProduct;