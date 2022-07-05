const logRequest=(req,res,next)=>{
    console.log(`req url: ${req.url}`);
    next();
}

module.exports={
    log2:logRequest
}