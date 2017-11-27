export function findFirstNotRepeatedCharacter(phrase) {
    for (let i = 0; i < phrase.length; i++) {
        let char = phrase[i];
        if (phrase.indexOf(char) === phrase.lastIndexOf(char)) {
            return char;
        }
    }
    return "";
}