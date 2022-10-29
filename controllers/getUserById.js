const Usuario = require("../model/Usuario");/**Requisiendo el modelo bd de usuario */


const getUserByld = async (req, res) => {
    const {userId} = req.params; //traemos el id del usuario
    if (userId.length === 24) { //verifica que el id sea de 24 caracteres porque mongose a si lo configura
        Usuario.findById(userId).then((usuario) => {
            if (!usuario) { // si no hay un usuario retorna mensaje
                return res.status(404).json({ mensaje: "Usuario no encontrado" }); 
            } else {
                // creamos una constante
                const { _id, contraseña, __v, ...resto } = usuario._doc;
                res.json(resto);
            }
        });
    } else {
        res.status(404).json({ mensaje: "Estas enviando una contraseña incorrecta" });
    }
}; //Creando controller getUserByld

module.exports = getUserByld;