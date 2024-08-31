

let endGame = false;
let username;


while (username === "" || username === null) {
    username = window.prompt(`Enter your name`);
}

console.log(`Hello ${username}`); // Use backticks (`) for template literals