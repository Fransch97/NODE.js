import express from 'express';

const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/', (req, res, next) => {
    res.write("<h1>Hello Node.js</h1>");
    res.end
});

app.listen(3000);