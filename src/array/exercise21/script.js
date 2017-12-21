export function flattenNestedArray(arr, shallow) {
    const flattenedOneLevel = [].concat(...arr);
    if (shallow || !flattenedOneLevel.some(Array.isArray)){
        return flattenedOneLevel;
    }else{
        return flattenNestedArray(flattenedOneLevel);
    }
}