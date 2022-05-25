// setTimeout(function(){
//   alert('hello timeout')
// },2000)
let counter = 0;
var interval = setInterval(function(){
  counter++
  console.log(counter)
},2000)
setTimeout(function(){
  clearInterval(interval)
},5000)
