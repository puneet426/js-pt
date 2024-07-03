///+++++++++++ FOR OF LOOP ++++++++++++

// for of loop is used to iterate over the values of an iterable object
// it returns the value of each property

// for (const iterator of object) {     
    
// }

let colors = ['red', 'green', 'blue', 'yellow', 'orange'];
for (let color of colors) {
    console.log(color);
    } // output: red, green, blue, yellow, orange

const greetings = "hello world!"
for (let greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// MAPS
const map = new Map()
map.set('In',"India")
map.set('USA',"UNITED STATE OF AMERICA")
map.set('Fr' ,"France")
console.log(map)

// for (const key of map) {
//     console.log(key)
// }
for (const [key,value] of map) {
    console.log(key, ':-', value)
}

// for of loop on object
const myObject = {
    'Game1': 'NFS',
    'Game2': 'GTA',
    'Game3': 'PUBG'
}
// for (const [key,value] of myObject) {   // not itteratible
//     console.log(key, ':-', value)

// }




    