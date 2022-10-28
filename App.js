// Variables Constantes
const express = require('express');
const cors = require('cors');

//agregamos la ruta de la base de datos
const db = require("./database/db")

//aplicacion de express
const app = express();

// envio de data desde el fronend al backend desde el mismo puerto
app.use(cors())
app.use(express.json()) //permite acceder a la informacion que contiene el body en las peticiones POST


const PORT = 4000;  //puerto de conexion

// prueba para comprobar la conexion con el puerto seleccionado
app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`);
    //agregamos la bd 
    db();
});
//EXportar todas las carpeta y archivos del proyecto 
module.exports = app