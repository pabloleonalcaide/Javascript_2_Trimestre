//Mastermind - Pablo Leon Alcaide
mastermind =(function() {
	target = [],
	colour = ["azul","verde","naranja","amarillo","blanco","negro","rojo","morado"],

/**
 * init the game by generating a new combination
 */
	init = function(){
		generateTarget();
		showTarget();
	}

/**
 * check if user hits the pay
 */
	checkLine = function(array){
	    enTablero = 0;
	    enSuSitio = 0;
		copyArray = target.slice();
   		checked = [];
        copyArray.forEach(function(elementoPredefinido, j) {
        	array.forEach(function(elementoUsuario, i) {
             if (elementoUsuario == elementoPredefinido) {
             	if (i == j) {
                	enSuSitio++;
                	copyArray[j] = undefined;
                }else{
 		            enTablero++;
 		            copyArray[j] = undefined;
                }
             }
           });              
         });
        console.log("Blancas: " + enTablero); 
        console.log("Negras: " +   enSuSitio);
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
			let color = colour[Math.floor(Math.random() * (7 - 0)) + 0];
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