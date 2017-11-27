export function validateAsPhraseConsistsOfLettersOnly(phrase) {
    var isValid = /^[a-zA-Z]*$/g.test(phrase);
    if (!isValid) {
        throw new Error("The parameter should be consist only of letters.");
    }
    return true;
}

export function sortLettersInThePhrase(phrase) {
    validateAsPhraseConsistsOfLettersOnly(phrase);
    return phrase.split("").sort().join("");
}
