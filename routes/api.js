const express = require('express')
const router = express.Router();
const encrypt = require('bcrypt')
    // Import schemas:
const Pregunta = require('../models/pregunta')
const Examen = require('../models/examen')
const Respuestas = require('../models/respuesta')
const Usuarios = require('../models/usuario')

//Obtener preguntas en referencia a un examen en concreto y obtener pregunta por id
router.get('/pregunta/:referenciaExamen', (req,res) => {

    const id = req.params.referenciaExamen;
    Pregunta.find({examen: id})
            .exec()
            .then(doc => {
                console.log(doc)
                res.status(200).json(doc)
            }).catch(err => {
                console.log(err)
                res.status(500).json({error: err})
            })

})
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
// Obtener todos los examenes, y Obtener examen por id
router.get('/examenes', (req,res) => {

    Examen.find({})
            .exec()
            .then(doc => {
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
// Obtener respuestas referentes a una pregunta, y Obtener respuesta por id
router.get('/respuestas/:referenciaPregunta', (req,res) => {

    const id = req.params.referenciaPregunta;
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
// Registro de Usuario
router.post('/registrarse', (req,res, next) => {

    Usuarios.find({email: req.body.email}).exec()
            .then(emailFound => {
                if (emailFound.length >= 1){
                    return res.status(409).json({message: 'el email ya existe'})
                } else {
                    encrypt.hash(req.body.password, 10, 
                        (err, hash) => {
                            if (err){
                                return res.status(500).json({
                                    error: err
                                })
                            } else {
                                const usuario = new Usuarios({
                                    email: req.body.email,
                                    password: hash
                                })
                                usuario.save()
                                        .then(result => res.status(201).json({message: 'usuario creado'}))
                                        .catch(err => res.status(500).json({error: err}))
                            }
                        })
                }
            })
            .catch()

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
// Añadir 4 respuestas
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
router.delete('/:usuario/:usuarioId', (req,res) => {

    Usuarios.findByIdAndRemove(req.params.usuarioId)
            .then(usuario => res.send({documento_eliminado: usuario}))
})
router.delete('/pregunta/:preguntaId', (req,res) => {

    Pregunta.findByIdAndRemove(req.params.preguntaId)
            .then(pregunta => res.send({archivo_eliminado: pregunta}))

})
router.delete('/examen/:examenId', (req,res) => {

    Examen.findByIdAndRemove(req.params.examenId)
          .then(examen => res.send({archivo_eliminado: examen}))
})
router.delete('/respuestas/:respuestaId', (req,res) => {

    Respuestas.findByIdAndRemove(req.params.respuestaId)
          .then(respuesta => res.send({archivo_eliminado: respuesta}))

})


module.exports = router;