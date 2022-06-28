"use strict";

// function User(name, age) {
//   this.name = name;
//   let userAge = age;

//   this.say = function () {
//     console.log(`username is ${this.name}, age is ${userAge}`);
//   };

//   this.getAge = function () {
//     return userAge;
//   };
//   this.setAge = function (age) {
//     if(typeof age === 'number' && age > 0 && age < 110){
//         userAge = age;
//   } else {
//     console.log('nedopustimoe znachenie');
//   }
// };
// }
// const ivan = new User("ivan", 27);
// console.log(ivan.name);
// console.log(ivan.getAge());
// console.log(ivan.setAge(30));
// console.log(ivan.getAge());

// ivan.say();
class User{

    constructor(name,age){
        this.name = name;
        this._age = age;
    }
 

  say() {
    console.log(`username is ${this.name}, age is ${this._age}`);
  }

  get age() {
    return this._age;
  }
  set age(age) {
    if(typeof age === 'number' && age > 0 && age < 110){
        this._age = age;
  } else {
    console.log('nedopustimoe znachenie');
  }
}
}

const ivan = new User('ivan',27);
console.log(ivan.age);
ivan.age = 90;
console.log(ivan.age);
ivan.say();

