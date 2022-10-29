//Requiriendo controllers creados register, login, getUserByld en el archivo index
//Requiriendo los controladores creados
const register = require ('./register')
const login = require ('./login')
const getUserByld = require ('./getUserByld')

module.exports = {
    register,
    login,
    getUserByld,
};