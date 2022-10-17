//constantes
const mongoose = require('mongoose')
const MONGO_URL = 'mongodb://localhost/autenticacionLocalYT' //autenticacionLocal es solo un nombre 


const db = async () => {
    await mongoose.connect(MONGO_URL)
    //mensaje de verificacion de funciond e la bd
    .then(()=> console.log('DB Funcionando'))
    //control de errores
    .catch(error => console.error(error));
};
// retornamos o exportamos la conexion de la base de datos

module.exports = db