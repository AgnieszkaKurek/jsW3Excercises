"use strict";

function findTheLongestWordWithinTheSentence(sentence) {
    var words = sentence.match(/\w[a-z]{0,}/gi);
    var theLongestWord = words[0];

    for (var x = 1; x < words.length; x++) {
        if (theLongestWord.length < words[x].length) {
            theLongestWord = words[x];
        }
    }
    return theLongestWord;
}  
