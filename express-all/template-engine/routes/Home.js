import express from 'express';
import path from 'path';

const Home = express.Router();
const templates = ['Pug', 'HandleBars', 'Ejs'];

Home.get('/', (req, res, next) => {
    res.render('Pug/Home', {docTitle: 'Home', templates: templates});
});

export default Home;