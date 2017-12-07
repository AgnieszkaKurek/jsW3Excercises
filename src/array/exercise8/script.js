export function findTheMostFrequentItems(array) {
    let mostFrequentItems = [];
    for (const elem of array) {
        let items = mostFrequentItems.filter(item => item.item === elem);
        if (items.length === 0) {
            mostFrequentItems.push({
                item: elem,
                quantity: 1
            });
        } else {
            items[0].quantity++;
        }
    }
    let maxQuantity = Math.max(...mostFrequentItems.map(o => o.quantity));
    return mostFrequentItems.filter(item => item.quantity === maxQuantity);
}