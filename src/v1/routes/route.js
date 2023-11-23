import { Router } from "express";
import  { productosController } from "../controller/controller.js";
const router = Router();



router.post("/",async(req,res)=>{
    productosController.insertarNuevoProducto(req,res);

} )

router.get('/all-products', async(req, res) => {
    productosController.getAllData(req, res);
});

export default router;