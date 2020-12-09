
// Variables
let playerSelection = "";
let computerSelection = "";
const buttons = document.getElementsByClassName('button');
let singleRoundResult = playerChoice();
let roundCountTotal = 1;

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
            console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`)
            console.log(singleRound());
            console.log(roundCount());
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
        return roundCountTotal++;
    } else {
        console.log("Play another round!");
        return 0;
    };
};




// Win Counter


// Function Calls
// playerChoice(playerSelection);
// computerChoice();
// singleRound();
// roundCount();