export function isPalindrome(phrase) {
    var normalizedPhrase = phrase.toLowerCase().trim();
    if (normalizedPhrase === "") {
        throw new Error("Parameter must contain at least one letter - not use white space");
    }
    var reversedNormalizedPhrase = normalizedPhrase.split("").reverse().join("");
    return reversedNormalizedPhrase === normalizedPhrase;
}

function showResult() {
    var phrase = document.getElementById("phrase").value;
    var resultElement = document.getElementById("result");
    try {
        var isPhrasePalindrome = isPalindrome(phrase);
        var message = isPhrasePalindrome ? "is a palindrome" : "isn't a palindrome";
        resultElement.value = `'${phrase}' ${message}`;
        resultElement.classList.remove("exceptionStyle");
    }
    catch (exception) {
        resultElement.value = exception;
        resultElement.classList.add("exceptionStyle");
    }
}