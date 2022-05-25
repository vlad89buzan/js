let arr = [5, 2, "str", true];
arr[2] = "text";
// console.log(arr[1]);
arr[4] = 999;
// console.log(arr);

let matrix = [
  [1, 3, 5],
  [2, 4, 5],
  [7, 8, 9],
];

// console.log(matrix[1][0]);

//shift zabrat 1 element s masiva
//console.log(arr.shift())

//push dobavit 1 element v masiva
// console.log(arr.push(8))



// console.log(arr.pop())
//  console.log(arr)
//scleivanie massivov concat
let arr3 =[1,3,5]
arr=arr.concat(arr3)
//console.log(arr)

//indexof
//console.log(arr.indexOf(999))

//join elementu masiva v stroku
console.log(arr.join())

//splice
let arr4=arr3;
//console.log(arr4.splice(1,1))
//console.log(arr4)
let arr5=arr3;
//console.log(arr5.splice(1))
//console.log(arr5)
let arr6=arr3;
//console.log(arr6)
//console.log(arr6.splice(1,0, 7,5,6))

//console.log(arr6.splice(1,1,'vlad'))
//console.log(arr6)

//proverla na nalichie elementa includes
// console.log(arr6.includes(6))

//vozvrashaet massiv s elementami v obratnomporyadke reverse
console.log(arr6.reverse())

// z stroki v masic split
console.log('ivan, kolya, vasya'.split(','))
console.log('ivan, kolya, vasya'.split(',').length)

