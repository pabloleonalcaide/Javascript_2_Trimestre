<?php 
	$seccion = $_POST["seccion"];
	
	//Controlador de las páginas
	switch($seccion){
		case 'inicio': readfile('../php/inicio.html');break;
		case 'actividades': readfile('../php/actividades.html');break;
		case 'listado': readfile('../php/listado.html');break;
		case 'ponente': readfile('../php/ponente.html');break;
		case 'actividad': readfile('../php/actividad.html') ;break;
		case 'registro': readfile('../php/registro.html') ;break;
		case 'carteles': readfile('../php/carteles.html') ;break;
	}
