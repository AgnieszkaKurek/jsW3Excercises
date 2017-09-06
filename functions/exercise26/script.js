/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getLongestSubstringWithoutRepeatingCharacters*/

describe("Find longest substring in a given a string without longest substring", (() => {
    
        it("The longest substring in a given a string without longest substring is 'lphant' ", (() => {
            let substringWithoutRepeatingCharacters = getLongestSubstringWithoutRepeatingCharacters(["gorilla", "gitaffe", "parrot", "elephant"]);
            expect(substringWithoutRepeatingCharacters).toEqual("lphant");
        }));
    
    }));

    