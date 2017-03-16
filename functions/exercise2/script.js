"use strict";

function isPalindrome(phrease) {
    var isPhreasePalindrome = phrease.toLowerCase().split("").reverse().join("");
    if (isPhreasePalindrome === "") {
        throw new TypeError("Parameter must contain at least one letter - not use white space");
    }
    if (isPhreasePalindrome === " ") {
        throw new TypeError("Parameter must contain at least one letter - not use white space");
    }
    if (isPhreasePalindrome === phrease.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
