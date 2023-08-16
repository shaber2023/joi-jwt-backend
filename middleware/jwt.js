const jwt = require('jsonwebtoken');
            require('dotenv').config();
const privateKey=process.env.TOKEN;
const mytoken=(req,res,next)=>{
  const token = req.headers['authorization'];
  if(token){
     const mytoken=token.split(' ')[1];
      jwt.verify(mytoken,privateKey,(err,data)=>{
        if(err){
          return res.status(401).json({ error: 'plz provide valid token' });
        }{
          next();
        }
      })
  }else{
    return res.status(403).json({ error: 'No token provided' });
  }
}

module.exports=mytoken