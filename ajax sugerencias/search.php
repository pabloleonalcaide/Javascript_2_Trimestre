<?php
/**
* @author Pablo León Alcaide
*/
$alumnos = array( "nieves borrero", "pablo león alcaide","juan rueda", "soledad cruz", "víctor manuel gómez", 
  "victoriano sevillano Vega","miguel angel gavilán", "jesús mejías", "javier ponferrada", "mario ferrer",
"rafael mellado", "david mateo", "rafael carmona", "daniel gestino notario");

$consulta = $_POST['query'];
$resultado = "";

foreach($alumnos as $alumno){
  if(preg_match("/$consulta/",$alumno)){
    $resultado = $resultado."<br>".$alumno;
  }
}
if($resultado==""){
  echo "Sin coincidencias";
}else{
  echo $resultado;  
}
?>