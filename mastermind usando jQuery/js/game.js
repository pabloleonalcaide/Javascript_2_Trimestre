/**
 * @author Pablo Leon Alcaide
 * @verson 1.3
 */
{
    let counter;
    let linesCount;
    let $circlesToFill;
    let $circlesToCheck;

    /** 
    * start a new game
    * @see mastermind.js
    */
    let init = function() {
        mastermind.init();
        mastermind.mostrar();
        $circlesToFill = $(".circlesToFill");
        $circlesToCheck = $(".circlesToCheck");
        linesCount = 0; 
        counter = 0;
 		$( "#dialog" ).dialog({ autoOpen: false });
        $('h1').hide().show( "fold", 2000);
        $('#check').click(function(){
        	checkRow();
            $(this).effect("shake");
        })
        $('#reset').click(init);
        $('.circle').on("click", insertCircle);
        $('.circle').click(function(){ $(this).effect("bounce");})
        generateNewLine();
    }

    let isEmptyCircle = (circle)=>{
        if(circle.style.backgroundColor == "transparent" || circle.style.backgroundColor == "" ||circle.style.backgroundColor == "none")
            return true
        return false
    }
    /**
     * Insert a color into the row if there is space
     */
    let insertCircle = function() {
        clickedColor = this.id;
        $circlesToFill.each(function(index,element){
            if (isEmptyCircle(element)) {
                element.style.backgroundColor = clickedColor;
                $(element).on("click", clean);
                return false;
            }
        })
        if (counter < 4)
            counter++;
    }
    /**
     * Create a new row 
     */
    let generateNewLine = () => {
        $('.circleFill').off("click");
        let $newRow = $('<div id="$newRow"></div>');
        $('#playPanel').append($newRow);
        let $rowCirclesToFill = $('<div id="circlesToFill"></div>');
        let $rowCirclesToCheck = $('<div id="circlesToCheck"></div>');
        $newRow.append($rowCirclesToFill);
        $newRow.append($rowCirclesToCheck);

        let $emptyCircle;
        let $checkCircle;
        /* Insert the row of circles to paint */
        for (let i = 0; i < 4; i++) {
            $emptyCircle = $('<div class="circleFill circleFill'+linesCount+'"></div>');
            $rowCirclesToFill.append($emptyCircle);
        }

        /* Insert the row of check circles */
        for (let i = 0; i < 4; i++) {
            $checkCircle = $('<div class="circleCheck circleCheck'+linesCount+'"></div>');
            $rowCirclesToCheck.append($checkCircle);
        }

        counter = 0;
        $circlesToFill = $(".circleFill" + linesCount);
        $circlesToCheck = $(".circleCheck" + linesCount);
        linesCount++;
        $('#playPanel').animate({ scrollTop: 0 }, "slow");
    }
    /**
    * check the row
    */
    let checkRow = () => {
        if (counter >= 4) {
            let hits = 0;       
            $rowChecked = mastermind.comprobarCoincidencia(generateArray());
            if ($rowChecked.inSite > 0) {
                while (hits < $rowChecked.inSite) {
                    $circlesToCheck[hits].style = "background-color: black;";
                    hits++;
                }
            }

            if (hits == 4)
                openWinnerDialog();
            else{
	            if ($rowChecked.displaced > 0) {
	                for (let i = 0; i < $rowChecked.displaced; i++) {
	                    $circlesToCheck[hits].style = "background-color: white;";
	                    hits++;
	                }
	                hits = 0;
	            }
                generateNewLine();
            }
        }
    }

    let generateArray =()=>{
        let arrayToCheck = [];     
        $circlesToFill.each(function(index,element){
            switch (element.style.backgroundColor) {
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
        })
        return arrayToCheck;
    }

    /** clean a painted circle */
    let clean = function() {
        counter--;
        $(this).css("background-color", "transparent").off("click", clean);
    }
    let openWinnerDialog = ()=>{
        $( "#dialog" ).dialog("open");
                    $( "#dialog" ).dialog({
                          resizable: false,
                          height: "auto",
                          width: 420,
                          modal: true,
                          buttons: {
                            "Partida Nueva": function() { $(this).dialog( "close" );location.reload();},
                            "Salir": function() {$( this ).dialog( "close" );}
                          }
                   });
    }
    $().ready(init);
}