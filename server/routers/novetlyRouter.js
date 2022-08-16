const NovetlyController = require("../controllers/NovetlyControler");
const IsAdminMiddleWare = require("../middleware/IsAdminMiddleWare");

const rout=require("express")();

rout.get("/",NovetlyController.Get);
rout.post("/",/*IsAdminMiddleWare,*/NovetlyController.Add);

module.exports=rout;