{
	let callback = () =>{
		console.log($('.ponente'));
	}
	let $lista;
	let $ponentes;
	let init = ()=>{
		$lista = $('#lista');
		lightbox.option({
	      'resizeDuration': 200,
	      'wrapAround': true,
	      'albumLabel': "Ponentes"
	    })
		cargarListadoPonentes(callback);
	}
	/**
	* Carga toda la lista de ponentes
	*/
	let cargarListadoPonentes = ()=>{
		mostrarDia('Lunes');		
		mostrarDia('Martes');
		mostrarDia('Miercoles');
		mostrarDia('Jueves');
		mostrarDia('Viernes');
	}
	
	/**
	* Muestra los ponentes de todos los días
	*/
	let mostrarPonentes = (datos)=>{

		$.each(datos,function(key,value){
		let $div = $('<div class="ponente"></div>')
		let $imagen = $('<img>').prop('src',value.imagen);
		let $enlace =  $('<a data-lightbox="roadtrip"></a>').prop("href",value.imagen);
		$enlace.append($imagen);
		let $ponente = $('<p></p>').html(value.ponente);
		$div.append($enlace,$ponente);
		$lista.append($div);
		});
	}

	let mostrarDia =(dia)=>{
		switch(dia){
			case 'Lunes':
				$.getJSON('./js/lunes.json', function(data) {
					mostrarPonentes(data['actividades']);	
				}).done(function() {
   					 $('.ponente').first().remove();  //Eliminamos la tarjeta duplicada de Nacho
  				});break;
			case 'Martes':
				$.getJSON('./js/martes.json', function(data) {
					mostrarPonentes(data['actividades']);	
				});break;
			case 'Miercoles':
				$.getJSON('./js/miercoles.json', function(data) {
					mostrarPonentes(data['actividades']);	
				});break;
			case 'Jueves':
				$.getJSON('./js/jueves.json', function(data) {
					mostrarPonentes(data['actividades']);	
				});break;
			case 'Viernes':
				$.getJSON('./js/viernes.json', function(data) {
					mostrarPonentes(data['actividades']);	
				})
				;break;
		}
	}
	$(init);
}