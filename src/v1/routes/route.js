import { Router } from "express";
import client from "../config/conection.database.js";
import productosController from "../controller/controller.js";
const router = Router();

const response = {
    status: "ok"
}


router.post("/",(req,res)=>{
    productosController.insertarNuevoProducto(req,res);
} )


export default router;