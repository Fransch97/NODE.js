import express, { response } from 'express';

const app = express();

//add middlewears
app.use((req, res, next) => {
    console.log("Hi from middlewear");
    next();
});
app.use((req, res, next) => {
    console.log(req.url)
    console.log("Hi from an second middlewear");
    res.send("<h1>Hi you passed the second middlewear</h1>");
});

app.listen(3000);