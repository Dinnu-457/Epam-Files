let counter=0;
const logRequest=(req,res,next)=>{

    console.log(`${counter}-${new Date()}`);
    next();
    //counter helping in tracking no. of requests
    counter++;
};
//we need to send req,we get output  that many times until our middleware stops
module.exports={
    Logger:logRequest,
}