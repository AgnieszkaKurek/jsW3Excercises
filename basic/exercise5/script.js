"use strict";

var text = document.getElementById("textAnimation").innerHTML;
var characters = text.split("");

setInterval(function () {
    var firstCharacter = characters.shift();
    characters.push(firstCharacter);
    document.getElementById("textAnimation").innerHTML = characters.join("");
}, 500);
