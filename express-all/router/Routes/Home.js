import express from 'express';
import path from 'path';

const Home = express.Router()

Home.get('/', (req, res, next) => {
    res.sendFile(path.resolve('views', 'Home.html'))
});

export default Home;