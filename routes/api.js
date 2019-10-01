const express = require('express')
const router = express.Router();



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
// ruta para añadir pregunta:
router.post('/preguntas', (req,res) => {
    console.log(req.body)
    res.send({
        Examen: req.body.exam_template,
        Id: req.body.id_pregunta,
        Pregunta: req.body.pregunta
        })
})
// ruta para editar pregunta:
router.put('/preguntas/:id', (req,res) => {
    res.send({ TYPE: 'PUT' })
})
// ruta para borrar pregunta
router.delete('/preguntas/:id', (req,res) => {
    res.send({ TYPE: 'DELETE' })
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