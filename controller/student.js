const Student = require('../model/student');

const createStudent=async(req,res,next)=>{
    try {
        const{name,email,home,author}=req.body;
        const mydata = new Student({name,email,home,author});
        const fulldata = await mydata.save();
        res.status(201).json({message:'your student created successful',fulldata})
    } catch (error) {
        next(error)
    }
}

const getStudent=async(req,res,next)=>{
    try {
        const fulldata = await Student.find({});
        res.status(200).json({fulldata})
    } catch (error) {
        next(error)
    }
}

const getSingale=async(req,res,next)=>{
    try {
        const singalData = await Student.findById(req.params.id,req.body)
        res.status(200).json({singalData})
    } catch (error) {
        next(error)
    }
}

const updateStudent=async(req,res,next)=>{
    try {
        const updateData = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({updateData})
    } catch (error) {
        next(error)
    }
}

const deleteStudent=async(req,res,next)=>{
    try {
         await Student.findByIdAndDelete(req.params.id,req.body,)
        res.status(200).json({message:'your student successful deleted'})
    } catch (error) {
        next(error)
    }
}


module.exports={createStudent,getStudent,getSingale,updateStudent,deleteStudent}