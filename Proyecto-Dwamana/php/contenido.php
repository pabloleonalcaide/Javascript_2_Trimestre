<?php 
	$seccion = $_POST["seccion"];
	
	switch($seccion){
		case 'inicio': readfile('../php/inicio.html');break;
		case 'actividades': echo "acts" ;break;
		case 'ponente': echo "pon";break;
		case 'actividad': readfile('../php/actividad.html') ;break;
		case 'registro': readfile('../php/registro.html') ;break;
	}
