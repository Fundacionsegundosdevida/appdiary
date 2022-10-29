//constantes
const bcrypt = require ('bcrypt'); // lib para encriptar contraseñas
const Usuario = require('../model/Usuario');// requiriendo modelo bd usuario
const register = async (req, res) => {
    const {nombre, correo, contraseña} = req.body; //traer los valores den body

    Usuario.findOne({correo}).then((usuario) => {//cuando encuentre un usuario con el correo ingresado
        /** Validacion de usuario existente */
        if(usuario){
            return res.json({mensaje: "Ya existe un usuario con ese correo"});
        } /** Validacion si uno de los campos esta vacio*/
        else if (!nombre || !correo || !contraseña){
            return res.js({mensaje: "Falta el nombre / correo / contraseña"});
        }
        else { /** si el correo no existe y si los campos estan llenos correctamente encripte */
            bcrypt.hash(contraseña, 10, (error, contraseñahasheada) => { /** 10 es la cantidad de veces que sera encriptada la contraseña */
                if(error) res.json({error}) /** muestra error en encriptacion */
                else{ /** SI no hay errores crea el objeto y le pasa parametros*/
                    const nuevoUsuario = new Usuario ({ /** crear un nuevo objeto de usuario */
                    /** le pasa los siguiente parametros */    
                        nombre, 
                        correo,
                        contraseña: contraseñahasheada,
                    });
                    //crea ek nuevo usuario
                    nuevoUsuario
                    .save()
                    .then((usuario)=>{
                        res.json({mensaje: "Usuario creado correctamente", usuario})
                        
                    })/** control de errores */
                    .catch(error => console.error(error));
                }
            });
        }
        });
}; //modulo





module.exports = register //exportando modulo


