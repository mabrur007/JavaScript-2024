const random = parseInt((Math.random() * 100) + 1);

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#sut");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
