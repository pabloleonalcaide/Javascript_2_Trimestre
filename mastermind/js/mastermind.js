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
	}

}