{
	 let $nombre;
	 let $spanNombre;
	 let $apellidos;
	 let $spanApellidos;
	 let $dni;
	 let $spanDni;
	 let $mail;
	 let $spanMail;
	 let $procedencia;
	 let $spanProcedencia;
	 let $submit;

	 let init = () =>{
		$( "#dialog-message" ).dialog({ autoOpen: false });
		$nombre = $("#nombreRegistro");
		$spanNombre = $("#errNombreRegistro");
		$apellidos = $('#apellidosRegistro');
		$spanApellidos = $("#errApellidosRegistro");
		$dni = $("#dniRegistro");
		$spanDni = $("#errDniRegistro");
		$mail = $("#mailRegistro");
		$spanMail = $("#errMailRegistro");
		$procedencia = $("#procedenciaRegistro");
		$spanProcedencia = $("#errProcedenciaRegistro");
		$submit = $("#submit");

	 	$nombre.bind("blur",function(event){validarNombre($(this))});
	 	$apellidos.bind("blur",function(event){validarApellidos($(this))});;
	 	$dni.bind("blur",function(event){validarDni($(this))});
	 	$mail.bind("blur",function(event){validarMail($(this))});
	 	$procedencia.bind("blur",function(event){validarProcedencia($(this))});
	 	$submit.click(enviarRegistro);
	 }

	 let validarNombre = (event)=>{
	 	(event.val().length > 5) ? $spanNombre.html("") : $spanNombre.html("al menos 6 caracteres");
	 }

	 let validarApellidos = (event)=>{
	 	let pattern = /[a-zA-Z]{3,}\s[a-zA-Z]{3,}/;
		(pattern.test(event.val())) ? $spanApellidos.html("") : $spanApellidos.html("introduce tus 2 apellidos");		
	 }

	 let validarDni = (event)=>{
		let pattern =  /^\d{8}[\s-]?[a-zA-Z]$/ ;
		(pattern.test(event.val())) ? validarLetraDni(event.val()) : $spanDni.html("Formato incorrecto");		
	 }
	 let validarLetraDni = (dni) =>{
	 	let letter = dni.substr(dni.length-1).toLowerCase();
		let number = parseInt(dni.slice(0,8));
		let letters = ['t','r','w','a','g','m','y','f','p','d','x','b','n','j','z','s','q','v','h','l','c','k','e'];
		if(letter!=letters[number%23])
			$spanDni.html("Letra incorrecta");
	 }
	 let validarMail = (event)=>{
		let pattern = /^[_a-z0-9-]+([\._a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
		(pattern.test(event.val())) ? $spanMail.html("") : $spanMail.html("Email inválido");		
	 }

	 let validarProcedencia = ()=>{
	 	($procedencia.val().length > 5) ? $spanProcedencia.html("") : $spanProcedencia.html("al menos 6 caracteres");
	 }
	 let enviarRegistro = (event)=>{
		event.preventDefault();
		validarNombre($nombre);
		validarApellidos($apellidos);
		validarDni($dni);
		validarMail($mail);
		validarProcedencia($procedencia);
		if(validarTodo())
			confirmar();
	 }
	 let validarTodo = ()=>{
	 	let error = false;
		$('#formRegister span').each(function(i){
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
          			$.post("./php/contenido.php",{seccion: 'inicio' },function(respuesta){
						$('#contenido').html(respuesta);
		});
        		}
      		}
	  });
	 }
	 $(init);
}