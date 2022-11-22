const register = require ('./register') //Se requieren todos los controllers creados
const login = require ('./login')
const getUserByld = require ('./getUserByld')

module.exports = {  //Se exporta todo lo que incluye el archivo index
    register,
    login,
    getUserByld
};
