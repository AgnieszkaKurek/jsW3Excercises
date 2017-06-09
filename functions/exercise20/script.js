"use strict";

function getStringIdOfRandomChars(specifiedLength) {
    const stringCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let getStringIdOfRandomChars = "";
    for (let i = 0; i < specifiedLength; i++) {
        getStringIdOfRandomChars +=
            stringCharacters[(Math.floor(Math.random()
                * stringCharacters.length))];
    }
    return getStringIdOfRandomChars;
}
