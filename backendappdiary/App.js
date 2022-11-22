const express = require("express");
const cors = require("cors");
const db = require('./database/db');

const controllers = require('./controllers') //Requerimos la carpeta controllers

const app = express();

app.use(cors());
app.use(express.json());

//Creacion de rutas de la app controllers
app.get('/user/:userId', controllers.getUserByld) //ruta para buscar usuarios por su id tipo get
app.post('/register', controllers.register) //Ruta para registrar ususarios
app.post('/login', controllers.login) //Ruta para login de usuarios


const PORT = 4091

app.listen(PORT, () => {
    console.log(`SERVICIO FUNCIONANDO EN EL PUERTO ${PORT}`);
    db();
});

module.exports = app