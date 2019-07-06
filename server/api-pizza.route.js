const express = require('express');
const app = express();
const apiPizzaRouter = express.Router();
let Pizza =  require('./pizza');
apiPizzaRouter.route('/pizza-add').post((req,resp)=>{
    let body_pizza=new Pizza(req.body);
    body_pizza.save().then(
        ()=> resp.send("new pizza added"),
        (err)=>resp.send("failure while adding pizza")
    );
});


apiPizzaRouter.route('/pizza-list').get((req,resp)=>{
    Pizza.find((err,data)=>{
        if(err){
            resp.send("failure");
        }
        resp.send(data);
    });
 });
module.exports=apiPizzaRouter;