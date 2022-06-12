const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
};

console.log(options.name);

delete options.name;

console.log(options);
let counter = 0;
for (let key in options){
    
    if(typeof(options[key]) ==='object'){
        for(let i in options[key]){
            console.log(`svoistvo ${i}, znachenie ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`svoistvo ${key}, znachenie ${options[key]}`);
        counter++;
    }
   
}
console.log(counter);
