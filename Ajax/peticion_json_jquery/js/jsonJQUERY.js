{
let peticion;

let init = ()=>{
	$('ul li a').click(function(event){enviarPeticion(event)})
}
/**
* Envía la petición al controlador, mostrando la respuesta
*/
let enviarPeticion = function(event){
	$.getJSON('./framework.php?query='+event.target.id, function(json) {
	 	$("#descripcion").html(json.descripcion);
	 	$("#title").html(json.nombre);
	 	$('#enlace').html("Enlace").prop("href",json.url);
	 	$('#image').prop("src",json.imagen).css({
	 		'width': '200px',
	 		'height': '200px'
	 	});
			
	});
}

$(init);
}