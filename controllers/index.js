//Requiriendo controllers creados register, login, getUserById en el archivo index
//Requiriendo los controladores creados
const register = require ('./register')
const login = require ('./login')
const getUserById = require ('./getUserById')

module.exports = {
    register,
    login,
    getUserById,
};