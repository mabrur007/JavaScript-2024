// reduce()

// ex-1
const numbers = [1, 2, 3, 4]
const total = numbers.reduce((prev, curr) => prev + curr)
// console.log(total);

// ex-2
const shoppingCart = [
    {
        itemName: 'bag',
        price: 1500
    },
    {
        itemName: 'shoe',
        price: 2000
    },
    {
        itemName: 'belt',
        price: 500
    },
]

// approch 1
// const allPrices = shoppingCart.map((item) => item.price)
// const totalPrice = allPrices.reduce((acc, curr) => acc + curr, 0)
// console.log(`Your total bill is: ${totalPrice}`);

// approch 2
const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(`Your total bill is: ${totalPrice}`);