// If statement             // === , !==   is used to compare values as well as data type
const isUserloggedIn = true
const temperature = 45
if (isUserloggedIn==true) {
    console.log("yes")
}
if (temperature<50) {
    console.log("temperature is less than 50")
}

// if (false) {   // when condition is false code does not execute 
    // const score = 200
    // if(score>100){
    //     let power = "fly"
    //     console.log(`User power: ${power}`);
    // }
    // console.log(`User power: ${power}`)
// }


// const balance = 1000
// if (balance>500) console.log("test");   

// if (balance<500) {
//     console.log("less than 500")
// }
// else if (balance<750) {
//     console.log("less than 750")
// }
// else if (balance<950) {
//     console.log("less than 950")
// }
// else{
//     console.log("more than 950")
// }


 // user acount
 const userLoggedIn = true
 const userAge = 25
 const userCountry = "INDIA"
 const debitCard = true
 const LoggedInFromGoogle =false
 const LoggedInFromEmail =false
 const guestuser=true
 if (userLoggedIn && debitCard && userAge<=25 && userCountry=="INDIA") {
    console.log("Allowed to Purchase Courses")
 }

 if (LoggedInFromGoogle || LoggedInFromEmail || guestuser ) {
    console.log("User logged In")
 }

    
