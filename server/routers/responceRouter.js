const ResponceController = require("../controllers/ResponceController");
const IsAdminMiddleWare = require("../middleware/IsAdminMiddleWare");

const rout=require("express")();

rout.get("/getNovetly",ResponceController.getNovetly);
rout.get("/add",IsAdminMiddleWare,ResponceController.Add);

module.exports=rout;