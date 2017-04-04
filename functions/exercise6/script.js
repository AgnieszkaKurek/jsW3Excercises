"use strict";

function findTheLongestWordWithinTheSentence(sentence) {
    var words = sentence.split(" ");
    var theLongestWord = words[0];

    for (var i = 1; i < words.length; i++) {
        if (theLongestWord.length < words[i].length) {
            theLongestWord = words[i];
        }
    }
    return theLongestWord;
}  
