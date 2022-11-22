const bcrypt = require('bcrypt')
const Usuario = require('../model/Usuario')//Se requiere el modelo usuario 
//Creando controller login
const login = async (req, res) => {
    const { correo, contraseña } = req.body; //Tremos el body de usuario y contraseña 

    Usuario.findOne({ correo }).then((usuario) => { //Se hace un llamado a la variable usuario 
        //Si no hay usuario se retorna el siguiente mensaje
        if(!usuario) {
            return res.json({ mensaje: 'Usuario no encontrado' });
        }
//Se realiza una compracion entre la contraseña y el usuario contraseña de la base de datos
        bcrypt.compare(contraseña,usuario.contraseña).then((esCorrecta) => { 
           //Si es correcta nos mostrara el id y el nombre con el siguiente mensaje
            if(esCorrecta) {
                const {id, nombre} = usuario;

                res.json({ 
                   mensaje:"Usuario logeado correctamente", 
                   usuario: {
                    id,
                    nombre,
                   },
                });   
                //Si no funciona nos retornara el siguiente mensaje 
          } else {
            return res.json({mensaje: "Contraseña incorrecta"})
          }
        });
    }); 
};

module.exports = login