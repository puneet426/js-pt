// for loop 
for (let i = 1; i <=10; i++) {
    const element = i;
 console.log(element);
}

// Table

for (let i = 1; i<=10; i++) {
    console.log(`value : ${i}`)
    for (let j = 1; j <= 10; j++) {
       // console.log(`inner loop value : ${j} and inner loop ${i}`)
        // console.log(i + '*' + j + ' = ' + i*j)
    }
    const element = i;
    // console.log(element)
    
}
let myArray = ["Puneet" , "batman" , "superman" ,"flash",1,3,56,88]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// break and continue
// for (let i = 1; i <= 20; i++) {
//     if (i==5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of i is ${i}`)

// }

for (let i = 1; i <= 20; i++) {
    if (i==5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${i}`)

}

