"use strict";

function isPalindrome(phrease) {
    var isPhreasePalindrome = phrease.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
    var counter = 0;
    if (isPhreasePalindrome === "") {
        window.alert("Parameter must contain at least one letter - not use white space");
        throw (new Error("Parameter must contain at least one letter - not use white space"));
    }
    if (isPhreasePalindrome === " ") {
        window.alert("Parameter must contain at least one letter - not use white space");
        throw (new Error("Parameter must contain at least one letter - not use white space"));
    }

    if ((isPhreasePalindrome.length) % 2 === 0) {
        counter = (isPhreasePalindrome.length) / 2;
    } else {
        if (isPhreasePalindrome.length === 1) {
            return true;
        } else {
            counter = (isPhreasePalindrome.length - 1) / 2;
        }
    }
    for (var x = 0; x < counter; x++) {
        if (isPhreasePalindrome[x] != isPhreasePalindrome.slice(-1 - x)[0]) {
            return false;
        }
    }
    return true;
}