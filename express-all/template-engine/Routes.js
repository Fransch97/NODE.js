import express from 'express'
import Home from './routes/Home.js';

const Routes = express.Router();

Routes.use(Home);

export default Routes;