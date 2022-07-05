const logRequest=(req,res,next)=>{
    console.log(`req name: ${req.method}`);
    next();
}

module.exports={
    log1:logRequest
}