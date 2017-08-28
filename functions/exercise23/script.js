"use strict";

function findFirstNotRepeatedCharacter(phrase) {
    for (let item of phrase){
        if(phrase.indexOf(item)===phrase.lastIndexOf(item)){
            return item;
        }
    }
}
