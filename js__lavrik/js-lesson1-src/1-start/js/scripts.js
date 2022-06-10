// #1
// window.onload = function(){
// 	let div = document.querySelector('.some');
// 	div.innerHTML = '1'
// }

// #2
// window.onload = pageLoaded;
// function pageLoaded(){
// 	let div = document.querySelector('.some');
// 	div.innerHTML='1';
// }

//#3
window.addEventListener('load',function(){
	let div = document.querySelector('.some');
 	div.innerHTML='1';
})

//#4
// window.addEventListener("load", pageLoaded);
// function pageLoaded() {
//   let div = document.querySelector(".some");
//   div.innerHTML = "1";
// }
