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

function showRandomCharactersOfSpecifiedLength() {
    let specifiedLength = document.getElementById("lengthOfStringsToBeGenerated").value;
    let randomCharacters = getStringIdOfRandomChars(specifiedLength);
    document.getElementById("result").innerHTML = randomCharacters;
}