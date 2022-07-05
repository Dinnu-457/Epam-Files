//Express-Starter
const http=require("http");
const books=require("./db/data").books;

//reuse the code which is already existed
// so use modules like http
//server receives req and res so it had 2 params(req,res)

const server=http.createServer((req,res)=>{
    if(req.url==="/get"){
        const data=JSON.stringify(books);
        //we are writing header that is the data we are sending in the form of json
        res.setHeader("Content-type","application/json");
        res.write(data,(err)=>{
            if(err){
            console.error(err.message);}
        });
        res.end();
    }
    else if(req.url==='/save'){
        //save the data into datastore

        //const data=req.method;
        //whenever you want to listen to any event you write on
        req.on("data",(data)=>{
            //converting data to string which would be in utf-8 format
            const book=data.toString("utf-8");
            const bookAsJson=JSON.parse(book);//these are native methods,you can parse a string then you get json object
            books.push(bookAsJson);
            console.log(books);
            res.setHeader("Content-Type","application/json");
        //status code ranging from 201 to 299 is a success code
        res.statusCode=201;
        //sending response books in json format 
        res.write(JSON.stringify(books));
        res.end();
        });
/*
        //study about req.on its very important

        req.on("data",(data)=>{
            console.log(data.toString("utf-8"));
        });

        //there is a precedance order if you execute you wont get to see above one 
        //below req.on would be executed
        //below req is telling that if req is readable then it would execute function inside it like it would be in ready state
        //readable is start then you can read your data
        req.on("readable",()=>
        console.log("request is now readable"));

        //we had 2 events so the above one is doubled like aboube req.on event will be exuted 2 times
        //if u write other req.on then the output would be doubled that is total you would get 4 printing statements on console
*/
    }
    else{
    res.write("hello World");
    res.end();
    }
});

server.listen(8000,()=>{
    console.log("server is running");
});

//the above function in listen basically is a callback which is telling something you wrote in it

/*
we have wrote so many lines of code just for one req or 2 reqs
if you have 1000 urls so its very difficult
express and happy will helps us to write easy and understandable code
*/