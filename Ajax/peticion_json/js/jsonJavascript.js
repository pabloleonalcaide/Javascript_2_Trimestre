{
let peticion;
let descripcion;
let titulo;
let imagen;
let enlace;

let init = ()=>{
	titulo = document.getElementById("title");
	descripcion = document.getElementById("descripcion");
	enlace = document.getElementById("enlace");
	imagen = document.getElementById("image");
	angular = document.getElementById("angular");
	vue = document.getElementById("vue");
	react = document.getElementById("react");
	backbone = document.getElementById("backbone");
	ember = document.getElementById("ember");
	mercury = document.getElementById("mercury");
	aurelia = document.getElementById("aurelia");
	angular.addEventListener("click", enviarPeticion.bind(null,"angular"));
	vue.addEventListener("click", enviarPeticion.bind(null,"vue"));
	react.addEventListener("click", enviarPeticion.bind(null,"react"));
	backbone.addEventListener("click", enviarPeticion.bind(null,"backbone"));
	ember.addEventListener("click", enviarPeticion.bind(null,"ember"));
	mercury.addEventListener("click", enviarPeticion.bind(null,"mercury"));
	aurelia.addEventListener("click", enviarPeticion.bind(null,"aurelia"));
}
/**
* Realiza la petición según el botón seleccionado.
*/
let enviarPeticion = function(framework){
	peticion = new XMLHttpRequest();
	peticion.onreadystatechange = muestraContenido;
	peticion.open("GET","./framework.php?query="+framework,true);
	peticion.send(null);
}

/**
* Muestra el contenido devuelto por la petición ajax
*/
let muestraContenido = ()=>{
	 if(peticion.readyState == 4 && peticion.status == 200){
	 	let miFramework = JSON.parse(peticion.responseText);
	 	descripcion.innerHTML = miFramework.descripcion;
	 	titulo.innerHTML = miFramework.nombre;
	 	enlace.setAttribute("href",miFramework.url);
	 	enlace.innerHTML = "Enlace";
	 	imagen.setAttribute("src",miFramework.imagen);
	 	imagen.setAttribute("width", "200px");
	 	imagen.setAttribute("height", "200px");
	 }
}
window.onload = init
}