var cart = require('./src/cart');

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

console.log(cart.total(lineItems));