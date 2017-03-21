"use strict";

function isPalindrome(phrase) {
    var normalizedPhrase = phrase.toLowerCase().trim();
    if (normalizedPhrase === "") {
        throw new Error("Parameter must contain at least one letter - not use white space!!!");
    }
    var reversedNormalizedPhrase = normalizedPhrase.split("").reverse().join("");
    var result = reversedNormalizedPhrase === normalizedPhrase;
    if (result === true) { result = "is a palindrome!"; }
    else { result = "isn't a palindrome!"; }
    return result;
}

function showResult() {
    var phrase = document.getElementById("phrase").value;
    try {
        var result = isPalindrome(phrase);
        document.getElementById("result").value = `${phrase} ${result}`;
    }
    catch (exception) {
        document.getElementById("result").value = exception;
    }
}