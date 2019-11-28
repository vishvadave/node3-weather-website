//obj property shorthand

const name = 'Vish'
const userAge = 18


const user = {
    name,
    age: userAge,
    location: 'Melb'
}

console.log(user)

// obj destructuring

const product = {
    label: 'Pens',
    price: 3,
    stock: 100,
    salePrice: undefined
}

// const {label, stock} = product

// console.log(label)
// console.log(stock)

const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)