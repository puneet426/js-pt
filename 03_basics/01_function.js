
function sayMyName(){
    console.log("P")
    console.log("u")
    console.log("n")
    console.log("e")
    console.log("e")
    console.log("t")
}
// sayMyName()

// function addTwono(number1,number2){    // when we define the function then the number is known as parameter
//    console.log(number1+number2)
// } 

function addTwono(number1,number2){   
//    let result = (number1+number2)
//    return result
     return number1+number2
} 
const result = addTwono(11,87)  // when we call the function then the number is known as arguments

console.log("Result: ",result)  // output: 98


function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter your username")
        // return
    }
    return `Welcome ${username}!`
}
// console.log(loginUserMessage("puneet23"))
console.log(loginUserMessage("puneet426"))

function calculateCartPrice(...num1){     //... is used to make an array  //rest operator
    return num1
}
// console.log(calculateCartPrice(200,300,500,1000))

const user={
    username: "Puneet",
    price:1000
}
function calculateCartPrice(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// calculateCartPrice(user)
calculateCartPrice({
    username:"puneet",
price:999
})
const myNewArray = [200,2,34,55,7554]
function returnSecondValue(getArray){
    return getArray[4]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([23,44,567,876,1289]));
