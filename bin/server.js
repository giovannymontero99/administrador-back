import http from "http";
import app from "../src/app/app.js";


const validatePort = (value)=>{
    const port = parseInt(value,10);
    if(isNaN(port))return value;
    if(port>= 0) return port;
}

const port = validatePort( process.env.PORT ?? 3000 );

http.createServer(app);
app.listen(port, ()=> console.log( `Server on port: ${port}` ) );