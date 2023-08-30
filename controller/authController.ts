import { Application, Response, Request } from "express";
import { Login } from "../model/auth";
const authService = require('../service/authService')

//route to render login form

module.exports = function(app: Application){
app.get('/login', async (req: Request, res: Response) => {
    res.render('login')
})

//route so send a submitted form

app.post('/login', async(req: Request, res: Response) =>{
    let data: Login = req.body

try{
    req.session.token = await authService.login(data)
    res.redirect('/products')
    
}catch (e){
    console.error(e)
    res.locals.errormessage =e.message

    res.render('login', req.body)
}
})



}