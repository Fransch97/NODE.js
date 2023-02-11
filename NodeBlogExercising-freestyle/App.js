import express from 'express';
import path from 'path';
import homeController from './Controller/HomeController.js'

const app = express();

app.set('view engine', 'pug');
app.set('views', 'Views');

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.resolve('Public')));


app.get('/', homeController);

app.listen(3000);