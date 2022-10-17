// Variables Constantes
const express = require('express');
const cors = require('cors');


//aplicacion de express
const app = express();

// envio de data desde el fronend al backend desde el mismo puerto
app.use(cors())
app.use(express.json()) //permite acceder a la informacion que contiene el body en las peticiones POST


const PORT = 4000;  //puerto de conexion

// prueba para comprobar la conexion con el puerto seleccionado
app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
});

//EXportar todas las carpeta y archivos del proyecto 
module.exports = app