//const coding = ["js", "ruby", "java","python","cpp"]


// const values = coding.forEach( (item)=> {
//     console.log(item);
//     return item
// } )
// console.log(values)

// Filter Basics

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => num > 3)
// console.log(newNums)



// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => {   // when we open scope {} then we have to use the return key word otherwise write simply as upper
//     return num > 4
// })
// console.log(newNums)



// WITHOUT USING FILTER WITH THE USE OF FOR EACH
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = []
// myNums.forEach( (num) =>{
//     if(num > 4){
//         newNums.push(num)
//     }
// } )
// console.log(newNums)



const books = [

    {title: "book1", genre:'Fiction', publish: 1981 ,edition:2004, price: 100, rating: 4.5},
    {title: "book2", genre:'Non-Fiction', publish: 1983 ,edition:2005, price: 100, rating: 4.6},
    {title: "book3", genre:'History', publish: 1984 ,edition:2006, price: 200, rating: 4.2},
    {title: "book4", genre:'Physics', publish: 1986 ,edition:2010, price: 100, rating: 4.1},
    {title: "book5", genre:'Economics', publish: 2004 ,edition:2012, price: 200, rating: 4.7},
    {title: "book6", genre:'Literature', publish: 1989 ,edition:2013, price: 100, rating: 4.8},
    {title: "book7", genre:'Physics', publish: 1991 ,edition:2015, price: 200, rating: 4.6},
    {title: "book8", genre:'Civics', publish: 2000 ,edition:2020, price: 100, rating: 4.0},

];
let userBooks = books.filter( (books) => books.price===200 || books.genre==='Physics' )
userBooks = books.filter( (books) => { return books.publish >= 2000} ) 
console.log(userBooks)
