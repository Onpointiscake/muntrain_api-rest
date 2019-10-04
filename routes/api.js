const express = require('express')
const router = express.Router();
    // Import schemas:
const Pregunta = require('../models/pregunta')
const Examen = require('../models/examen')
const Respuestas = require('../models/respuesta')


router.get('/pregunta/:preguntaId', (req,res) => {

    const id = req.params.preguntaId;
    Pregunta.findById(id)
            .exec()
            .then(doc => {
                console.log(doc)
                res.status(200).json(doc)
            }).catch(err => {
                console.log(err)
                res.status(500).json({error: err})
            })
})
router.get('/examen/:examenId', (req,res) => {

    const id = req.params.examenId;
    Examen.findById(id)
            .exec()
            .then(doc => {
                console.log(doc)
                res.status(200).json(doc)
            }).catch(err => {
                console.log(err)
                res.status(500).json({error: err})
            })
})
router.get('/respuestas/:respuestasId', (req,res) => {

    const id = req.params.respuestasId;
    Respuestas.findById(id)
            .exec()
            .then(doc => {
                console.log(doc)
                res.status(200).json(doc)
            }).catch(err => {
                console.log(err)
                res.status(500).json({error: err})
            })
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