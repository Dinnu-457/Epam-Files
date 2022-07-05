/*function person(personName,age){
    this.personName=personName;
    this.age=age;
}
    function tell(){
          console.log(this.personName+""+this.age);
    }
const p2=new person("Dinesh",90);
tell.call(p2);
*/


//area

//encapsulation & abstraction
class A{
    #b;//better you declare private no.s here
    constructor(l,b){
         this.l=l;
         this.#b=b;
    }
    //we can make methods as private also #
    //# this hashtag basically tells that it is not visisble to outside the world
    // inorder to call private function then you need to create a public function and call in it
    #show(){
        console.log(this.#b);
       console.log(this.b);
    }
    //accesing private method or function in public as below
    //this is sadi to be datahiding+binding methods=encapsulation
    showfield(){
        this.#show();
    }
    static showStatic(){
        console.log("call this method via classname,here goes u are in static method buddy");
    }
}
const a=new A(1,2);
a.b=2;//this will point to b it wont be private,once study about this one
a.showfield();
A.showStatic();
console.log(Object.getOwnPropertyDescriptors(a));

