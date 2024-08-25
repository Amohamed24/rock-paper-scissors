// Create prompt asking user if they want to play
// Have them input a choice
// Only acceptable choices are 'rock', 'paper', or 'scissors'
// Have computer spit out a random choice of above 3
// Respond if user won, drawed, or lost
// Ask if they wish to play again


function getComputerChoice(arr) {
    const randomChoice = Math.floor(Math.random() * arr.length);
    // get random computer choice
    const item = arr[randomChoice];
    return item;
}

const array = ['rock', 'paper', 'scissors'];

const result = getComputerChoice(array);
console.log(result);


// ask for user's name
let userName = prompt('Hello newcomer! What is your name?: ');

// ask user for their response
let myChoice = prompt('Hi ' + userName + '! Please enter your response: ');


if ((getComputerChoice == 'rock' & myChoice == 'paper')|| 
(getComputerChoice == 'paper' & myChoice == 'scissors') ||
(getComputerChoice == 'scissors' & myChoice == 'rock')) {
    outcome = "You win!";
} else if (getComputerChoice == myChoice) {
    outcome = "It's a tie!"
}
else {
    outcome = "Too bad! You lost"
}

console.log(outcome)


