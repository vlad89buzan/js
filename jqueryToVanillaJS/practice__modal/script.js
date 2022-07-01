window.addEventListener("DOMContentLoaded",()=>{
const modal = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const buttons = document.querySelectorAll('button[data-popup="true"]');
const close = document.querySelector('.close-btn');
const fruitName = document.querySelectorAll('.fruit-name');
console.log('aaa');
close.addEventListener('click', ()=>{
modal.classList.toggle('popup_active');
overlay.style.display = 'none';
});
buttons.forEach(button => button.addEventListener('click',()=>{
    console.log(button.dataset.fruit);
    console.log(fruitName);
fruitName.forEach(text =>text.textContent = button.dataset.fruit);
overlay.style.display = 'block';
modal.classList.toggle('popup_active');
}));
});