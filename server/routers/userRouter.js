const UserController = require("../controllers/UserController");

const rout=require("express")();

rout.post("/add",UserController.Add);
rout.post("/authorize",UserController.Authorize);
rout.post("/isAuthorize",UserController.IsAuthorize);

module.exports=rout;