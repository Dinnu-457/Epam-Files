//bad request is something we are trying to search a resource or save some data which is not there ,then you get status code as 400+ no.

//importing filesystem module
const fs=require("fs");


//whenever you change the data or content of a file then below function tells when have you changed
fs.watchFile("default.js",(curr,prev)=>{
console.log(`current time -${curr.mtime} || Previous Time -${prev.time}`);
});

fs.watch("default.js",{},(eventType,filename)=>{
    console.log("Event Type:",eventType);
    console.log("File Name:",filename);
})

//for every 1000 milliseconds you would get whatever you wrote
setInterval(()=>{
for (let index = 0; index < 1000000; index++) {
    //console.log(index);
}
},1000);

//you do an opeartion or request ,if your request is complete then you will get response
//whatever request you give but for-loop is on top of the stack as js is asynchronous your request wont be denied 
//whatever extra request give like here if you change filename or add something in default1.js you will get ouput i.e response will be given by js
  
