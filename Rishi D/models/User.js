const { model } = require('mongoose');
const mongoose=require('mongoose');
const {isEmail}=require('validator');
const bcrypt=require('bcrypt');

const userSchema=new mongoose.Schema(
    {
        email: {
         type:String,
         required:[true,"Email is required"],
         unique:true,
         lowercase:true,
         validate:[isEmail,"Enter a valid email"]
        },

        password:{
            type:String,
            required:[true,"password is required"],
            minlength:[7,"password shoul be minimum of length 7"]
        },

    }

   
) ;



userSchema.pre('save',async function(next){
    const salt=await bcrypt.genSalt();
    this.password=await bcrypt.hash(this.password,salt);
    next();
})

userSchema.statics.login=async function(email,password){
    const user= await this.findOne({email});
    if(user){
      const auth=await bcrypt.compare(password,user.password);
      if(auth)
      {
     return user;  
      }
      throw Error('Incorrect password');
    }
    throw Error('Incorrect email');

}
 const User=new mongoose.model('user',userSchema);

 module.exports= User;