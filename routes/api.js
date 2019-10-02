const express = require('express')
const router = express.Router();
    // Import schemas:
const Pregunta = require('../models/pregunta')
const Examen = require('../models/examen')


//ruta para obtener preguntas:
router.get('/preguntas', (req,res) => {
    res.send({
        preguntas: [
            {
                "exam_template": 1,
                "id_pregunta": 1,
                "pregunta": '¿Que clase de altitud es esta?'
            },
            {
                "exam_template": 1,
                "id_pregunta": 2,
                "pregunta": '¿Que clase de lugar es este?'
            },
            {   "exam_template": 1,
                "id_pregunta": 3,
                "pregunta": '¿Hacia donde iremos para superar ese pico?'
            },
        ]
    })
})
router.post('/preguntas', (req,res, next) => {

    Pregunta.create(req.body)
            .then((pregunta) => {
                res.send(pregunta)
            }).catch(next)

})
router.put('/preguntas/:id', (req,res) => {
    res.send({ TYPE: 'PUT' })
})
router.delete('/preguntas/:id', (req,res) => {
    res.send({ TYPE: 'DELETE' })
})

router.post('/examen', (req,res) => {

    Examen.create(req.body)
          .then((examen) => {
              res.send(examen)
          })

})


router.get('/respuestas', (req,res) => {
    res.send({
        respuestas: [
            {
                "id_pregunta": 1,
                "pregunta_options": ['Una muy baja', 'Una media', 'Una alta']
            },
            {
                "id_pregunta": 2,
                "pregunta_options": ['Un lugar peligroso', 'Un lugar a salvo', 'Un lugar extraño']
            },
            {
                "id_pregunta": 3,
                "pregunta_options": ['Hacia arriba', 'Hacia abajo', 'Hacia la izquierda']
            }
        ]
    })
})

module.exports = router;