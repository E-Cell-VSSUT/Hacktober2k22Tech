const User=require('../models/User');
const jwt=require('jsonwebtoken');

const handleErrors=(err)=>{
    console.log(err.message,err.code);
    let errors={email:'',password:''};
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message;
        });
    }

        if(err.message==='Incorrect email')
     {
    errors.email='Email not registered';
    }

if(err.message==='incorrect password');
{
    errors.password='password not registered';
}

    if(err.code===11000){
        errors.email='Email already taken';

    }


    return errors;

}
const maxAge=60*60*24*3;
const createToken = (id) =>{
 return jwt.sign({id},'payload',{
    expiresIn: maxAge
 } );
}

module.exports.signup_get=(req,res)=>{
    res.render('signup');
}
module.exports.signup_post= async (req,res) => {
    const {email,password}=req.body;
    try{
    const user=await User.create({email,password
  
    });
    const token=createToken(user._id);
    res.cookie('jwt',token,{httpOnly:true, maxAge:maxAge*1000});
     res.status(200).json({user: user._id});

    }

    catch(err){
 const errors= handleErrors(err);
  res.status(400).json({errors});
    }
    
}
module.exports.login_get=(req,res)=>{
    res.render('login');
}
module.exports.login_post=async (req,res,next)=>{
    const {email,password}=req.body;
   
    try{
     const user= await User.login(email,password);
   
       const token=createToken(user._id);
     res.cookie('jwt',token,{httpOnly:true, maxAge:maxAge*1000});
     res.status(201).json({user: user._id});
     return;
     
    }
    catch(err){
        const errors=handleErrors(err);
res.status(400).json({errors});
return;

    }


    console.log(email,password);
    res.send('user login ');
}

module.exports.logout_get=(req,res)=>{
    res.cookie('jwt','',{maxAge:1});
    res.redirect('/');
}