// Create prompt asking user if they want to play
// Have them input a choice
// Only acceptable choices are 'rock', 'paper', or 'scissors'
// Have computer spit out a random choice of above 3
// Respond if user won, drawed, or lost
// Ask if they wish to play again


var humanScore = 0
var computerScore = 0

let userName = prompt(`Hello newcomer! What is your name?: `);


// Loops the game until 5 rounds are complete
function playGame(rounds){
    for (let i = 0; i < rounds; i++) {
        let humanChoice = prompt(`Hi ${userName}! Please enter your choice (rock, paper, or scissors). Type q to quit: `);
        if (humanChoice === 'q') {
            alert(`You chose to quit the game.`)
            break; // Exit the loop if user types q
        }
        
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice)
    }
    
    alert(`The final score is: You: ${humanScore}, Computer: ${computerScore}. Thanks for playing!`)
}

// Gets a random choice from computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice;
    
}


// Play the game a single round
function playRound(humanChoice, computerChoice){
    // Loops until a valid choice is made
    while (humanChoice != 'paper' && humanChoice != 'rock' && humanChoice != 'scissors'){
        alert(humanChoice + ' is not an appropriate response.')
        humanChoice = prompt(`${userName}, please type either 'rock', 'paper', 'scissors'`)

        // Checks is user quit
        if (humanChoice === 'q') {
            alert(`You chose to quit the game.`)
            return;
        }
    }

    alert(`You selected ${humanChoice}`)
    alert(`The computer chose ${computerChoice}`)

    // Checks if the user won, lost or drawed
    if ((computerChoice == 'rock' && humanChoice == 'paper')|| 
        (computerChoice == 'paper' && humanChoice == 'scissors') ||
        (computerChoice == 'scissors' && humanChoice == 'rock')) {
            result = "You win!";
            humanScore++; // adds 1 to the previous score
        } else if (computerChoice == humanChoice) {
            result = "It's a tie!"
        }
        else {
            result = `You lose! ${computerChoice} beats ${humanChoice}.`
            computerScore++;
        }

    // Track
    alert(`Current score - You: ${humanScore}, Computer: ${computerScore}`)
}


// You play 5 rounds
playGame(5)
