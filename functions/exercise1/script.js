"use strict";

function revertNumber(number) {
  var reverseNumber = Number(number.toString().split("").reverse().join(""));
  return reverseNumber;
}
