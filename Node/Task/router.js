const express=require("express");
const router=express.Router();
const books=require("./db/data").books;
const logger=require("./middleware").Logger;

const get=((req,res)=>{
    
    res.send({books});
});

const post=((req,res)=>{
    
    const data=req.body;
    books.push(data);
    console.log(data);
    res.send({message:"succesfully saved some data"});

});


const put=((req,res)=>{
    const isbn=req.params.isbn;
    const data=req.body;
    const position=books.findIndex((book)=>book.isbn===isbn);
    console.log(position);//we are printing index if there is no no. we get -1
    if(position!=-1){
    books[position]=data;
    res.statusCode=200;
    res.send({message:"succesfully updated some data"});
    }
    else{
        res.statusCode=401;
    res.send({message:"unable to find the book"})
    }
});



const deleteRecord=((req,res)=>{
    const isbn=req.params.isbn;
    const position=books.findIndex((book)=>book.isbn===isbn);
    if(position!=-1){
    books.splice(position,1);
    res.statusCode=200;
    res.send({message:"succesfully deleted some data"});
    }else{
        res.statusCode=404;
        res.send({message:"element not found"});
    }
});

const answerAnyReq=(req,res)=>{
    //throwing an error
    //and server would be crashed
    throw Error("Couldn't find requested resource");
}

router.use("/get",logger,get);
router.use("/post",logger,post);
router.use("/put/:isbn",logger,put);
router.use("/Delete/:isbn",logger,deleteRecord);

router.use("/*",answerAnyReq);

module.exports={
    router:router
}
