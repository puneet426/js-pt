console.log("this is tutorial 55")
//var is globally scoped
let a=5;
let b=6;
let c="puneet";
let _a="pulkit";
//var 55a = "pragati";  it is not allowed because variable doesnt start with number
console.log(a+b+8);
// const a1=6 ;
// a1=a1+7;    it is not allowed because const is a constant variable
{
    let a1=56;
    console.log(a1)
}
console.log(a)
// let a1=6;
// a1=a1+7;    it is allowed because let is a variable

let x = "puneet bhai";
let y = 22;
let z = 4.5; 
const p = true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)
// to print the object 
let o = {
    name: "puneet",
    "age": 19,
    "gender": "male",
    "address": "etawah",
}
console.log(o)
// if we wants to add something in object
o.name1 = "pulkit";
o.age1 = 23;
o.gender = "male";
o.address = "etawah";
console.log(o)
// if we wants to delete something in object
delete o.address;
console.log(o)
