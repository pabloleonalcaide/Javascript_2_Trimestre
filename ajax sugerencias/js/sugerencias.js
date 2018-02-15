	let init = ()=>{
		$('#recurso').keyup(function(){
			muestraSugerencias($(this).val());
		})
	}

	/**
	* Show the suggest for the text in the input
	*/
	function muestraSugerencias(consulta){
		if(consulta!= ""){
			$.post("./php/search.php", {query: consulta}, function (mensaje){
				$("#suggest").html(mensaje);
			});
		}else{
			$("#suggest").html("");
		}
	}
	$(document).ready(init)
