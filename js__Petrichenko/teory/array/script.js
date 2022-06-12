const arr = [1, 2, 3, 6, 8];
// pop udalyaet poslednii element s massiva
arr.pop();
console.log(arr);
// push dobavlyaet poslednii element v massiv
arr.push(8);
console.log(arr);
// shift udalyaet pervui element z massiva
arr.shift();
console.log(arr);
// unshift dobavlyaet pervui element v massiv
arr.unshift(1);
console.log(arr);
// perebor masiva
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//for of mogna ispolzovat break i continue
for (let value of arr) {
  console.log(value);
}

arr.forEach(function (item, index, arr) {
  console.log(`${index}: ${item} vnutri masiva ${arr}`);
});

// arr.map() perebiraet i modifitcuruet masiv
// arr.filter() 
// arr.reduce
//split iz stroki v masiv
const str = prompt('','');
const products = str.split(', ');
console.log(products);
//join obedinenie elementov masiva
console.log(products.join('; '));

// sort sortirovka
console.log(products.sort());

//sortirovka chisel
arr.sort(compareNum);
console.log(arr);
function compareNum(a,b){
    return a-b;
}
