const ErrorApi=require("../error/ErrorApi");
const { User } = require("../models/models");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
class UserController{
    static Add=async(req,resp,next)=>{
        try{
            console.log(req.body)
            const {name,email,telephone,password}=req.body;
            const isEmailTrue=await User.findOne({where:{email}});
            const reg=/drop|\(|delete|;/g;
            if(reg.test(name)||reg.test(email)||reg.test(telephone)||reg.test(password))throw("invalid value");
            if(isEmailTrue!=null) return resp.json({status:411,message:"email is busy"});
            const cryptPass=await bcrypt.hash(password,3);
            console.log(cryptPass);
            const res=await User.create({name:name,email:email,telephone:telephone,password:cryptPass});
            const token=await jwt.sign({id:res.id,email:res.email,name:res.name,isAdmin:res.isAdmin},process.env.SECRET_KEY,{expiresIn:"1y"});
            return resp.json({status:200,token});
        }catch(err){
            return next(ErrorApi.badRequest(err));
        }
    }
    static Authorize=async(req,resp,next)=>{
        try{
            const {email,password}=req.body;
            const reg=/drop|\(|delete|;/g;
            if(reg.test(email)||reg.test(password))throw("invalid value");
            const res=await User.findOne({where:{email}});
            if(res==null){
                return resp.json({status:415,message:"invalid email"});
            }
            if(await bcrypt.compareSync(password,res.password)){
                const token=await jwt.sign({id:res.id,email:res.email,name:res.name,isAdmin:res.isAdmin},process.env.SECRET_KEY,{expiresIn:"1y"});
                return resp.json({status:200,token});
            }else return resp.json({status:416,message:"invalid password"})
        }catch(err){
            return next(ErrorApi.badRequest(err));
        }
    }
    static IsAuthorize=async(req,resp,next)=>{
        try{
            const {token}=req.body;
            const verifyToken=await jwt.verify(token,process.env.SECRET_KEY);
            if(verifyToken==undefined){
                return resp.json({status:420});
            }else{
                const res=await User.findOne({where:{email:verifyToken.email}});
                const newToken=await jwt.sign({id:res.id,email:res.email,name:res.name,isAdmin:res.isAdmin},process.env.SECRET_KEY,{expiresIn:"1y"});
                return resp.json({status:200,token:newToken});
            }

        }catch(err){
            return next(ErrorApi.badRequest(err));
        }
    }
}

module.exports=UserController;