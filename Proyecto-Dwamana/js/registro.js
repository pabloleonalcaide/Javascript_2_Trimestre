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
		$nombre = $("#nombreRegistro");
		$spanNombre = $("#errNombreRegistro");
		$apellidos =$("#apellidosRegistro");
		$spanApellidos = $("#errApellidosRegistro");
		$dni = $("#dniRegistro");
		$spanDni = ("#errDniRegistro");
		$mail = $("#mailRegistro");
		$spanMail = $("#errMailRegistro");
		$procedencia = $("procedenciaRegistro");
		$spanProcedencia = $("errProcedenciaRegistro");
		$submit = $("#submit");

	 	$nombre.blur(validarNombre);
	 	$apellidos.blur(validarApellidos);
	 	$dni.blur(validarDni);
	 	$mail.blur(validarMail);
	 	$procedencia.blur(validarProcedencia);
	 	$submit.click(enviarRegistro);
	 }

	 let validarNombre = ()=>{
	 	($nombre.val().length > 5) ? $spanNombre.html("") : $spanNombre.html("al menos 6 caracteres");
	 }

	 let validarApellidos = ()=>{

	 }

	 let validarDni = ()=>{

	 }

	 let validarMail = ()=>{

	 }

	 let validarProcedencia = ()=>{

	 }
	 let enviarRegistro = ()=>{
	 	
	 }
	 $(init);
}