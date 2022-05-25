// let admin = {
//     rules:777,
//     isAdmin(){
//         console.log('ya admin, my rules '+this.rules)
//     }
// }

// let user = {
//     name: 'Ivan',
//     age:20,
//     __proto__:admin,
// }

// function User(name,age){
//     this.name =name;
//     this.age = age;
//     this.__proto__ =admin;
// }

// let u1 = new User('vlad','21')
// let u2 = new User('kate','24')
// let u3 = new User('misha','22')

// function User(name,age){
//     this.name =name;
//     this.age = age;
//     this.myInfo = function(){
//         console.log("my name is "+this.name+", i'm "+this.age+" old")
//     }
// }

class User {
  constructor(name, age, admin = false) {
    this.name = name;
    this.age = age;
    this.admin = admin;
  }

  myInfo() {
    console.log("my name is " + this.name + ", i'm " + this.age + " old");
  }
}

let u1 = new User("vlad", "21");
let u2 = new User("kate", "24");
let u3 = new User("misha", "22");


class Moderator extends User{
    addPost(){
        console.log('New Post')
    }
}

let m1 = new Moderator('vasya',34)