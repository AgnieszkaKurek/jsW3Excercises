"use strict";

function validateAsPhraseConsistsOfLettersOnly(phrase) {
    var validate = /^[a-zA-Z]*$/g.test(phrase);
    if (validate) {
        return true;
    }
    if (!(validate)) {
        throw new Error("The parameter should be consist only of letters.");
    }
}