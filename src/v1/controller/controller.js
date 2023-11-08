import client from "../config/conection.database.js";
import controllers from "../model/model.js";


export const productosController = {
    insertarNuevoProducto: async (req,res)=>{
        const { productoCodigo , productoNombre, productoValorNeto, productoValorVenta } = req.body;
        
        
        const { rowCount } = await client.query( controllers.insertNewProducto , [productoCodigo.toUpperCase() , productoNombre.toUpperCase() , parseFloat(productoValorNeto).toFixed(2), parseFloat(productoValorVenta).toFixed(2)] );

        if(rowCount > 0){
            res.json(
                {
                    variant: 'success', 
                    message: "User created successfully", 
                    created: true,
                    show: true
                }).status(201);
        } else{
            res.json(
                { 
                    variant: 'danger',
                    message: "The request is incorrect", 
                    created: false,
                    show: true
                 }).status(400);
        }
        
    },
    getAllData: async(req,res)=>{
        try {
            const response = await client.query('SELECT * FROM productos');
            res.json(response.rows);
        } catch (error) {
            console.log(error);
            res.json({message: "The request is incorrect"});
        }
        
        
    }
}