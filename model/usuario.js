const { model, Schema } = require("mongoose")

//Requerimos el modelo y esquema de mongoose

//creando un esquema para formulario de nombre correo y contraseña
const UsuarioShema = new Schema({
    nombre: {type: String, required: true},
    correo: {type: String, required: true, unique: true},
    contrasena: {type: String, required: true},
});

//exportando el modelo y le pasamos el esquema
module.exports = model("Usuario", UsuarioShema);