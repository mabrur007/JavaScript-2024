const random = parseInt((Math.random() * 100) + 1);

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

// essential parameters for the game
let p = document.createElement("p");
let prevGuess = [];
let numberOfGuesses = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number more than 1.');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if (numberOfGuesses === 11) {
            displayGuess(guess);
            displayMessage(`Game over! Random number was: ${random}`);
            endGame()
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    //
}

function displayGuess(guess) {
    //
}

function displayMessage(message) {
    //
}

function endGame() {
    //
}

function startGame() {
    //
}