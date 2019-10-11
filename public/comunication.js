// Create DOM elements:
const examenesContainer = document.getElementById('root');
const examContainer = document.createElement('div')

examContainer.setAttribute('class', 'exam-container');

examenesContainer.appendChild(examContainer)

// Request and rendering:
var request = new XMLHttpRequest()

request.open('GET', 'http://localhost:4000/api/examenes', true)

request.onload = function(){
    var examenes = JSON.parse(this.response)

    if(request.status >= 200 && request.status < 400){

        examenes.forEach(examen => {

            const titulo = document.createElement('h2')
            const dificultad = document.createElement('h5')
            const numeroPreguntas = document.createElement('p')

            titulo.textContent = examen.titulo;
            dificultad.textContent = examen.dificultad_info;
            numeroPreguntas.textContent = examen.numero_preguntas;

            examenesContainer.appendChild(titulo);
            examenesContainer.appendChild(dificultad);
            examenesContainer.appendChild(numeroPreguntas);

            examenesContainer.appendChild(examContainer);
        })
    } else { console.log(error) }
}

request.send()

