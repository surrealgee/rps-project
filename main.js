// 0. Variables

let player = 0;
let computer = 0;
let totalMatches = 0;
const startEl = document.getElementById("start-el");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const resultsEl = document.getElementById("results-el");
const winnerEl = document.getElementById("winner-el");
const playerEl = document.getElementById("player-el");
const computerEl = document.getElementById("computer-el");

// 1.Event Listeners

startEl.addEventListener("click", function () {
    game();
});

rockBtn.addEventListener("click", function () {
    playRound("rock");
});

paperBtn.addEventListener("click", function () {
    playRound("paper");
});

scissorsBtn.addEventListener("click", function () {
    playRound("scissors");
});

// 2. Functions

function game() {
    totalMatches = 0;
    player = 0;
    computer = 0;
    resultsEl.textContent = "The battle has started. Choose your Attack!";
    playerEl.textContent = "";
    computerEl.textContent = "";
    winnerEl.textContent = "";
    checkGame();
}

function hideBtns() {
    rockBtn.classList.add("hidden");
    paperBtn.classList.add("hidden");
    scissorsBtn.classList.add("hidden");
} 

function checkGame() {
    if (player == 5 || computer == 5) {

        hideBtns();

        if (player > computer) {
            winnerEl.textContent = `Player: ${player} vs Computer: ${computer}. Player Wins!.`;
        } else if (computer > player) {
            winnerEl.textContent = `Player: ${player} vs Computer: ${computer}. Computer Wins!.`;
        } else {
            winnerEl.textContent = `Player: ${player} vs Computer: ${computer}. Draw.`;
        }
    } else if (totalMatches > 0) {
        winnerEl.textContent = `Player: ${player} vs Computer: ${computer}.`
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    playerEl.textContent = playerSelection;
    computerEl.textContent = computerSelection;

    if (playerSelection === computerSelection) {
        resultsEl.textContent = "Draw.";
        totalMatches++;
    } else if (playerSelection === "rock"
        && computerSelection === "scissors"
        || playerSelection === "paper"
        && computerSelection === "rock"
        || playerSelection === "scissors"
        && computerSelection === "paper") {
        player++;
        totalMatches++;
        resultsEl.textContent = `You've Won! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computer++;
        totalMatches++
        resultsEl.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
    checkGame();
}

function getComputerChoice() {
    let chooser = Math.floor(Math.random() * 99) + 1;

    if (chooser <= 33) {
        return "rock";
    } else if (chooser <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}