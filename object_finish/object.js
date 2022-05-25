let obj = {
  color: "red",
  numbers: ["8888", "3333"],
};
obj.numbers.splice(1, 5555);
console.log(obj.color);
console.log(obj.numbers[1]);
console.log(obj);
console.log(Object.keys(obj))

let a =[{ color: "red",
numbers: ["8888", "3333"],},{ color: "green",
numbers: ["8888", "3333"],},{ color: "yellow",
numbers: ["8888", "3333"],}]

console.log(a[1].numbers[1])