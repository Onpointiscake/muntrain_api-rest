// Create DOM elements:
const examenesContainer = document.getElementById('root');
// Display oculto para que no sea el estilo de overflow:scroll
examenesContainer.style.display = 'none';

const examContainer = document.createElement('div')

examContainer.setAttribute('class', 'container');
examenesContainer.appendChild(examContainer)

// Request and rendering:
var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:4000/api/examenes', true)

// Fetch exams and render:
function getExamenes(){

    // Activar display del container que habiamos ocultado:
    examenesContainer.style.display = 'block';

    request.onload = function(){
        var examenes = JSON.parse(this.response)
    
        if(request.status >= 200 && request.status < 400){
    
            examenes.forEach(examen => {
                
                const examenWrapper = document.createElement('div')
                examenWrapper.setAttribute('class', 'exam-container')
    
                const titulo = document.createElement('h4')
                titulo.textContent = examen.titulo;
                examenWrapper.appendChild(titulo);
    
                const dificultad = document.createElement('h5')
                dificultad.textContent = "Dificultad estimada: " + examen.dificultad_info;
                examenWrapper.appendChild(dificultad);
    
                const numeroPreguntas = document.createElement('p')
                numeroPreguntas.textContent = "Numero de Preguntas: " + examen.numero_preguntas;
                examenWrapper.appendChild(numeroPreguntas);
    
                examContainer.appendChild(examenWrapper);
            })
        } else { console.log(error) }
    }
    
    request.send()

}

