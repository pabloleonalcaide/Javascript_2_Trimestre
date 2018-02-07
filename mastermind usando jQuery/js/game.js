/**
 * @author Pablo Leon Alcaide
 * @verson 1.2
 */
{
    // counter defined as global to use it in different functions
    var counter;
    let linesCount;
    let circlesToFill;
    let circlesToCheck;

    /**
     * Insert a color into the row if there is space
     */
    let insertCircle = function() {
        for (let i = 0; i < circlesToFill.length; i++) {
            //check where is the first empty space
            if (circlesToFill[i].style.backgroundColor == "transparent" || circlesToFill[i].style.backgroundColor == "" ||
                circlesToFill[i].style.backgroundColor == "none") {
                switch (this.id) {
                    case "redCircle":
                        circlesToFill[i].style.backgroundColor = 'red'; break;
                    case "greenCircle":
                        circlesToFill[i].style.backgroundColor = 'green'; break;
                    case "blueCircle":
                        circlesToFill[i].style.backgroundColor = 'blue'; break;
                    case "yellowCircle":
                        circlesToFill[i].style.backgroundColor = 'yellow'; break;
                    case "brownCircle":
                        circlesToFill[i].style.backgroundColor = 'brown'; break;
                    case "orangeCircle":
                        circlesToFill[i].style.backgroundColor = 'orange'; break;
                    case "whiteCircle":
                        circlesToFill[i].style.backgroundColor = 'white'; break;
                    case "blackCircle":
                        circlesToFill[i].style.backgroundColor = 'black'; break;
                }
                $(circlesToFill[i]).on("click", clean);
                break;
            }
        }
        if (counter < 4)
            counter++;
    }
    /**
     * Create a new row 
     */
    let generateNewLine = () => {
        removeCleanEvent();
        let newRow = $('<div id="newRow"></div>');
        $('#playPanel').append(newRow);
        let rowCirclesToFill = $('<div id="circlesToFill"></div>');
        let rowCirclesToCheck = $('<div id="circlesToCheck"></div>');
        newRow.append(rowCirclesToFill);
        newRow.append(rowCirclesToCheck);

        let emptyCircle;
        let checkCircle;
        /* Insert the row of circles to paint */
        for (let i = 0; i < 4; i++) {
            emptyCircle = document.createElement("div");
            emptyCircle.classList.add("circleFill", "circleFill" + linesCount);

            rowCirclesToFill.append(emptyCircle);
        }
        /* Insert the row of check circles */
        for (let i = 0; i < 4; i++) {
            checkCircle = document.createElement("div");
            checkCircle.classList.add("circleCheck", "circleCheck" + linesCount);
            rowCirclesToCheck.append(checkCircle);
        }

        counter = 0;
        circlesToFill = document.getElementsByClassName("circleFill" + linesCount);
        circlesToCheck = document.getElementsByClassName("circleCheck" + linesCount);
        linesCount++;
    }

    let check = () => {
        let arrayToCheck = [];
        let counter2 = 0;
        for (let i = 0; i < circlesToFill.length; i++) {
            switch (circlesToFill[i].style.backgroundColor) {
                case "red":
                    arrayToCheck.push("rojo"); break;
                case "white":
                    arrayToCheck.push("blanco"); break;
                case "black":
                    arrayToCheck.push("negro"); break;
                case "green":
                    arrayToCheck.push("verde"); break;
                case "blue":
                    arrayToCheck.push("azul"); break;
                case "yellow":
                    arrayToCheck.push("amarillo"); break;
                case "brown":
                    arrayToCheck.push("marron"); break;
                case "orange":
                    arrayToCheck.push("naranja"); break;
            }
        }

        if (counter >= 4) {
            rowChecked = mastermind.comprobarCoincidencia(arrayToCheck);
            if (rowChecked.inSite > 0) {
                while (counter2 < rowChecked.inSite) {
                    circlesToCheck[counter2].style = "background-color: black;";
                    counter2++;
                }
            }

            if (counter2 == 4) {
 				$( "#dialog" ).dialog("open");
                    $( "#dialog" ).dialog({
					      resizable: false,
					      height: "auto",
					      width: 400,
					      modal: true,
					      buttons: {
					        "Partida Nueva": function() {
					          $( this ).dialog( "close" );
					          location.reload();
					        },
					        "Salir": function() {
					          $( this ).dialog( "close" );

					        }
					      }
				   });

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
            $('#playPanel').animate({ scrollTop: 0 }, "slow");
        }
    }
    /** clean a painted circle */
    let clean = function() {
        counter--;
        $(this).css("background-color", "transparent");
        this.removeEventListener("click", clean);

    }
    /** restart the game*/
    let reset = () => {
        init();
    }
    /** remove the Clean event in the previous row */
    let removeCleanEvent = function() {
        $('.circleFill').off("click");

    }
    /** start a new game */
    let init = function() {
        mastermind.init();
        mastermind.mostrar();
        circlesToFill = $(".circlesToFill");
        circlesToCheck = $(".circlesToCheck");
        linesCount = 0;
        counter = 0;
 		$( "#dialog" ).dialog({ autoOpen: false });
        $('h1').hide().show( "fold", 2000);
        $('#check').click(check)
        $('#check').click(function(){
        	$(this).effect("shake");
        })
        $('#reset').click(reset);
        $('.circle').on("click", insertCircle); //insert a color event
        $('.circle').click(function(){
        	$(this).effect("bounce");
        })
        generateNewLine();
    }
    $(document).ready(init);
}