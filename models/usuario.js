const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    email: { 
        type: String, required: true, unique: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true}
});

const Usuarios = mongoose.model('usuarios', UsuarioSchema)

module.exports = Usuarios;
