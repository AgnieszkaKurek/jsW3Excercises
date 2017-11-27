export function getUniqueCharactersFromString(phrase) {
    var uniqueChars = "";
    for (var i = 0; i < phrase.length; i++) {
        var currentChar = phrase[i];
        if (uniqueChars.indexOf(currentChar) == -1) {
            uniqueChars += currentChar;
        }
    }
    return uniqueChars;
}
