"use strict";

function validateAsPhraseConsistsOfLettersOnly(phrase) {
    var isvalid = /^[a-zA-Z]*$/g.test(phrase);
    if (!isvalid) {
        throw new Error("The parameter should be consist only of letters.");
    }
    return true;
}

