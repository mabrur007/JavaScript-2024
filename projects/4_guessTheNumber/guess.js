const random = parseInt((Math.random() * 100) + 1);

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#sut");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

// essential parameters for the game
let p = document.createElement("p");
let prevGuess = [];
let numberOfGuesses = 1;
let playGame = true;

function validateGuess(guess) {
    //
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

function startGame