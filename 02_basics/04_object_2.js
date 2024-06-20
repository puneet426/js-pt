const tinderUser = {}
tinderUser.name = "John Doe"
tinderUser.age = 30
tinderUser.bio = "I'm a software engineer"
tinderUser.isLoggedIn = "false"
console.log(tinderUser)
// Output: { name: 'John Doe', age: 30, bio: "I'm
const regularUser={
    email: "puneet@gmail.com",
    fullname:{
        firstname:"Puneet",
        lastname:"Tiwari"
    }
}
//  users[1].email
console.log(regularUser)
Object.freeze(regularUser)

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}
// const obj3 = {obj1, obj2}
const obj3 = Object.assign({},obj1,obj2)
const obj4= {...obj1,...obj2}   // another method  of combination
// console.log(obj3)
// console.log(obj4)

// const users = [
//     {
//         id:1,
//         email: "h@gmaiol.com"
//     },
//     {
//         id:1,
//         email: "h@gmaiol.com"
//     },
//     {
//         id:1,
//         email: "h@gmaiol.com"
//     },
//     {
//         id:1,
//         email: "h@gmaiol.com"
//     },
   
// ]
// users[1].email
// console.log(tinderUser);

// console.log(object.keys(tinderUser));
// console.log(object.values(tinderUser));
// console.log(object.entries(tinderUser));
//  console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//  console.log(tinderUser.isPrototypeof(tinderUser))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "hitesh"
}
// course.courseinstructor
const {courseinstructor,price,coursename}=course
console.log(courseinstructor)
console.log(coursename)
const{coursename: name3}=course  //destructure the object
console.log(name3)

// API
// json
{
    name: "puneet"
    coursename: "js in hindi"
    "price"="free"
}

//  constructor
// : 
// ƒ Object()
// hasOwnProperty
// : 
// ƒ hasOwnProperty()
// isPrototypeOf
// : 
// ƒ isPrototypeOf()
// propertyIsEnumerable
// : 
// ƒ propertyIsEnumerable()
// toLocaleString
// : 
// ƒ toLocaleString()
// toString
// : 
// ƒ toString()
// valueOf
// : 
// ƒ valueOf()
// __defineGetter__
// : 
// ƒ __defineGetter__()
// __defineSetter__
// : 
// ƒ __defineSetter__()
// __lookupGetter__
// : 
// ƒ __lookupGetter__()
// __lookupSetter__
// : 
// ƒ __lookupSetter__()
// __proto__
// : 
// (...)
// get __proto__
// : 
// ƒ __proto__()
// set __proto__
// : 
// ƒ __proto__()
// m=_b,_tp:355 
//  POST https://play.google.com/log?format=json&hasfast=true&authuser=0 net::ERR_INTERNET_DISCONNECTED
// ﻿
