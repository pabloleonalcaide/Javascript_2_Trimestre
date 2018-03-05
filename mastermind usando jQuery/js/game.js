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

    let isEmptyCircle = (color)=>{
        if(color == "transparent" || color == "" ||color == "none")
            return true
        return false

    }
    /**
     * Insert a color into the row if there is space
     */
    let insertCircle = function() {
        clickedColor = this.id;
        $circlesToFill.each(function(index,element){
            if (isEmptyCircle(element.style.backgroundColor)) {
                element.style.backgroundColor = clickedColor;
                $(element).on("click", clean);
                return false;
            }
        });
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
        $newRow.append($rowCirclesToFill,$rowCirclesToCheck);

        for (let i = 0; i < 4; i++) {
            $rowCirclesToFill.append($('<div class="circleFill circleFill'+linesCount+'"></div>'));
        }
        for (let i = 0; i < 4; i++) {
            $rowCirclesToCheck.append($('<div class="circleCheck circleCheck'+linesCount+'"></div>'));
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
            let $rowChecked = mastermind.comprobarCoincidencia(generateArray());
            let negras = paintBlack($rowChecked.inSite);

            if (negras == 4)
                openWinnerDialog();
            else{
                paintWhite($rowChecked.displaced,negras);
                generateNewLine();
            }
        }
    }
    let paintBlack=(negras)=>{
        let hits = 0;       
            while (hits < negras) {
                    $circlesToCheck[hits].style = "background-color: black;";
                    hits++;
            }
        return hits;
    }

    let paintWhite=(blancas,negras)=>{
        if (blancas > 0) {
            for (let i = 0; i < blancas; i++) {
                $circlesToCheck[negras].style = "background-color: white;";
                negras++;
            }
        }
    }

    let generateArray =()=>{
        let arrayToCheck = [];     
        $circlesToFill.each(function(index,element){
            arrayToCheck.push(element.style.backgroundColor);
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
                          height: "auto",
                          width: 420,
                          modal: true,
                          buttons: {
                            "Partida Nueva": function() { $(this).dialog( "close" );location.reload();},
                            "Salir": function() {$( this ).dialog( "close" );}
                          }
                   });
    }
    $(init);
}