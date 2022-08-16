const { UUID } = require("sequelize");
const ErrorApi = require("../error/ErrorApi");
const { Novetly } = require("../models/models");
const uuid=require("uuid");
const path=require("path");

class NovetlyController{
    static Get=async(req,resp,next)=>{
        try{
            const res=await Novetly.findAll();
            resp.json({res});
        }catch(err){
            return next(ErrorApi.badRequest(err));
        }
    }
    static Add=async(req,resp,next)=>{
        try{
            const {description}=req.body;
            const {image}=req.files;
            const nameImg = uuid.v4() + ".jpg";
            image.mv(path.resolve(__dirname,'..','static',nameImg))
            const res=await Novetly.create({image:nameImg,description})
            resp.json(res);
        }catch(err){
            return next(ErrorApi.badRequest(err));
        }
    }
}

module.exports=NovetlyController;