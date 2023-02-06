import express from 'express';

const NotFound = express.Router();

NotFound.use('/', (req, res) => {
    res.send('<h1>404</h1><h1>Route not found</h1>');
});

export default NotFound;