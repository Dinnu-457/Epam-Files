/* any browser cannot understand typescript directly
   so, we need a compiler which converts .ts file to .js file
   if you see when u compile this one then you can observe there is a js file has been created

   class Animal{}
*/

//you are casting the num with string type
let num:string='one';
//try changing then u get an error
//let num:number=1;
//you can have "any and unknown" datatype
//if you use any u can use any type value
let num1:any=2;
/* 
you can also use unknown but when we want to assign a value to a number type or string type u cannot assign that unknown value to that variable
so u get an error,but if u consider using any it can be assigned to any type variable

function getCity(name:unknown){
    const a:number=name;
    console.log(a);
}
getCity("hii"); 
*/

//everything is same only differnece annitiki type petali

//types cannot be redefined but interfaces can
type a={
    name:string
}
type b={
    loc:string
}

//interfaces can redefine
interface c{
    name:string
}
// you can add a new parameter
//now c interface is having name and num
interface c{
    num:number
}

//enums can also be used
//to club all static values in one block
enum states {
    andhrapradesh=21,
    Karnataka=22
}
console.log(states.andhrapradesh);

let asNull:null='mk';