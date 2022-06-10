function Calculator() {
  
  this.read = function () {
    this.a=+prompt("enter a", 0);
    this.b=+prompt("enter b", 0);
    };
    this.sum = function(){
        this.read()
        console.log(this.a + this.b)
    };
    this.mul = function(){
        this.read()
        console.log(this.a * this.b)
    };
   

}
let calculator = new Calculator();
 
calculator.sum();

