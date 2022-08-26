const UserController = require("../controllers/UserController");

const rout=require("express")();

rout.post("/add",UserController.Add);
rout.post("/authorize",UserController.Authorize);
rout.post("/isAuthorize",UserController.IsAuthorize);
rout.post("/changePassword",UserController.ChangePassword);

module.exports=rout;