const ErrorApi = require("../error/ErrorApi");
const { Responce } = require("../models/models");

class ResponceController {
    static getNovetly = async (req, resp, next) => {
        try {
            const { limit } = req.query;
            const res = await Responce.findAll({ limit, order: [['id', "DESC"]] });
            resp.json({ status: 200, res });
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }
    static Add=async(req,resp,next)=>{
        try{
            const {authorName,description}=req.body;
            const res=await Responce.create({nameAuthor:authorName,description})
        }catch(err){
            return next(ErrorApi.badRequest(err));
        }
    }
}

module.exports = ResponceController;