"use strict";

function getUniqueCharactersFromString(string) {
    var uniqueCharacters = "";
    for (var i = 0; i < string.length; i++) {
        if (uniqueCharacters.indexOf(string.charAt(i)) == -1) {
            uniqueCharacters += string[i];
        }
    }
    return uniqueCharacters;
}
