export function longestCommonStartingSubstring(stringArray) {
    if (stringArray.length < 1) {
        return "";
    }
    let sortedStringArray = stringArray.concat().sort();
    const firstString = sortedStringArray[0];
    const lastString = sortedStringArray[sortedStringArray.length - 1];
    let firstStringLenght = firstString.length;
    let i = 0;
    while (i < firstStringLenght && firstString.charAt(i) === lastString.charAt(i))
        i++;
    return firstString.substring(0, i);
}
