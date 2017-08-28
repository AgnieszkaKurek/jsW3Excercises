"use strict";

function countNumberOccurrencesOfSpecifiedLetterWithinString(phrase, checkedLetter){
   let countCheckedLetter = 0;
   for(let i = 0; i < phrase.length; i++) {
       if (phrase.charAt(i)== checkedLetter){
           countCheckedLetter += 1;
       }
   }
   return countCheckedLetter;
}
