"use strict";

function getQuantityOfLetters(phrase) {
    var quantityOfLetters = [];
    //todo: change for i into different for loop from ES6
    for (var i = 0; i < phrase.length; i++) {
        var character = phrase[i].toLowerCase();
        if (character.match(/[a-z]/)) {
            var existingChars = quantityOfLetters.filter(item => item.letter === character);
            if (existingChars.length === 0) {
                quantityOfLetters.push({ letter: character, quantity: 1 });
            } else {
                existingChars[0].quantity++;
            }
        }
    }
    return quantityOfLetters;
}