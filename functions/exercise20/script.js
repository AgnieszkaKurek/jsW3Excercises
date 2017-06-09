"use strict";

function getStringIdOfRandomChars(specifiedLength) {
    const stringCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomCharacters = "";
    const stringCharactersLenght = stringCharacters.length;
    for (let i = 0; i < specifiedLength; i++) {
        let charater = Math.floor(Math.random() * stringCharactersLenght);
        randomCharacters += stringCharacters[charater];
    }
    return randomCharacters;

}
