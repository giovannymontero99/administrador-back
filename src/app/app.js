import express from "express";
import logger from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import router from "../v1/routes/route.js";

const app = express();



// middlewares
app.use(logger("dev"));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173', // Reemplazar con el origen de tu frontend
    credentials: true // Permite enviar cookies desde el frontend
}));


//configuraciones para recibir JSON
app.use(express.json());



// routes
app.use("/", router )




export default app;
