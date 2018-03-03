{  
  let estadosPosibles = ['No inicializado', 'Cargando', 'Cargado', 'Interactivo', 'Completado'];
  let tiempoInicial = 0;
  let contenidos;
  let estados;
  let recurso;
  
  let init = function() {
      recurso = document.getElementById('recurso');
      estados =  = document.getElementById('estados');
      contenidos = document.getElementById('contenidos')
      recurso.value = location.href;
      document.getElementById('enviar').onclick = cargaContenido;
  }

  let cargaContenido = function() {
    contenidos.innerHTML = "";
    estados.innerHTML = "";
    peticion = new XMLHttpRequest();
    peticion.onreadystatechange = muestraContenido;
    tiempoInicial = new Date();
    let recurso = document.getElementById('recurso').value;
    peticion.open('GET', recurso+'?nocache='+Math.random(), true);
    peticion.send(null);
  }
 
  let muestraContenido = function() {
    let tiempoFinal = new Date();
    let milisegundos = tiempoFinal - tiempoInicial;
    estados.innerHTML += "[" + milisegundos + " mseg.] " + estadosPosibles[peticion.readyState] + "<br/>";
 
    if(peticion.readyState == 4 && peticion.status == 200) {
        contenidos.innerHTML = peticion.responseText.transformaCaracteresEspeciales();
      }
      mostrarCabeceras();
      mostrarCodigoEstado();
    }
  }
 
  let mostrarCabeceras = function() {
    let cabeceras = document.getElementById('cabeceras');
    cabeceras.innerHTML = peticion.getAllResponseHeaders().transformaCaracteresEspeciales();
  }
 
  let mostrarCodigoEstado= function() {
      let codigo = document.getElementById('codigo');
      codigo.innerHTML = peticion.status + "<br/>" + peticion.statusText;        
  }


  String.prototype.transformaCaracteresEspeciales = function() {
    return unescape(escape(this).
                      replace(/%0A/g, '<br/>').
                      replace(/%3C/g, '&lt;').
                      replace(/%3E/g, '&gt;'));
  }

    window.onload = init;



}