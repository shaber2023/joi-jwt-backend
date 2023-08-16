const express = require('express');
const app = express();
const cors = require('cors')
const morgan = require('morgan');
var createError = require('http-errors')
const router = require('./router/router')
        require('dotenv').config();

    app.use(cors());
const port = process.env.PORT;

require('./database/db');

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(router);
app.use(morgan('dev'))


//client error
app.use((req,res,next)=>{
    next(createError(404,'route not found'))
})

//server error
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        success:false,
        message:err.message
    })
})

app.listen(port,()=>{
    console.log(`your server is raning http://localhost:${port}`)
})