let count = 0;
while (count < 10) {
  console.log(count);
  if (count == 4) {
    break;
  }
  count++;
}
let count1 = 10;
do {
  console.log(count1);
  count1--;
} while (count1 > 7);

let arr = [5, 7, 9, 1, 0];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] * 2);
}

let arr2 = [5, 7, 9, 1, 0];
for (let item of arr2) {
  console.log(item);
}

let obj = {
  name: "petr",
  age: 16,
  number: 1,
};
for (let key in obj) {
  console.log(obj[key]);
}

let arr3 = [5, 7, 9, 1, 0];
arr3.forEach(function (item, index, array) {
  console.log(`${item} ${index} ${array}`);
});

let people = [
  { id: 1, name: "ivan" },
  { id: 2, name: "van" },
  { id: 3, name: "an" },
  { id: 4, name: "n" },
];

let a = people.find(function (item) {
  if (item.id == 2) return item;
});

console.log(a);
let b = people.filter(function (item) {
  if (item.id < 2) return item;
});

console.log(b);

let arr4 = [5, 7, 9, 1, 0];
let newArr = arr4.map(function (item, index) {
  return item * 3;
});
console.log(newArr);

let arr10 = [];
for (let i = 0; i < 20; i += 2) {
  arr10.push(i);
}
console.log(arr10)

let arr30 = [];
for (let i = 30; i > 0; i -=3) {
    arr30.push(i);
  }
  console.log(arr30)