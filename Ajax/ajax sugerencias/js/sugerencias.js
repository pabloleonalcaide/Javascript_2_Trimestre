{
	/**
	*  When document is ready
	*/
	let init = ()=>{
		$('#recurso').keyup(function(){
			showSuggest($(this).val());
		})
	}

	/**
	* Show the suggest for the text in the input
	*/
	function showSuggest(text){
     $.ajax({
                    type: "POST",
                    url: "search.php",
                    data: "query="+text,
                    dataType: "html",
                    beforeSend: function(){
                    },
                    error: function(){
                          alert("error petición ajax");
                    },
                    success: function(data){                                                    
                          $("#resultado").empty();
                          $("#resultado").append(data);
                                                             
                    }
              });

	}
	$(document).ready(init)

}