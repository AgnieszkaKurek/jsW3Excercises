"use strict";

function validateAsPhraseConsistsOfLettersOnly(phrase) {
    var isValid = /^[a-zA-Z]*$/g.test(phrase);
    if (isValid) {
        return true;
    }
    if (!(isValid)) {
        throw new Error("The parameter should be consist only of letters.");
    }
}