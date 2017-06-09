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