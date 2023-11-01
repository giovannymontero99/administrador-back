import express from "express";
import logger from "morgan";
import cors from "cors";

import router from "../v1/routes/route.js";

const app = express();



// middlewares
app.use(logger("dev"));
app.use(cors());

//configuraciones para recibir JSON
app.use(express.json());

// routes
app.use("/", router )




export default app;
