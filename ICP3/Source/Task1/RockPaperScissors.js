var playerRoll;
var user=0;
var computer=0;
function score(){
    var score_div = document.getElementById("score").innerHTML = user + " - " + computer;
}
setInterval(score, 50);

//code when user clicks rock
function rock()
{
    playerRoll = 1;
    var computerRoll = Math.floor(Math.random() * 3 + 1);
    //draw case
    if (computerRoll === playerRoll) {
        document.getElementById("Result").innerHTML=" The Computer chose rock too, game is draw";
    }
    // rock vs  paper
    else if (playerRoll === 1 && computerRoll === 2) {
        document.getElementById("Result").innerHTML="Computer choose paper , computer wins";
        computer++;
    }
    // rock vs  scissors
    else {
        document.getElementById("Result").innerHTML="computer choose scissors ,  you won";
        user++;
    }
}

//code when user clicks paper
function paper()
{
    document.getElementById("Result").Text="";
    console.log(document.getElementById("Result").innerHTML)
    playerRoll = 2;
    var computerRoll = Math.floor(Math.random() * 3 + 1);
    //draw
    if (computerRoll === playerRoll) {
        document.getElementById("Result").innerHTML= " The Computer chose paper too, game is draw";
    //paper vs  rock
    } else if (playerRoll === 2 && computerRoll === 1) {
        document.getElementById("Result").innerHTML="Computer choose rock , you won";
        user++;
    //paper vs  scissors
    } else {
        document.getElementById("Result").innerHTML="computer choose scissors , computer wins";
        computer++;
    }
}

//code when user clicks scissors
function scissors()
{
    playerRoll = 3;
    var computerRoll = Math.floor(Math.random() * 3 + 1);
    //draw
    document.getElementById("Result").Text="";
    if (computerRoll === playerRoll) {
        document.getElementById("Result").innerHTML=" The Computer chose scissors too, game is draw";
    }
    //scissors vs  paper
    else if (playerRoll === 3 && computerRoll === 2) {
        document.getElementById("Result").innerHTML="Computer choose paper , computer wins";
        computer++;
    } else {
        document.getElementById("Result").innerHTML="computer choose scissors , you won";
        user++;
    }
}

