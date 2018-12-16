/** 
 * @typedef LineItem 
 * @property {string} id
 * @property {string} title
 * @property {number} qty
 * @property {number} price
 */

/**
 * Mendapatkan total harga cart
 * @param {Array<LineItem>} lineItems
 * @return {number}
 */

function total(lineItems) {
    return lineItems.reduce(function (accumulation, item) {
        return accumulation + (item.qty * item.price);
    }, 0);
}

/**
 * 
 * @param {Array<LineItem>} lineItems 
 * @param {LineItem}        addedLineItem 
 * @return {Array<LineItem>}
 */

function addItem(lineItems, addedLineItem) {
    const foundLineItem = lineItems.find(function (item) {
        return item.id === addedLineItem.id;
    });

    if (!foundLineItem) return lineItems.concat(addedLineItem);

    return lineItems.map(function (item) {
        if (item.id === addedLineItem.id) {
            var newQty = item.qty + addedLineItem.qty;
            return Object.assign({}, item, {
                qty: newQty
            });
        }

        return item;
    })
}



module.exports = {
    total: total,
    addItem: addItem,
};