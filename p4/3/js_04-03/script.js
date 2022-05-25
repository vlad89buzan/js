// const { maxHeaderSize } = require("http");

// var str = "1,2,3,4,5,6,7,8";

// var array = str.split(',')

// // console.log(array.join(';'))
// // console.log(array.reverse())

// array.splice(1, 0, '11', '22')

// var newArray = array.concat()

// // console.log(newArray)

// var objArr = [
//   {name: 'Max', age: 27},
//   {name: 'Elena', age: 18},
//   {name: 'Victor', age: 20}
// ]

// var foundPerson = objArr.find(function(person) {
//   return person.age === 20
// })

// var oddArray = [1,2,3,4,5,6,7,8,9].filter(function(i) {
//   return i % 2 === 0
// })

// var numArray = array.map(function(i) {
//   return i * 2
// })
// console.log(numArray)

var str = "1,2,3,4,5,6,7,8,9";

var array = str.split(",");

// console.log(array.join(';'))

// console.log(array.reverse())
array.splice(0, 0, "11");

var newArray = array.concat([1, 2]);

var objArr = [
  { name: 'max', age: 27 },
  { name: 'elena', age: 18 },
  { name: 'victor', age: 20 }
];

var foundperson =objArr.find(function(person){
  //console.log(person)
  return person.age === 20
})

 //console.log(foundperson)


var oddArray = [1,2,3,4,5,6,7,8,9].filter(function(i){
return i%2 !=0
 })

 console.log(oddArray)

 var numArray = array.map(function(i){
   return parseInt(i)
 })
 console.log(numArray)
