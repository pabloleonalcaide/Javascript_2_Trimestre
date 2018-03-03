{
let peticion;
let descripcion;
let titulo;
let enlace;
let imagen;
let secciones;
let init = ()=>{
	titulo = document.getElementById("title");
	descripcion = document.getElementById("descripcion");
	enlace = document.getElementById("enlace");
	imagen = document.getElementById("image");
	secciones = document.getElementsByClassName("link");
	for(let i= 0; i < secciones.length; i++){
		secciones[i].addEventListener("click",enviarPeticion);
	}

}
/**
* Envía la petición del contenido al servidor
*/
let enviarPeticion = function(event){
	peticion = new XMLHttpRequest();
	peticion.onreadystatechange = muestraContenido;
	peticion.open("GET","./framework.php?query="+event.target.id,true);
	peticion.send(null);
}
/**
* Muestra el contenido recibido tras realizar la petición al servidor
*/
let muestraContenido = ()=>{
	 if(peticion.readyState == 4 && peticion.status == 200){
	 	let contenido = JSON.parse(peticion.responseText);
	 	descripcion.innerHTML = contenido.descripcion;
	 	titulo.innerHTML = contenido.nombre;
	 	enlace.setAttribute("href",contenido.url);
	 	enlace.innerHTML = "Enlace";
	 	imagen.setAttribute("src",contenido.imagen);
	 	imagen.setAttribute("width", "200px");
	 	imagen.setAttribute("height", "200px");
	 }
}
window.onload = init
}