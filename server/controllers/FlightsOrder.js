const ErrorApi = require("../error/ErrorApi");
const { FlightOrder, Flight } = require("../models/models");

class FlightOrderController{
    static Add=async(req,resp,next)=>{
        try{
            const {flightId,authorName,countTicket,phone}=req.body;
            const res=await FlightOrder.create({authorName,countTicket,phone,flightId});
            return resp.json({status:200,res});
        }catch(err){
            return next(ErrorApi.badRequest(err));
        }
    }
    static SetStatus=async(req,resp,next)=>{
        try{
            const {status,id}=req.body;
            const res=await FlightOrder.update({status:status},{where:{id}});
            console.log(res);
            if(status){
                const flight=await Flight.findOne({where:{id:res.flightId}});
                const countFreePlace=flight.countFreePlace-res[0].countTicket;
                await Flight.update({countFreePlace},{where:{id:flight.id}});
            }
            return resp.json({status:200,res});
        }catch(err){
            return next(ErrorApi.badRequest(err));
        }
    }
}

module.exports=FlightOrderController;