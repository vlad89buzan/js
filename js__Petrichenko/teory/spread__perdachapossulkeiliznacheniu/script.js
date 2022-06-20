let a = 5;
let b = a;

b = b + 5;
console.log(b);
console.log(a);

const obj = {
  a: 5,
  b: 1,
};

const copy = obj; //ssulka na obj, a ne sam obj

copy.a = 10;
console.log(copy);
console.log(obj);

//1 poverhnostnaya copiya
function copyObj(mainObj) {
  let objCopy = {};
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = copyObj(numbers);

newNumbers.a = 10;

console.log(numbers);
console.log(newNumbers);

//2  poverhnostnaya copiya Object.assign()
const add = {
  d: 17,
  e: 20,
};
console.log(Object.assign(numbers, add));

//3 copia massiva

const oldArr = ["a", "b", "c"];
const newArr = oldArr.slice();
newArr[1] = "dddddddddddd";
console.log(newArr);
console.log(oldArr);

// 4 spread operator razvorota
const video = ["youtube", "vimeo"],
      blogs = ["wordpress", "livejournal", "blogger"],
      internet = [...video, ...blogs, "vk", "facebook"];
console.log(internet);

function log(a1, b1, c1) {
  console.log(a1);
  console.log(b1);
  console.log(c1);
}

const num = [2,5,7];

log(...num);

// 5 
const array = [a,b];

const newArrray = [...array];


const q = {
    one:1,
    two: 2,
};

const newObj = {...q};