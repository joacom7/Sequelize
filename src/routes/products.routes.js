import expresss from "express";
import  createProductController  from "../controller/products.controller.js";
export const productsRouter = expresss.Router()

productsRouter.post('/' , (req, res) =>{
    const productData = req.body
    const productCreated = createProductController(productData)  

    res.send(productCreated)
})