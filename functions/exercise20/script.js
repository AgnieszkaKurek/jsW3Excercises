"use strict";

function getStringIdOfRandomChars(specifiedLength) {
    const stringCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let getStringIdOfRandomChars = "";
    for (let i = 0; i < specifiedLength; i++) {
        let stringCharactersLenght = stringCharacters.length;
        getStringIdOfRandomChars +=
            stringCharacters
            [(Math.floor
                (Math.random()
                * stringCharactersLenght))];
    }
    return getStringIdOfRandomChars;

}
