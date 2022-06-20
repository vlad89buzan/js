//function can be called in 4 ways and context will be different in all this cases;
"use strict";
//1 obuchnaya function this = window, but if use strict this = undefined
function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }
  console.log(sum());
}
showThis(4, 5);

//2 this in object methods will be object
const obj = {
  a: 20,
  b: 15,
  sum: function () {
    console.log(this);
  },
};
obj.sum();

//3 this v constructore i classah eto novui examplyar objecta

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
      console.log(`Hello ${this.name}`);
    };
  }
  const vlad = new User("vlad", 28);

//4  ruchnaya pivyazka this --- call,apply,bind
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);

}
const user = {
    name: 'vlad'
};

sayName.call(user,'Smith');
sayName.apply(user,['Smith']);

function count(num){
    return this*num;
}

const double = count.bind(2);
console.log(double(12));

//-----------------------------------------------------
//5
// when function() addEventlistener this = e.target
//when ()=> this = parent, ne imeet context  vuzova
const btn = document.querySelector('button');
btn.addEventListener('click',function(){
console.log(this);
this.style.backgroundColor = 'red'; 
});

btn.addEventListener('click',()=>{
console.log(this);
this.style.backgroundColor = 'red'; 
});