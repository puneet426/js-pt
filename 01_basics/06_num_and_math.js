const score = 400
console.log(score)

const balance = new Number(100) // here we spacifies it as number
console.log(balance)

// MAX_SAFE_INTEGER
// Number.isFinite
// ƒ isFinite() { [native code] }
// Number.MAX_VALUE
// 1.7976931348623157e+308
// Number.MIN_SAFE_INTEGER
// -9007199254740991
// Number.name
// 'Number'
// Number.__defineGetter__
// ƒ __defineGetter__() { [native code] }

console.log(balance.toString().length);
console.log(balance.toFixed(2));
// here we are rounding off the decimal value to 2
const otherNumber= 23.34689
console.log(otherNumber.toPrecision(3)) 
const hundreds = 100000000
console.log(hundreds.toExponential()) // here we are converting it to exponential form
console.log(hundreds.toLocaleString('en-IN'));

// **************************** MATHS *******************************//
console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(3.5));
console.log(Math.ceil(4.2)); //choose the value greater than that
console.log(Math.floor(4.8)); //choose the value smaller than that 
console.log(Math.min(4,1,0,6,7,10))
console.log(Math.max(4,6,7,10))
console.log((Math.random()*10) + 1)
console.log((Math.random()*10) + 1) // math.random select the random value in b/w 0 and 1
console.log(Math.floor(Math.random()*10) + 1)  

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)


