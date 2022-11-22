//Creacion modelo Usuario 
const {model, Schema} = require ('mongoose'); //Requerimos el modelo y esquema de mongoose

const UsuarioShema = new Schema ({ //Creamos una constante llamada UsuarioEsquema
    //Creamos un nuevo esquema con el nombre, tipo y requerimiento
    nombre: {type: String, required: true }, 
    correo: {type: String, required: true, unique: true},
    contraseña: {type: String, required: true },
});

module.exports = model("Usuario", UsuarioShema); //Exportamos el modelo Usuario, agregando el esquema

