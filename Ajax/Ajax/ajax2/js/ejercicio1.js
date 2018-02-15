$(document).ready(function() {
        $("#enviar").click(function(){
          let url = $('#recurso').val();
          $.get(url,function(data,status,xhr){
            $('#estados').html(xhr.status + ' '+ xhr.statusText);
            $('#contenidos').text(xhr.responseText);
          }).fail(function(){
            $('#contenidos').html('Recurso no encontrado');
          })
    });
  });