const userAuth = require('../model/auth')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
            require('dotenv').config()
const privateKey=process.env.TOKEN;

const signUp =async(req,res,next)=>{
    try {
        const{name,email,password}=req.body;
        const existEmail = await userAuth.findOne({email});
        if(!existEmail){
            const hash = bcrypt.hashSync(password,10);
            const data = new userAuth({name,email,password:hash});
            const mydata = await data.save();
             res.status(201).json({message:'your registration successful',payload:mydata})
        }else{
            res.status(404).json({message:'your email alrady exist'})
        }
    } catch (error) {
        next(error)
    }
}

const signIn =async(req,res)=>{
    try {
        const{email,password}=req.body;
        const existEmail = await userAuth.findOne({email});
        if(existEmail){
            const match = bcrypt.compareSync(password,existEmail.password);
            if(match){
                const token = jwt.sign({id:existEmail._id,name:existEmail.name,
                                            email:existEmail.email},privateKey);
                res.status(200).json({message:'your login successful',user:existEmail.name,token})
            }else{
                res.status(401).json({message:'your password not exist'})
            }
        }else{
            res.status(401).json({message:'your email not exist'})
        }
    } catch (error) {
        return res.send(error.message)
    }
}

module.exports={signUp,signIn}