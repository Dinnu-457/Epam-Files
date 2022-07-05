function Person(name){
    this.name=name;
    if(this.constructor==Person){
        throw new Error("I dont want you providing direct access");
    }
}
Person.prototype.info=function(){
    return this.name;
}


//const p=new Person("Dinesh");
//If you uncomment the above line then you would get error in if condition


/*
this below function is created because to access the person details like imagine abstarct class in java
that we cannot create object for abstract class so we create a class and extend abstract class and 
create object for that.Similarly here also doing the same thing
*/

/*
we will define a construct function (subclass) named “Teacher” that inherits the properties and 
methods of the created “Person” class by utilizing the “Prototype Chaining”.
*/

function Teacher(name){
    this.name=name;
};

/*
In this case, the implementation of the “Person” Abstract class is hidden, and 
the “Teacher” Subclass can only access the “info()” method to return the value of the “name” property

*/

Teacher.prototype=Object.create(Person.prototype);
const t=new Teacher("Dinesh");
console.log(t.info());
console.log(Person.prototype);//info:function()
console.log(Teacher.prototype);//person{}

//lets implement the above one using classes

class Person{
    constructor(name){
        if(this.constructor==Person){
            throw new Error("you cannot access via Person obj");
        }
    this.name=name;
    }
    info(){
        throw new Error("you cannot access this method via Person obj");
    }
}
//the only way you can do by creating new class and inherit class Person

class Person{
    constructor(name){
        if(this.constructor==Person){
            throw new Error("you cannot access via Person obj");
        }
    this.name=name;
    }
    info(){
        throw new Error("you cannot access this method via Person obj");
    }
}
//the only way you can do by creating new class and inherit class Person

class Teacher extends Person{
    constructor(name){
        super();
        this.name=name;
    }
    info(){
        console.log(this.name);
    }
}
const t=new Teacher("Dinesh");
t.info();