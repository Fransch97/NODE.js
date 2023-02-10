import express from 'express';
import path from 'path';

import Routes from './Routes.js';

const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.resolve('public')));

app.use(Routes);

app.listen(3000)