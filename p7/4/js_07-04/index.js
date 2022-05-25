// const createCar = (name, model) => ({name, model})

// const ford = createCar('Ford', 'Focus')

// console.log(ford)

// const yearField = 'year'

// const bmw = {
//   name: 'BMW',
//   ['model']: 'X6 Sport',
//   [yearField]: 2018,

//   logFields() {
//     const {name, year, model} = this
//     console.log(name, model, year)
//   }
// }

// console.log(bmw)
// bmw.logFields()

// // const year = bmw.year
// const {year} = bmw
// console.log(year)


// const createCar = (name, model) =>{
//   return {name,model}
// }
const createCar = (name, model) =>({name,model})
 

const ford = createCar('ford','focus')
console.log(ford)

const yearField = 'year'

const bmw = {
  name:'bmw',
  ['model']:'x6 sport',
  [yearField]: 2018,

  logfields(){
    const {name, year, model} = this
    console.log(name, model, year)
    //console.log(this.name,this.model,this.year)
  }
}
console.log(bmw)
bmw.logfields()


//const year = bmw.year
const {year} = bmw
console.log(year)