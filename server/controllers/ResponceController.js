const ErrorApi=require("../error/ErrorApi");
const { Responce } = require("../models/models");

class ResponceController{
    static getNovetly=async(req,resp,next)=>{
        try{
            const {limit}=req.query;
            const res=await Responce.findAll({limit,order:[['id',"DESC"]]});
            resp.json({status:200,res});
        }catch(err){
            return next(ErrorApi.badRequest(err));
        }
    }
}

module.exports=ResponceController;