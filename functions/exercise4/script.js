"use strict";

function validateAsPhraseConsistsOfLettersOnly(phrase) {
    if (/^[a-zA-Z]*$/g.test(phrase)) {
        return phrase;
    }
    if (!/^[a-zA-Z]*$/g.test(phrase)) {
        throw new Error("The parameter should be consist only of letters.");
    }
}