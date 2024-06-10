//Dates is object
let myDate = new Date()
console.log(myDate) // Output: 2024-06-9T14:30:
console.log(myDate.toString()); //Sun Jun 09 2024 19:00:26 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Sun Jun 09 2024
console.log(myDate.toTimeString()); //19:02:05 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); //9/6/2024, 7:03:14 pm

let myCreatedDate = new Date(2005,6,4,5,10,2)  // Months in javascript satrts from 0
console.log(myCreatedDate); //2005-07-03T18:30:00.000Z
console.log(myCreatedDate.toDateString()); //Mon Jul 04 2005
console.log(myCreatedDate.toLocaleString()); //  4/7/2005, 5:10:02 am
console.log(myCreatedDate.getDay()); //  4/7/2005, 5:10:02 am


//************** */
let myCreatedDate2 = new Date("07-04-2005")
console.log(myCreatedDate2.toLocaleString()); //2005-04-06T18:30:00
console.log(myCreatedDate2.toDateString()); //Wed Jul 04 2005


//***************Time*************** */
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now()/1000); // to convert ms to second but here we get decimal number
console.log(Math.floor(Date.now()/1000));


let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth())
console.log(newDate.getDay)
console.log(newDate.getFullYear())

newDate.toLocaleString('default',{
    weekday: "long",
    year: "numeric",

})

//*************************************** TO PRINT DAYS  *********************************/

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
 
function getDayName(dateString) {
    let dayName;
    // Write your code here
    
   //let mydate = new Date();
   const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   
   dayName= Days[new Date(dateString).getDay()]
    return dayName;
}
console.log(getDayName("2024-09-06")); // Friday
