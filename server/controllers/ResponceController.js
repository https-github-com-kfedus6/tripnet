const ErrorApi = require("../error/ErrorApi");
const { Responce } = require("../models/models");

class ResponceController {
    static getNovetly = async (req, resp, next) => {
        try {
            const res = await Responce.findAll({order: [['id', "DESC"]] });
            resp.json({ status: 200, res });
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }
    static Add=async(req,resp,next)=>{
        try{
            const {authorName,description}=req.body;
            const res=await Responce.create({nameAuthor:authorName,description});
            return resp.json({status:200,res});
        }catch(err){
            return next(ErrorApi.badRequest(err));
        }
    }
    static Del=async(req,resp,next)=>{
        try{
            const {id}=req.params;
            const res=await Responce.destroy({where:{id}});
            if(res==1){
                return resp.json({status:200,res});
            }else return resp.json({status:400,res});
        }catch(err){
            return next(ErrorApi.badRequest(err));
        }
    }
}

module.exports = ResponceController;