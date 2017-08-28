"use strict";

function countNumberOccurrencesOfSpecifiedLetterWithinString(phrase, checkedLetter) {
    let countCheckedLetter = 0;
    for (let item of phrase) {
        if (item === checkedLetter) {
            countCheckedLetter++;
        }
    }
    return countCheckedLetter;
}