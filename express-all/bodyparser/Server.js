import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(express.urlencoded({extended: true}));

app.use("/new-product", (req, res) => {
    res.send('<form action="/product" method="post"> <input name="product"></Input> <br> <button type="submit">Add product</button> </form>')
});

app.post("/product", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

app.use("/", (req, res) => {
    res.send('<h1>Home</h1> <p>Create new Product</p> <a href="/new-product">Add product here</a>')
})

app.listen(3000);