// JvaScript Execution Context 

// {} :- Global Execution Context it refers (this whose value in browser is (window)
// Function execution context


// {} :- run in two faces 1. Memory Creation face declare the slot  for variables
// 2. Execution Phase in this mathematical operation execute
                                //Steps 1.global execution 
let val1 = 10               // 2.Memory phase val1- undefined
let val2 = 20                 // val2--- undefined      
function addNum(num1,num2){         // addNum-- Definition
    let sum = num1 + num2           // result 1--undefined
    return sum                          // result 2---undefined
}                                           // execution phase val1==10 val2==5 //addNum== new variable environment + execution thread------------/////////jitni baar add number karege utni baar memory phase and execution phase banega
let result1 = addNum(val1,val2)                 
let result2 = addNum(10,12)
console.log(result2)