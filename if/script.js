// let jsname = prompt('Какое «официальное» название JavaScript?','')
// if (jsname== 'ECMAScript'){
//     alert('Верно!')
// } else{
//     alert('Не знаете? ECMAScript!')
// }

// let number = prompt("enter number", "");
// if (number > 0) {
//   alert("1");
// } else
// if (number < 0) {
//   alert("-1");
// } else alert("0");

// let result;
// let a =1;
// let b=1;

// // if (a + b < 4) {
// //   result = 'Мало';
// // } else {
// //   result = 'Много';
// // }
// (a+b<4) ? result = 'Мало': result = 'Много';
// console.log(result)
// let login = "Директор";
// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// login == "Сотрудник"
//   ? (message = "Привет")
//   : login == "Директор"
//   ? (message = "Здравствуйте")
//   : login == ""
//   ? (message = "Нет логина")
//   : (message = "abc");

// console.log(message);

let login = prompt("Кто там?");
if (login === "Админ") {
  let pass = prompt("password?", "");
  if (pass === "Я главный") {
    alert("Здравствуйте!");
  } else if (pass === "null" || pass === "") {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (login === null || login === "") {
  alert("Отменено");
} else {
  alert("i don't know you");
}
