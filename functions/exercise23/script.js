"use strict";

  function findFirstNotRepeatedCharacter(phrase) {
      let firstNotRepeatedCharacter = "";
      for(let i = 0; i < phrase.length; i++){
          if(phrase.indexOf(phrase[i]) === phrase.lastIndexOf(phrase[i])){
              firstNotRepeatedCharacter = phrase[i];
          } 
      }
      return firstNotRepeatedCharacter;
  }