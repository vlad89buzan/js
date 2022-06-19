
const box =document.querySelector('.box');

// const width = box.clientWidth;
// const height = box.clientHeight;
// console.log(width,height);

//offset s marginami
// const width = box.offsetWidth;
// const height = box.offsetHeight;
// console.log(width,height);

// const width = box.scrollWidth;
// const height = box.scrollHeight;
// console.log(width,height);


const btn = document.querySelector('button');
console.log(btn);
btn.addEventListener('click', ()=>{
// 
console.log(box.scrollTop);
});
console.log(box.getBoundingClientRect());
console.log(window.getComputedStyle(box).display);

