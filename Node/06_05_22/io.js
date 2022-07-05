console.log("hello");
console.log("world");
//you get output in new line because there is some inbuilt functions as node is built by combining C AND C++

const fs=require("fs");

process.stdout.write("hello");
process.stdout.write("world");
//the above 2 statements in single line but not like console.log()
//you can write as below to give output in 2 different lines
const logMessage= (msg)=>{process.stdout.write("\n"+msg)};
logMessage("hello");
logMessage("world");

//console.log() is  a wonderful wrapper whixh has all builtin functionality which is helping us not to write more code
//if ypu want to write errors use below one
process.stderr.write("hello");


const person={};
const nameProp=Object.defineProperty(person,'name',
    {
        configurable:true,
        set:(val)=>{
            value=val;
            console.log("Name is "+value);
        },
        get:()=>value,
    }
);

//to read data from console
/*person.name=process.stdin.on("data",(data)=>
{
    person.name=data.toString();
});
*/
//you can also use arguments

console.log(process.argv);


