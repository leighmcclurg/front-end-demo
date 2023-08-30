"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var session = require("express-session");
var express = require('express');
var path = require('path');
var nunjucks = require('nunjucks');
var app = express();
//config nunjucks
var appViews = path.join(__dirname, '/views');
var nunjucksConfig = {
    autoescape: true,
    noCache: true,
    express: app
};
nunjucks.configure(appViews, nunjucksConfig);
//config express
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//added resave & saveUnititliazed
app.use(session({ secret: 'NOT HARD CODED SECRET', cookie: { maxAge: 60000 } }));
app.listen(3000, function () {
    console.log('Server listening on port 3000');
});
// Express Routes
app.get('/', function (req, res) {
    res.render('pizza', {
        title: 'Leigh Pizza Time',
    });
});
require('./controller/productController')(app);
require('./controller/orderController')(app);
require('./controller/customerController')(app);
require('./controller/authController')(app);
//# sourceMappingURL=app.js.map