{
	let $nombre;
	let $spanNombre;
	let $apellidos;
	let $spanApellidos;
	let $empresa;
	let $spanEmpresa;
	let $fecha1;
	let $fecha2;
	let $enviar;

	let init = ()=>{
		$nombre = $('#nombrePonente');
		$apellidos = $('#apellidosPonente');
		$empresa = $('#empresaPonente');
		$fecha1 = $( "#datepicker");
		$fecha2 = $( "#datepicker2");
		$spanNombre = $('#errNombrePonente');
		$spanApellidos = $('#errApellidosPonente');
		$spanEmpresa = $('#errEmpresaPonente');
		$enviar = $('#submit');
		$( "#dialog-message" ).dialog({ autoOpen: false });
		$fecha1.datepicker({
			dateFormat: 'dd-mm-yy',
			minDate: new Date(2018, 1 - 1, 25),
			maxDate: new Date(2018, 1 - 1, 29),
			firstDay: 1,
			showOtherMonths: true,
			showAnim: "drop"
		});
		$fecha2.datepicker({
			dateFormat: 'dd-mm-yy',
			minDate: new Date(2018, 1 - 1, 25),
			maxDate: new Date(2018, 1 - 1, 29),
			firstDay: 1,
			showOtherMonths: true,
			showAnim: "drop"
		});
		$nombre.blur(function(event){validar($(this),$spanNombre)});
		$empresa.blur(function(event){validar($(this),$spanEmpresa)});
		$apellidos.blur(function(event){validar($(this),$spanApellidos)});
		$enviar.click(comprobarCampos);
	}

	let validar = (event,span)=>{
		(event.val().length > 3) ? span.html("") : span.html("al menos 4 caracteres");
	}
	/**
	* Recorre el formulario y comprueba si pueden guardarse los cambios
	*/
	let comprobarCampos = (event)=>{
		event.preventDefault();
		if(!comprobarErrores())
			confirmar();
	}
	/**
	* Comprueba si hay errores en los campos críticos
	*/
	let comprobarErrores = ()=>{
		let error = false;
		$('form .comprobar').each(function(i){
			$(this).focus();
		});
		$('form span').each(function(i){
			if($(this).html() !="")
				error = true;
		});
		console.log(error)
		return error;
	}
	/**
	* Lanza el cuadro de diálogo confirmando los cambios
	*/
	let confirmar = ()=>{
		 $( "#dialog-message" ).dialog("open");
    	$( "#dialog-message" ).dialog({
    	  modal: true,
    	  buttons: {
    	    Ok: function() {
        	  $( this ).dialog( "close" );
        }
      }
  });
	}
$(init);
}