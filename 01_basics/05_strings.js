const name = "Puneet"
const repocount =23

//console.log(name+repocount+"value") this is the older method 

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);   //mordern way

const gameName = new String('Puneet')
//const gameName = new String('Puneet') the all feature of string can be exes when we print this in browser and in next line we write gameName
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);
console.log(gameName[4]);
console.log(gameName[5]);
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString =  gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-4,4);
console.log(anotherString);
// we can give the negative value in string so that it can start from back
const newStringOne = "  Puneet  "
console.log(newStringOne) 
console.log(newStringOne.trim()) // trim method remove the space from both side

const url = "https://puneet.com/puneet%20tiwari"
console.log(url.replace('%20','-'))
// replace method replace the %20 with - in the url
console.log(url.includes('puneet'))
// includes method check whether the string is present in the url or not
console.log(url.includes('perfect'))

console.log(gameName.split('-'))
