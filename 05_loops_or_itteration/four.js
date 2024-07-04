
////  for In loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObject) {          // shortcut
   console.log(key)
}
for (const key in myObject) {      // key value
   console.log(myObject[key])
}
for (const key in myObject) {      
   console.log(`${key} shortcut is for ${myObject[key]}`)
}

// const programming = ["js" , "rb", "py", "java", "cpp"]
// for (const key in programming) {
//    console.log(key)
// }
const programming = ["js" , "rb", "py", "java", "cpp"]
for (const key in programming) {
   console.log(programming[key])
}