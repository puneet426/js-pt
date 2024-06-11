// Array

const myArr = [3,4,6,7,89,"puneet"]
console.log(myArr); // [3, 4, 6, 7, 89,"puneet"]
const myArr2 = new Array(1,23,4,54)
console.log(myArr[0]);

// Array Methods 

// myArr.push(6)  // here we push value 6 in my array
// myArr.pop()   // remove the last value
// myArr.unshift(9) // the vaue is added in first position
// myArr.shift()    // first position element is shifted


// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))


const newArr = myArr2.join()
console.log(myArr2);
console.log(newArr);  // are values are converted in strings


// Slice and Splice
console.log("A" , myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1); // [4, 6]  last 3 is not included in range
console.log("B",myArr2)

const myn2 = myArr.splice(1,3)
console.log("C" , myArr)        //splice remove the value from original array and range inclues all    
console.log(myn2); // [4, 6, 7]  



