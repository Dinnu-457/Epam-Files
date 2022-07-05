const express=require("express");
const { Logger } = require("./middleware");
const books=require("./db/data").books;
const logger=require("./middleware").Logger;
const router=require("./router").router;

const PORT=process.env.PORT || 3400;
const app=express();
app.use(express.json());
app.use("/api",router);
//error handler
app.use((err,req,res,next)=>{
if(err){
res.json({msg:"Some error has occured"});
}
next();
});

app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
})
