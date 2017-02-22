'use strict';

var string = document.getElementById("inscription").innerHTML;
var characters = string.split("");
setInterval(function () {
    var firstCharacter = characters.shift();
    characters.push(firstCharacter);
    document.getElementById("inscription").innerHTML = characters.join("");
}, 500);

