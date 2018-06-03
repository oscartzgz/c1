document.getElementById("examen1Boton").addEventListener('click', function () {
  /* body... */
  console.log(this);
  this.classList.add('activo');
  document.getElementById("examen2Boton").classList.remove('activo');
  document.getElementById("examen3Boton").classList.remove('activo');
  document.getElementById("examen1").classList.remove('hide');
  document.getElementById("examen2").classList.add('hide');
  document.getElementById("examen3").classList.add('hide');
});

document.getElementById("examen2Boton").addEventListener('click', function () {
  /* body... */
  console.log(this)
  this.classList.add('activo');
  document.getElementById("examen1Boton").classList.remove('activo');
  document.getElementById("examen3Boton").classList.remove('activo');
  document.getElementById("examen1").classList.add('hide');
  document.getElementById("examen2").classList.remove('hide');
  document.getElementById("examen3").classList.add('hide');
});

document.getElementById("examen3Boton").addEventListener('click', function () {
  /* body... */
  console.log(this)
  this.classList.add('activo');
  document.getElementById("examen1Boton").classList.remove('activo');
  document.getElementById("examen2Boton").classList.remove('activo');
  document.getElementById("examen1").classList.add('hide');
  document.getElementById("examen2").classList.add('hide');
  document.getElementById("examen3").classList.remove('hide');
});


function validarExamen1() {
  preguntas = document.getElementById('examen1').getElementsByClassName('pregunta').length;
  respuestas = document.getElementById('examen1').querySelectorAll('input:checked');
  correctas = 0;
  respuestas.forEach(function (respuesta) {
    if (respuesta.value == 'true') {
      correctas = correctas + 1;     
    }
  })
  calificacion = correctas * 10 / preguntas;
  console.log(calificacion)
  alert("Tienes " + correctas + " correctas de " + preguntas + "\n Tu Nota: " + Math.round(calificacion * 10) / 10 );
}

function validarExamen2() {
  preguntas = document.getElementById('examen2').getElementsByClassName('pregunta').length;
  respuestas = document.getElementById('examen2').querySelectorAll('input:checked');
  correctas = 0;
  respuestas.forEach(function (respuesta) {
    if (respuesta.value == 'true') {
      correctas = correctas + 1;     
    }
  })
  calificacion = correctas * 10 / preguntas;
  console.log(calificacion)
  alert("Tienes " + correctas + " correctas de " + preguntas + "\n Tu Nota: " + Math.round(calificacion * 10) / 10 );
}

function validarExamen3() {
  preguntas = document.getElementById('examen3').getElementsByClassName('pregunta').length;
  respuestas = document.getElementById('examen3').querySelectorAll('input:checked');
  correctas = 0;
  respuestas.forEach(function (respuesta) {
    if (respuesta.value == 'true') {
      correctas = correctas + 1;     
    }
  })
  calificacion = correctas * 10 / preguntas;
  console.log(calificacion)
  alert("Tienes " + correctas + " correctas de " + preguntas + "\n Tu Nota: " + Math.round(calificacion * 10) / 10 );
}