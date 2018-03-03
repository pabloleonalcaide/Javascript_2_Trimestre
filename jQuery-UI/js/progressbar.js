$( function() {
    let barraProgreso = $( "#progreso" ),
    progressLabel = $( ".progress-label" );
 
    barraProgreso.progressbar({
      value: false,
      change: function() {
        progressLabel.text( barraProgreso.progressbar( "value" ) + "%" );
      },
      complete: function() {
        $('body').css("background-color","lightblue");
        progressLabel.text( "Fin del ejemplo!" );
      }
    });
 
    function progress() {
      let val = barraProgreso.progressbar( "value" ) || 0;
      barraProgreso.progressbar( "value", val + 2 );
      if ( val < 99 ) {
        setTimeout( progress, 80 );
      }
    }
    setTimeout( progress, 2000 );
  } );
