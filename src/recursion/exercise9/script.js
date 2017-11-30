export function mergeAndSortNumbersfromArray(noOrderedNumbersArray) {
    return noOrderedNumbersArray.sort(function(a,b){
        return a-b;
    });
}