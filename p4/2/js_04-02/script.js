// document.querySelector('#alert').addEventListener('click', function() {
//   alert('Вы успешно кликнули по кнопке!')
// })

// document.querySelector('#confirm').addEventListener('click', function() {
//   var decision = confirm('Вы уверены в том, что хотите нажать на кнопку?')

//   if (decision) {
//     alert('Вы успешно кликнули по кнопке!')
//   }
// })

// document.querySelector('#prompt').addEventListener('click', function() {
//   var age = prompt('Введите свой возраст', 18)

//   if (age >= 18) {
//     alert('Вы можете пройти')
//   } else {
//     alert('Вы еще слишком молоды')
//   }
// })

// console.error('Console.error')

// console.log('Console.log')
// console.warn('Console.warn')
// console.info('Console.info')


document.querySelector('#alert').addEventListener('click',function(){
  alert('you clicked on button')
})
document.querySelector('#confirm').addEventListener('click',function(){
  var desicion =confirm('are you sure that you want press on button?')
  console.log(desicion)

  if (desicion){
    alert('you clicked on button')
  }
})

document.querySelector('#prompt').addEventListener('click',function(){
  var age =prompt('enter your age','18')
  if(age >=18){
    alert('you can go')
  } else {
    alert('you are too young')
  }
})

// console.warn('console.warn')
// console.info('ppppppppppppppp')
// console.error('console.error')

// throw new Error('error')

