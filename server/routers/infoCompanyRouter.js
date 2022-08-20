const InfoCompanyController = require("../controllers/InfoCompanyController");

const rout=require("express")();

rout.get("/get",InfoCompanyController.Get);

module.exports=rout;