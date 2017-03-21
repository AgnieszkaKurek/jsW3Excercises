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
        if (result) {result = "is a palindrome";}
        else {result = "isn't a palindrome ";}
        document.getElementById("result").value = `${phrase} ${result}`;
    }
    catch (exception) {
        document.getElementById("result").value = exception;
    }
}