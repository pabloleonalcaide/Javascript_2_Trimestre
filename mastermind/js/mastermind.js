mastermind =(function() {
	target = [],
	colour = ["azul","verde","naranja","amarillo","blanco","negro","rojo","morado"],

/**
 * init the game by generating a new combination
 */
	init = function(){
		generateTarget();
	}

/**
 * check if user hits the pay
 */
	checkLine = function(array){
	    enTablero = 0;
	    enSuSitio = 0;
		copyArray = target.slice();
   
        copyArray.forEach(function(elementoPredefinido, i) {
          array.forEach(function(elementoUsuario, j) {
             if (elementoUsuario == elementoPredefinido) {
             	if (i == j) {
                	enSuSitio++;
                  	elementoPredefinido = undefined;
                }else{
                	enTablero++;
                	elementoUsuario = undefined;
                }
             }
           });              
         });
        console.log("Blancas: " + enTablero); // mostrarBlancas()
        console.log("Negras: " +   enSuSitio); //mostrarNegras()
	}
/**
 * Shows the combination
 */
	showTarget = function(){
		return target;
	}
/**
 * Generate a new combination
 */
	generateTarget = function(){
		for (let i = 0; i<4; i++) {
			let color = colour[Math.floor(Math.random() * (3 - 0)) + 0];
			target[i] = color;
		}
	}
	/* Public*/
	return{
		init:init,
		checkLine: checkLine,
		showTarget: showTarget
	};
}());