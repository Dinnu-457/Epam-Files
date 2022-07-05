var a=9;
let b=9;
const c="dinesh";

console.log(a,b,c);

//c+="dinesh";//it is immutable

const obj1={
    a:1
}

var obj2={
    a:2
}

let obj3={
    a:3
}
console.log(obj1,obj2,obj3);

Object.freeze(obj1);//prevents mutations i.e writable:false,configurable:false

obj1.a++;
obj2.a++;
obj3["a"]++;
console.log(obj1,obj2,obj3);

/*
you cannot redeclare the const and let variable
var can be declared again

const obj1={
    b:4;
}

var obj2={
    b:2
}

let obj3={
    b:3
}
*/
function sayHello(str){
    const a=1;
    console.log(str);
    if(a>=1){
    const a=2;
    console.log("inside a",a);//2
    }
    console.log("outside a",a);//1

    //if in place of const var is there then you would get both outputs as 2
    //because var is global
}

sayHello("Dinesh")

//let and const came to remove var so better avoid var

