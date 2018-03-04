{
	let patternLength = /[^ \s]{6,}/
	let patternPasswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
	let $userSpan;
	let $passwdSpan;
	let $userInput;
	let $passInput
	let init = () =>{
		$userSpan = $('#errorUser')
		$passwdSpan = $('#errorPswd')
		$userInput = $('#user');
		$passInput = $('#password');
		$userInput.blur(validarInput);
		$passInput.blur(validarInput);
		$('button').click(validarCampos);
	}
	/**
	* comprueba que el input de usuario cumple con el patrón (6 caracteres sin espacios)
	*/
	let validarInput = (event) =>{
		switch (event.target.id) {
			case "user":
				patternLength.test($(event.target).val()) ? $userSpan.html("") : $userSpan.css("color","red").html("Al menos 6 caracteres");
				break;
			default:
				patternPasswd.test($(event.target).val()) ? $passwdSpan.html("") : $passwdSpan.css("color","red").html("Contraseña débil");			
				break;
		}
	}

	/**
	* Validación del login
	*/
	let validarCampos = (event)=>{
		event.preventDefault();
		$userInput.blur();
		$passInput.blur();
		comprobarUsuario();
	}
	/**
	* Comprueba que usuario y contraseña coincidan con los registrados en la base de datos
	* En nuestro caso, al no utilizar una base de datos, enfrentamos los inputs con un objeto json
	*/
	let comprobarUsuario = () =>{
		let validado = false;
		$.getJSON('./js/usuarios.json',function(data) {	
			$.each(data['usuarios'],function(key,value){
				if((value['usuario'] == $userInput.val()) && value['password'] == $passInput.val()){
					validado = true;
					}
					validado ? window.location ="./index.html" : $passwdSpan.css("color","red").html("Usuario y/o contraseña incorrectos");	
		})
		})
			
	}
	$(init);
}