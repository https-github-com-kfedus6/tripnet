const FAQController = require("../controllers/FAQController");
const IsAdminMiddleWare = require("../middleware/IsAdminMiddleWare");

const rout=require("express")();

rout.get("/get",FAQController.Get);
rout.post("/add",IsAdminMiddleWare,FAQController.Add);
rout.get("/getNovetly",FAQController.GetNovetly);
rout.get("/getSelect",FAQController.GetSelect);

module.exports=rout;