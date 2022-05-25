// document.querySelector('#load').addEventListener('click', load)

//const { async } = require("q");

// async function load() {
//   var url = 'https://jsonplaceholder.typicode.com/users'

//   var response = await fetch(url)
//   var data = await response.json()

//   var ul = document.querySelector('#list')

//   var html = data.map(function(item) {
//     return '<li>' + item.id + ' ' + item.name + ' (' + item.email + ')</li>'
//   })

//   ul.insertAdjacentHTML('afterbegin', html.join(' '))
// }

document.querySelector("#load").addEventListener("click", load);
async function load() {
  let url = "https://jsonplaceholder.typicode.com/users";

  var response = await fetch(url);
  var data = await response.json();

  var html = data.map(function (item) {
    return "<li>" + item.id + " " + item.name + " (" + item.email + ")</li>";
  });

  document
    .querySelector("#list")
    .insertAdjacentHTML("afterbegin", html.join(" "));
}
