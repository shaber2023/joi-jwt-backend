const mongoose = require('mongoose');
const mySchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    isAdmin:{
        type:Boolean,
        default:false
    },
    isBanned:{
        type:Boolean,
        default:false
    }
},{timestamps:true})
module.exports=mongoose.model('myAuth',mySchema)