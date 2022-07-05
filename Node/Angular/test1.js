/* any browser cannot understand typescript directly
   so, we need a compiler which converts .ts file to .js file
   if you see when u compile this one then you can observe there is a js file has been created

   class Animal{}
*/
//you are casting the num with string type
var num = 'one';
//try changing then u get an error
//let num:number=1;
//you can have "any and unknown" datatype
//if you use any u can use any type value
var num1 = 2;
//enums can also be used
//to club all static values in one block
var states;
(function (states) {
    states[states["andhrapradesh"] = 21] = "andhrapradesh";
    states[states["Karnataka"] = 22] = "Karnataka";
})(states || (states = {}));
console.log(states.andhrapradesh);
var asNull = 'mk';
