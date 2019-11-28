// const square = function (x){
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(9))

const event = {
    name: 'Success Party',
    guestList: ['Vish', 'Sowmay', 'Kitu'],
    printGuestList() {
        console.log('Guest List for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + 'is attending ' + this.name )
        })
    }
}
event.printGuestList()