"use strict";

function getAllSubStringsOf(text) {
    var substrings = [];
    for (var i = 0; i < text.length; i++) {
        for (var j = i + 1; j < text.length + 1; j++) {
            substrings.push(text.slice(i, j));
        }
    }
    return substrings;
}

function showSubstrings() {
    var text = document.getElementById("text").value;
    var substrings = getAllSubStringsOf(text);
    var formattedSubstrings = "";
    for (var i = 0; i < substrings.length; i++) {
        formattedSubstrings += `<div>${i + 1} - ${substrings[i]}</div>`;
    }
    document.getElementById("substrings").innerHTML = formattedSubstrings;
}