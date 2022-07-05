const express = require("express");
const { use } = require("express/lib/application");
const req = require("express/lib/request");
const user = require("./data").user;
const bodyParser=require("body-parser");
const port=3500;
const app=express();
app.use(bodyParser());

app.get('/get/:id',(req,res)=>{
    let d=req.params.id;
    for (let index = 0; index < user.length; index++) {
        const element = user[index];
        if(element.id==d){
         d=element;
         break;
        }
    }
    res.send({d});
});

app.post('/post',(req,res)=>{
    const data=req.body;
    user.push(data);
    res.json(user);
});

app.put("/updateData/:id",(req,res)=>{
    const d=req.params.id;
    var position;
    const data=req.body;
    for (let index = 0; index < user.length; index++) {
        const element = user[index];
        if(element.id==d){
         position=index;
         break;
        }
    }
    console.log(user[position]);
    if(position!=-1){
    user[position]=data;
    res.statusCode=200;
    res.send({message:"succesfully updated some data"});
    }
    else{
        res.statusCode=401;
    res.send({message:"unable to find the record"})
    }
});

app.delete("/deleteData/:id",(req,res)=>{
    //we are deleting based on some isbn no
        const id=req.params.id;
    // finding index of id
        const position=user.findIndex((user)=>user.id===id);
        if(position!=-1){
        user.splice(position,1);
        res.statusCode=200;
        res.send({message:"succesfully deleted some data"});
        }else{
            res.statusCode=404;
            res.send({message:"element not found"});
        }
    });
app.listen(port,()=>{
    console.log(`server is running on PORT ${port}`);
})

