import express from 'express';
import path from 'path';

const NotFound = express.Router();

NotFound.use('/', (req, res) => {
    res.status(404).sendFile(path.resolve('views', '404.html'));
});

export default NotFound;