const btn = document.querySelector("button");
const overlay = document.querySelector('.overlay');
// btn.onclick = function(){
//     alert('click');
// };
let i = 0;
const deleteElement = (e) => {
  console.log(e.currentTarget);
  i++;
//   if(i==1){
//     btn.removeEventListener('click',deleteElement);
//   }
};
btn.addEventListener('click',deleteElement);
overlay.addEventListener('click',deleteElement);

const link =document.querySelector('a');
link.addEventListener('click',function(e){
e.preventDefault();
console.log(e.target);
});

