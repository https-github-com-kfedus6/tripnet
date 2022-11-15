const IsAdminMiddleWare = require("../middleware/IsAdminMiddleWare");
const flightOrdersController = require('../controllers/FlightOrdersController')
const AuthMiddleWare = require("../middleware/AuthMiddleWare");

const rout = require("express")();

rout.post("/add", flightOrdersController.Add);
rout.get("/getOrders", IsAdminMiddleWare, flightOrdersController.getOrders);
rout.put("/setStatus", IsAdminMiddleWare, flightOrdersController.SetStatus);
rout.delete("/:id", IsAdminMiddleWare, flightOrdersController.deleteOrder);
rout.get("/getUserHistory", AuthMiddleWare, flightOrdersController.getUserFlight);
rout.get("/getOrdersAccount", AuthMiddleWare, flightOrdersController.getUserOrders)

module.exports = rout;