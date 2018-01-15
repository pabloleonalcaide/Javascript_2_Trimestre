/**
 * Mastermind
 * @author Pablo Leon Alcaide
 */
mastermind = (function () {
    let colours = ["azul","verde","naranja","amarillo","blanco","negro","rojo","marron"];
    let displaced;
    let inSite;
    let target = [];

/**
 * init the game by generating a new combination
 */
    let init = function () {
        generateTarget();
    }

/**
 * check if user hits the play
 */
    let checkLine = function (array) {
        let copyArray = target.slice();
        displaced = 0;
        inSite = 0;

        array.forEach(function (element, index) {
            if (element == copyArray[index]) {
                copyArray[index] = undefined;
                array[index] = 1;
                inSite++;
            }
        });

        array.forEach(function (element, index) {
            if (copyArray.indexOf(array[index]) != -1) {
                displaced++;
            }
        });

        return {
            copyArray: copyArray,
            array: array,
            inSite: inSite,
            displaced: displaced
        }
    }

/**
 * Shows the combination
 */
    let showTarget = function () {
        console.log(target);
    }
/**
 * Generate a new combination
 */
    let generateTarget = function () {
        target = [];
        for (let i = 0; i < 4; i++) {
            target.push(colours[Math.floor(Math.random() * (7 - 0)) + 0]);
        }
    }

    /* Public*/
    return {
        init: init,
        showTarget: showTarget,
        checkLine: checkLine
    };
})();