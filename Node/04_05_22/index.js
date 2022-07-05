const express=require("express");
const books=require("./db/data").books;


//Instead of hardcoding always use below syntax for port number
//like you are passing port in command line else use port 3500 ie in package.json file you write port no. there in start parameter
const PORT=process.env.PORT || 3400;
const app=express();

app.use(express.json());//we are telling expresss to use middleware

app.get("/getData",(req,res)=>{
    //res.send({message:"succesfully retreived some data"});
    //I am not using any variable and assigning labels etc
    res.send({books});
    //actually u need to write {label:data} i.e {books:books} so express is enabling us to write simply books where in output also we could see label books
});

app.post("/saveData",(req,res)=>{
    
    const data=req.body;
    console.log(data);
    //we use middleware which acts as interceptor
    //we are reading data and directly we are pushing in datastore
    books.push(data);
    res.send({message:"succesfully saved some data"});

});


app.put("/updateData/:isbn",(req,res)=>{
    //we are giving some isbn no. in request and we are finding the index of isbn no.
    const isbn=req.params.isbn;
    const data=req.body;
    const position=books.findIndex((book)=>book.isbn===isbn);
    console.log(position);//we are printing index if there is no no. we get -1
    if(position!=-1){
    books[position]=data;
    //if you find set stattus code as success
    res.statusCode=200;
    res.send({message:"succesfully updated some data"});
    }
    else{
        res.statusCode=401;
    res.send({message:"unable to find the book"})
    }
});



app.delete("/deleteData/:isbn",(req,res)=>{
//we are deleting based on some isbn no
    const isbn=req.params.isbn;
// finding index of isbn
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


app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
})

//express reduces the amount of code

/*
1) we dont need to set any header type
2)lengthy code is minimized from node to express
3)we dont need to convert to any json
4)it is readable

node js and express build based on few middlewares between start and end

like  you could do so many operations like file transfer etc..

you could apply middleware like bodyparser but it wont be needed you could use express.json() instead

*/

