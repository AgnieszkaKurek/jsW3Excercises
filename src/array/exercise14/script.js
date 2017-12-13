export function removeDuplicateItems(checkArray) {
    return checkArray.filter(function(elem, index, array){
        return array.indexOf(elem) == index;
    });
}
