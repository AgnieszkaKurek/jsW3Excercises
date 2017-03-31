"use strict";

function validateAsPhraseConsistsOfLettersOnly(phrase) {
    var isValid = /^[a-zA-Z]*$/g.test(phrase);
    if (!isValid) {
        throw new Error("The parameter should be consist only of letters.");
    }
    return true;
}


function sortLettersInThePhrase(isValid) {
   validateAsPhraseConsistsOfLettersOnly(isValid);
   return isValid.split("").sort().join("");
}
