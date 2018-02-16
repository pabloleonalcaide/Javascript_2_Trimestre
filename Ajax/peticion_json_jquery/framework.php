<?php
$query = $_GET['query'];

$datosJson = file_get_contents("framework.json");
$listado = json_decode($datosJson,true);
$resultado;	
foreach ($listado as $elemento){
	foreach ($elemento as $algo){
		if($algo["nombre"] == $query){
			$resultado = json_encode($algo);
		}

	}	
}
echo $resultado;
?>