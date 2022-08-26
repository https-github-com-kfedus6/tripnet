const ResponceController = require("../controllers/ResponceController");

const rout=require("express")();

rout.get("/getNovetly",ResponceController.getNovetly);

module.exports=rout;