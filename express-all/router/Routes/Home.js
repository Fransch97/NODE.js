import express from 'express';
import path from 'path';

const Home = express.Router()
const Products = [];

Home.get('/', (req, res, next) => {
    console.log(Products)
    res.sendFile(path.resolve('views', 'Home.html'))
});

export { Home, Products};