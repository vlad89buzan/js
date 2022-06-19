// const timerId = setTimeout(function(text){
// console.log(text);
// },2000,'hello');
// const timerId = setTimeout(function () {
//   console.log("text");
// }, 2000);
// const timerId = setTimeout(function(text){
// console.log(text);
// },2000,'hello');
// const timerId2 = setTimeout(logger,2000);
// clearInterval(timerId2);
// function logger (){
//     console.log('text123');
// }
// let timerId2;
// let i = 0;
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
// const timerId2 = setTimeout(logger,2000);
//   timerId2 = setInterval(logger, 2000);
// });

// function logger() {
//   console.log("text123");
//   i++;
//   if (i === 3) {
//     clearInterval(timerId2);
//   }
// }

// let id = setTimeout(function log() {
//   console.log("hello");
//   id = setTimeout(log, 500);
// }, 500);

const btn = document.querySelector(".btn");
btn.addEventListener('click',myAnimation);
let timerId;
let i = 0;


function myAnimation() {
  const elem = document.querySelector(".box");
  let position = 0;
  const id = setInterval(frame, 10);
  function frame() {
    if (position == 300) {
      clearInterval();
    } else {
      position++;
      elem.style.top = position + "px";
      elem.style.left = position + "px";
    }
  }
}
