export function convertWordFirstLetterIntoUpperCase(sentence) {
    var words = sentence.split(" ");
    for(var i = 0; i < words.length; i++){
        var word = words[i];
        if (word.length > 0){
            words[i] = word[0].toUpperCase() + word.substring(1);
        }
    }
    var uppercasedSentence = words.join(" ");
    return uppercasedSentence;
}
