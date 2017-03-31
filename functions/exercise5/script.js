"use strict";

function convertWordFirstLetterIntoUpperCase(string){
    var array = string.split(" ");
    for(var i = 0; i < array.length; i++){
        array[i] = array[i][0].toUpperCase() + array[i].substring(1);
    }
    var stringInUpperCase = array.join(" ");
   return stringInUpperCase;
}
