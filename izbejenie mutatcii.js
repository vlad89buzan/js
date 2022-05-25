const person = {
    name: "bob",
    age:25
}
const person2 = Object.assign({},person);
person2.age =26;

console.log(person.age);
console.log(person2.age);
   
const person3 = {...person}
person3.name = "alise";

console.log(person3.name);
console.log(person.name);

const person4 = JSON.parse(JSON.stringify(person));
person4.name = "vlad";
console.log(person.name);
console.log(person4.name);