const jwt=require('jsonwebtoken');
const User=require('../models/User');

const requireAuth=(req,res,next)=>{
    const token=req.cookies.jwt;
if(token){
jwt.verify(token,'payload',(err,decodedToken)=>{
    if(err){
res.redirect('/login');
console.log(err.message);
    }
    else{
        console.log(decodedToken);
        next();
    }
});
}
else{
res.redirect('/login');
console.log(err.message);
}

}

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, 'payload', async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};
module.exports={requireAuth,checkUser};