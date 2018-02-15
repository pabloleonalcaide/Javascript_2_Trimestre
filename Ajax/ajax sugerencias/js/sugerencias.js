	$listSuggest;
	let init = ()=>{
		$listSuggest = $("#suggest");
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
				$listSuggest.html(mensaje);
			});
		}else{
			$listSuggest.html("");
		}
	}
	$().ready(init)
