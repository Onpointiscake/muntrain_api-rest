const express = require('express')
const router = express.Router();
    // Import schemas:
const Pregunta = require('../models/pregunta')
const Examen = require('../models/examen')
const Respuestas = require('../models/respuesta')


router.get('/pregunta', (req,res) => {

    Pregunta.findOne()

})
router.get('/examen', (req,res) => {

    Examen.findOne()

})
router.get('/respuestas', (req,res) => {

    Respuestas.findOne()

})
router.post('/pregunta', (req,res, next) => {

    Pregunta.create(req.body)
            .then((pregunta) => {
                res.send(pregunta)
            }).catch(next)

})
router.post('/examen', (req,res, next) => {

    Examen.create(req.body)
          .then((examen) => {
              res.send(examen)
          }).catch(next)

})
router.post('/respuestas', (req,res, next) => {

    Respuestas.create(req.body)
          .then((respuesta) => {
              res.send(respuesta)
          }).catch(next)

})
router.put('/pregunta/:id', (req,res) => {

    Pregunta.findByIdAndUpdate(req.params.id, req.body)
            .then(Pregunta.findOne({_id: req.params.id})
                          .then(pregunta => res.send(pregunta)))

})
router.put('/examen/:id', (req,res) => {

    Examen.findByIdAndUpdate(req.params.id, req.body)
          .then(Examen.findOne({_id: req.params.id})
                      .then(examen => res.send(examen)))

})
router.put('/respuestas/:id', (req,res) => {

    Respuestas.findByIdAndUpdate(req.params.id, req.body)
    .then(Respuestas.findOne({_id: req.params.id})
                .then(respuesta => res.send(respuesta)))

})
router.delete('/pregunta/:id', (req,res) => {

    Pregunta.findByIdAndRemove(req.params.id)
            .then(pregunta => res.send({archivo_eliminado: pregunta}))

})
router.delete('/examen/:id', (req,res) => {

    Examen.findByIdAndRemove(req.params.id)
          .then(examen => res.send({archivo_eliminado: examen}))
})
router.delete('/respuestas/:id', (req,res) => {

    Respuestas.findByIdAndRemove(req.params.id)
          .then(respuesta => res.send({archivo_eliminado: respuesta}))

})


module.exports = router;