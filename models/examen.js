const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ExamenSchema = new Schema({
    titulo: {
        type: String,
        required: [true, 'debes escribir un titulo']
    },
    numero_preguntas: {
        type: Number
    },
    tiempo_limite: {
        type: Number,
        default: 5
    },
    dificultad_info: {
        type: String,
        default: "media"
    },
    creado: {
        type: Date
    },
    acabado: {
        type: Boolean,
        default: false
    }
})

const Examen = mongoose.model('examen', ExamenSchema)

module.exports = Examen;