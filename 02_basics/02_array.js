const marvel_heros = ["thor", "Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)   // push array as data count as single element
console.log(marvel_heros);  
// output: ["thor", "Ironman","spiderman",["superman","flash
console.log(marvel_heros[3]);
// output: ["superman","flash","batman"]
marvel_heros.concat(dc_heros)
console.log(marvel_heros)
// output: ["thor", "Ironman","spiderman",["superman","flash
const allHeroes = marvel_heros.concat(dc_heros)
console.log(allHeroes)

const all_new_heros = [...marvel_heros , ...dc_heros]
console.log(all_new_heros) // output: ["thor", "Ironman","spider

const another_array= [1,23,[3,5,7],8,[12,3,45,67,1]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array) // output: [1, 23, 3,  5,  7,8, 12, 3, 45, 67, 1]

console.log(Array.isArray("Puneet"))
console.log(Array.from("Puneet")) // from is used to make array
console.log(Array.from("Puneet").join(""))
// output: "Puneet"  join is used to make string from array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
// another method
// let scores = [score1,score2,score3]
// console.log(scores)

