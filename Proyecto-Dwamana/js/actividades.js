{
	let $dia;
let cargarScript = ()=>{
	$dia= $('#dia');
	 $( "#tabs" ).tabs();
	 $('#tabs >ul >li >a').click(function(){mostrarDatos(cargarDatos($(this).html()))});
	 $('.actividad').click(function(){console.log("hola");});
}

/**
* Lanza la petición al json correspondiente del día que queremos recoger
*/
let cargarDatos =(dia)=>{
	$dia.html(''); //Evito que los datos se vayan añadiendo en lugar de que se alterne el contenido.
	switch(dia){
		case 'Lunes':
			$.getJSON('./js/lunes.json', function(data) {
				return data['actividades'];	
			});
		case 'Martes':
			$.getJSON('./js/martes.json', function(data) {
				return data['actividades'];	
			});
		case 'Miercoles':
			$.getJSON('./js/miercoles.json', function(data) {
				return data['actividades'];	
			});
		case 'Jueves':
			$.getJSON('./js/jueves.json', function(data) {
				return data['actividades'];	
			});
		case 'Viernes':
			$.getJSON('./js/viernes.json', function(data) {
				return data['actividades'];	
			});
	}
	
}
/**
* vuelca cada ponencia de un día concreto
*/
let mostrarDatos = (datos)=>{
	$.each(datos,function(key,value){
		let $ponencia = $('<div class="actividad"></div>').prop('title',value.breve);
		let $imagen = $('<img>').prop('src',value.imagen);
		let $ponente = $('<p></p>').html(value.ponente);
		let $empresa = $('<p></p>').html(value.empresa);
		let $titulo =  $('<p></p>').html(value.titulo);
		let $extenso = $('<p class="extenso"></p>').html(value.extenso).toggle();
		$ponencia.append($imagen,$ponente,$empresa,$titulo,$extenso);
		$dia.append($ponencia);
		mostrarOcultar($ponencia);
	});
}
/**
* muestra u oculta el contenido extra de la ponencia
*/
let mostrarOcultar = ($ponencia)=>{
	$ponencia.click(function(event){
			$(this).children('.extenso').toggle();
		});
}
$(cargarScript);
}