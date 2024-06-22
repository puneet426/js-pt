// let a=10
// const b=20
// var c = 30
// var c = 300
let a=300               // it is a global scope
//{} is the scope
if(true){                                         // inside if blog scope
    let a=10     //return nothing
    const b=20   //return nothing
    // var c = 30  // return value 30 
    console.log("Inner: ",a)
}


console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const username = "puneet"
    function two(){
        const website = "youtube.com"
        console.log(username)
    }
    // console.log(website);
    two()
}
one()

if (true) {
    const username = "puneet"
    if (username==="puneet") {
        const website = " linkdin.com"
        console.log(username + website);
    }
    // console.log(website)
}
// console.log(username)

//+++++++++++++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++++++++
console.log(addone(5))        // in this case we acces the value first
function addone(num){
    return num+1
}


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))