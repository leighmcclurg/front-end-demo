import { Application, Response, Request } from "express";
import { Customer } from "../model/customer";
const customerService = require('../service/customerService')

module.exports = function(app: Application){

    app.get('/add-order', async(req: Request, res: Response) => {
        let data : Customer[];

        try {
            data = await customerService.getCustomers()
        }catch (e) {
            console.error(e);
        }
        res.render('add-order', { customers: data } )
    } )

    app.get('/add-order', async(req: Request, res: Response) => {
        res.render('add-order')
    })

    

}