let a = 5;
let b = 6;
let c;
c = a + b;
console.log(c);

function sum(d, f) {
  const e = d + f;
  console.log(e);
}

sum(8, 10);
sum(10,18);

function my(a,b){
    let c;
    a = a+1;
    c = a+b;
    return c;
}


console.dir(my)


const personOne = {
    name: "bob",
    age:21
}

function increasePersonAge(person){
    person.age +=1;
    return person
}

increasePersonAge(personOne);
console.log(personOne.age);


function print(){
    console.log('bogdan')
}

setTimeout(print,1000)