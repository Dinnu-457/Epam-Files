//we are creating this inorder to maintain code neat
//whenever we receive /api/get or /api/post etc we need to call below respective related functions

// /api/**Something -- get/post/delete/put

//we need to import a router example domain name system(DNS) router they maintain a hashtable basically it has urls and IP addresses

//similarly we are creating a dictionary for requests where it point to respective function
const logger=require("./middleware").Logger;
const express=require("express");

const router=express.Router();

//router is a object that is going to help us in this answerGetRequest to api/get

const answerGetReq=(req,res)=>{
    res.json({"msg":"Hello from Get"});
};

const answerPostReq=(req,res)=>{
    res.json({"msg":"Hello from Post"});
};

const answerPutReq=(req,res)=>{
    res.json({"msg":"Hello from Put"});
};

const answerDeleteReq=(req,res)=>{
    res.json({"msg":"Hello from Delete"});
};

const answerAnyReq=(req,res)=>{
    //throwing an error
    //and server would be crashed
    throw Error("Couldn't find requested resource");
}

router.use("/get",answerGetReq);
router.use("/post",answerPostReq);
router.use("/put",answerPutReq);
router.use("/delete",answerDeleteReq);
router.use("/*",answerAnyReq);
//you can use loggers also
router.use("/get",logger,answerGetReq);
//exporting this router
module.exports={
    router:router,
}