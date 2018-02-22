<?php 
	$seccion = $_POST["seccion"];
	
	switch($seccion){
		case 'inicio': echo "<h1 class='sectionHeader'>Bienvenido a la Dawmana 2018!</h1>";break;
		case 'actividades': echo "acts" ;break;
		case 'ponente': echo "pon";break;
		case 'actividad': echo "acts" ;break;
		case 'registro': readfile('../php/registro.php') ;break;
	}
?>