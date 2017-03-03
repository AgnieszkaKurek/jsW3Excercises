"use strict";

function randomNumberPrediction(min, max) {
    var randomNumber = Math.ceil(Math.random() * (max - min + 1)) + min;
    var userNumber = prompt("Guess the number between 1 and 10 inclusive");
    if (userNumber === randomNumber) {
        alert("Matched");
    }
    else {
        alert(`Not matched, the number was ${randomNumber}`);
    }
}

randomNumberPrediction(1, 10);
