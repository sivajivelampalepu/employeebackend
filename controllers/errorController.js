const AppError = require("../utils/appError")

const handleduplicateFieldDb=err=>{
    const value=err.errmsg.match(/(["'])(\\?.)*?\1/)[0]
    const message=`Duplicate field value: x. please use another value`
    return new AppError(message,400)
}

module.exports=(err,req,res,next)=>{
    console.log("errst",err.stackStra)
    err.statusCode=err.statusCode||500;
    err.status=err.status||'error';

    if(err.code===11000) error=handleduplicateFieldDb(error)
    res.status(err.statusCode).json({
        status:err.status,
        message:err.message
    })
}