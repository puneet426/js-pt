const promiseOne = new Promise(function(resolve,reject){
    // do an async task 
    // database call , cryptography , network 
    setTimeout(function(){
        console.log('Async task is completed')
        resolve()   // this is used to connect with then
    }, 1000)
})
// consumption of promise
promiseOne.then(function(){
    console.log("Promise Consumed")
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2 is completed')
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"puneet426" , email:"tiwaripuneet426@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
  console.log(user)
})
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true                    // value can be true or false 
        if(!error){
            resolve({username: "puneet", password:"1234"})
        }
        else{
            reject('ERROR: Something went wrong')
        }

    },1000)
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
})
.then((username) =>{
    console.log(username);
})
.catch(function(error){
    console.log(error)
}).finally(()=> console.log("The Promise is either resolved or rejected"))

// other way 

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true                    // value can be true or false 
        if(!error){
            resolve({username: "javascript", password:"1234"})
        }
        else{
            reject('ERROR: JS went wrong')
        }

    },1000)
})
// other way 

async function consumePromiseFive(){
   try{
    const response =  await promiseFive
   console.log(response);
   }catch(error){
    console.log(error)
   }
}
consumePromiseFive()

// by using dry catch

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //const data = response.json      // this takes time so we use await function
    const data = await response.json()
    console.log(data)
    } catch (error) {
        console.log("E: ",error)
    }
}
getAllUsers()



// by using then
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))

// in this code the async await and task  is run  after but it written first 
