	/**
	* @author Pablo Leon Alcaide
	*/
	$suggestList = $('#suggest');
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
			//url to request, query, doSomething
			$.post("./php/search.php", {query: consulta}, function (mensaje){
				$suggestList.html(mensaje);

			});

		}else{
			$suggestList.html("");
		}
	}
	$(document).ready(init)
