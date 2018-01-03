export function getRangeOfLetters(startChar, endChar, step) {
    let range = [];
    const startIndex = startChar.charCodeAt();
    const endIndex = endChar.charCodeAt();
    if (startIndex <= endIndex) {
        for (let i = startIndex; i <= endIndex; i += step) {
            range.push(String.fromCharCode(i));
        }
    } else {
        for (let i = startIndex; i >= endIndex; i -= step) {
            range.push(String.fromCharCode(i));
        }
    }
    return range;
}