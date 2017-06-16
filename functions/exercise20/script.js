"use strict";

function getStringIdOfRandomChars(specifiedLength) {
    const stringCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const stringCharactersLength = stringCharacters.length;
    let randomCharacters = "";
    for (let i = 0; i < specifiedLength; i++) {
        let randomIndex = Math.floor(Math.random() * stringCharactersLength);
        randomCharacters += stringCharacters[randomIndex];
    }
    return randomCharacters;
}

function showRandomCharacters(stringCharacters, randomCharacters) {
    const text = getStringIdOfRandomChars(stringCharacters);
    document.getElementById("text").innerHTML = text;
    let result = getStringIdOfRandomChars(randomCharacters);
    document.getElementById("result").innerHTML = result;
}