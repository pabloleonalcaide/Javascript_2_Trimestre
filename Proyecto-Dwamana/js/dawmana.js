{
	let $contenido;
	let init =()=>{
		efectoInicio();
		$contenido = $('#contenido');
		$('.navLink').click(cargaContenido);

	}
	/** Carga el contenido principal según el enlace seleccionado */
	let cargaContenido = (event)=>{
		event.preventDefault();

		$.post("./php/contenido.php",{seccion: event.target.id },function(respuesta){
			$contenido.html(respuesta);
		});
	}
	/** Efecto inicial*/
	let efectoInicio = ()=>{
		$('nav').hide().delay(2200).toggle("slide",{direction: "left"})
		$('#cartel').delay(2000).toggle("slide");
	}

	$(init)
}