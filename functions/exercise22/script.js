"use strict";

function countNumberOccurrencesOfSpecifiedLetterWithinString(phrase, checkedLetter) {
    let countCheckedLetter = phrase.match(RegExp(checkedLetter, "gi"));
    let result = countCheckedLetter.length;
    return result;
}