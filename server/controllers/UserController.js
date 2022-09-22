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
            const res=await User.create({name:name,email:email,telephone:telephone,password:cryptPass,isAdmin:false});
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
            if(reg.test(email))throw("invalid value");
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
    static ChangePassword=async(req,resp,next)=>{
        try{
            const {oldPassword,newPassword,id}=req.body;
            if(!Number.isInteger(id))throw("id is not true");
            const user=await User.findOne({where:{id}});
            if(await bcrypt.compareSync(oldPassword,user.password)){
                const cryptNewPassword=await bcrypt.hash(newPassword,3);
                const res= await User.update({password:cryptNewPassword},{where:{id}});
                resp.json({status:200});
            }else return resp.json({status:415,message:"password is not true"});
            resp.json({user})
        }catch(err){
            return next(ErrorApi.badRequest(err));
        }
    }
    static GetPhone=async(req,resp,next)=>{
        try{
            const {id}=req.user;
            const res=await User.findOne({attributes:['telephone'],where:{id}});
            return resp.json({status:200,res:res.dataValues.telephone});
        }catch(err){
            return next(ErrorApi.badRequest(err));
        }
    }
    static EditEmail=async(req,resp,next)=>{
        try{
            const {id}=req.user;
            const {newEmail}=req.body;
            await User.update({email:newEmail},{where:{id}});
            const res=await User.findOne({where:{id}});
            const token=await jwt.sign({id:res.id,email:res.email,name:res.name,isAdmin:res.isAdmin},process.env.SECRET_KEY,{expiresIn:"1y"});
            return resp.json({status:200,token});
        }catch(err){
            return next(ErrorApi.badRequest(err));
        }
    }
}

module.exports=UserController;