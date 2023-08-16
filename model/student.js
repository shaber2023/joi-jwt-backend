const mongoose = require('mongoose');

const myschema = new mongoose.Schema({
    name:String,
    email:String,
    home:String,
    author:String
})

module.exports=mongoose.model('studentData',myschema)