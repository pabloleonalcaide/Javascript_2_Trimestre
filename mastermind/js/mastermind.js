mastermind = {
	target : [],
	colour : ["azul","verde","naranja","amarillo"],

/**
 * init the game by generating a new combination
 */
	init : function(){
		mastermind.generateTarget();
	},
/**
 * check if user hits the pay
 */
	checkLine : function(array){
		copyTarget = mastermind.target.slice();
		iguales = 0;
		for(let i=0;i<copyTarget.length;i++){
			for(let j=0;j<copyTarget.length;j++){
				if(copyTarget[i]==array[j])
					iguales++;
			}
		}
		return iguales + "coincidencias";
	},
/**
 * Shows the combination
 */
	showTarget : function(){
		return mastermind.target;
	},
/**
 * Generate a new combination
 */
	generateTarget : function(){
		for (let i = 0; i<4; i++) {
			let color = mastermind.colour[Math.floor(Math.random() * (3 - 0)) + 0];
			mastermind.target[i] = color;
		}
	},
	
};