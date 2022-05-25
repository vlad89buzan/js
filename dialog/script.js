// let age = prompt('What is your age','0')
// if(age != null){
//     alert(age)
// } else{
//     alert('you press escape')
// }

// if(confirm('delete your account')){
//     alert('deleted')
// } else{
//     alert('canceled')
// }

// confirm('delete your account') ?  alert('deleted') :  alert('canceled');

let age = +prompt("What is your age", "0");
// if(age  < 18 && age !== 0){
//     console.log(age)
//     alert('your age is under 18')
// } else if(age>18){
//     alert('you age is above 18')
// } else if(age === 18){
//     alert('your age is 18')
// } else {
//     alert('enter a number')
// }

switch (true) {
  case age > 18:
    alert("you age is above 18");
    break;
  case age === 18:
    alert("you age is  18");
    break;
    case age === 0:

        alert("enter a number");
        break;
  case age < 18:

    alert("you age is under 18");
    break;
  
  default:
    console.log(age);
    alert("enter a number");
}
