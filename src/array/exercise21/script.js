export function flattenNestedArray(arr, shallow = false) {
    const flattenedOneLevel = [].concat(...arr);
    if (shallow || !flattenedOneLevel.some(Array.isArray)){
        return flattenedOneLevel;
    }else{
        return flattenNestedArray(flattenedOneLevel);
    }
}