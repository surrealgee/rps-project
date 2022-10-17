let player = 0;
let computer = 0;

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

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Choose!", );
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection); 

    if (playerSelection === computerSelection) {
        console.log("Draw");
    } else if (playerSelection === "rock" 
    && computerSelection === "scissors" 
    || playerSelection === "paper" 
    && computerSelection === "rock"
    || playerSelection === "scissors" 
    && computerSelection === "paper" ) {
        player++;
        console.log(`You've Won! ${playerSelection} beats ${computerSelection}`);        
    } else {
        computer++;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
}

function game() {
    player = 0;
    computer = 0;

    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(`Player: ${player}, Computer: ${computer}.`);
    }

    if (player > computer) {
        return "Player Wins";
    } else if (computer > player) {
        return "Computer Wins";
    } else {
        return "Draw";
    }
}