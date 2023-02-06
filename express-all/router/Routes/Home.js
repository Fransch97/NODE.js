import express from 'express';

const Home = express.Router()

Home.get('/', (req, res, next) => {
    res.send('<h1>Home</h1> <p>Create new Product</p> <a href="/new-product">Add product here</a>')
});

export default Home;