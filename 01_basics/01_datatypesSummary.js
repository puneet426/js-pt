//Primitive
//7 types : string , number , boolean , null , undefined , symbol , Bigint



// refrence type or non primitive
// Array , Object , Function 

//java script is a dynamic type language which means variable can hold values of diferent types during runtime  

// const outsideTemp = nulll
// let userEmail;


//symboldeclare
const id = Symbol('123')
const anotherId= Symbol('123')
console.log(id === anotherId);

const bigNumber =99875432456n
console.log(bigNumber)

//Array , Objects and Function

const myArray = [1, ,2,3,4,5]
const myObject = {name : 'John', age : 30}
const myFunction = function(){
    console.log('Hello World')
}



//********************************** Memory***************************************
 //primitive types are stored in stack memory
 //reference types are stored in heap memory
 let myYoutubename = "PuneetTiwari"
 let anothername = "NovaXinfinity"
 console.log(myYoutubename)
 console.log(anothername);
 //both variables are stored in stack memory
 //when we change the value of one variable it does not affect the other variable

let userOne={
    email: "user@hmail.com",
    upi: "user@tyi"
}
let userTwo = userOne
userTwo.email="puneet@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)
//both variables are stored in heap memory
//when we change the value of one variable it affects the other variable because they are pointing to the
//same memory location in heap memory

