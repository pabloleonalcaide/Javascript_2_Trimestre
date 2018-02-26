<?php 
	$seccion = $_POST["seccion"];
	
	switch($seccion){
		case 'inicio': readfile('../php/inicio.html');break;
		case 'actividades': readfile('../php/actividades.html');break;
		case 'listado': echo 'listado';break;
		case 'ponente': readfile('../php/ponente.html');break;
		case 'actividad': readfile('../php/actividad.html') ;break;
		case 'registro': readfile('../php/registro.html') ;break;
	}
