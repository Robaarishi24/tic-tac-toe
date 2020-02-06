//select all squares and store it in variables 
let squares = document.querySelectorAll(".square");
let move = 0; // count for move made it in the game 
let turn = document.getElementById("msge"); //massege turn 


function startGame() {
    //to put sound when you click on the squares to put X or O
    let sound_x = new Audio('sounds/x.mp3');
    let sound_o = new Audio('sounds/o.mp3');
   
    //can't select same square twice
    if (this.innerText === "") {
        move++;
        if (move % 2 === 0) {
             // set X or O into the square
            sound_o.play();
            this.innerText = "O";
            //change the massege turn 
            turn.innerText = "X Turn";
            checkWinner();

        } else {
            sound_x.play();
            this.innerText = "X";
            turn.innerText = "O Turn";
            checkWinner();
        }
    }

};


//add event click
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", startGame);
}


//To selesct the winner and change the background
function selectWinner(z1, z2, z3) {
    z1.classList += " win";
    z2.classList += " win";
    z3.classList += " win";
    // when the player win play a sound 
    let winSound = new Audio('sounds/win.mp3');
    winSound.play();
    stop(); // after select end the game 
}


//check for the winner
let zone = ['', '', '', '', '', '', '', '', ''];
const sqr = ['', '', '', '', '', '', '', '', ''];

function checkWinner() {
    for (let i = 0; i < zone.length; i++) {
        zone[i] = document.getElementById('sqr' + i).innerText 
        sqr[i] = document.getElementById('sqr' + i); 
    }
    //check the 3 row possibilities
    if (zone[0] == zone[1] && zone[1] == zone[2] && zone[0] != "") {
        turn.innerHTML = 'Player ' + zone[0] + ' Win!!';
        selectWinner(sqr[0], sqr[1], sqr[2]);

    } else if (zone[3] == zone[4] && zone[4] == zone[5] && zone[3] != "") {
        turn.innerHTML = 'Player ' + zone[3] + ' Win!!';
        selectWinner(sqr[3], sqr[4], sqr[5]);
    } else if (zone[6] == zone[7] && zone[7] == zone[8] && zone[6] != "") {
        turn.innerHTML = 'Player ' + zone[6] + ' Win!!';
        selectWinner(sqr[6], sqr[7], sqr[8]);
    }
    //check the 3 column possibilities
    else if (zone[0] == zone[3] && zone[3] == zone[6] && zone[0] != "") {
        turn.innerHTML = 'Player ' + zone[0] + ' Win!!';
        selectWinner(sqr[0], sqr[3], sqr[6]);
    } else if (zone[1] == zone[4] && zone[4] == zone[7] && zone[1] != "") {
        turn.innerHTML = 'Player ' + zone[1] + ' Win!!';
        selectWinner(sqr[4], sqr[7], sqr[1]);
    } else if (zone[2] == zone[5] && zone[5] == zone[8] && zone[2] != "") {
        turn.innerHTML = 'Player ' + zone[2] + ' Win!!';
        selectWinner(sqr[2], sqr[5], sqr[8]);
    }
    //check the diagonally possibilities
    else if (zone[0] == zone[4] && zone[4] == zone[8] && zone[0] != "") {
        turn.innerHTML = 'Player ' + zone[0] + ' Win!!';
        selectWinner(sqr[0], sqr[4], sqr[8]);
    } else if (zone[2] == zone[4] && zone[4] == zone[6] && zone[2] != "") {
        turn.innerHTML = 'Player ' + zone[2] + ' Win!!';
        selectWinner(sqr[2], sqr[4], sqr[6]);
    }
    //For Draw !!
    else if (move >= 9) {
        let drawSound = new Audio('sounds/draw.mp3');
        turn.innerText = "Draw !!";
        drawSound.play();
    }
}



//stop the game 
let stop = function () {
    for (let i = 0; i < squares.length; i++) {
        squares[i].removeEventListener("click", startGame); //remove the event for start game
    }
}



//To reset The the game and start Again
let playAgain = document.querySelector('.reset');

function reset() {
    //to change sound for a click
    let playSound = new Audio('sounds/play.mp3');
    playSound.play();

    for (let i = 0; i < zone.length; i++) {
        sqr[i].classList.remove("win"); // remove a class 
        sqr[i].innerText = ''; // clear the board 
    }
    turn.innerText = 'X Turn';
    move = 0;
    //set event again to start a new game 
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", startGame);
    }
}
playAgain.addEventListener("click", reset);