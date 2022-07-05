const http=require("http");
console.log(http);

//node js is collection of C language libraries

const port=5550;
const server=http.createServer((req,res)=>{
    if(req.url=="hello"){
        res.write("heyyyy");
        res.end();
    }
    else{
        res.write("hello");
        res.end();
    }
    res.write(req.url);
    res.end();    
});
server.listen(port);

//nodejs documentation is bestplace to look for codes
