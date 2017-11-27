export function countTheNumberOfVowels(sentence) {
    var numberOfVowels = sentence.match(/[ayuioe]/gi).length;
    return numberOfVowels;
}