export function findTheMostFrequentItems(array) {
    let itemsFrequency = [];
    for (const elem of array) {
        let items = itemsFrequency.filter(item => item.item === elem);
        if (items.length === 0) {
            itemsFrequency.push({
                item: elem,
                quantity: 1
            });
        } else {
            items[0].quantity++;
        }
    }
    let maxQuantity = itemsFrequency.length === 0 ? 0: Math.max(...itemsFrequency.map(o => o.quantity));
    return {
        quantity: maxQuantity,
        items: itemsFrequency.filter(elem => elem.quantity === maxQuantity).map(elem => elem.item)
    };
}