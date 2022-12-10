const { checkboxClasses } = require("@mui/material")

let scorenumH=document.getElementById("scorenumH")
current_score_HOME=0


function onepointH(){

    current_score_HOME+=1
    scorenumH.textContent=current_score_HOME

}
function twopointH(){

    current_score_HOME+=2
    scorenumH.textContent=current_score_HOME

}
function threepointH(){

    current_score_HOME+=3
    scorenumH.textContent=current_score_HOME

}

//---------------------------------------------------

let scorenumA=document.getElementById("scorenumA")
current_score_AWAY=0


function onepointA(){

    current_score_AWAY+=1
    scorenumA.textContent=current_score_AWAY

}
function twopointA(){

    current_score_AWAY+=2
    scorenumA.textContent=current_score_AWAY

}
function threepointA(){

    current_score_AWAY+=3
    scorenumA.textContent=current_score_AWAY

}

//---------------------------------------------------
function reset(){

    current_score_HOME=0
    scorenumH.textContent=current_score_HOME
    current_score_AWAY=0
    scorenumA.textContent=current_score_AWAY
    winner.textContent="- - - - - - -"
    leader.textContent="- - - - - - -"


}

//---------------------------------------------------
 let winner=document.getElementById("team")
 let leader=document.getElementById("leading")

 function win(){

    if (current_score_HOME==0 && current_score_AWAY==0){

        winner.textContent="New Match"

    }
    
    else if (current_score_HOME > current_score_AWAY){

        winner.textContent="HOME Team"

    }
    else if (current_score_HOME == current_score_AWAY){
        winner.textContent="Game Draw"
    }
    else{
        winner.textContent="AWAY Team"
    }
 }

 function findlead(){

    if (current_score_HOME==0 && current_score_AWAY==0){

        leader.textContent="- - - - - - - -"

    }

    else if (current_score_HOME > current_score_AWAY){

        leader.textContent="HOME Team"

    }
    else if (current_score_HOME == current_score_AWAY){
        leader.textContent="Game Draw"
    }
    else{
        leader.textContent="AWAY Team"
    }
 }