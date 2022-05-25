var person = {
    name:'ivan',
   year: 1990,
    family:['elena','igor'],
    car:{
        year: 2010,
        model: 'tesla'
    },
    calculateAge: function(){
        var age = 2018 - this.year;
        console.log(age);
        
    }

}

console.log(person.name)


person.name ='vasya'
console.log(person.name)
console.log(person.calculateAge())