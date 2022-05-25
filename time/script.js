let a=new Date();
console.log(a)
let b=new Date(60000);
console.log(b)
let c=new Date('2015-05-25T10:55:55.954');
console.log(c)
let e=Date.parse('2015-05-25T10:55:55.954');
console.log(e)

let f=new Date(2015,6,21,10,51,54)
console.log(f)
console.log(f.getFullYear())
console.log(f.getMonth())
console.log(f.getDate())
console.log(f.getDay())
console.log(f.getTime())
console.log(f.getHours())
console.log(f.getMinutes())
console.log(f.getSeconds())
console.log(f.getTimezoneOffset())

let aa = new Date(2016,1,28)

aa.setDate(aa.getDate()+2)
console.log(aa)
console.log(+aa)

let cc = Date.now(new Date())

for (let i=0;i<1000;i++){
    console.log(0)
}
let dd = Date.now(new Date())
console.log(cc)
console.log(dd)
console.log(dd-cc)


let ee = new Date(2014,11,31,12,30,0)
let options = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',

}

console.log(ee.toLocaleString('ua',options))