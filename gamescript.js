// TERRY GILL ASSIGNMENT 2.2//
//30 NOV 24//
function rollDice() {
    return Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
}

// Variable to track the current game state
let point = null;
let gameInProgress = false;

// Function to start the game or continue the game based on current state
function playCraps() {
    const messageElement = document.getElementById('message');
    const rollButton = document.getElementById('rollButton');

    
    if (gameInProgress) {
        let roll = rollDice();
        messageElement.innerHTML += `<br>You rolled a ${roll}.`;

        
        if (roll === point) {
            messageElement.innerHTML += "<br>Congratulations! You hit your point and WON!";
            resetGame();
        } else if (roll === 7) {
            messageElement.innerHTML += "<br>You rolled a 7! YOU LOSE!";
            resetGame();
        }
    } else {
       
        let initialRoll = rollDice();
        messageElement.innerHTML = `You rolled a ${initialRoll}.`;

       
        if (initialRoll === 7 || initialRoll === 11) {
            messageElement.innerHTML += "<br>YOU WIN!";
            resetGame();
        } else if (initialRoll === 2 || initialRoll === 3 || initialRoll === 12) {
            messageElement.innerHTML += "<br>YOU LOSE (Craps)";
            resetGame();
        } else {
            // If no win/loss, establish the point
            point = initialRoll;
            messageElement.innerHTML += `<br>Your point is ${point}. KEEP ROLLING to HIT AGAIN`;
            gameInProgress = true; 
            rollButton.innerHTML = "Roll Again"; // Change button text
        }
    }
}

// Function to reset the game after a win or loss
function resetGame() {
    const rollButton = document.getElementById('rollButton');
    const messageElement = document.getElementById('message');

    point = null;
    gameInProgress = false;
    rollButton.innerHTML = "Roll Dice"; // Reset button text
    messageElement.innerHTML += "<br>Press 'Roll Dice' to start a new game.";
}