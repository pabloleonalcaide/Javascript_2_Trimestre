{
	let $nombre;
	let $spanNombre;
	let $apellidos;
	let $spanApellidos;
	let $empresa;
	let $spanEmpresa;
	let $fecha;
	let $enviar;

	let init = ()=>{
		$nombre = $('#nombrePonente');
		$apellidos = $('#apellidosPonente');
		$empresa = $('#empresaPonente');
		$fecha = $( "#datepicker" );
		$spanNombre = $('#errNombrePonente');
		$spanApellidos = $('#errApellidosPonente');
		$spanEmpresa = $('#errEmpresaPonente');
		$enviar = $('#submit');
		$( "#dialog-message" ).dialog({ autoOpen: false });
		$fecha.datepicker({
			dateFormat: 'dd-mm-yy',
			minDate: new Date(2018, 1 - 1, 25),
			maxDate: new Date(2018, 1 - 1, 29),
			showAnim: "drop"
		});
		$nombre.bind("blur",function(event){validar($(this),$spanNombre)});
		$empresa.bind("blur",function(event){validar($(this),$spanEmpresa)});
		$apellidos.bind("blur",function(event){validar($(this),$spanApellidos)});
		$enviar.click(comprobarCampos);
	}

	let validar = (event,span)=>{
		(event.val().length > 3) ? span.html("") : span.html("al menos 4 caracteres");
	}
	let comprobarCampos = (event)=>{
		event.preventDefault();
		if(!comprobarErrores())
			confirmar();
	}
	let comprobarErrores = ()=>{
		let error = false;
		$('form .comprobar').each(function(i){
			$(this).focus();
		});
		$('form span').each(function(i){
			if($(this).val() !="")
				error = true;
		});
		return error;
	}
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