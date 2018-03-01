{
let registrar;
let anadir;
let init = ()=>{
	 $( "#dialog-message" ).dialog({ autoOpen: false });
	registrar = $('.submitActividad');
	anadir = $('.anadirActividad');
	registrar.click(guardarActividad);
	anadir.click(anadirActividad);
}
/**
* Guarda la actividad en un registro (en este caso de ejemplo no se almacenará) y 
*/
let guardarActividad = (event)=>{
	event.preventDefault();
	$(':input','#formActivity').not(':button, :submit').val(''); //limpiamos los campos
	$('textarea').val('');
	mostrarConfirmacion();
}
/**
* Lanza un mensaje de confirmación
*/
let mostrarConfirmacion = ()=>{
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

/**
* Añade otro formulario de actividad
*/
let anadirActividad = (event)=>{
	event.preventDefault();
	$('.anadirActividad').remove();
	$('.submitActividad').remove();	
	$.get('./php/actividad.html',function(data){
		$('#extra').append(data);
	});
}
$(init)
}