import client from "../config/conection.database.js";
import controllers from "../model/model.js";


const productosController = {
    insertarNuevoProducto: async (req,res)=>{
        const { productoCodigo , productoNombre, productoValorNeto, productoValorVenta } = req.body;
        
        
        const response = await client.query( controllers.insertNewProducto , [productoCodigo.toUpperCase() , productoNombre.toUpperCase() , parseFloat(productoValorNeto).toFixed(2), parseFloat(productoValorVenta).toFixed(2)] );

        console.log(response);
        res.json({ message: "User created successfully", product: req.body }).status(201);
    }
}

export default productosController;