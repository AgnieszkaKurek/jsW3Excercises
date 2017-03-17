"use strict";

function isPalindrome(phrase) {
var result1 = phrase.toLowerCase().trim();
var  result = result1.split("").reverse().join("");
if (result === "") {
        throw new Error("Parameter must contain at least one letter - not use white space");
    }
    
return result === result1;
}