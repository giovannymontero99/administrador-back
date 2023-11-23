import { collection } from "../config/conection.database.js";
//import controllers from "../model/model.js";


export const productosController = {
    insertarNuevoProducto: async (req,res)=>{
        let { codigo , title, valor_mayorista, pvp } = req.body;
        let acknowledge = false ; 
        
        try {
            ( acknowledge ) = await collection.insertOne({
                codigo,
                title,
                valor_mayorista: parseFloat( parseFloat(valor_mayorista).toFixed(2) ) ,
                pvp:  parseFloat( parseFloat(pvp).toFixed(2) )
            })
    
            console.log(acknowledge);
    
        } catch (error) {
            console.log(error)
        }finally{
            acknowledge ?
                res.json(
                    {
                        variant: 'success', 
                        message: "User created successfully", 
                        created: true,
                        show: true
                    }).status(201) :
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
        let response = {};
        try {
            response = await collection.find({}).toArray();
        } catch (error) {
            console.log(error);
        }finally{
            res.send(response);
        }
    }
}