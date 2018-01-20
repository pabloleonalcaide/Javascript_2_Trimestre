# Ejercicios con jQuery

Ejercicios de jQuery del manual de desarrolloweb.com 

* Demo 1
* Demo 2
* 1.3 Manejando evento en una etiqueta <a>
* 1.4 Añadir y Quitar clases CSS sobre elementos
* 1.5 Mostrar y Ocultar elementos de la página
	
	* _En el manual se utilizaba .attr() que está deprecated por lo que opté por utilizar .prop()_ 
	
* 1.6 Efectos Rápidos
* 1.7 Callbacks de funciones
* 1.8 Uso sencillo de Ajax
* 1.9 Ajax jQuery con mensaje de carga
* 1.10 jQuery CDN o hosting local de las librerías

---
### Funciones con jQuery

* 2.2 Función jQuery
* 2.3 Otros usos de la función $()
	* pasando un elemento
	* pasando html
	* pasando una función
* 2.4 Core/each: each del core de jQuery
* 2.5 Método size() y propiedad length del core de jQuery
	* _En el manual se  utilizaba la función size() que está deprecated desde la versión 1.8 de jQuery, por lo que fue omitida_
* 2.6 Método data() Core jQuery
* 2.7 Consideraciones interesantes de data() y removeData()

---
### Selectores

* 3.2 Selectores en jQuery
* 3.3 Selectores de jerarquía

---
### Métodos de CSS de jQuery

* 5.1 Método css()
* 5.2 Funciones CSS de jQuery para conocer el tamaño y posición de elementos

### Eventos en jQuery

* 6.1 Introducción a los eventos en jQuery
* 6.2 Manejadores de eventos en jQuery (Listado)
* 6.3 Introducción Objeto evento en jQuery
* 6.4 Eventos de ratón en jQuery mouseenter y mouseleave
* 6.5 Eventos de teclado en jQuery (keypress)
* 6.6 Definir eventos con bind() y eliminarlos con unbind()
* 6.7 Eventos definidos con live() en jQuery 
	* _En el manual trataban la función live() pero fue eliminada en la versión 1.9, por lo que el script se incluye comentado_ 
* Ejemplo puntos 4-5-5. Demostración de:
	* Distintas formas de acceder al atributo checked.
	* De tres 'input type="checkbox"' que te deshabilite 2 al seleccionar una de ellas
	* Asociar distintos eventos mediante .on()
	* Indicar los eventos estándares en el DOM
	* Los atributos pageX, pageY, currentTarget, timeStamp... ¿A qué objeto pertenecen? Demuestra su uso
	* Diferencia entre .on(), .live(). bind() y .delegate()
