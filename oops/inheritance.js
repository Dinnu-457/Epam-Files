//inheritance
/*

function shape(){};

function calculateArea(){
    console.log(`Area of triangle:${0.5*this.b*this.h}`);
}

shape.prototype.getArea=calculateArea;

console.log(shape.prototype)
function Triangle(b,h){
    this.b=b;
    this.h=h;
}
Triangle.prototype=new shape();
var tri=new Triangle(3,4);

tri.getArea();
*/

class Shape{
    name;
    constructor(name){
        this.name=name;
    }
    calculateArea(){
        console.log(`${this.name}+":"+${this.l*this.b}`)
    }
}
class Rectangle extends Shape{
   constructor(l,b){
       super("Rectangle")
       this.l=l;
       this.b=b;
   }
}
var a=new Rectangle(1,2).calculateArea();
