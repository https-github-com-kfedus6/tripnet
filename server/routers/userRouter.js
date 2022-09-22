const UserController = require("../controllers/UserController");
const AuthMiddleWare=require("../middleware/AuthMiddleWare");

const rout=require("express")();

rout.post("/add",UserController.Add);
rout.post("/authorize",UserController.Authorize);
rout.post("/isAuthorize",UserController.IsAuthorize);
rout.post("/changePassword",AuthMiddleWare,UserController.ChangePassword);
rout.get("/getPhone",AuthMiddleWare,UserController.GetPhone);
rout.post("/editEmail",AuthMiddleWare,UserController.EditEmail);

module.exports=rout;