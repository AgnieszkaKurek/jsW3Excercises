export function getRandomChars(specifiedLength) {
    const stringCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const stringCharactersLength = stringCharacters.length;
    let randomCharacters = "";
    for (let i = 0; i < specifiedLength; i++) {
        let randomIndex = Math.floor(Math.random() * stringCharactersLength);
        randomCharacters += stringCharacters[randomIndex];
    }
    return randomCharacters;
}

function showRandomCharactersOfSpecifiedLength() {
    let lengthOfStringsToBeGenerated = document.getElementById("lengthOfStringsToBeGenerated").value;
    let numberOfStringsToBeGenerated = document.getElementById("numberOfStringsToBeGenerated").value;
    let randomCharacters = [];
    for (let i = 0; i < numberOfStringsToBeGenerated; i++) {
        randomCharacters.push(getRandomChars(lengthOfStringsToBeGenerated));
    }
    let result = randomCharacters.join("<br /> ");
    document.getElementById("result").innerHTML = result;
}