/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getLongestSubstringWithoutRepeatingCharacters*/

describe(" Find longest substring in a given a string without repeating characters", (() => {
    
         it("The longest substring in a given a string without repeating characters is 'lphant' ", (() => {
             let substringWithoutRepeatingCharacters = getLongestSubstringWithoutRepeatingCharacters("Gorilla, gitaffe, parrot and  elephant");
             expect(substringWithoutRepeatingCharacters).toEqual("lphant");
         }));
     
     }));