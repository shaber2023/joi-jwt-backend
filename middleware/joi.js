
exports.myjoi=(schema)=>{
    return (req,res,next)=>{
        const {error} = schema.validate(req.body,{abortEarly:false,errors:{wrap:{label:""}}})
        if(error){
            const errorList = error.details.map((err)=>err.message)
            return res.status(404).json({
                message:'invalid input',
                error:errorList
            })
        }
        next();
    }
}




