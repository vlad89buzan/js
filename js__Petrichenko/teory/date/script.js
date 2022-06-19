let now = new Date();
console.log(now);
// now = new Date(2020, 5, 1, 20);
// console.log(now);
// now = new Date(0);
// console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getUTCHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getTimezoneOffset());
console.log(now.getTime());

console.log(now.setHours(20));
console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
  let some = i ** 3;
}

let end = new Date();

alert(`${end-start}`);
