import { Application, Response, Request } from "express";
import { Order } from "../model/order";


const orderService = require('../service/orderService')


module.exports = function(app: Application){

    app.get('/orders', async(req: Request, res: Response) => {
        let data : Order[];

        try {
            data = await orderService.getOrders()
        }catch (e) {
            console.error(e);
        }
        res.render('list-orders', { orders: data } )
    } )

    app.get('/orders/:id', async(req, res) => {
        let data = [];

        try {
            data = await orderService.getOrderById(req.params.id)
        }catch (e) {
            console.error(e);
        }
        res.render('view-order', { order: data } )
    })


    app.post('/add-order', async(req: Request, res: Response) => {
        let data: Order = req.body
        let id : Number

        try{
            id = await orderService.createOrder(data)

            res.redirect('/orders/' + id)
        } catch (e) {

            console.error(e)
        
            res.locals.errormessage = e.message

        res.render('add-order', req.body)
        

        }
})



}