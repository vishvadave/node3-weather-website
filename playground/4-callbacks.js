setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)


const names = ['Andrew', 'Jen', 'Vish']
const shortNames = names.filter((name) => {
    return name.length <= 4

})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            lat: 0,
            long: 0
        }
        callback(data)
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data)
})

const add = (x, y, callback) => {
    setTimeout(() => {
        const add = x + y
        callback(add)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})


