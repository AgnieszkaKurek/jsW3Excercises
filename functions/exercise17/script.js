"use strict";

function getQuantityOfLetters(phrase) {
    var quantityOfLetters = [];
    for (let character of phrase ) {
     character = character.toLowerCase();
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
