const FlightOrderController = require("../controllers/FlightsOrder");
const IsAdminMiddleWare = require("../middleware/IsAdminMiddleWare");

const rout=require("express")();

rout.post("/add",IsAdminMiddleWare,FlightOrderController.Add);
rout.post("/setStatus",IsAdminMiddleWare,FlightOrderController.SetStatus);

module.exports=rout;