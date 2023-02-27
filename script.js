//To do list
//get computer choice i.e rock, paper or scissors ✅
//function that has two elements the playerSelection and the computerSelection ✅
//Return a string that announces the winner ✅
//playerSelection should be case insensitive ✅

list = ["rock", "paper", "scissors"];

const computerSelection = list [Math.floor(Math.random()*3)];

let userScore = 0;
let compScore = 0;
function playRound (computerChoice, userChoice) {
    switch (computerChoice) {
        case "rock":
            if (userChoice === "rock"){
                userScore = userScore + 1;
                compScore = compScore + 1;
                return "You Draw! Rock doesn't beat Rock 😉";
            }
            else if (userChoice === "paper"){
                userScore = userScore + 5;
                return "You Win! Paper beats Rock 🎉";
            }
            else if (userChoice === "scissors"){
                compScore = compScore + 5;
                return "You loose! Rock beats Scissors 🥲";
            }
        break; 
        case "paper":
            if (userChoice === "rock"){
                compScore = compScore + 5;
                return "You Lose! Rock doesn't beat Paper 🥲";
            }
            else if (userChoice === "paper"){
                userScore = userScore + 1;
                compScore = compScore + 1;
                return "You Draw! Paper doesn't beat paper 😉";
            }
            else if (userChoice === "scissors") {
                userScore = userScore + 5;
                return "You Win! Scissors beats Paper 🎉";
            }
        break; 
        case "scissors":
            if (userChoice === "rock"){
                userScore = userScore + 5;
                return "You Win! Rock beats Scissors 🎉";
            }
            else if (userChoice === "paper"){
                compScore = compScore + 5;
                return "You Loose! Paper doesn't beat Scissors 🥲";
            }
            else if (userChoice === "scissors") {
                userScore = userScore + 1;
                compScore = compScore + 1;
                return "You Draw! Scissors doesn't beat Scissors 😉";
            }
        break; 
    }
}

// write new function called game to call playround ✅
//the game should be played 5 times ✅
//display the results of each round ✅
//report the winner or loser at the end ✅

function game () {
    for (let i=1; i<=5; i++){
        let userInput = window.prompt(`Are you playing ${list[0]}, ${list[1]} or ${list[2]}?`);
        console.log(playRound(computerSelection, userInput.toLowerCase()));
    }
    if (compScore > userScore){
        console.log(`The winner of the game is the Computer with ${compScore}/15`);
    }
    else if (compScore < userScore) {
        console.log(`The winner of the game is You 🤩. Your score: ${userScore}/15`);
    }
    else {
        console.log(`The game is a draw 😁. The score: ${userScore}/15`);
    }
}
game();