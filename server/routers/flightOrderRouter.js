const IsAdminMiddleWare = require("../middleware/IsAdminMiddleWare");
const flightOrdersController = require('../controllers/FlightOrdersController')

const rout = require("express")();

rout.post("/add", IsAdminMiddleWare, flightOrdersController.Add);
rout.get("/getOrders", IsAdminMiddleWare, flightOrdersController.getOrders);
rout.put("/setStatus", IsAdminMiddleWare, flightOrdersController.SetStatus);
rout.delete("/:id", IsAdminMiddleWare, flightOrdersController.deleteOrder);

module.exports = rout;