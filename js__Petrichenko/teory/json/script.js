const { json } = require("stream/consumers");

const person = {
    name: 'Alex',tel:'+74000000',
    parents:{
        mom: 'olga',
        dad: 'mike'
    }
};



console.log(JSON.stringify(person));
console.log(JSON.parse(JSON.stringify(person)));

const clone = JSON.parse(JSON.stringify(person));
console.log(clone);

