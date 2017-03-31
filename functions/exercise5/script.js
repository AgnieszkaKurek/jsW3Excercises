"use strict";

function convertWordFirstLetterIntoUpperCase(string) {
    var splitString = string.split(" ");
    var array = [];
    for (var i = 0; i < splitString.length; i++) {
        array.push(splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1));
    }
    var stringInUpperCase = array.join(" ");
    return stringInUpperCase;
}
