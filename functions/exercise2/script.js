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
    try {
        var result = isPalindrome(phrase);
        if (result === true) { document.getElementById("result").value = `${phrase} is palindrome :)`; }
        if (result === false) { document.getElementById("result").value = `${phrase} isn't palindrome :(`; }
    }
    catch (exception) {
        document.getElementById("result").value = exception;
    }
}