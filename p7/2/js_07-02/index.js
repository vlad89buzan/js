// function getAge(year) {
//   const current = new Date().getFullYear()
//   return current - year
// }

// const calculateAge = (year) => {
//   const current = new Date().getFullYear()
//   return current - year
// }

// const getAge = year => {
//   const current = new Date().getFullYear()
//   return current - year
// }

// const getAge = year => new Date().getFullYear() - year

// const logAge = year => console.log(new Date().getFullYear() - year)

// logAge(1993)

// console.log(getAge(1949))

// 


// function getAge(year) {
//   const current = new Date().getFullYear()
//   return current - year
// }

// console.log(getAge(1993))


// const calculateAge =(year) =>{
//   const current = new Date().getFullYear()
//   return current - year
// }

// console.log(calculateAge(1997))

// const age =year=>{
//   const current = new Date().getFullYear()
// return current - year
// }
//console.log(age(1997))

// const getAge = year =>new Date().getFullYear() - year
// console.log(getAge(1945))


const person ={
  age:25,
  name1: 'vlad',
  logNameWithTimeout () {
    setTimeout(() =>{
      console.log(this.name1)
    },1000)
  }
}
person.logNameWithTimeout()