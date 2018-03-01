{
	$.fn.clarify = function() {
    	this.css( "opacity", "0.7" );
	};
	$.fn.solidify = function() {
    	this.hover(function(){$(this).css( "opacity", "1" )});
	};
	let $div;
	let init = ()=>{
		$div = $('#panelCarteles');		
		mostrarCarteles();
		$('.cartel').clarify();
		$('.cartel').solidify();

	}
/*
* muestra todos los carteles
*/
let mostrarCarteles = ()=>{
	//al cargar sólo una ruta de enlaces y no un objeto mas complejo, me parecía más práctica almacenarlos en un array y no otro objeto json
	let listaCarteles = [ 	"./images/carteles/1.jpg",
							"./images/carteles/2.jpg",
							"./images/carteles/3.jpg",
							"./images/carteles/4.jpg",
							"./images/carteles/5.jpg",
							"./images/carteles/6.jpg",
							"./images/carteles/7.jpg",
							"./images/carteles/8.jpg",
							"./images/carteles/9.jpg"
      						
 	];
	listaCarteles.forEach( function(element, index) {
		$div.append($('<img class="cartel">').prop('src',element))
	});
}
$(init);
}