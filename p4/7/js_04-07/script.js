document.querySelector('button').addEventListener('click', function(event) {

  var value = document.querySelector('input').value

  var obj = {
    text: value
  }

  localStorage.setItem('headerText', JSON.stringify(obj))

})

document.addEventListener('DOMContentLoaded', function() {

  var obj = {} // undefined

  try {
    obj = JSON.parse(localStorage.getItem('headerText'))
  } catch(e) {}
  
  // undefined . text
  if (obj && obj.text && obj.text.trim()) {
    document.querySelector('h1').textContent = obj.text
  }
})


// document.querySelector('button').addEventListener('click',function(){
//   var value = document.querySelector('input').value

//   localStorage.setItem('headerText',value)
// })

// document.addEventListener('DOMContentLoaded',function(){
// var text = localStorage.getItem('headerText')
// if(text && text.trim()){
//   document.querySelector('h1').textContent = text
// }
  
// })