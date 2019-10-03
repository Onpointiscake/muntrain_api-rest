const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PreguntaSchema = new Schema({
    examen: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'examens'
    },
    pregunta: {
        type: String,
        required: [true, 'debes escribir una pregunta']
    }
});

const Pregunta = mongoose.model('pregunta', PreguntaSchema)

module.exports = Pregunta;
