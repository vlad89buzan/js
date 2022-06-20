"use strict";

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  calcArea(){
    return this.height * this.width;
  }
}
class ColoredRectangleWithText extends Rectangle{
    constructor(height,width,text,bgColor){
        super(height,width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps(){
        console.log(`text: ${this.text}, bgColor: ${this.bgColor}`);
    }

}
const square = new Rectangle(10,10);
const long = new Rectangle(20,100);
console.log(square.calcArea());
console.log(long.calcArea());

const div = new ColoredRectangleWithText(25,10,'hello World', 'red');
div.showMyProps();
console.log(div.calcArea());
