const ErrorApi = require("../error/ErrorApi");
const { InfoCompany } = require("../models/models");

class InfoCompanyController {
    static Get = async (req, resp, next) => {
        try {
            const { id, name, email, telephone, openingHours, address } = await InfoCompany.findOne({ where: { id: 1 } });
            const infoCompany = { id, name, email, telephone, openingHours:openingHours.split("//"), address: address.split("//") };
            return resp.json({ status: 200, infoCompany });
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }
    static Update=async(req,resp,next)=>{
        try{
            const {name,email,phone,addressUA,addressRU,openingHoursUA,openingHoursRU}=req.body;
            const address=[addressUA,addressRU].join("//");
            const openingHours=[openingHoursUA,openingHoursRU].join("//");
            const res=await InfoCompany.update({name,email,telephone:phone,address,openingHours},{where:{id:1}});
            return resp.json({status:200,res});
        }catch(err){
            return next(ErrorApi.badRequest(err));
        }
    }
}

module.exports = InfoCompanyController;