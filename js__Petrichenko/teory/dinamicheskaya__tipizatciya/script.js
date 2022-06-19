//to string

//1 string
console.log(typeof String(null));

//2 concatenatciya
console.log(typeof (5 + ""));

const number = 5;
console.log("ddddddddd" + number);

const fontSize = 26 + 'px';

// to number
//1 Number
console.log(typeof Number('5'));

//2 unarnui plus

console.log(typeof(+'5'));

//3 parseInt
console.log(typeof(parseInt('15px')));

// to boolen
// false --- 0,"",null,undefined, NaN;
//1

let switcher = null;
if(!switcher){
    console.log('aaa');
}
//2 boolean
console.log(typeof Boolean('5'));
//3 !!
console.log(typeof !!('5'));



