"use strict";
function isPalindrome(phrase) {
    var normalizedPhrase = phrase.toLowerCase().trim();
    if (normalizedPhrase === "") {
        throw new Error("Parameter must contain at least one letter - not use white space");
    }
    var reversedNormalizedPhrase = normalizedPhrase.split("").reverse().join("");
    return reversedNormalizedPhrase === normalizedPhrase;
}

function showResult() {
    var phrase = document.getElementById("phrase").value;
    var result = isPalindrome(phrase);
    document.getElementById("result").value = result;
}