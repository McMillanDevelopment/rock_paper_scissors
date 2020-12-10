
// Variables
let playerSelection = "";
let computerSelection = "";
const buttons = document.getElementsByClassName('button');
let roundCountTotal = 1;
let playerCountTotal = 0;
let computerCountTotal = 0;
// DOM manipulation variables
let result = document.querySelector('#result');
let player = document.querySelector('#player');
let computer = document.querySelector('#computer');
let score = document.querySelector('#score');
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');


// Computer Selection
function computerChoice () {
    let computerOptions = ["Rock", "Paper", "Scissors"];
    computerSelection = computerOptions[Math.floor(Math.random() * 3)].toLowerCase();
};

// PlayerSelection

function playerChoice(pChoice) {

    for(i = 0; i < buttons.length; i++) {
        pChoice = buttons[i].addEventListener('click', function(e) {
            playerSelection = e.target.innerText.toLowerCase();
            computerChoice();
            if(roundCountTotal <= 5) {
                // console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`)
                player.textContent = playerSelection;
                playerScore.textContent = playerCountTotal;
                computer.textContent = computerSelection;
                computerScore.textContent = computerCountTotal;
                score.textContent = roundCountTotal;
                // console.log(singleRound());
                result.textContent = singleRound();
                roundCount();
                if(roundCountTotal === 6) {
                    if(playerCountTotal > computerCountTotal) {
                        result.textContent = "YOU WON THE WHOLE ENTIRE GAME"
                    } else {
                        result.textContent = "YOU LOST THE WHOLE ENTIRE GAME"
                    };
                }
            } else {
                return;
            };
        });
    };
};

// One Round of Play
function singleRound() {
    if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
        let loss = "You Lose!";
        return loss;
    } else if (playerSelection === computerSelection) {
        let tie = "Its a tie";
        return tie;
    } else if ((playerSelection !== "rock") && (playerSelection !== "paper") && (playerSelection !== "scissors")) {
        let typo = "Its a typo, try again";
        return typo;
    } else {
        let win = "You Win!";
        return win;
    };
};

// Five rounds of Play

function roundCount () {
    if (singleRound() === "You Win!" || singleRound() === "You Lose!") {
        roundCountTotal++;
        if (singleRound() === "You Win!") {
            playerCountTotal++;
            console.log(playerCountTotal + "player Count");
        } else if ( singleRound() === "You Lose!") {
            computerCountTotal++;
            console.log(computerCountTotal + "computer count");
        };
    } else {
        console.log("Play another round!");
        return 0;
    };
};




// Win Counter


// Function Calls
playerChoice(playerSelection);
// computerChoice();
// singleRound();
// roundCount();