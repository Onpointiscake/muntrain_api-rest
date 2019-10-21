// Create DOM elements:
const examenesContainer = document.getElementById('root');
// Display oculto para que no sea el estilo de overflow:scroll
examenesContainer.style.display = 'none';

const examContainer = document.createElement('div')

examContainer.setAttribute('class', 'container');
examenesContainer.appendChild(examContainer)

// Fetch exams and render:
function getExamenes(){

    var request = new XMLHttpRequest()
    request.open('GET', 'http://localhost:4000/api/examenes', true)

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

// Get exam´s values to Post
var exam = document.getElementById("exameninput").value;
var examName = exam.textContent;

var difficulty = document.getElementById("dificultadoptions");
var difficultyChosen = difficulty.options[difficulty.selectedIndex].value;

var time = document.getElementById("tiempooptions");
var timeChosen = time.options[time.selectedIndex].value;


function createExam(){

    console.log(exam)
/*
  var xhr = new XMLHttpRequest();
  var url = "http://localhost:4000/api/examen";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var json = JSON.parse(xhr.responseText);
          console.log(json)
      }
  };
  var data = JSON.stringify({"titulo": "Examen de html-13:00", "dificultad_info": "alta"});
  xhr.send(data);
  */
}

