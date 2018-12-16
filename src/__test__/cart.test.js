var cart = require('../cart');

describe('cart module test', function () {
    test('total should return correct value', function () {
        var lineItems = [{
                id: 'item-1',
                title: 'sdkjfs',
                qty: 2,
                price: 20
            },
            {
                id: 'item-2',
                title: 'asdkasd',
                qty: 1,
                price: 30
            },
        ];

        expect(cart.total(lineItems)).toBe(70);
        expect(cart.total([])).toBe(0);
    })

    test('Add Item should able to add new line item', function () {
        var lineItems = [];

        lineItems = cart.addItem(lineItems, {
            id: 'item-1',
            title: 'sdkjfs',
            qty: 2,
            price: 20
        });

        expect(lineItems.length).toBe(1);

        lineItems = cart.addItem(lineItems, {
            id: 'item-2',
            title: 'asdkasd',
            qty: 3,
            price: 30
        });

        expect(lineItems.length).toBe(2);
        expect(lineItems[1].qty).toBe(3);

        lineItems = cart.addItem(lineItems, {
            id: 'item-2',
            title: 'asdkasd',
            qty: 3,
            price: 30
        });

        expect(lineItems.length).toBe(2);
        expect(lineItems[1].qty).toBe(6);
    })
})