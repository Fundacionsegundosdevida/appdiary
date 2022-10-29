//constantes
const { Schema, model } = require("mongoose")
const register = async (req, res) => {} //modulo
module.exports = register //exportando modulo

//creando un esquema para formulario de nombre correo y contraseña
const UsuarioShema = new Schema({
    nombre: {type: String, required: true},
    correo: {type: String, required: true},
    contrasena: {type: String, required: true},
})

module.exports = model("Usuario", UsuarioShema);
