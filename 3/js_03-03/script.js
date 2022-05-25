// class -> .CLASS_NAME
// id -> #ID
// tag -> TAG_NAME

var div = document.querySelector('#playground')
var p = document.querySelectorAll('.text')
var h1 = document.querySelector('h1')
var input = document.querySelector('input')
div.innerHTML = '<h2 style="color:red;font-size:40px;">from javascript'
h1.textContent = 'chanched from js'


console.log(div.innerHTML)
console.log(h1.textContent)
console.log(input.value)