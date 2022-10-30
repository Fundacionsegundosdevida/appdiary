const bcrypt = require("bcrypt");
const Usuario = require("../model/Usuario");
const login = async (req, res) => {
    const {correo, contraseña} = req.body;
    Usuario.findOne({correo}).then((usuario)=>{
        if(!usuario){ //validacion de usuario con correo electronico
            return res.json({mensaje: "Usuario no encontrado"})
        }//funcion  para loguear usuario si el correo y contraseña son correctos
        bcrypt.compare(contraseña, usuario.contraseña).then((esCorrecta) => {
            if(esCorrecta){ //validando contraseña
                //obteniendo id y nombre user
                const {id, nombre,} = usuario
                //logueo de usuario
                res.json({
                    //mensaje para postman
                    mensaje: "Usuario logueado correctamente",
                    usuario: {
                        id,
                        nombre,
                }});                
            }
            else{ //validacion incorrecta
                return res.json({mensaje: "Contraseña incorrecta    "})
            }
        })
    });
}
module.exports = login
