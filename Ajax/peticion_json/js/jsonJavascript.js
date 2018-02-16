{
let angular;
let peticion;
let descripcion;
let titulo;

let init = ()=>{
	titulo = document.getElementById("title");
	descripcion = document.getElementById("descripcion");
	enlace = document.getElementById("enlace");
	imagen = document.getElementById("image");
	angular = document.getElementById("angular");
	angular.addEventListener("click", enviarPeticion.bind(null,"angular"));
	vue = document.getElementById("vue");
	vue.addEventListener("click", enviarPeticion.bind(null,"vue"));
	react = document.getElementById("react");
	react.addEventListener("click", enviarPeticion.bind(null,"react"));
	backbone = document.getElementById("backbone");
	backbone.addEventListener("click", enviarPeticion.bind(null,"backbone"));
	ember = document.getElementById("ember");
	ember.addEventListener("click", enviarPeticion.bind(null,"ember"));
	mercury = document.getElementById("mercury");
	mercury.addEventListener("click", enviarPeticion.bind(null,"mercury"));
	aurelia = document.getElementById("aurelia");
	aurelia.addEventListener("click", enviarPeticion.bind(null,"aurelia"));
}
let enviarPeticion = function(framework){
	peticion = new XMLHttpRequest();
	peticion.onreadystatechange = muestraContenido;
	peticion.open("GET","./framework.php?query="+framework,true);
	peticion.send(null);
}

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