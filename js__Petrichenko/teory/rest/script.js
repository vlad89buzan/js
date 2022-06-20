const log = function (a, b, ...rest) {
  console.log(a, b, rest);
};
log(10, 20, 30, 40, 50, 60);

function calcOrDouble(number, basis = 2){
    console.log(number*basis);
}
calcOrDouble(5);