const FAQController = require("../controllers/FAQController");
const IsAdminMiddleWare = require("../middleware/IsAdminMiddleWare");

const rout=require("express")();

rout.get("/get",FAQController.Get);
rout.post("/add",IsAdminMiddleWare,FAQController.Add);

module.exports=rout;