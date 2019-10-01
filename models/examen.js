const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ExamenSchema = new Schema({
    titulo: {
        type: String,
        required: [true, 'debes escribir un titulo']
    },
    acabado: {
        type: Boolean,
        default: false
    }
})

const Examen = mongoose.model('examen', ExamenSchema)

module.exports = Examen;