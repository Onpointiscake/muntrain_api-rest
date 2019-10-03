const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RespuestasSchema = new Schema({
        pregunta: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'pregunta'
        },
        respuesta_uno: {
            type: String,
            required: [true, 'debes escribir todas las opciones posibles'],
        },
        respuesta_dos: {
            type: String,
            required: [true, 'debes escribir todas las opciones posibles'],
        },
        respuesta_tres: {
            type: String,
            required: [true, 'debes escribir todas las opciones posibles'],
        },
        respuesta_cuatro: {
            type: String,
            required: [true, 'debes escribir todas las opciones posibles']
        }
})

const Respuestas = mongoose.model('respuestas', RespuestasSchema)

module.exports = Respuestas;

