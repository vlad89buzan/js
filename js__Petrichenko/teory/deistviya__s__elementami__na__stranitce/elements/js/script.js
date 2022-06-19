'use strict';

const box = document.getElementById('box');
const buttons = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

buttons[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for(let i = 0; i< hearts.length;i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item =>{
item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('aaaaaaaa');

div.classList.add('black');

document.querySelector('.wrapper').append(div);
// document.querySelector('.wrapper').prepend(div);


// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();

hearts[0].replaceWith(circles[0]);

 div.innerHTML = '<h1>ddddddd</h1>';
// div.textContent = 'dddddddd';

div.insertAdjacentHTML('beforebegin','<h2>fffff</h2>');
div.insertAdjacentHTML('afterbegin','<h2>fffff</h2>');
div.insertAdjacentHTML('beforeend','<h2>fffff</h2>');
div.insertAdjacentHTML('afterend','<h2>fffff</h2>');




