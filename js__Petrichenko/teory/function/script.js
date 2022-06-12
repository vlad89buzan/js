let number = 20;
function showFirstMessage(text){
    console.log(text);
   
   console.log(number);
}
showFirstMessage('aaaa');
console.log(number);

function calc(a,b){
    return (a+b);
}
console.log(calc(4,3));


//function declaration vspluvae na vverh, mogna obyvlyatu do samoi functii 
function show(par){
    return par;
}
show(5);

// function expression 
const logger = function(par2){
console.log(par2);
};
logger('text');

// strelochnaya

const calc2 = (a,b) => {
  return  (a+b);
};