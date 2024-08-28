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

const computerChoice = getComputerChoice(array);
console.log(computerChoice);


// ask for user's name
let userName = prompt('Hello newcomer! What is your name?: ');

// ask user for their response
let myChoice = prompt('Hi ' + userName + '! Please enter your response: ');


if ((computerChoice == 'rock' & myChoice == 'paper')|| 
(computerChoice == 'paper' & myChoice == 'scissors') ||
(computerChoice == 'scissors' & myChoice == 'rock')) {
    result = "You win!";
} else if (computerChoice == myChoice) {
    result = "It's a tie!"
}
else {
    result = "Too bad! You lost"
}

console.log(result)

// let the user have an option to play again
let playAgain = prompt('Do you want to go again ' + userName + ' (y/n)?')
if (playAgain == 'y') {
    pass 
}

// loop the game until they quit


// keep track of scores

