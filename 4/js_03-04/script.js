// class -> .CLASS_NAME
// id -> #ID
// tag -> TAG_NAME

// var a = document.querySelector('a');
// var oldHref = a.getAttribute('href');
// //console.log(a.getAttribute('title'))
// //console.log(a.attributes)

// a.setAttribute('href', 'https://ya.ru')
// //console.log(a.getAttribute('href'))
// a.textContent='yandex'
// a.setAttribute('title', 'go to yandex')


// var box1 = document.querySelector('#box1')
// var box2 = document.querySelector('#box2')

// box1.classList.add('red')
// //box2.classList.add('blue')
// //box2.classList.remove('blue')
// var hasClass = box2.classList.contains('blue')
// console.log(hasClass)

// if(hasClass){
//     box2.classList.remove('blue')
// } else {
//     box2.classList.add('blue')
// }

// var a = document.querySelector('a')
// var oldHref = a.getAttribute('href');

// a.setAttribute('href','https://ya.ru')
// a.textContent='yandex'
// a.setAttribute('title','go to yandex')
// console.log(a.attributes)


var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')

box1.classList.add('red')
//box2.classList.add('blue')
box2.classList.remove('blue')

var hasClass = box2.classList.contains('blue')
console.log(hasClass)


if(hasClass){
    box2.classList.remove("blue")
} else {
    box2.classList.add('blue')
}
