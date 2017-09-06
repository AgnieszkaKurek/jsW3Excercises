/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getLongestSubstringWithoutRepeatingCharacters*/

describe(" Find longest substring in a given a string without repeating characters", (() => {
    
         it("If the string consists of one word 'elephant', then the longest substring without repeating characters is 'lphant' ", (() => {
             let substringWithoutRepeatingCharacters = getLongestSubstringWithoutRepeatingCharacters("elephant");
             expect(substringWithoutRepeatingCharacters).toEqual("lphant");
         }));
     
     }));