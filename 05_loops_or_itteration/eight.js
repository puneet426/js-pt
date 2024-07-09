////++++++++++  REDUCE METHOD +++++++++++++++++++++++////

const myNums = [1,2,3]

const myTotal = myNums.reduce(function (accumulator,curvalue){
    console.log(`accumulators: ${accumulator} and curvalue: ${curvalue}`);
    return accumulator + curvalue
} , 0)    // the value },0) is the initial value of accumulator
console.log(myTotal);



// by the use of Arrow Function
const myTotal2 = myNums.reduce((accumulator,curvalue)=> accumulator + curvalue,0)
console.log(myTotal2)

const shoppingCart = [
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "C++ course",
        price:4999
    },
    {
        itemName: "python course",
        price:999
    },
    {
        itemName: "Data Science course",
        price:12999
    }
]
const totalAmount = shoppingCart.reduce((accumulator,item)=> accumulator + item.price,0)
console.log(totalAmount);