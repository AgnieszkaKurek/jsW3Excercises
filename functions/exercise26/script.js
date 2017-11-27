import {getLongestSubtrings} from './../exercise25/script';

export function getLongestSubstringsWithoutRepeatingCharacters(phrase) {
    let substrings = getAllSubstrings(phrase);
    let substringsWithUniqueCharacters = getSubstringsWithUniqueCharacters(substrings);
    return getLongestSubtrings(substringsWithUniqueCharacters);
}

function getAllSubstrings(phrase) {
    let substrings = [];
    for (let i = 0; i < phrase.length; i++) {
        for (let j = i + 1; j < phrase.length + 1; j++) {
            substrings.push(phrase.slice(i, j));
        }
    }
    return substrings;
}

function getSubstringsWithUniqueCharacters(substrings) {
    return substrings.filter(substring => hasUniqueCharacters(substring));
}

function hasUniqueCharacters(phrase) {
    let registeredCharacters = [];
    for (let character of phrase) {
        if (registeredCharacters.includes(character)) {
            return false;
        } else {
            registeredCharacters.push(character);
        }
    }
    return true;
}



