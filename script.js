//To do list
//get computer choice i.e rock, paper or scissors ✅
//function that has two elements the playerSelection and the computerSelection ✅
//Return a string that announces the winner ✅
//playerSelection should be case insensitive ✅

list = ["rock", "paper", "scissors"];
var computerSelection;
var userInput;
var game;
var userScore = 0;
var compScore = 0;


//create an event listener on click to get the computer selection
const compButton = document.getElementById("computerSelection");
compButton.addEventListener("click", ()=>{
    computerSelection = list [Math.floor(Math.random()*3)];
    const results = document.querySelector(".results");
    if (computerSelection !==""){
        results.innerHTML=`Computer selection: ${computerSelection}`;//Add a div for displaying results
    }
});
// event listener for the user selection
const button = document.getElementById('playerSelection');
button.addEventListener('click', function() {
    userInput = document.getElementById('myInput').value;
  if (userInput !== ""){
    document.getElementById('myInput').value = ''; // Clear the input field
    const results = document.querySelector(".results");
    if (userInput !==""){
        results.innerHTML=`User Choice: ${userInput}`;
    }
  }
});
// event listener for playing the game
const play = document.getElementById("playRound");
play.addEventListener("click", () =>{
    function playRound(computerChoice, userChoice){
        switch (computerChoice) {
            case "rock":
                if (userChoice === "rock"){
                    return "You Draw! Rock doesn't beat Rock 😉";
                }
                else if (userChoice === "paper"){
                    userScore = userScore + 1;
                    return "You Win! Paper beats Rock 🎉";
                }
                else if (userChoice === "scissors"){
                    compScore = compScore + 1;
                    return "You loose! Rock beats Scissors 🥲";
                }
            break; 
            case "paper":
                if (userChoice === "rock"){
                    compScore = compScore + 1;
                    return "You Lose! Rock doesn't beat Paper 🥲";
                }
                else if (userChoice === "paper"){
                    return "You Draw! Paper doesn't beat paper 😉";
                }
                else if (userChoice === "scissors") {
                    userScore = userScore + 1;
                    return "You Win! Scissors beats Paper 🎉";
                }
            break; 
            case "scissors":
                if (userChoice === "rock"){
                    userScore = userScore + 1;
                    return "You Win! Rock beats Scissors 🎉";
                }
                else if (userChoice === "paper"){
                    compScore = compScore + 1;
                    return "You Loose! Paper doesn't beat Scissors 🥲";
                }
                else if (userChoice === "scissors") {
                    return "You Draw! Scissors doesn't beat Scissors 😉";
                }
            break; 
        }
    };
            
    game = playRound(computerSelection, userInput);
    const results = document.querySelector(".results");
    if (game !==""){
        results.innerHTML=game;
    }

            
    if (userScore ===5 || compScore === 5) {
        const results = document.querySelector(".results");
        const winner = document.querySelector(".winner");
        if (userScore === 5){
            results.innerHTML = "User wins 🥳";
            winner.innerHTML=`User got ${userScore}/5`;
        }else{
            results.innerHTML = "User Lost";
            winner.innerHTML=`User got ${userScore}/5`;
        }
    }
});





// write new function called game to call playround ✅
//the game should be played 5 times ✅
//display the results of each round ✅
//report the winner or loser at the end ✅

// function game () {
//     for (let i=1; i<=5; i++){
//         let userInput = window.prompt(`Are you playing ${list[0]}, ${list[1]} or ${list[2]}?`);
//         console.log(playRound(computerSelection, userInput.toLowerCase()));
//     }
//     if (compScore > userScore){
//         console.log(`The winner of the game is the Computer with ${compScore}/15`);
//     }
//     else if (compScore < userScore) {
//         console.log(`The winner of the game is You 🤩. Your score: ${userScore}/15`);
//     }
//     else {
//         console.log(`The game is a draw 😁. The score: ${userScore}/15`);
//     }
// }
// game();