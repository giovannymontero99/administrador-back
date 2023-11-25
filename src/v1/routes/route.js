import { Router } from "express";
import  { productosController } from "../controller/controller.js";


 //
import jsonwebtoken from 'jsonwebtoken';
import bcryptjs from 'bcryptjs'
import { usersCollection } from "../config/conection.database.js";
import { secret } from "../config/variablesEntorno.js";

///////

const router = Router();




router.post("/",async(req,res)=>{
    productosController.insertarNuevoProducto(req,res);

} )

router.get('/all-products', async(req, res) => {
    productosController.getAllData(req, res);
});


router.post('/login', async(req,res)=>{
    const token = jsonwebtoken.sign( req.body, secret  );
    const { userLoginForm, passwordLoginForm } = req.body;

    const { password } = await usersCollection.findOne({
        user : userLoginForm
    });

    const isRealPassword = await bcryptjs.compare( passwordLoginForm, password  );

    if(isRealPassword) {
        res.cookie( 'key', token, {
            httpOnly: true,
            sameSite: true,
            secure: true
        } )
        res.send({ msg: 'OK' });
    }else {
        res.send({ msg: 'NOT AUTHORIZED' });
    }
})

router.get('/ruta-protegida', (req,res)=>{
    const token = req.cookies.key;
    if (token) {
        // El token es válido, puedes realizar acciones protegidas aquí
        res.json({ mensaje: true });
    } else {
        // Sin token o token inválido, denegar el acceso
        res.json({ mensaje: false});
    }
})



export default router;