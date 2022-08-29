const ErrorApi = require("../error/ErrorApi");
const { Blog, Novetly } = require("../models/models");
const uuid = require("uuid");
const path = require("path");

class BlogController {
    static GetAll = async (req, resp, next) => {
        try {
            let { page, limit } = req.query;
            page = page || 1;
            limit = limit || 10;
            const offset = page * limit - limit;
            let res = await Blog.findAndCountAll({ attributes: ['id', 'name', 'image'], limit: parseInt(limit), offset: parseInt(offset) });
            for (let i = 0; i < res.rows.length; i++) {
                res.rows[i].name = await res.rows[i].name.split("//");
            }
            return resp.json({ status: 200, page, limit, res: res.rows, count: res.count });
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }
    static getNovetly = async (req, resp, next) => {
        try {
            let { count } = req.query;
            count = count || 5;
            let res = await Blog.findAll({ attributes: ['id', 'name', 'image'], limit: parseInt(count), order: [['id', 'DESC']] });
            for (let i = 0; i < res.length; i++) {
                res[i].name = await res[i].name.split("//");
            }
            return resp.json({ status: 200, res });
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }
    static GetWithDescription = async (req, resp, next) => {
        try {
            const { id } = req.query;
            let res = await Blog.findOne({ where: { id } });
            if (res == null) {
                return resp.json({ status: 415, res: null });
            }
            res.name = res.name.split("//");
            res.description=res.description.split("/*/");
            return resp.json({ status: 200, res });
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }
    static Add = async (req, resp, next) => {
        try {
            console.log(req.body)
            const { name, descriptionUa, descriptionRu } = req.body;
            const description = [descriptionUa, descriptionRu].join("/*/");
            const { image } = req.files;
            const nameImg = uuid.v4() + ".jpg";
            image.mv(path.resolve(__dirname, '..', 'static', nameImg));
            const res = await Blog.create({ image: nameImg, name, description });
            return resp.json({ status: 200, res });
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }
    static Del=async(req,resp,next)=>{
        try{
            const {id}=req.body;
            const res=await Blog.destroy({where:{id:parseInt(id)}});
            return resp.json({status:200,res});
        }catch(err){
            return next(ErrorApi.badRequest(err));
        }
    }
}

module.exports = BlogController;