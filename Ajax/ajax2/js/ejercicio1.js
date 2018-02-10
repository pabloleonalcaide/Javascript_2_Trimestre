$(document).ready(function() {
        $("#enviar").click(function(){
          let url = $('#recurso').html();
          $.get('index.html',function(data,status,xhr){
            $('#estados').html(xhr.status + ' '+ xhr.statusText);
            $('#contenidos').text(xhr.responseText);
          })
    });
  });