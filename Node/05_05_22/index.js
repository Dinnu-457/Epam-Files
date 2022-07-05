const express=require("express");
const { use } = require("express/lib/application");
const req = require("express/lib/request");
const logger=require("./middleware").Logger;
const log1=require("./m1").log1;
const log2=require("./m2").log2;
const router=require("./routecontroller").router;
//creating an application by calling an express function
const app=express();

//here env is environment variable...You can assign this in scripts{}=>check it out in package.json
/*
As a general rule of thumb, anytime I have to declare something more than a couple of times or change a value regularly 
I look to create a variable to hold that value. It helps me to be consistent and reduce errors. 
It’s not often but sometimes my package.json could benefit from variables.
*/
const myFavHero=process.env.HERO;
const PORT=process.env.PORT || 4000;

if(process.env.ENVIRONMENT==="DEV"){
    //something meaningful happens here!!
    console.log("I am in Dev Environment");
}

//console.log(process.env);
//process.env contains user variables and environment variables like it contains whole information about user system
//we cannot see PORT no. in process.env in scripts i.e in package.json file we need to set start:"PORT=5000 nodemon index.js"

const counter=0;
//using router here which requests are mapped to respective functions in routeController.js
app.use("/api",logger,router);
//error handler
app.use((err,req,res,next)=>{
if(err){
    const Id=addError(err);
    res.statusCode=500;
res.json({msg:"Some error has occured"});
}
next();
});
/*

//if we give any other request inorder to handle that do as below

//if above use is not executed then it comes and check 2 nd condition thats below one

app.use("/*",(req,res)=>{
    res.statusCode=404;
    res.json({msg:"Couldn't find the req resource"});
});

//no u want to execute that one also then look in routecontroller.js file
*/



/*
Example how middleware to write

//express could accept any no. of arguments it accepts those as middlewares

//signature of middleware is(req,res,next)

//next basicall points to next middleware

//res.send is like return further staments not execute 

//by calling next it will move furthur like from one middleware to other

app.get("/get",
(req,res,next)=>{
 console.log("Indide Middleware1");
 next();
},
(req,res,next)=>{
    console.log("Indide Middleware2");
    next();
},
(req,res,next)=>{
    console.log("Indide Middleware3");
    next();
},
(req,res)=>{
res.send({msg:"Hello World"});
});

*/

//we wrote middleware function in middleware.js and imported and stored in logger



/*
app.get("/get",logger,log1,log2,(req,res)=>{
res.send({msg:"Hello,world"})
})
app.post("/post",logger,log1,log2,(req,res)=>{
    res.send({msg:"Hello World"})
});

app.put("/put",logger,(req,res)=>{
    res.send({msg:"Hello World"});
});

app.delete("/delete",logger,(req,res)=>{
    res.send({msg:"Hello World"});
});
*/



app.listen(PORT,(req,res)=>{
    console.log(`The server is running on port ${PORT}`);
});


