// var button =document.querySelector('button');
// var h1 =document.querySelector('h1');
// var input =document.querySelector('input');

// function buttonHandler(){
// console.log('clicked');
// console.log(typeof h1)
// h1.textContent = input.value;
// }
// h1.addEventListener('mouseenter',function(){
//   console.log('mouse has entere h1')
//   this.style.color = 'red';
//  // this.style.backgroundColor = 'blue';
//   this.style.border = '1px solid black'

// })
// h1.addEventListener('mouseleave',function(){
//   console.log('mouse has leave h1')
//   this.style.color = 'blue';
 
// })

// button.addEventListener('click',buttonHandler)

var button = document.querySelector('button');
var h1 = document.querySelector('h1');
var input = document.querySelector('input');
var color = document.querySelector('.color');

function buttonHandler(){
  console.log('clicked')
  h1.textContent=input.value
  h1.style.color = color.value
}

h1.addEventListener('mouseenter',function(){
 this.style.color ='red'
 this.style.backgroundColor = "blue"
})
h1.addEventListener('mouseleave',function(){
  this.style.color ='black'
  this.style.backgroundColor = "red"
})
 
button.addEventListener('click',buttonHandler)
