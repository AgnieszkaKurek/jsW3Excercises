"use strict";

function findFirstNotRepeatedCharacter(phrase) {
    let firstNotRepeatedCharacter = "";
    for (let i = 0; i < phrase.length; i++) {
        let char = phrase[i];
        if (phrase.indexOf(char) === phrase.lastIndexOf(char)) {
            firstNotRepeatedCharacter = char;
            return firstNotRepeatedCharacter;
        }
    }
    return firstNotRepeatedCharacter;
}