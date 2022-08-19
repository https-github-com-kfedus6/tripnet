const ErrorApi = require("../error/ErrorApi");
const { FAQ } = require("../models/models");

class FAQController{
    static Get=async(req,resp,next)=>{
        try{
            const res=await FAQ.findAll();
            resp.json({status:200,res});

        }catch(err){
            return next(ErrorApi.badRequest(err));
        }
    }
    static Add=async(req,resp,next)=>{
        try{
            const {name,description}=req.body;
            const res=await FAQ.create({name,description});
            resp.json({status:200,res});
        }catch(err){
            return next(ErrorApi.badRequest(err));
        }
    }
}

module.exports=FAQController;