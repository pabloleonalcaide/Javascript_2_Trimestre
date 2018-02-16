{
let peticion;

let init = ()=>{
	
	$("#angular").click(function(){enviarPeticion("angular")});
	$("#react").click(function(){enviarPeticion("react")});
	$("#vue").click(function(){enviarPeticion("vue")});
	$("#backbone").click(function(){enviarPeticion("backbone")});
	$("#ember").click(function(){enviarPeticion("ember")});
	$("#mercury").click(function(){enviarPeticion("mercury")});
	$("#aurelia").click(function(){enviarPeticion("aurelia")});

}
let enviarPeticion = function(framework){
	$.getJSON('./framework.php?query='+framework, function(json) {
	 	$("#descripcion").html(json.descripcion);
	 	$("#title").html(json.nombre);
	 	$('#enlace').html("Enlace").prop("href",json.url);
	 	$('#image').prop("src",json.imagen).css({
	 		'width': '200px',
	 		'height': '200px'
	 	});
			
	});

}

$().ready(init);
}