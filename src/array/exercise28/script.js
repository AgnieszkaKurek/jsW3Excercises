export function longestCommonStartingSubstring(arr) {
    if (arr.length === 0) return "";
    let substringCandidate = arr.reduce((a, b) => a.length <= b.length ? a : b);
    while (substringCandidate) {
        if (allItemsStartWithTheSameSubstringCandidate(arr, substringCandidate)) {
            return substringCandidate;
        } else {
            substringCandidate = substringCandidate.slice(0, -1);
        }
    }
    return "";
}

function allItemsStartWithTheSameSubstringCandidate(stringArray, substringCandidate) {
    for (const item of stringArray) {
        if (!item.startsWith(substringCandidate)) {
            return false;
        }
    }
    return true;
}
