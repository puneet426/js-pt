const user = {
    username: "Puneet",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);   //this is used to used to refer the current content
        console.log(this)
    }
      

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)




// function chai(){
//     let username = "Puneet"
//     console.log(this.username)
// }
// chai()

const chai = () => {            //arrow function
    let username = "puneet"
    console.log(this)
}
// chai()

// const addTwo = (num1,num2) => {     //explicit method when we use return 
 //     return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2   // Implicit method
// const addTwo = (num1,num2) => (num1+num2) 
console.log(addTwo(3,4))
const addTwo = (num1,num2) => ({username:"Puneet"})  

const myArray = [2,3,4,6,7,8]
myArray.forEach()
