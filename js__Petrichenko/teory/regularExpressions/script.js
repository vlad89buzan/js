
// new RegExp('pattern','flags');
// /pattern/f

// const ans = prompt('enter your name');

// const req = /n/ig;
//i vne zavisomosti ot registra
//g --vse
//m --mnogostrochnui regum

// console.log(ans.search(req));
// console.log(ans.match(req));


// const pass = prompt('pass');
// console.log(pass.replace(/./g, '*'));

// \d numbers
// \w letters
// \s  spaces
// \D not numbers
// \W not letters

const str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i));