"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var productService = require('../service/productService');
module.exports = function (app) {
    var _this = this;
    app.get('/products', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, productService.getProducts()];
                case 1:
                    data = _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 3];
                case 3:
                    res.render('list-products', { products: data });
                    return [2 /*return*/];
            }
        });
    }); });
    app.get('/products/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, productService.getProductById(req.params.id)];
                case 1:
                    data = _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    console.error(e_2);
                    return [3 /*break*/, 3];
                case 3:
                    res.render('view-product', { product: data });
                    return [2 /*return*/];
            }
        });
    }); });
    app.get('/add-product', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            res.render('add-product');
            return [2 /*return*/];
        });
    }); });
    app.post('/add-product', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var data, id, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = req.body;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, productService.createProduct(data)];
                case 2:
                    id = _a.sent();
                    res.redirect('/products/' + id);
                    return [3 /*break*/, 4];
                case 3:
                    e_3 = _a.sent();
                    console.error(e_3);
                    res.locals.errormessage = e_3.message;
                    res.render('add-product', req.body);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    //get and post for adding product name - initialising product objext in first get route
    app.get('/add-product-name', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!req.session.product) {
                req.session.product = {};
            }
            res.render('add-product-name');
            return [2 /*return*/];
        });
    }); });
    //move on to product description (next page)
    app.post('/add-product-name', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            req.session.product["name"] = req.body.name;
            res.redirect('/add-product-description');
            return [2 /*return*/];
        });
    }); });
    //get and post for adding product description
    app.get('/add-product-description', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            res.render('add-product-description');
            return [2 /*return*/];
        });
    }); });
    app.post('/add-product-description', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            req.session.product["description"] = req.body.description;
            res.redirect('/add-product-price');
            return [2 /*return*/];
        });
    }); });
    //get and post for adding product price
    app.get('/add-product-price', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            res.render('add-product-price');
            return [2 /*return*/];
        });
    }); });
    app.post('/add-product-price', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            req.session.product["price"] = req.body.price;
            res.redirect('/add-product-confirmation');
            return [2 /*return*/];
        });
    }); });
    //get and post for adding product confirmation page - product can only be submitted to db from this page
    app.get('/add-product-confirmation', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            res.render('add-product-confirmation', req.session.product);
            return [2 /*return*/];
        });
    }); });
    app.post('/add-product-confirmation', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var data, id, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = req.session.product;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, productService.createProduct(data)];
                case 2:
                    id = _a.sent();
                    req.session.product = undefined;
                    res.redirect('/products/' + id);
                    return [3 /*break*/, 4];
                case 3:
                    e_4 = _a.sent();
                    console.error(e_4);
                    res.locals.errormessage = e_4.message;
                    res.render('add-product-confirmation', req.session.product);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
};
//# sourceMappingURL=productController.js.map