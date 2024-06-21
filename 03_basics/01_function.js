
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