
import { Response, Request } from "express";
import { Product } from "./model/product";
import session = require("express-session");
const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');

const app = express();

//config nunjucks
const appViews = path.join(__dirname, '/views');

const nunjucksConfig = {
    autoescape: true,
    noCache: true,
    express: app
};

nunjucks.configure(appViews, nunjucksConfig);

//config express
app.set('view engine', 'html');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//added resave & saveUnititliazed
app.use(session({ secret: 'NOT HARD CODED SECRET', cookie: { maxAge: 60000}}) );

//allows us to store a 'product' object in the session
declare module "express-session" {
    interface SessionData{
        product: Product;
        token: string
    }
}


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

// Express Routes

app.get('/', (req: Request, res: Response) => {
    res.render('pizza', {
        title: 'Leigh Pizza Time',
    });
})

require('./controller/productController')(app);
require('./controller/orderController')(app);
require('./controller/customerController')(app);
require('./controller/authController')(app);
