"use strict";

function returnElementsLargerThanNumber(referenceNumber, numberArray) {
  
   return numberArray.filter(function (item) { return item >  referenceNumber;});
}

