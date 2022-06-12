let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));


const soldier = {
    health: 400,
    armor:100,
};

// const Jonh = {
//     health: 100,
// };

// Jonh.__proto__ = soldier;

// Object.setPrototypeOf(Jonh, soldier);

// console.log(Jonh.armor);

const john = Object.create(soldier);