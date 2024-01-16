let random = parseInt((Math.random() * 100) + 1);

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
        if (numberOfGuesses === 3) {
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
    if (guess === random) {
        displayMessage('You guessed it right!');
        endGame();
    } else if (guess < random) {
        displayMessage('Given number is low');
    } else if (guess > random) {
        displayMessage('Given number is high');
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numberOfGuesses++;
    remaining.innerHTML = `${4 - numberOfGuesses}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    p.style.border = '2px solid green'
    p.style.backgroundColor = '#161616'
    p.onmouseover = function () {
        this.style.cursor = 'pointer'
    }
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        random = parseInt((Math.random() * 100) + 1);
        prevGuess = []
        numberOfGuesses = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${4 - numberOfGuesses}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        displayMessage('')
        playGame = true;

    })
}