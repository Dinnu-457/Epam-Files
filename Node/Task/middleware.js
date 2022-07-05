let counter=0;
const logRequest=(req,res,next)=>{

    console.log(`${counter}-${new Date()}-${req.method}-${req.url}`);
    //counter helping in tracking no. of requests
    counter++;
    next();
};
//we need to send req,we get output  that many times until our middleware stops
module.exports={
    Logger:logRequest,
}