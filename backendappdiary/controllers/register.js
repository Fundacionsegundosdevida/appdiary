const bcrypt = require ('bcrypt'); //Se requiere encriptacion de contraseña
const Usuario = require ('../model/Usuario'); //Se requiere el modelo del usuario

const register = async (req, res) => { //Creando controller register
  const {nombre, correo, contraseña} = req.body; //Se requiere traer las constantes al cuerpo 

  if (nombre && correo && contraseña) { //se valida que luego de recibir el body las variables no vengan vacias
    Usuario.findOne({correo}).then((usuario) => { //Se crea el correo de acuerdo al usuario creado
      //si hay un usuario con ese correo retorna el siguiente mensaje
      if(usuario) {
        return res.status(400).json({mensaje: "Ya existe un usuario con ese correo"}); 
        //Si no hay nombre, correo o contraseña retorna el siguiente mensaje        
      } else {
        //Si en las codicionales anteriores no ocurre nada, se hashea la contraseña a traves de un algoritmo
        bcrypt.hash(contraseña, 10, (error, contraseñaHasheada) => {
          //Si ocurre algo diferente nos mostrara error
          if(error) res.json({ error})
          //El nuevo usuario se creara con las siguientes constantes
          else {
            const nuevoUsuario = new Usuario ({
              nombre,
              correo,
              contraseña: contraseñaHasheada,
            });
  
            nuevoUsuario.save() //Se guaarda el usuario
            .then((usuario) => { //Se recibe el usuario 
              //Despues de guardar el usuario nos mostrara el siguiente mensaje
              res.status(200).json({mensaje: "Usuario creado correctamente", usuario });
            })
            //Si se captura un error este se recibe y se consolida 
            .catch(error => console.error(error));
          }
        });
      }
    });
  }else {
    return res.status(400).json({ mensaje: "Falta el nombre, correo o contraseña"});
  }
};
    
module.exports = register