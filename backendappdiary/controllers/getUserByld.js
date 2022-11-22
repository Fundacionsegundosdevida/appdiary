const Usuario = require("../model/Usuario"); //Se requiere el esquema del usuario de la ruta model/usuario


const getUserByld = async (req, res) => {
    const {userId} = req.params; //Traemos el UserID
    if (userId.length === 24) { //Se establece la cantidad de caracteres para el Id 
        Usuario.findById(userId).then((usuario) => { 
            if (!usuario) { //sI no hay un usuario nos retorna el siguiente mensaje
                return res.status(404).json({ mensaje: "Usuario no encontrado" }); 
            } else {
                const { _id, contraseña, __v, ...resto } = usuario._doc; //Se estructura el usuario 
                res.json(resto); //Se retorna el ressto de variables
            }
        });
    } else {//Si el Id es menor o mayor a 24 nos retornara el siguiente mensaje 
        res.status(404).json({ mensaje: "Estas enviando un usuario incorrecto" });
    }
}; //Creando controller getUserByld

module.exports = getUserByld;