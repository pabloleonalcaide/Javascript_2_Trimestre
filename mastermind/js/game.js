/**
 * @author Pablo Leon Alcaide
 * @verson 1.2
 */
{
    let colores;
    let circlesToFill;
    let counter;
    let linesCount;
    let checkButton;
    let circlesToCheck;
    let playPanel;
    let popUpWinner;
    let exitButton;
    let resetButton;

    /**
     * Insert a color into the row if there is space
     */
    let insertCircle = function () {
        for (let i = 0; i < circlesToFill.length; i++) { 
            //check where is the first empty space

            if (circlesToFill[i].style.backgroundColor == "transparent" || circlesToFill[i].style.backgroundColor == "" || 
                circlesToFill[i].style.backgroundColor == "none" ) {
            switch (this.id) {
                case "redCircle":
                    circlesToFill[i].style = "background-color: red;"; break;
                case "greenCircle":
                    circlesToFill[i].style = "background-color: green;"; break;
                case "blueCircle":
                    circlesToFill[i].style = "background-color: blue;"; break;
                case "yellowCircle":
                    circlesToFill[i].style = "background-color: yellow;"; break;
                case "brownCircle":
                    circlesToFill[i].style = "background-color: brown;"; break;
                case "orangeCircle":
                    circlesToFill[i].style = "background-color: orange;"; break;
                case "whiteCircle":
                    circlesToFill[i].style = "background-color: white;"; break;
                case "blackCircle":
                    circlesToFill[i].style = "background-color: black;"; break;
            }
             circlesToFill[i].addEventListener("click", clean);
             break;
        }
        counter++;
        }
    }
    /**
     * Create a new row 
     */
    let generateNewLine = ()=> {
        removeCleanEvent();
        let newRow = document.createElement("div");
        newRow.id = "newRow";
        let rowCirclesToFill = document.createElement("div");
        rowCirclesToFill.id = "circlesToFill";
        let rowCirclesToCheck = document.createElement("div");
        rowCirclesToCheck.id = "circlesToCheck";

        let emptyCircle;
        let checkCircle;
        /* Insert the row of circles to paint */
        for (let i = 0; i < 4; i++) {
            emptyCircle = document.createElement("div");
            emptyCircle.classList.add("circleFill");
            emptyCircle.classList.add("circleFill" + linesCount);

            rowCirclesToFill.appendChild(emptyCircle);
        }
        /* Insert the row of check circles */
        for (let i = 0; i < 4; i++) {
            checkCircle = document.createElement("div");
            checkCircle.classList.add("circleCheck");
            checkCircle.classList.add("circleCheck" + linesCount);
            rowCirclesToCheck.appendChild(checkCircle);
        }

        newRow.appendChild(rowCirclesToFill);
        newRow.appendChild(rowCirclesToCheck);
        playPanel.appendChild(newRow);

        counter = 0;
        circlesToFill = document.getElementsByClassName("circleFill" + linesCount);
        circlesToCheck = document.getElementsByClassName("circleCheck" + linesCount);
        linesCount++;
    }

    let check =  ()=> {
        let arrayToCheck = [];
        let counter2 = 0;
        for (let i = 0; i < circlesToFill.length; i++) {
            if (circlesToFill[i].style.backgroundColor == "red") {
                arrayToCheck.push("rojo");
            } else if (circlesToFill[i].style.backgroundColor == "white") {
                arrayToCheck.push("blanco");
            } else if (circlesToFill[i].style.backgroundColor == "black") {
                arrayToCheck.push("negro");
            } else if (circlesToFill[i].style.backgroundColor == "green") {
                arrayToCheck.push("verde");
            } else if (circlesToFill[i].style.backgroundColor == "blue") {
                arrayToCheck.push("azul");
            } else if (circlesToFill[i].style.backgroundColor == "yellow") {
                arrayToCheck.push("amarillo");
            } else if (circlesToFill[i].style.backgroundColor == "brown") {
                arrayToCheck.push("marron");
            } else if (circlesToFill[i].style.backgroundColor == "orange") {
                arrayToCheck.push("naranja");
            }

        }

        if (counter >= 4) {
            rowChecked = mastermind.checkLine(arrayToCheck);
            if (rowChecked.inSite > 0) {
                while (counter2 < rowChecked.inSite) {
                    circlesToCheck[counter2].style = "background-color: black;";
                    counter2++;
                }
            }

            if (counter2 == 4) {
                popUpWinner.style = "display: block;";
            }

            if (rowChecked.displaced > 0) {
                for (let i = 0; i < rowChecked.displaced; i++) {
                    circlesToCheck[counter2].style = "background-color: white;";
                    counter2++;
                }
                counter2 = 0;
            }
            //generate a new line and redirect the window    
            generateNewLine();
            playPanel.scrollTo(0, 0)
        }
    }
    /** clean a painted circle */
    let clean = function () {
        this.style = "background-color: transparent;";
        this.removeEventListener("click", clean);
    }
    /** restart the game*/
    let reset = ()=> {
        init();
        popUpWinner.style = "display: none;"
    }
    /** remove the Clean event in the previous row */
     let removeCleanEvent = function () {
        for (let i = 0; i < circlesToFill.length; i++) {
            circlesToFill[i].removeEventListener("click", clean);
        }
}
    /** start a new game */
    let init =  ()=> {
        mastermind.init();
        mastermind.showTarget();
        playPanel = document.getElementById("playPanel");
        popUpWinner = document.getElementById("winPanel");
        colores = document.getElementsByClassName("circle");
        circlesToFill = document.getElementsByClassName("circleToFill");
        circlesToCheck = document.getElementsByClassName("circleToCheck");
        checkButton = document.getElementById("check");
        resetButton = document.getElementById("reset");
        linesCount = 0;
        counter = 0;

        checkButton.addEventListener("click", check);
        resetButton.addEventListener("click", reset);
    

        //for each colour option
        for (let i = 0; i < colores.length; i++) {
            colores[i].addEventListener("click", insertCircle);
        }
        generateNewLine();
    }

    window.onload = init;
}